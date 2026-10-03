import assert from "node:assert/strict";
import { validateContactPayload } from "../src/services/validation.js";

const base = {
  name: "Jean Dupont",
  country: "France",
  email: "jean@example.com",
  phone: "+33 6 12 34 56 78",
  treatment: "Implants dentaires",
  message: "Je souhaite une première évaluation.",
  lang: "fr",
  consent: true,
  preferredDate: "",
  preferredChannel: "email"
};

assert.equal(validateContactPayload(base).valid, true);
assert.equal(validateContactPayload({ ...base, email: "bad\r\nBcc: attacker@example.com" }).valid, false);
assert.equal(validateContactPayload({ ...base, name: "<script>alert(1)</script>" }).valid, false);
assert.equal(validateContactPayload({ ...base, country: "<img src=x>" }).valid, false);
assert.equal(validateContactPayload({ ...base, preferredChannel: "sms" }).valid, false);
assert.equal(validateContactPayload({ ...base, lang: "xx" }).valid, false);
assert.equal(validateContactPayload({ ...base, consent: false }).valid, false);
assert.equal(validateContactPayload({ ...base, phone: "abc123" }).valid, false);

console.log("contact-validation: all tests passed");
