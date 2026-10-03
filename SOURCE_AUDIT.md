# Virtus source audit — 27 septembre 2026

Le projet a été enrichi après comparaison avec la version française publiquement accessible de virtus.al/fr/.

## Éléments intégrés ou vérifiés

- navigation des traitements et sous-catégories ;
- catalogue de traitements étendu ;
- pages internes des traitements ;
- pages internes des membres de l'équipe ;
- portraits fournis par le client intégrés localement ;
- galerie avant/après locale déjà présente dans le projet ;
- témoignages vidéo locaux déjà présents dans le projet ;
- forfaits All-on-4, All-on-6 et tourisme dentaire ;
- parcours patient en 4 étapes ;
- page tourisme dentaire ;
- page À propos ;
- page Avant / après ;
- page Visite virtuelle 360° ;
- page Guides / Blog ;
- page Contact ;
- liens sociaux, WhatsApp, carte et visite virtuelle ;
- canonical/hreflang pour les nouvelles pages.

## Médias

Le projet contient déjà 20 médias de galerie et 14 vidéos de témoignages. Ils sont servis localement depuis `frontend/public/assets/`.

Les 5 portraits fournis dans `Images.zip` ont été installés dans `frontend/public/assets/team/` :
- arnold-mboqe.avif
- armando-becoku.jpg
- nela-mataj.jpg
- ester-rina.avif
- adela-dajlani.avif

Paola Qefa et Iris Kurti restent sans portrait local parce qu'aucun fichier correspondant n'a été fourni dans le ZIP reçu. Aucun portrait d'une autre personne n'a été utilisé à leur place.

## Liens externes

Les profils médecins ne renvoient plus vers les anciennes URLs `virtus.al/fr/dr-*`.
La visite Matterport, WhatsApp, téléphone, email, carte et réseaux sociaux restent des liens externes fonctionnels.

## Contenu

Le contenu nouveau est rédigé sous forme de synthèses et d'informations structurées à partir des informations publiques vérifiées. Les textes d'articles ou témoignages ne sont pas recopiés intégralement.

## Validation locale

- `node --check frontend/src/data/siteData.js` : OK
- `node --check backend/src/server.js` : OK
- génération sitemap : OK
- build Vite : non validé dans cet environnement car l'installation locale ne contient pas l'exécutable Vite et `npm ci` a expiré. À exécuter sur la machine de développement avec `npm ci && npm run build`.
