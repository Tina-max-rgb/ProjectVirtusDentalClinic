import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { fetchContent } from "../api/client";
import { i18n, CONTACT_INFO, SUPPORTED_LANGS, TEAM_MEMBERS, GALLERY_IMAGES, VIDEO_TESTIMONIALS, PRESS_LOGOS, REAL_TESTIMONIALS } from "../data/siteData.js";

const LanguageContext = createContext(null);

// "fr" has no URL prefix (the default/canonical version lives at "/").
// Every other language gets its own indexable URL: /en, /it, /es, /de, /pt, /ru, /ar, /sq, /zh
export const DEFAULT_LANG = "fr";
export const SUPPORTED = SUPPORTED_LANGS;
export const LANG_LABELS = {
  fr: "Français", en: "English", it: "Italiano", es: "Español", de: "Deutsch",
  pt: "Português", ru: "Русский", ar: "العربية", sq: "Shqip", zh: "中文"
};
export const RTL_LANGS = ["ar"];

export function LanguageProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { langParam } = useParams(); // undefined on "/", else "en" | "it" | ...
  const lang = SUPPORTED.includes(langParam) ? langParam : DEFAULT_LANG;

  const [content, setContent] = useState(null);
  const [contact, setContact] = useState(null);
  const [team, setTeam] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [videoTestimonials, setVideoTestimonials] = useState([]);
  const [pressLogos, setPressLogos] = useState([]);
  const [realTestimonials, setRealTestimonials] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  const load = useCallback(async (targetLang) => {
    setStatus("loading");
    try {
      // The public site has a bundled content snapshot, so SEO pages render even
      // when the API is unavailable. The API remains available for future CMS updates.
      setContent(i18n[targetLang]);
      setContact(CONTACT_INFO);
      setTeam(TEAM_MEMBERS || []);
      setGallery(GALLERY_IMAGES || []);
      setVideoTestimonials(VIDEO_TESTIMONIALS || []);
      setPressLogos(PRESS_LOGOS || []);
      setRealTestimonials(REAL_TESTIMONIALS || []);
      setStatus("ready");
      // Warm the API in the background; a failure must never blank the public site.
      fetchContent(targetLang).catch(() => {});
    } catch (err) {
      console.error("Failed to load local content:", err);
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    // If someone hits an unknown/unsupported prefix, send them to the default.
    if (langParam && !SUPPORTED.includes(langParam)) {
      navigate("/", { replace: true });
      return;
    }
    load(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
  }, [lang, langParam, load, navigate]);

  const setLang = (newLang) => {
    if (!SUPPORTED.includes(newLang)) return;
    const current = location.pathname.replace(/^\/(en|it|es|de|pt|ru|ar|sq|zh)(?=\/|$)/, "");
    const path = current || "/";
    const next = newLang === DEFAULT_LANG ? path : `/${newLang}${path === "/" ? "/" : path}`;
    navigate(`${next}${location.hash || ""}`);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, content, contact, team, gallery, videoTestimonials, pressLogos, realTestimonials, status }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
