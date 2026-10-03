import { useLanguage } from "../context/LanguageContext";
import SmartAnchor from "./SmartAnchor";
import { useReveal } from "../hooks/useReveal";

export default function Packages() {
  const { content } = useLanguage();
  const ref = useReveal();
  if (!content) return null;
  const { packages: p } = content;

  return (
    <section id="packages" className="reveal" ref={ref} style={{ background: "var(--card)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div className="sec-head">
          <h2>{p.title}</h2>
          <p>{p.intro}</p>
        </div>
        <div className="pkg-grid">
          {p.items.map((item, i) => (
            <div className="pkg-card" key={i}>
              <h3>{item.title}</h3>
              <ul>
                {item.features.map((f, j) => (
                  <li key={j}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <SmartAnchor href="#contact" className="btn btn-ghost" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>
                {content.hero.cta1}
              </SmartAnchor>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
