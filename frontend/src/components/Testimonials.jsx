import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";

export default function Testimonials() {
  const { content } = useLanguage();
  const ref = useReveal();
  const testimonials = content?.testimonials;
  if (!testimonials?.items?.length) return null;
  return <section className="test-section reveal" ref={ref}><div className="wrap"><span className="sample-tag verified">{testimonials.tag}</span><div className="sec-head" style={{ marginTop: 0 }}><h2>{testimonials.title}</h2></div><div className="test-grid">{testimonials.items.map((t, i) => <div className="test-card" key={i}><p className="quote">{t.quote}</p><div className="test-who"><span>{t.flag}</span><span>{t.name}</span></div></div>)}</div></div></section>;
}
