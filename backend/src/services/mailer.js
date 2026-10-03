import dotenv from "dotenv";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { escapeHtml } from "./validation.js";

// ============================================================
// ENVIRONMENT
// ============================================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "../../.env")
});

// ============================================================
// FILE
// ============================================================

const LEADS_FILE = path.join(
  __dirname,
  "..",
  "data",
  "leads.json"
);

// ============================================================
// SMTP
// ============================================================

const smtpConfigured = Boolean(
  process.env.SMTP_HOST &&
  process.env.SMTP_USER &&
  process.env.SMTP_PASS
);

console.log(
  `[mailer] SMTP configured: ${smtpConfigured ? "YES" : "NO"}`
);

let transporter = null;

if (smtpConfigured) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
}

if (
  process.env.NODE_ENV === "production" &&
  !smtpConfigured
) {
  throw new Error(
    "SMTP_HOST, SMTP_USER and SMTP_PASS are required in production."
  );
}

// ============================================================
// SAVE LEAD
// ============================================================

async function appendLeadToFile(lead) {
  await fs.mkdir(
    path.dirname(LEADS_FILE),
    { recursive: true }
  );

  let leads = [];

  try {
    const raw = await fs.readFile(
      LEADS_FILE,
      "utf-8"
    );

    leads = JSON.parse(raw);
  } catch {
    leads = [];
  }

  const {
    attachment,
    ...safeLead
  } = lead;

  leads.push({
    ...safeLead,
    attachmentName: attachment?.name || null,
    receivedAt: new Date().toISOString()
  });

  await fs.writeFile(
    LEADS_FILE,
    JSON.stringify(leads, null, 2),
    "utf-8"
  );
}

// ============================================================
// SEND LEAD NOTIFICATION
// ============================================================

export async function sendLeadNotification(lead) {

  // Sauvegarde locale en développement
  if (
    process.env.NODE_ENV !== "production" ||
    process.env.LEADS_FILE_ENABLED === "true"
  ) {
    await appendLeadToFile(lead);
  }

  // SMTP non configuré
  if (!transporter) {
    console.log(
      "[mailer] SMTP not configured — lead saved to leads.json only."
    );

    return {
      delivered: false,
      mode: "file-only"
    };
  }

  // ==========================================================
  // EMAIL HTML
  // ==========================================================

  const html = `
    <h2>Nouvelle demande de devis — Virtus Dental Center</h2>

    <p>
      <strong>Nom :</strong>
      ${escapeHtml(lead.name)}
    </p>

    <p>
      <strong>Pays :</strong>
      ${escapeHtml(lead.country)}
    </p>

    <p>
      <strong>Email :</strong>
      ${escapeHtml(lead.email)}
    </p>

    <p>
      <strong>Téléphone :</strong>
      ${escapeHtml(lead.phone) || "—"}
    </p>

    <p>
      <strong>Traitement :</strong>
      ${escapeHtml(lead.treatment)}
    </p>

    <p>
      <strong>Message :</strong><br>
      ${escapeHtml(
        lead.message || "—"
      ).replace(/\n/g, "<br>")}
    </p>

    <p>
      <strong>Langue du site :</strong>
      ${escapeHtml(lead.lang)}
    </p>

    <p>
      <strong>Date souhaitée :</strong>
      ${escapeHtml(
        lead.preferredDate || "À convenir"
      )}
    </p>

    <p>
      <strong>Canal préféré :</strong>
      ${escapeHtml(
        lead.preferredChannel || "email"
      )}
    </p>
  `;

  try {

    // ========================================================
    // 1. EMAIL À LA CLINIQUE
    // ========================================================

    await transporter.sendMail({
      from: `"Site Virtus Dental Center" <${process.env.SMTP_USER}>`,

      to:
        process.env.NOTIFY_EMAIL ||
        "virtusdentalpro@gmail.com",

      replyTo: lead.email,

      subject:
        `Nouvelle demande de devis — ${lead.name} (${lead.country})`,

      html,

      attachments: lead.attachment
        ? [
            {
              filename: lead.attachment.name,
              content: lead.attachment.data,
              encoding: "base64",
              contentType: lead.attachment.type
            }
          ]
        : []
    });

    console.log(
      "[mailer] Notification envoyée à la clinique."
    );

    // ========================================================
    // 2. EMAIL DE CONFIRMATION AU CLIENT
    // ========================================================

    await transporter.sendMail({
      from: `"Virtus Dental Center" <${process.env.SMTP_USER}>`,

      to: lead.email,

      subject:
        "Nous avons bien reçu votre demande — Virtus Dental Center",

      html: `
        <p>
          Bonjour ${escapeHtml(lead.name)},
        </p>

        <p>
          Nous avons bien reçu votre demande.
          Notre équipe va étudier les informations
          transmises et vous répondre dans les meilleurs délais.
        </p>

        <p>
          Pour une question médicale urgente,
          contactez directement la clinique.
        </p>

        <p>
          Virtus Dental Center — Tirana
        </p>
      `
    });

    console.log(
      `[mailer] Confirmation envoyée à ${lead.email}.`
    );

    return {
      delivered: true,
      confirmationSent: true,
      mode: "smtp"
    };

  } catch (error) {

    console.error(
      "[mailer] SMTP send failed:",
      error.message
    );

    throw new Error(
      "La demande n’a pas pu être remise au serveur de messagerie."
    );
  }
}