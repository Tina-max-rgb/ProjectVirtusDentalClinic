import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { DOCTOR_PROFILES, TEAM_MEMBERS } from "../data/siteData";
import SEOHead from "./SEOHead";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import { UI } from "../data/uiTranslations.js";
import SmartAnchor from "./SmartAnchor";

export default function DoctorProfile() {
  const { slug } = useParams();
  const { content, lang } = useLanguage();
  const u = UI[lang] || UI.en;
  const profile = DOCTOR_PROFILES[slug];
  const member = TEAM_MEMBERS.find((item) => item.slug === slug);
  if (!content) return null;
  if (!profile || !member) {
    const home = lang === "fr" ? "/" : `/${lang}/`;
    return (
      <>
        <SEOHead page={{ type: "page", title: "Profil introuvable", description: "Ce profil n’est pas disponible.", slug }} />
        <Header />
        <main className="not-found treatment-missing">
          <div className="wrap">
            <span className="sample-tag">ÉQUIPE VIRTUS</span>
            <h1>Ce profil n’est pas disponible.</h1>
            <p>Le profil demandé n’est plus accessible à cette adresse. Découvrez l’équipe médicale de Virtus.</p>
            <div className="hero-ctas">
              <Link className="btn btn-primary" to={home}>Retour à l’accueil</Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEOHead page={{ type: "doctor", title: profile.name, description: profile.role, slug }} />
      <Header />
      <main className="doctor-profile-page">
        <section className="doctor-profile-hero">
          <div className="wrap doctor-profile-grid">
            <div className="doctor-profile-avatar">
              {member.photo ? <img src={member.photo} alt={profile.name} /> : <span aria-hidden="true">{profile.name.replace(/^.*?\s/, "").split(" ").map((n) => n[0]).slice(0, 2).join("")}</span>}
            </div>
            <div>
              <p className="eyebrow"><span className="eyebrow-dot" /> Virtus Dental Center · Tirana</p>
              <p className="breadcrumb"><Link to={lang === "fr" ? "/" : `/${lang}`}>{u.home}</Link> <span>/</span> {u.team} <span>/</span> {profile.name}</p>
              <h1>{profile.name}</h1>
              <p className="doctor-profile-role">{profile.role}</p>
              <p className="doctor-profile-lede">{u.profileLede}</p>
              <SmartAnchor className="btn btn-primary" href="#contact">{u.request} <span>↗</span></SmartAnchor>
            </div>
          </div>
        </section>
        <section className="doctor-profile-content">
          <div className="wrap doctor-profile-content-grid">
            <article>
              <span className="sample-tag">{u.teamTag}</span>
              <h2>{u.expertise}</h2>
              <p>{profile.bio}</p>
              <h3>{u.expertiseLabel}</h3>
              <div className="doctor-expertise">{profile.expertise.map((item) => <span key={item}>{item}</span>)}</div>
              <p className="doctor-profile-note">{u.generalInfo}</p>
            </article>
            <aside className="doctor-profile-aside">
              <h3>{u.orientation}</h3>
              <p>{u.orientationText}</p>
              <SmartAnchor className="btn btn-primary" href="#contact">{u.talkTeam}</SmartAnchor>
              <Link className="text-link" to={lang === "fr" ? "/" : `/${lang}`}>← {u.backTeam}</Link>
            </aside>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
