// Input validation & sanitisation helpers for the contact form.
// Kept dependency-free and explicit so every rule is easy to audit.

const EMAIL_REGEX = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/;
// Loose but safe: digits, spaces, parentheses, plus sign, hyphens — nothing else.
const PHONE_REGEX = /^[0-9+()\-\s]{6,20}$/;
const NAME_REGEX = /^[\p{L}\p{M}0-9 .’'\-]{2,100}$/u;
const COUNTRY_REGEX = /^[\p{L}\p{M} .’'\-]{2,60}$/u;

const LIMITS = {
  name: 100,
  country: 60,
  email: 150,
  phone: 30,
  treatment: 100,
  message: 2000,
  attachmentName: 120,
  attachmentData: 8500000
};

/** Strips any HTML tags and control characters; collapses whitespace. */
function stripAndTrim(value, maxLen) {
  if (typeof value !== "string") return "";
  const noTags = value.replace(/<[^>]*>/g, "");
  // eslint-disable-next-line no-control-regex
  const noControlChars = noTags.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "");
  return noControlChars.trim().slice(0, maxLen);
}

/** Escapes HTML-sensitive characters before interpolating into an email/HTML template. */
export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Validates and sanitises a raw contact-form payload.
 * Returns { valid: true, data } or { valid: false, errors: string[] }.
 */
function decodeBase64Attachment(data) {
  try {
    if (!data || data.length % 4 === 1) return null;
    const bytes = Buffer.from(data, "base64");
    if (!bytes.length) return null;
    // Ensure Buffer did not silently discard malformed base64 input.
    const normalized = data.replace(/=+$/, "");
    const roundTrip = bytes.toString("base64").replace(/=+$/, "");
    if (normalized !== roundTrip) return null;
    return bytes;
  } catch {
    return null;
  }
}

function hasExpectedFileSignature(type, bytes) {
  if (!bytes) return false;
  if (type === "application/pdf") return bytes.subarray(0, 5).toString("ascii") === "%PDF-";
  if (type === "image/jpeg") return bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  if (type === "image/png") return bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]));
  if (type === "image/webp") return bytes.subarray(0, 4).toString("ascii") === "RIFF" && bytes.subarray(8, 12).toString("ascii") === "WEBP";
  return false;
}

export function validateContactPayload(body = {}) {
  const errors = [];

  const name = stripAndTrim(body.name, LIMITS.name);
  const country = stripAndTrim(body.country, LIMITS.country);
  const email = stripAndTrim(body.email, LIMITS.email).toLowerCase();
  const phone = stripAndTrim(body.phone, LIMITS.phone);
  const treatment = stripAndTrim(body.treatment, LIMITS.treatment);
  const message = stripAndTrim(body.message, LIMITS.message);
  const preferredDate = stripAndTrim(body.preferredDate, 10);
  const allowedChannels = ["email", "phone", "whatsapp"];
  const allowedLangs = ["fr", "en", "it", "es", "de", "pt", "ru", "ar", "sq", "zh"];
  const preferredChannel = body.preferredChannel;
  const lang = body.lang;
  if (!allowedChannels.includes(preferredChannel)) errors.push("Canal de contact invalide.");
  if (!allowedLangs.includes(lang)) errors.push("Langue invalide.");

  if (!name || name.length < 2 || !NAME_REGEX.test(name)) errors.push("Nom invalide (2 caractères minimum).");
  if (!country || country.length < 2 || !COUNTRY_REGEX.test(country)) errors.push("Pays invalide.");
  if (!email || !EMAIL_REGEX.test(email) || /[\r\n]/.test(email)) errors.push("Adresse email invalide.");
  if (phone && (!PHONE_REGEX.test(phone) || phone.replace(/\D/g, "").length < 6)) errors.push("Numéro de téléphone invalide.");
  if (message && message.length > LIMITS.message) errors.push("Message trop long.");
  if (body.consent !== true) errors.push("Votre consentement est requis pour envoyer la demande.");
  if (preferredDate && !/^\d{4}-\d{2}-\d{2}$/.test(preferredDate)) errors.push("Date souhaitée invalide.");
  if (preferredDate && /^\d{4}-\d{2}-\d{2}$/.test(preferredDate)) {
    const parsed = new Date(`${preferredDate}T00:00:00Z`);
    if (Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== preferredDate) errors.push("Date souhaitée invalide.");
  }
  let attachment = null;
  if (body.attachment) {
    const a = body.attachment;
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
    const name = stripAndTrim(a.name, LIMITS.attachmentName);
    const data = typeof a.data === "string" ? a.data : "";
    const bytes = data && /^[A-Za-z0-9+/]+={0,2}$/.test(data) ? decodeBase64Attachment(data) : null;
    const decodedSize = bytes?.length || 0;
    if (!allowedTypes.includes(a.type) || !name || !data || data.length > LIMITS.attachmentData || decodedSize > 6 * 1024 * 1024 || !bytes || !hasExpectedFileSignature(a.type, bytes)) {
      errors.push("Pièce jointe invalide ou trop volumineuse.");
    } else {
      attachment = { name: name.replace(/[^a-zA-Z0-9._ -]/g, "_").slice(0, LIMITS.attachmentName), type: a.type, data };
    }
  }

  // Basic spam heuristic: reject messages stuffed with links (common bot pattern).
  const linkCount = (message.match(/https?:\/\//gi) || []).length;
  if (linkCount > 2) errors.push("Message rejeté (trop de liens).");

  if (errors.length) return { valid: false, errors };

  return {
    valid: true,
    data: { name, country, email, phone, treatment: treatment || "—", message, lang, preferredDate, preferredChannel, attachment }
  };
}
