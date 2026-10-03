const base = process.env.API_URL || "http://127.0.0.1:4000/api";
const origin = process.env.TEST_ORIGIN || "http://localhost:5173";
let failures = 0;
function check(ok, label) { if (ok) console.log(`PASS ${label}`); else { console.error(`FAIL ${label}`); failures++; } }

const health = await fetch(`${base}/health`);
const healthBody = await health.json();
check(health.status === 200 && healthBody.database?.ok === true, "health + database");
check(!String(JSON.stringify(healthBody)).includes("CONTACT_CSRF_SECRET"), "health does not expose secrets");

const headers = health.headers;
check(headers.get("x-content-type-options") === "nosniff", "nosniff header");
check(Boolean(headers.get("content-security-policy")), "CSP header");

const badOrigin = await fetch(`${base}/chatbot`, {
  method: "POST", headers: { "Content-Type": "application/json", Origin: "https://evil.example" },
  body: JSON.stringify({ message: "hello", lang: "fr", sessionId: "validsession123" })
});
check(badOrigin.status >= 400, "foreign origin blocked");

const longMessage = await fetch(`${base}/chatbot`, {
  method: "POST", headers: { "Content-Type": "application/json", Origin: origin },
  body: JSON.stringify({ message: "x".repeat(1201), lang: "fr", sessionId: "validsession123" })
});
check(longMessage.status === 400, "chatbot length limit");

const csrfMissing = await fetch(`${base}/contact`, {
  method: "POST", headers: { "Content-Type": "application/json", Origin: origin },
  body: JSON.stringify({ name: "Security Test", email: "security@example.invalid", country: "FR" })
});
check(csrfMissing.status === 403, "contact requires CSRF");

const content = await (await fetch(`${base}/content?lang=fr`)).text();
check(!/SMTP_PASS|CONTACT_CSRF_SECRET|DATABASE_PATH|process\.env/i.test(content), "content endpoint does not expose server secrets");

if (failures) process.exit(1);
console.log("Security smoke: all checks passed.");
