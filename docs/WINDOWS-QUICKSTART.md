# Windows — démarrage rapide

## Backend

Prérequis : Node.js 22 LTS ou plus récent.

Depuis la racine du projet :

```bat
START-BACKEND-WINDOWS.bat
```

Ou manuellement :

```bat
cd backend
npm ci
npm run db:init
npm run dev
```

API : http://localhost:4000/api/health

## Frontend

Dans un autre terminal :

```bat
START-FRONTEND-WINDOWS.bat
```

Ou :

```bat
cd frontend
npm ci
npm run dev
```

Frontend : http://localhost:5173

## Erreur `ERR_MODULE_NOT_FOUND ... src\\db\\database.js`

Cette erreur signifie que le dossier du projet exécuté n'est pas la version complète. Dans la version correcte, ce fichier existe exactement ici :

`backend/src/db/database.js`

Le script `START-BACKEND-WINDOWS.bat` vérifie sa présence avant de démarrer.
