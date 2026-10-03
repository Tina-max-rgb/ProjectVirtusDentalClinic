import "../src/db/database.js";
import { db, getDatabaseHealth } from "../src/db/database.js";
import fs from "node:fs";
import path from "node:path";

const output = process.argv[2] || path.resolve(process.cwd(), "data", "backups", `virtus-backup-${new Date().toISOString().replace(/[:.]/g,"-")}.sqlite`);
fs.mkdirSync(path.dirname(output), { recursive: true, mode: 0o700 });

// VACUUM INTO creates a consistent SQLite snapshot without copying the live WAL files.
const escaped = output.replace(/'/g, "''");
db.exec(`VACUUM INTO '${escaped}'`);
try { fs.chmodSync(output, 0o600); } catch {}

const verify = new (await import("node:sqlite")).DatabaseSync(output);
const check = verify.prepare("PRAGMA integrity_check").get();
verify.close();
if (check.integrity_check !== "ok") throw new Error("Backup integrity check failed");

console.log(`Backup created and verified: ${output}`);
console.log(getDatabaseHealth());
db.close();
