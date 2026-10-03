import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";

export default function Journey() {
  const { content } = useLanguage();
  const ref = useReveal();
  if (!content) return null;
  const { journey } = content;

  return (
    <section id="journey" className="reveal" ref={ref}>
      <div className="wrap">
        <div className="sec-head">
          <h2>{journey.title}</h2>
          <p>{journey.intro}</p>
        </div>
        <div className="journey-grid">
          {journey.steps.map((step, i) => (
            <div className="journey-step" key={i}>
              <div className="step-num">{i + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
