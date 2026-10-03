import { useLanguage } from "../context/LanguageContext";
import { TEAM_MEMBERS } from "../data/siteData";
import { useReveal } from "../hooks/useReveal";
import MediaImage from "./MediaImage";

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg>
);

export default function Doctor() {
  const { content } = useLanguage();
  const ref = useReveal();
  if (!content) return null;
  const { doctor } = content;
  const arnold = TEAM_MEMBERS.find((member) => member.slug === "arnold-mboqe");

  return (
    <section className="doctor reveal" id="doctor" ref={ref}>
      <div className="wrap">
        <div className="doctor-photo"><MediaImage src={arnold?.photo || ""} alt={doctor.name} fallbackLabel={doctor.name} loading="eager" /></div>
        <div>
          <h2>{doctor.name}</h2>
          <div className="role">{doctor.role}</div>
          {doctor.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <ul className="cred-list">
            {doctor.credentials.map((c, i) => (
              <li key={i}><Check />{c}</li>
            ))}
          </ul>
          <div className="langs">
            {doctor.languages.map((l, i) => <span key={i}>{l}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
