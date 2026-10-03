import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";

const configuredPath = process.env.DATABASE_PATH || "./data/virtus.sqlite";
const dbPath = path.isAbsolute(configuredPath) ? configuredPath : path.resolve(process.cwd(), configuredPath);

fs.mkdirSync(path.dirname(dbPath), { recursive: true });

export const db = new DatabaseSync(dbPath);
db.exec(`PRAGMA journal_mode = WAL;
PRAGMA synchronous = FULL;
PRAGMA foreign_keys = ON;
PRAGMA busy_timeout = 5000;
PRAGMA secure_delete = ON;
PRAGMA trusted_schema = OFF;`);
try { fs.chmodSync(path.dirname(dbPath), 0o700); } catch {}
try { fs.chmodSync(dbPath, 0o600); } catch {}

export function initDatabase() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      id TEXT PRIMARY KEY,
      applied_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS languages (
      code TEXT PRIMARY KEY,
      native_name TEXT NOT NULL,
      rtl INTEGER NOT NULL DEFAULT 0,
      enabled INTEGER NOT NULL DEFAULT 1
    );

    CREATE TABLE IF NOT EXISTS patients (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      country TEXT,
      preferred_language TEXT REFERENCES languages(code),
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE INDEX IF NOT EXISTS idx_patients_email ON patients(email);

    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      patient_id INTEGER REFERENCES patients(id) ON DELETE SET NULL,
      treatment TEXT,
      message TEXT,
      lang TEXT REFERENCES languages(code),
      preferred_date TEXT,
      preferred_channel TEXT NOT NULL DEFAULT 'email',
      attachment_name TEXT,
      attachment_type TEXT,
      status TEXT NOT NULL DEFAULT 'new',
      notification_status TEXT NOT NULL DEFAULT 'pending',
      source TEXT NOT NULL DEFAULT 'website',
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status, created_at DESC);
    CREATE INDEX IF NOT EXISTS idx_leads_patient ON leads(patient_id);

    CREATE TABLE IF NOT EXISTS appointments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      patient_id INTEGER REFERENCES patients(id) ON DELETE SET NULL,
      requested_date TEXT,
      requested_time TEXT,
      treatment TEXT,
      status TEXT NOT NULL DEFAULT 'requested',
      notes TEXT,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS chat_conversations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id TEXT NOT NULL UNIQUE,
      patient_id INTEGER REFERENCES patients(id) ON DELETE SET NULL,
      lang TEXT REFERENCES languages(code),
      status TEXT NOT NULL DEFAULT 'open',
      handoff_requested INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE INDEX IF NOT EXISTS idx_chat_conversations_status ON chat_conversations(status, updated_at DESC);

    CREATE TABLE IF NOT EXISTS chat_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      conversation_id INTEGER NOT NULL REFERENCES chat_conversations(id) ON DELETE CASCADE,
      role TEXT NOT NULL CHECK(role IN ('user','assistant','system')),
      message TEXT NOT NULL,
      intent TEXT,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE INDEX IF NOT EXISTS idx_chat_messages_conversation ON chat_messages(conversation_id, created_at);

    CREATE TABLE IF NOT EXISTS doctors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      role TEXT,
      photo_url TEXT,
      profile_url TEXT,
      active INTEGER NOT NULL DEFAULT 1
    );

    CREATE TABLE IF NOT EXISTS treatments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      category TEXT,
      active INTEGER NOT NULL DEFAULT 1
    );

    CREATE TABLE IF NOT EXISTS treatment_translations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      treatment_id INTEGER NOT NULL REFERENCES treatments(id) ON DELETE CASCADE,
      lang TEXT NOT NULL REFERENCES languages(code),
      name TEXT,
      description TEXT,
      UNIQUE(treatment_id, lang)
    );

    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      source TEXT NOT NULL,
      external_id TEXT,
      author_name TEXT,
      rating REAL,
      review_text TEXT,
      review_date TEXT,
      verified INTEGER NOT NULL DEFAULT 0,
      published INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(source, external_id)
    );

    CREATE TABLE IF NOT EXISTS media (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      kind TEXT NOT NULL,
      title TEXT,
      url TEXT NOT NULL,
      poster_url TEXT,
      alt_text TEXT,
      lang TEXT REFERENCES languages(code),
      published INTEGER NOT NULL DEFAULT 1
    );

    CREATE TABLE IF NOT EXISTS faqs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL UNIQUE,
      active INTEGER NOT NULL DEFAULT 1
    );

    CREATE TABLE IF NOT EXISTS faq_translations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      faq_id INTEGER NOT NULL REFERENCES faqs(id) ON DELETE CASCADE,
      lang TEXT NOT NULL REFERENCES languages(code),
      question TEXT NOT NULL,
      answer TEXT NOT NULL,
      UNIQUE(faq_id, lang)
    );

    CREATE TABLE IF NOT EXISTS audit_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      actor TEXT,
      action TEXT NOT NULL,
      entity_type TEXT,
      entity_id TEXT,
      metadata_json TEXT,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE INDEX IF NOT EXISTS idx_audit_logs_created ON audit_logs(created_at DESC);
  `);

  const languages = [
    ["fr","Français",0],["en","English",0],["it","Italiano",0],["es","Español",0],
    ["de","Deutsch",0],["pt","Português",0],["ru","Русский",0],["ar","العربية",1],
    ["sq","Shqip",0],["zh","中文",0]
  ];
  const insertLang = db.prepare("INSERT OR IGNORE INTO languages(code,native_name,rtl) VALUES(?,?,?)");
  for (const row of languages) insertLang.run(...row);

  const migrations = db.prepare("INSERT OR IGNORE INTO schema_migrations(id) VALUES(?)");
  migrations.run("001-initial-schema");

  return dbPath;
}

export function upsertPatient({ fullName, email, phone = "", country = "", lang = "fr" }) {
  const existing = db.prepare("SELECT id FROM patients WHERE lower(email)=lower(?) ORDER BY id LIMIT 1").get(email);
  if (existing) {
    db.prepare(`UPDATE patients SET full_name=?, phone=?, country=?, preferred_language=?, updated_at=CURRENT_TIMESTAMP WHERE id=?`)
      .run(fullName, phone, country, lang, existing.id);
    return Number(existing.id);
  }
  const result = db.prepare(
    `INSERT INTO patients(full_name,email,phone,country,preferred_language) VALUES(?,?,?,?,?)`
  ).run(fullName, email, phone, country, lang);
  return Number(result.lastInsertRowid);
}

export function createLead(data) {
  const patientId = upsertPatient({
    fullName: data.name, email: data.email, phone: data.phone, country: data.country, lang: data.lang
  });
  const result = db.prepare(`
    INSERT INTO leads(patient_id,treatment,message,lang,preferred_date,preferred_channel,attachment_name,attachment_type,status)
    VALUES(?,?,?,?,?,?,?,?, 'new')
  `).run(patientId, data.treatment, data.message, data.lang, data.preferredDate || null, data.preferredChannel,
    data.attachment?.name || null, data.attachment?.type || null);
  return Number(result.lastInsertRowid);
}

export function setLeadNotificationStatus(id, status) {
  db.prepare("UPDATE leads SET notification_status=?, updated_at=CURRENT_TIMESTAMP WHERE id=?").run(status, id);
}

export function getOrCreateConversation(sessionId, lang) {
  let row = db.prepare("SELECT * FROM chat_conversations WHERE session_id=?").get(sessionId);
  if (!row) {
    const result = db.prepare("INSERT INTO chat_conversations(session_id,lang) VALUES(?,?)").run(sessionId, lang);
    row = db.prepare("SELECT * FROM chat_conversations WHERE id=?").get(Number(result.lastInsertRowid));
  } else if (row.lang !== lang) {
    db.prepare("UPDATE chat_conversations SET lang=?,updated_at=CURRENT_TIMESTAMP WHERE id=?").run(lang, row.id);
  }
  return row;
}

export function addChatMessage(conversationId, role, message, intent = null) {
  db.prepare("INSERT INTO chat_messages(conversation_id,role,message,intent) VALUES(?,?,?,?)")
    .run(conversationId, role, message, intent);
  db.prepare("UPDATE chat_conversations SET updated_at=CURRENT_TIMESTAMP WHERE id=?").run(conversationId);
}

export function requestChatHandoff(conversationId) {
  db.prepare("UPDATE chat_conversations SET handoff_requested=1,status='handoff',updated_at=CURRENT_TIMESTAMP WHERE id=?")
    .run(conversationId);
}

export function getDatabaseHealth() {
  const row = db.prepare("SELECT 1 AS ok").get();
  const counts = {
    patients: Number(db.prepare("SELECT COUNT(*) AS n FROM patients").get().n),
    leads: Number(db.prepare("SELECT COUNT(*) AS n FROM leads").get().n),
    conversations: Number(db.prepare("SELECT COUNT(*) AS n FROM chat_conversations").get().n)
  };
  return { ok: row?.ok === 1, counts, path: process.env.NODE_ENV === "production" ? undefined : dbPath };
}
