import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import { Link } from "react-router-dom";
import { TREATMENT_CATALOG } from "../data/siteData";

const ICONS = [
  <path key="1" d="M12 3c-3.5 0-6 2.3-6 5.8 0 3 1.6 5.9 2.4 9.4.3 1.4.9 2.8 2 2.8s1.5-1.6 1.6-2.8M12 3c3.5 0 6 2.3 6 5.8 0 3-1.6 5.9-2.4 9.4-.3 1.4-.9 2.8-2 2.8s-1.5-1.6-1.6-2.8" />,
  <g key="2"><rect x="4" y="4" width="7" height="7" rx="1" /><rect x="13" y="4" width="7" height="7" rx="1" /><rect x="4" y="13" width="7" height="7" rx="1" /><rect x="13" y="13" width="7" height="7" rx="1" /></g>,
  <path key="3" d="M12 3 5 6v6c0 5 3 8.5 7 9 4-.5 7-4 7-9V6l-7-3Z" />,
  <path key="4" d="M4 7h16M4 12h16M4 17h10" />,
  <circle key="5" cx="12" cy="12" r="8" />,
];

export default function Treatments() {
  const { content, lang, gallery } = useLanguage();
  if (content && !content.lang) content.lang = lang;
  const ref = useReveal();
  if (!content) return null;

  const groups = TREATMENT_CATALOG.reduce((acc, item) => {
    (acc[item.category] ||= []).push(item);
    return acc;
  }, {});

  // The visual catalogue is driven by the canonical 38-item catalog, not by the optional
  // translation list. This prevents a missing/incomplete translation payload from making
  // the treatment grid appear empty.
  const localizedMap = new Map((content.treatments?.items || []).filter(Array.isArray).map((item) => [String(item[0]).trim(), item]));
  const href = (slug) => lang === "fr" ? `/treatments/${slug}` : `/${lang}/treatments/${slug}`;

  return (
    <section id="treatments" className="reveal treatments-expanded" ref={ref}>
      <div className="wrap">
        <div className="sec-head">
          <span className="sample-tag">CATALOGUE DES SOINS</span>
          <h2>{treatmentsHeading(content, TREATMENT_CATALOG.length)}</h2>
          <p>{treatmentsIntro(content)}</p>
        </div>
        {Object.entries(groups).map(([category, items]) => (
          <div className="treatment-group" key={category}>
            <div className="treatment-group-head">
              <h3>{category}</h3>
              <span>{items.length} soins</span>
            </div>
            <div className="treat-grid">
              {items.map((item, i) => {
                const translated = localizedMap.get(item.title);
                const groupedTitle = translated?.[0] || "";
                const title = groupedTitle.includes(item.title) ? groupedTitle : (translated && translated[0]) || item.title;
                const desc = (translated && translated[1]) || item.desc;
                return (
                  <Link className="treat-card" key={item.slug} to={href(item.slug)}>
                    <div className="treat-card-media">
                      {gallery?.length ? <img src={gallery[(TREATMENT_CATALOG.indexOf(item)) % gallery.length].src} alt="" loading="lazy" /> : null}
                      <span className="treat-card-overlay" aria-hidden="true" />
                      <span className="treat-index">{String(TREATMENT_CATALOG.indexOf(item) + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="treat-card-body">
                      <div className="treat-card-kicker"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">{ICONS[i % ICONS.length]}</svg><span>{category}</span></div>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                      <span className="text-link">Découvrir le traitement <span aria-hidden="true">↗</span></span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function treatmentsHeading(content, count) {
  const title = content.treatments?.title || "Our treatments";
  const suffix = { fr: "solutions à découvrir", en: "solutions to explore", it: "soluzioni da scoprire", es: "soluciones para descubrir", de: "Behandlungen entdecken", pt: "soluções para descobrir", ru: "решений для изучения", ar: "خيارات للعلاج", sq: "zgjidhje për t’u zbuluar", zh: "项治疗方案" };
  return `${title} · ${count} ${suffix[content.lang || "en"] || suffix.en}`;
}
function treatmentsIntro(content) {
  return content.treatments?.intro || "Explore implantology, oral surgery, prosthodontics, orthodontics and aesthetic dentistry, with a dedicated page for every treatment.";
}
