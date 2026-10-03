import { Router } from "express";
import crypto from "node:crypto";
import rateLimit from "express-rate-limit";
import { CHATBOT_LANGS } from "../services/chatbotEngine.js";
import { getChatbotReply } from "../services/chatbotEngine.js";
import { getOrCreateConversation, addChatMessage, requestChatHandoff } from "../db/database.js";

const router = Router();

const chatbotLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 40,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Trop de messages. Merci de réessayer dans quelques minutes." }
});

// POST /api/chatbot  { message: string, lang: "fr"|"en"|"it" }
router.post("/", chatbotLimiter, (req, res) => {
  const { message, lang } = req.body || {};

  if (!message || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "Le champ 'message' est requis." });
  }

  if (message.length > 1200) {
    return res.status(400).json({ error: "Message trop long (1200 caractères maximum)." });
  }

  const safeLang = CHATBOT_LANGS.includes(lang) ? lang : "fr";
  const sessionId = typeof req.body?.sessionId === "string" && /^[A-Za-z0-9_-]{12,100}$/.test(req.body.sessionId)
    ? req.body.sessionId
    : `web-${crypto.randomUUID()}`;
  const conversation = getOrCreateConversation(sessionId, safeLang);
  addChatMessage(conversation.id, "user", message.trim());

  const result = getChatbotReply(message.trim(), safeLang);
  addChatMessage(conversation.id, "assistant", result.reply, result.intent || null);
  if (result.handoff) requestChatHandoff(conversation.id);

  res.json({ ...result, conversationId: sessionId });
});

export default router;
