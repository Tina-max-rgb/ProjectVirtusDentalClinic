const base = process.env.API_BASE_URL || "http://localhost:4000/api";
const fail = (message) => { console.error(`✗ ${message}`); process.exitCode = 1; };
try {
  const health = await fetch(`${base}/health`);
  const healthData = await health.json();
  console.log(`health: ${health.status}`, healthData);
  if (!health.ok && health.status !== 503) fail("Health endpoint failed.");
  const csrf = await fetch(`${base}/contact/csrf`, { headers: { Origin: "http://localhost:5173" } });
  const csrfData = await csrf.json();
  if (!csrf.ok || !csrfData.token) fail(`CSRF endpoint failed: ${csrf.status} ${JSON.stringify(csrfData)}`);
  else console.log("csrf: OK");
} catch (error) { fail(`Backend unreachable at ${base}. Start it with: npm run dev. (${error.message})`); }
