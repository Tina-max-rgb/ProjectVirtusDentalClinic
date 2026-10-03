import { Helmet } from "react-helmet-async";
import { useLanguage, SUPPORTED, DEFAULT_LANG } from "../context/LanguageContext";

const HOME_TITLES = {
  fr: "Virtus Dental Center | Implants & tourisme dentaire à Tirana",
  en: "Virtus Dental Center | Dental implants & tourism in Tirana",
  it: "Virtus Dental Center | Impianti e turismo dentale a Tirana",
  es: "Virtus Dental Center | Implantes y turismo dental en Tirana",
  de: "Virtus Dental Center | Zahnimplantate & Zahntourismus in Tirana",
  pt: "Virtus Dental Center | Implantes e turismo dentário em Tirana",
  ru: "Virtus Dental Center | Имплантация и стоматологический туризм в Тиране",
  ar: "Virtus Dental Center | زراعة الأسنان والسياحة العلاجية في تيرانا",
  sq: "Virtus Dental Center | Implante dhe turizëm dentar në Tiranë",
  zh: "Virtus Dental Center | 地拉那种植牙与牙科旅游"
};
const HOME_DESCRIPTIONS = {
  fr: "Implants dentaires, All-on-4/6/8, facettes, couronnes, orthodontie et réhabilitation complète à Tirana. Parcours dédié aux patients internationaux.",
  en: "Dental implants, All-on-4/6/8, veneers, crowns, orthodontics and full-mouth rehabilitation in Tirana, with a dedicated international patient journey.",
  it: "Impianti, All-on-4/6/8, faccette, corone, ortodonzia e riabilitazione completa a Tirana, con assistenza dedicata ai pazienti internazionali.",
  es: "Implantes, All-on-4/6/8, carillas, coronas, ortodoncia y rehabilitación completa en Tirana, con asistencia para pacientes internacionales.",
  de: "Implantate, All-on-4/6/8, Veneers, Kronen, Kieferorthopädie und Vollsanierung in Tirana mit Betreuung internationaler Patienten.",
  pt: "Implantes, All-on-4/6/8, facetas, coroas, ortodontia e reabilitação oral completa em Tirana para pacientes internacionais.",
  ru: "Имплантация, All-on-4/6/8, виниры, коронки, ортодонтия и полная реабилитация в Тиране для иностранных пациентов.",
  ar: "زراعة الأسنان وAll-on-4/6/8 والقشور والتيجان وتقويم الأسنان وإعادة تأهيل الفم بالكامل في تيرانا للمرضى الدوليين.",
  sq: "Implante, All-on-4/6/8, faseta, kurora, ortodonci dhe rehabilitim i plotë në Tiranë për pacientët ndërkombëtarë.",
  zh: "在地拉那提供种植牙、All-on-4/6/8、牙贴面、牙冠、正畸和全口修复，并为国际患者提供专属流程。"
};
const LANG_LOCALE = { fr: "fr_FR", en: "en_GB", it: "it_IT", es: "es_ES", de: "de_DE", pt: "pt_PT", ru: "ru_RU", ar: "ar", sq: "sq_AL", zh: "zh_CN" };

