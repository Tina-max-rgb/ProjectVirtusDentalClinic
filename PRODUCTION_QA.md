# Production QA — Virtus Dental Center

## Tests réalisés dans le projet

- Navigation équipe : 7 membres visibles depuis `#team`.
- WhatsApp : `+33 6 28 27 01 18` / `https://wa.me/33628270118`.
- Email de contact : `virtusdentalpro@gmail.com`.
- 10 langues conservées.
- 38 traitements conservés.
- 7 profils équipe et photos locales disponibles.
- Base SQLite persistante et seedée.
- Formulaire protégé par CSRF, validation, honeypot, délai minimum et rate-limit.
- Chatbot limité et historisé en base.
- Security smoke : tous les contrôles passent.
- Backup SQLite : snapshot + `PRAGMA integrity_check` validés.

## À exécuter sur le serveur réel

```bash
npm audit
cd frontend && npm ci && VITE_SITE_URL=https://virtusdentalcenter.com npm run build
cd ../backend && npm ci && npm test && npm run security:smoke
cd .. && docker compose build && docker compose up -d
```

Le build Vite et Docker doivent être exécutés dans un environnement réseau normal : l'archive livrée ne contient volontairement pas `node_modules`.
