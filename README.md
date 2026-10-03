# Virtus Dental Center — redesign package

This package is based on the provided project and keeps its ten-language architecture.

Key changes in this pass:
- redesigned visual system with a clinical-luxury editorial direction;
- corrected doctor and team media references using the exact public portrait URLs where verified;
- portrait-friendly 4:5 image framing so full-body medical portraits are not cropped into faces;
- intentional initials fallback for missing team portraits instead of incorrect doctor photos;
- no broken-image icon when a remote/local asset fails;
- premium cards, hero, packages, gallery, testimonials, contact and chatbot surfaces;
- removed placeholder "replace with real reviews" messaging from the visible UI;
- kept the existing ten-language routing and SEO architecture.

Important: the provided source archive does not include every individual team portrait. The project never fabricates a portrait or assigns one clinician's image to another clinician. Exact public portrait URLs are used only where the current Virtus site exposes a matching profile image.


## Production readiness — 2026-09

The project has been hardened for a real deployment, but three external credentials/configurations cannot be fabricated:
1. `VITE_SITE_URL` must be the real canonical HTTPS domain.
2. `VITE_API_URL`, `CORS_ORIGIN` and SMTP credentials must point to the deployed backend/mailbox.
3. Google Search Console / Business Profile ownership must be completed by the site owner.

### Deployment
- Frontend: deploy `frontend/` to Vercel/Netlify/Cloudflare Pages.
- Backend: deploy `backend/` to a persistent Node host (Render, Railway, Fly.io, VPS, etc.).
- Set `VITE_SITE_URL`, `VITE_API_URL`, `VITE_GA4_ID` on the frontend.
- Set `NODE_ENV=production`, `CORS_ORIGIN`, `SMTP_*`, `NOTIFY_EMAIL` on the backend.
- Run `npm ci && npm run build` in `frontend/`.
- Run `npm ci && npm start` in `backend/`.
- Health check: `GET /api/health`.
- Submit `public/sitemap.xml` in Google Search Console after the real domain is live.

### Lead flow
The contact form is now a 3-step patient request flow with validation, consent, honeypot, rate limiting, same-origin protection, notification to the clinic and confirmation email to the patient when SMTP is configured.

### Honest-content policy
Do not replace the Google review link or the supplied patient testimonials with fabricated reviews. Exact Google review text requires an authorised Google Business Profile integration/export. Likewise, do not substitute stock portraits for real clinicians. Add Paola/Iris portraits only when the clinic supplies the exact images and consent/usage rights.

### Before go-live
- Connect the real domain + HTTPS and choose one canonical host (`www` or apex).
- Configure DNS redirect from the non-canonical host.
- Verify canonical/hreflang and regenerate sitemap with `VITE_SITE_URL`.
- Test desktop/tablet/mobile and all ten language routes.
- Test `/api/contact`, confirmation email, spam controls and `/api/chatbot`.
- Add Search Console, Business Profile and analytics conversion events.
- Run Lighthouse/Core Web Vitals and fix any blocking regressions.


### Formulaire — sécurité finale

Le formulaire React/Node.js est maintenant protégé par CSRF, contrôle d'origine, rate limiting, honeypot, délai anti-bot, validation serveur stricte, validation des signatures de fichiers et échappement HTML des données envoyées par email. Le copier/coller, copier, couper et glisser-déposer sont bloqués sur les champs texte du formulaire conformément à la demande. Cette restriction côté navigateur n'est pas considérée comme une mesure de sécurité : toute donnée est revalidée côté API.

Lancer les tests backend :

```bash
cd backend
npm test
```


## Base de données
Le backend utilise désormais une base SQLite persistante via `node:sqlite`. Lancez `npm run db:init` dans `backend/` pour initialiser/amorcer la base, puis configurez `DATABASE_PATH` sur un volume persistant en production. Les demandes de contact et conversations du chatbot sont enregistrées en base. Email de notification : `virtusdentalpro@gmail.com`.
