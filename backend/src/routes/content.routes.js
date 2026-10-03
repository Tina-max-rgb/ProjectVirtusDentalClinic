import { Router } from "express";
import { i18n, CONTACT_INFO, SUPPORTED_LANGS, LANG_META, TEAM_MEMBERS, GALLERY_IMAGES, VIDEO_TESTIMONIALS, PRESS_LOGOS, REAL_TESTIMONIALS } from "../data/i18n.js";
import { TREATMENT_CATALOG } from "../data/treatments.js";

const router = Router();

// GET /api/content?lang=fr
router.get("/", (req, res) => {
  const lang = SUPPORTED_LANGS.includes(req.query.lang) ? req.query.lang : "fr";
  res.json({
    lang,
    supportedLangs: SUPPORTED_LANGS,
    langMeta: LANG_META,
    content: i18n[lang],
    contact: CONTACT_INFO,
    team: TEAM_MEMBERS,
    gallery: GALLERY_IMAGES,
    videoTestimonials: VIDEO_TESTIMONIALS,
    pressLogos: PRESS_LOGOS,
    realTestimonials: REAL_TESTIMONIALS,
    treatmentCatalog: TREATMENT_CATALOG
  });
});

export default router;
