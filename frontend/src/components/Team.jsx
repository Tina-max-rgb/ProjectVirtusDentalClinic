import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import { Link } from "react-router-dom";
import MediaImage from "./MediaImage";

export default function Team() {
  const { content, team, lang } = useLanguage();
  const ref = useReveal();
  if (!content || !team.length) return null;
  const { team: t } = content;

  return (
    <section id="team" className="reveal" ref={ref}>
      <div className="wrap">
        <div className="sec-head">
          <h2>{t.title}</h2>
          <p>{t.intro}</p>
        </div>
        <div className="team-grid">
          {team.map((member, i) => (
            <Link key={i} className="team-card" to={lang === "fr" ? `/team/${member.slug}` : `/${lang}/team/${member.slug}`}>
              <div className="team-photo">
                <MediaImage src={member.photo || member.fallbackPhoto} fallbackSrc={member.secondaryPhoto} alt={member.name} loading={i < 3 ? "eager" : "lazy"} fallbackLabel={member.name} />
                <div className="team-photo-shine" aria-hidden="true" />
              </div>
              <div className="team-meta">
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
