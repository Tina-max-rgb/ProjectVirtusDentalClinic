import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import SEOHead from "./SEOHead";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import Gallery from "./Gallery";
import VideoTestimonials from "./VideoTestimonials";
import ClinicalApproach from "./ClinicalApproach";
import InternationalPatientHub from "./InternationalPatientHub";
import Team from "./Team";
import GuideLibrary from "./GuideLibrary";

import { INFO_PAGES } from "../data/infoPages.js";
import { UI } from "../data/uiTranslations.js";

const PAGES = INFO_PAGES;

export default function InfoPage({ pageName }) {
  const { page: routePage } = useParams();
  const page = pageName || routePage;
  const { lang, contact } = useLanguage();
  const u = UI[lang] || UI.en;
  const data = PAGES[lang]?.[page] || PAGES.en[page] || PAGES.en.about;
  const prefix = lang === "fr" ? "" : `/${lang}`;
  const cta = `${prefix}/#contact`;

  return (
    <>
      <SEOHead page={{ type: "page", title: data.title, description: data.intro, slug: page }} />
      <Header />
      <main className="info-page">
        <section className="info-hero">
          <div className="wrap">
            <p className="eyebrow"><span className="eyebrow-dot" /> Virtus Dental Center · Tirana</p>
            <p className="breadcrumb"><Link to={prefix || "/"}>{u.home}</Link> <span>/</span> {data.title}</p>
            <span className="sample-tag">{data.eyebrow}</span>
            <h1>{data.title}</h1>
            <p>{data.intro}</p>
            <div className="hero-ctas">
              <Link className="btn btn-primary" to={cta}>{u.request} <span>↗</span></Link>
              {contact?.whatsapp && <a className="btn btn-whatsapp" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>}
            </div>
          </div>
        </section>

        <section className="info-content">
          <div className="wrap">
            <div className="info-sections">
              {data.sections.map(([title, body]) => (
                <article key={title}>
                  <span className="sample-tag">VIRTUS</span>
                  <h2>{title}</h2>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {page === "about" && <ClinicalApproach />}
        {page === "about" && <Team />}
        {page === "dental-tourism" && <InternationalPatientHub />}
        {page === "before-after" && <Gallery />}
        {page === "before-after" && <VideoTestimonials />}

        {page === "blog" && <GuideLibrary />}

        {page === "virtual-tour" && contact?.virtualTour && (
          <section className="virtual-tour-page">
            <div className="wrap">
              <div className="virtual-tour-frame">
                <iframe src={contact.virtualTour} title="Visite virtuelle du Virtus Dental Center" loading="lazy" allowFullScreen />
              </div>
              <a className="text-link" href={contact.virtualTour} target="_blank" rel="noopener noreferrer">{u.openTour} →</a>
            </div>
          </section>
        )}

        <section className="info-cta">
          <div className="wrap">
            <div>
              <span className="sample-tag">{u.nextStep}</span>
              <h2>{u.nextTitle}</h2>
              <p>{u.nextText}</p>
            </div>
            <Link className="btn btn-primary" to={cta}>{u.request}</Link>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
