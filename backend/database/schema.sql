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
