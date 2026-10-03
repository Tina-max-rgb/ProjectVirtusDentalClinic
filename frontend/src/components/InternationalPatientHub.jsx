import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import SmartAnchor from "./SmartAnchor";
import { useReveal } from "../hooks/useReveal";

const DATA = {
  fr: {
    eyebrow: "PATIENTS INTERNATIONAUX",
    title: "Votre traitement, votre voyage, un seul parcours",
    intro: "Préparez votre séjour à Tirana avant même de prendre l’avion : dossier à distance, estimation du calendrier, organisation pratique et suivi après votre retour.",
    cards: [
      ["01", "Pré-évaluation à distance", "Envoyez vos photos, radios et informations utiles. L’équipe identifie les examens qui manquent avant de confirmer un protocole."],
      ["02", "Calendrier de séjour", "Nous vous indiquons le nombre de rendez-vous à prévoir et les temps de contrôle nécessaires avant votre départ."],
      ["03", "Organisation pratique", "Transfert depuis l’aéroport, hôtel partenaire et informations utiles pour votre séjour peuvent être coordonnés selon votre dossier."],
      ["04", "Suivi après retour", "Recevez vos consignes et gardez un canal de contact avec l’équipe pour le suivi à distance lorsque celui-ci est approprié."]
    ],
    checklistTitle: "Votre dossier de départ",
    checklist: ["Photos récentes du sourire et des dents", "Radiographies ou scanner si disponibles", "Liste des traitements et médicaments en cours", "Dates auxquelles vous pouvez voyager", "Vos questions et priorités"],
    cta: "Préparer mon dossier",
    guide: "Guide du tourisme dentaire"
  },
  en: {
    eyebrow: "INTERNATIONAL PATIENTS",
    title: "Your treatment, your trip, one clear journey",
    intro: "Prepare your Tirana visit before you fly: remote assessment, treatment timeline, practical travel support and follow-up after you return home.",
    cards: [
      ["01", "Remote pre-assessment", "Send recent photos, X-rays and relevant information. The team identifies what is missing before a treatment plan is confirmed."],
      ["02", "Treatment timeline", "You receive a clear outline of appointments and any review or healing time that should be planned before booking your return flight."],
      ["03", "Travel logistics", "Airport transfer, partner accommodation and practical information can be coordinated according to your treatment plan."],
      ["04", "Follow-up at home", "Receive post-treatment instructions and keep a direct contact channel for remote follow-up when clinically appropriate."]
    ],
    checklistTitle: "What to prepare",
    checklist: ["Recent smile and dental photos", "Recent X-rays or scans if available", "Current treatments and medications", "Possible travel dates", "Your questions and priorities"],
    cta: "Prepare my case",
    guide: "Dental tourism guide"
  }
};

export default function InternationalPatientHub() {
  const { lang } = useLanguage();
  const ref = useReveal();
  const d = DATA[lang] || DATA.en;
  const prefix = lang === "fr" ? "" : `/${lang}`;
  return (
    <section className="international-hub reveal" ref={ref} id="international-patients">
      <div className="wrap">
        <div className="sec-head international-head">
          <span className="sample-tag">{d.eyebrow}</span>
          <h2>{d.title}</h2>
          <p>{d.intro}</p>
        </div>
        <div className="international-grid">
          {d.cards.map(([n, title, body]) => (
            <article className="international-card" key={n}>
              <span className="international-number">{n}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="international-bottom">
          <div>
            <span className="sample-tag">{d.checklistTitle}</span>
            <ul>{d.checklist.map((item) => <li key={item}>✓ {item}</li>)}</ul>
          </div>
          <div className="international-actions">
            <SmartAnchor className="btn btn-primary" href="#contact">{d.cta} <span>↗</span></SmartAnchor>
            <Link className="text-link" to={`${prefix}/dental-tourism`}>{d.guide} →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
