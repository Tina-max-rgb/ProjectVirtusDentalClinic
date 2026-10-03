import fs from "node:fs";
import path from "node:path";

const dir = path.resolve(process.argv[2] || "data/backups");
const keep = Math.max(1, Number(process.argv[3] || 14));
if (!fs.existsSync(dir)) process.exit(0);
const files = fs.readdirSync(dir).filter(f => f.startsWith("virtus-backup-") && f.endsWith(".sqlite")).map(name => ({ name, mtime: fs.statSync(path.join(dir,name)).mtimeMs })).sort((a,b)=>b.mtime-a.mtime);
for (const file of files.slice(keep)) fs.rmSync(path.join(dir,file), { force: true });
console.log(`Backup retention: kept ${Math.min(files.length, keep)} of ${files.length}`);
