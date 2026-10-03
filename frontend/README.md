# Virtus Dental Center — frontend

## Signature redesign

This version keeps the 10-language routing and content model while introducing a new editorial / clinical-luxury visual system, stronger mobile layouts, and robust media handling.

### Team media

The production package includes verified local portraits for all seven listed team members, including the two aesthetic nurses (Paola Qefa and Iris Kurti). Keeping these assets local avoids broken external image dependencies and prevents accidental substitution of one clinician’s portrait for another.

### Content and trust

The public content avoids fabricated reviews, certifications, prices or treatment guarantees. Clinical indications remain subject to examination, and the contact form is designed for an initial request rather than diagnosis.

### Production

```bash
npm install
npm run build
npm run preview
```

Set `VITE_SITE_URL` in `.env` before deployment so canonical URLs and the sitemap use the real production domain.


### Final SEO requirement

Set `VITE_SITE_URL` to the real HTTPS canonical domain before building. The sitemap and robots.txt are generated from that value.

## Local API development

The Vite dev server proxies `/api` to `http://localhost:4000`. Run both processes:

```bash
# terminal 1
cd backend
npm ci
npm run dev

# terminal 2
cd frontend
npm ci
npm run dev
```

Open `http://localhost:5173`. The chatbot handoff uses the same secure `/api/contact` endpoint as the main contact form. In development, if SMTP is not configured, successful leads are stored in `backend/src/data/leads.json` instead of being emailed.
