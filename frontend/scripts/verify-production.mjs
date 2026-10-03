const url = process.env.VITE_SITE_URL || "";
const requireReal = process.env.REQUIRE_SITE_URL === "1";
if (requireReal) {
  if (!/^https:\/\//i.test(url) || /your-domain|example\.com/i.test(url)) {
    console.error("Production build blocked: set VITE_SITE_URL to the real HTTPS canonical domain.");
    process.exit(1);
  }
}
if (url && !/^https:\/\//i.test(url)) {
  console.error("VITE_SITE_URL must use HTTPS.");
  process.exit(1);
}
console.log(`Production config check: ${url || "(local/default URL)"}`);
