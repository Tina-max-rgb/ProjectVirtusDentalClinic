import { Router } from "express";
import crypto from "node:crypto";
import rateLimit from "express-rate-limit";
import { sendLeadNotification } from "../services/mailer.js";
import { validateContactPayload } from "../services/validation.js";
import { createLead, setLeadNotificationStatus } from "../db/database.js";

const router = Router();

const CSRF_SECRET = process.env.CONTACT_CSRF_SECRET || "";
const CSRF_TTL_MS = 15 * 60 * 1000;

function makeCsrfToken() {
  const exp = Date.now() + CSRF_TTL_MS;
  const payload = String(exp);
  const secret = CSRF_SECRET || process.env.SMTP_PASS || "dev-only-change-me";
  const sig = crypto.createHmac("sha256", secret).update(payload).digest("hex");
  return `${payload}.${sig}`;
}

function validCsrfToken(token) {
  if (typeof token !== "string") return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig || !/^\d+$/.test(payload)) return false;
  const exp = Number(payload);
  if (!Number.isSafeInteger(exp) || exp < Date.now() || exp - Date.now() > CSRF_TTL_MS + 1000) return false;
  const secret = CSRF_SECRET || process.env.SMTP_PASS || "dev-only-change-me";
  const expected = crypto.createHmac("sha256", secret).update(payload).digest("hex");
  return sig.length === expected.length && crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
}

if (process.env.NODE_ENV === "production" && !CSRF_SECRET) {
  throw new Error("CONTACT_CSRF_SECRET is required in production.");
}

// --- 1. Rate limiting: max 5 submissions / 15 min per IP -------------------
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Trop de demandes envoyées. Merci de réessayer dans quelques minutes." }
});

// --- 2. Same-origin check (defence in depth beyond CORS) -------------------
// CORS blocks browser JS from other origins, but not direct API calls
// (curl, scripts). This adds a second check when CORS_ORIGIN is configured.
function requireKnownOrigin(req, res, next) {
  const allowed = (process.env.CORS_ORIGIN || "")
    .split(",").map((value) => value.trim()).filter(Boolean);
  if (!allowed.length && process.env.NODE_ENV !== "production") return next(); // local dev: Vite proxy handles same-origin API calls
  const rawOrigin = req.get("origin") || "";
  if (rawOrigin) {
    try {
      if (allowed.includes(new URL(rawOrigin).origin)) return next();
    } catch {}
  }
  const referer = req.get("referer") || "";
  if (referer) {
    try {
      if (allowed.includes(new URL(referer).origin)) return next();
    } catch {}
  }
  return res.status(403).json({ error: "Origine non autorisée." });
}

router.get("/csrf", requireKnownOrigin, (req, res) => {
  res.set("Cache-Control", "no-store");
  res.json({ token: makeCsrfToken() });
});

// --- 3. Route ----------------------------------------------------------
router.post("/", contactLimiter, requireKnownOrigin, async (req, res) => {
  const contentLength = Number(req.get("content-length") || 0);
  if (contentLength > 9 * 1024 * 1024) {
    return res.status(413).json({ error: "Demande trop volumineuse." });
  }
  if (!req.is("application/json")) {
    return res.status(415).json({ error: "Type de contenu non autorisé." });
  }
  if (!validCsrfToken(req.get("x-csrf-token"))) {
    return res.status(403).json({ error: "Jeton de sécurité invalide ou expiré. Rechargez le formulaire." });
  }
  // Honeypot: a hidden field real users never fill in. Bots that
  // auto-fill every input will trip this. Respond as if it worked,
  // so the bot doesn't learn to avoid the field next time.
  if (req.body.website) {
    return res.status(201).json({ success: true, delivered: false, mode: "honeypot-silent-drop" });
  }

  // Minimum time-on-page: reject submissions faster than a human could
  // realistically fill the form (bots often submit in <1s).
  const loadedAt = Number(req.body.formLoadedAt);
  if (loadedAt && Date.now() - loadedAt < 2000) {
    return res.status(400).json({ error: "Formulaire envoyé trop rapidement, merci de réessayer." });
  }

  const result = validateContactPayload(req.body);
  if (!result.valid) {
    return res.status(400).json({ error: result.errors[0], errors: result.errors });
  }

  let leadId;
  try {
    leadId = createLead(result.data);
  } catch (err) {
    console.error("[contact] database insert failed:", err);
    return res.status(503).json({ error: "La demande n’a pas pu être enregistrée. Merci de réessayer." });
  }

  try {
    const outcome = await sendLeadNotification(result.data);
    setLeadNotificationStatus(leadId, "sent");
    res.status(201).json({ success: true, leadId, ...outcome });
  } catch (err) {
    console.error("[contact] failed to process lead:", err);
    try { setLeadNotificationStatus(leadId, "failed"); } catch {}
    res.status(502).json({ error: "La demande a été enregistrée mais n’a pas pu être transmise par email. L’équipe pourra la traiter depuis la base de données." });
  }
});

export default router;