export default function SEOHead({ page = null }) {
  const { lang, contact, content } = useLanguage();
  const site = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, "");
  const pathFor = (l) => (l === DEFAULT_LANG ? "" : `/${l}`);
  const pagePath = page?.type === "treatment" ? `/treatments/${page.slug}` : page?.type === "doctor" ? `/team/${page.slug}` : page?.type === "page" ? `/${page.slug}` : "";
  const canonical = `${site}${pathFor(lang)}${pagePath}`;
  const locationSuffix = { fr: "à Tirana", en: "in Tirana", it: "a Tirana", es: "en Tirana", de: "in Tirana", pt: "em Tirana", ru: "в Тиране", ar: "في تيرانا", sq: "në Tiranë", zh: "位于地拉那" }[lang] || "in Tirana";
  const title = page?.title ? `${page.title} ${locationSuffix} | Virtus Dental Center` : (HOME_TITLES[lang] || HOME_TITLES.fr);
  const description = page?.seoDescription || page?.description || HOME_DESCRIPTIONS[lang] || HOME_DESCRIPTIONS.fr;
  const image = `${site}/assets/gallery/full-mouth-restoration.avif`;
  const structuredData = contact ? {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Dentist", "MedicalBusiness"],
        "@id": `${site}/#clinic`,
        name: "Virtus Dental Center",
        url: site,
        image,
        telephone: contact.phone,
        email: contact.email,
        address: { "@type": "PostalAddress", streetAddress: "Rruga Teodor Keko, Pll 29", addressLocality: "Tirana", postalCode: "1027", addressCountry: "AL" },
        medicalSpecialty: ["Dentistry", "Oral Surgery", "Implantology", "Orthodontics"],
        areaServed: ["Albania", "France", "Belgium", "Italy", "Germany", "Spain", "Portugal", "Switzerland", "United Kingdom"],
        sameAs: [contact.instagram, contact.facebook, contact.youtube, contact.tiktok, contact.linkedin].filter(Boolean),
        founder: { "@type": "Person", name: "Dr. Arnold Mboqe" },
        priceRange: "€€",
        hasMap: contact.mapUrl
      },
      {
        "@type": "Organization",
        "@id": `${site}/#organization`,
        name: "Virtus Dental Center",
        url: site,
        logo: image,
        sameAs: [contact.instagram, contact.facebook, contact.youtube, contact.tiktok, contact.linkedin].filter(Boolean)
      },
      {
        "@type": page ? (page.type === "treatment" ? "MedicalWebPage" : page.type === "doctor" ? "ProfilePage" : "WebPage") : "WebSite",
        "@id": `${canonical}#page`,
        url: canonical,
        name: title,
        description,
        inLanguage: lang,
        isPartOf: { "@id": `${site}/#organization` },
        about: { "@id": `${site}/#clinic` },
        ...(page?.type === "doctor" ? { mainEntity: { "@type": "Person", name: page.title, url: canonical } } : {})
      }
    ]
  } : null;
  const breadcrumb = page ? {
    "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", position: 1, name: lang === "fr" ? "Accueil" : "Home", item: `${site}${pathFor(lang) || "/"}` },
      { "@type": "ListItem", position: 2, name: page.title, item: canonical }
    ]
  } : null;
  const treatmentSchema = page?.type === "treatment" ? {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page?.title || title,
    description,
    url: canonical,
    provider: { "@id": `${site}/#clinic` },
    areaServed: { "@type": "Place", name: "Tirana, Albania" },
    serviceType: "Dental treatment"
  } : null;
  const faq = !page && content?.faq?.items?.length ? {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: content.faq.items.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } }))
  } : null;
  const alternates = SUPPORTED.map((l) => `${site}${pathFor(l)}${pagePath}`);
  return (
    <Helmet htmlAttributes={{ lang, dir: lang === "ar" ? "rtl" : "ltr" }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <meta name="theme-color" content="#0E3B39" />
      <link rel="canonical" href={canonical} />
      {SUPPORTED.map((l, i) => <link key={l} rel="alternate" hrefLang={l} href={alternates[i]} />)}
      <link rel="alternate" hrefLang="x-default" href={`${site}${pagePath}`} />
      <meta property="og:locale" content={LANG_LOCALE[lang] || lang} />
      <meta property="og:site_name" content="Virtus Dental Center" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {structuredData && <script type="application/ld+json">{JSON.stringify(structuredData)}</script>}
      {breadcrumb && <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>}
      {treatmentSchema && <script type="application/ld+json">{JSON.stringify(treatmentSchema)}</script>}
      {faq && <script type="application/ld+json">{JSON.stringify(faq)}</script>}
    </Helmet>
  );
}
