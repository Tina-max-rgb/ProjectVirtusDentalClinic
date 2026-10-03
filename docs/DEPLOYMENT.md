# Déploiement production — Virtus Dental Center

## Architecture

- `frontend`: React/Vite construit puis servi par Nginx.
- `backend`: Node.js 22 + Express.
- `SQLite`: volume Docker persistant, jamais exposé publiquement.
- `backup`: conteneur quotidien, 14 snapshots conservés.
- HTTPS : terminer TLS devant le conteneur frontend (Cloudflare ou reverse-proxy VPS/Let's Encrypt).

## Préparation

1. Copier `backend/.env.example` vers `backend/.env`.
2. Remplacer toutes les valeurs `replace-*`.
3. Générer `CONTACT_CSRF_SECRET` avec :

```bash
openssl rand -hex 32
```

4. Mettre le vrai domaine dans `CORS_ORIGIN` et `VITE_SITE_URL`.
5. Ne jamais committer `.env`.

## Lancement

```bash
docker compose build
docker compose up -d
```

Contrôles :

```bash
docker compose ps
docker compose logs --tail=100 backend
curl -fsS https://virtusdentalcenter.com/api/health
```

Le healthcheck doit retourner `status: ok` et `database.ok: true`.

## Sauvegarde

Le service `backup` crée un snapshot SQLite cohérent chaque 24 heures et conserve les 14 derniers fichiers.

Sauvegarde manuelle :

```bash
docker compose exec backend node scripts/backup-db.js /app/data/backups/manual.sqlite
```

Vérification d'intégrité : le script exécute `PRAGMA integrity_check` sur le snapshot.

## Restauration

1. Arrêter `backend` et `backup`.
2. Sauvegarder le volume actuel.
3. Remplacer `virtus.sqlite` par un snapshot vérifié.
4. Redémarrer les services.
5. Vérifier `/api/health` et effectuer un smoke test.

## Sécurité avant exposition publique

- `npm audit` sur une machine connectée.
- `docker compose build` sur le serveur cible.
- `npm test` et `npm run security:smoke`.
- TLS actif.
- Pare-feu : uniquement 80/443 publics et SSH restreint.
- SQLite et les backups ne doivent jamais être servis par Nginx.
- Sauvegarde externe hors du VPS recommandée en complément du volume Docker.
