# Virtus Dental Center — Backend

Node.js + Express API used by the React frontend.

## Routes

- `GET /api/health` — health/readiness check; production returns `503` until SMTP is configured.
- `GET /api/content?lang=fr` — localized site content.
- `POST /api/contact` — validated lead submission, optional image/X-ray/PDF attachment, SMTP notification and patient confirmation.
- `POST /api/chatbot` — deterministic multilingual FAQ assistant with rate limiting and a safe fallback.

## Production requirements

Set these variables on the server: `NODE_ENV=production`, `CORS_ORIGIN` (exact frontend origin), `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and `NOTIFY_EMAIL`.

The JSON lead-file fallback is disabled by default in production. A real database/CRM should be used if persistent lead storage is required.

## Security changes

- Helmet security headers
- exact-origin CORS validation
- global API rate limit
- stricter contact rate limit
- chatbot rate limit
- request body limit
- honeypot + minimum submission time
- input sanitisation and validation
- attachment type/size validation
- no silent success when SMTP delivery fails

## Run

```bash
npm ci
npm start
```

## Security of the contact form

The production contact endpoint uses layered protections:

- exact CORS origin allow-list;
- Origin/Referer validation on the contact routes;
- signed, short-lived CSRF token (`GET /api/contact/csrf` + `X-CSRF-Token`);
- dedicated rate limit (5 submissions / 15 minutes / IP) plus API-wide rate limiting;
- honeypot field and minimum form completion time;
- strict server-side validation and length limits;
- attachment validation by decoded size (6 MB) and file signature (JPEG/PNG/WebP/PDF), not MIME type alone;
- HTML escaping before inserting user data into email templates;
- filename sanitisation before email attachment handling;
- Helmet security headers;
- production health check fails when SMTP is not configured.

Set a unique random `CONTACT_CSRF_SECRET` in production (at least 32 random characters). Do not commit `.env` files.


## Base de données
Le backend utilise désormais une base SQLite persistante via `node:sqlite`. Lancez `npm run db:init` dans `backend/` pour initialiser/amorcer la base, puis configurez `DATABASE_PATH` sur un volume persistant en production. Les demandes de contact et conversations du chatbot sont enregistrées en base. Email de notification : `virtusdentalpro@gmail.com`.
