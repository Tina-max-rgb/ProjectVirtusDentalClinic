import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import contentRoutes from "./routes/content.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import chatbotRoutes from "./routes/chatbot.routes.js";
import { notFoundHandler, errorHandler } from "./middleware/errorHandler.js";
import { initDatabase, getDatabaseHealth } from "./db/database.js";

const app = express();
initDatabase();
const PORT = process.env.PORT || 4000;
const configuredOrigins = (process.env.CORS_ORIGIN || "").split(",").map((value) => value.trim()).filter(Boolean);
const ORIGINS = configuredOrigins.length
  ? configuredOrigins
  : ["http://localhost:5173", "http://127.0.0.1:5173"];
const isProduction = process.env.NODE_ENV === "production";
const hasSmtp = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);

if (isProduction && (!process.env.CORS_ORIGIN || !ORIGINS.length || ORIGINS.some((origin) => /your-domain|example\.com|localhost|127\.0\.1/i.test(origin)))) {
  throw new Error("CORS_ORIGIN must contain the real production frontend origin(s), not localhost or placeholders.");
}
const trustProxy = process.env.TRUST_PROXY === "1" || process.env.TRUST_PROXY === "true";
app.set("trust proxy", trustProxy ? 1 : false);

// Security headers (X-Content-Type-Options, X-Frame-Options, etc.)
app.use(helmet({
  referrerPolicy: { policy: "strict-origin-when-cross-origin" },
  crossOriginOpenerPolicy: { policy: "same-origin" }
}));

app.use(cors({
  origin(origin, callback) {
    if (!origin) return callback(null, true);
    try {
      const requested = new URL(origin).origin;
      if (ORIGINS.includes(requested)) return callback(null, true);
    } catch {}
    return callback(new Error("CORS origin not allowed"));
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-CSRF-Token"]
}));

// Reject unexpectedly large request bodies (protects against payload-based abuse)
app.use(express.json({ limit: "9mb", strict: true, type: "application/json" }));

// Global soft rate-limit — the contact route has its own stricter limit on top of this.
app.use(
  "/api",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    standardHeaders: true,
    legacyHeaders: false
  })
);

app.get("/api/health", (req, res) => {
  let database;
  try { database = getDatabaseHealth(); } catch (error) { database = { ok: false, error: error.message }; }
  const ready = (!isProduction || hasSmtp) && database.ok;
  res.status(ready ? 200 : 503).json({
    status: ready ? "ok" : "not_ready",
    service: "virtus-dental-backend",
    smtpConfigured: hasSmtp,
    database,
    time: new Date().toISOString()
  });
});

app.use("/api/content", contentRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/chatbot", chatbotRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ Virtus Dental backend running on http://localhost:${PORT}`);
  console.log(`   CORS allowed origins: ${ORIGINS.join(", ")}`);
});
