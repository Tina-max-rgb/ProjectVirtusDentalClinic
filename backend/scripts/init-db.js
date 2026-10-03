import "../src/db/database.js";
import { db, initDatabase } from "../src/db/database.js";
import { TREATMENT_CATALOG } from "../src/data/treatments.js";
import { TEAM_MEMBERS } from "../src/data/i18n.js";

initDatabase();

const insertTreatment = db.prepare("INSERT OR IGNORE INTO treatments(slug,name,category) VALUES(?,?,?)");
for (const [slug,name,category] of TREATMENT_CATALOG) insertTreatment.run(slug,name,category);

const insertDoctor = db.prepare("INSERT OR IGNORE INTO doctors(slug,name,role,photo_url,profile_url) VALUES(?,?,?,?,?)");
for (const member of TEAM_MEMBERS) {
  const slug = member.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
  insertDoctor.run(slug, member.name, "", member.photo, member.profileUrl);
}

const google = db.prepare(`
  INSERT OR IGNORE INTO reviews(source,external_id,author_name,rating,review_text,review_date,verified,published)
  VALUES('google','business-summary','Google Business Profile',5.0,NULL,NULL,1,0)
`);
google.run();

console.log("Virtus database initialized and seeded.");
console.log(`Treatments: ${db.prepare("SELECT COUNT(*) n FROM treatments").get().n}`);
console.log(`Doctors: ${db.prepare("SELECT COUNT(*) n FROM doctors").get().n}`);
console.log(`Languages: ${db.prepare("SELECT COUNT(*) n FROM languages").get().n}`);
db.close();
