import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";

export default function FAQ() {
  const { content } = useLanguage();
  const ref = useReveal();
  const [openIdx, setOpenIdx] = useState(null);
  if (!content) return null;
  const { faq } = content;

  return (
    <section id="faq" className="reveal" ref={ref}>
      <div className="wrap" style={{ maxWidth: 820 }}>
        <div className="sec-head">
          <h2>{faq.title}</h2>
          <p>{faq.intro}</p>
        </div>
        <div className="faq-list">
          {faq.items.map((item, i) => {
            const open = openIdx === i;
            return (
              <div className={`faq-item${open ? " open" : ""}`} key={i}>
                <button className="faq-q" onClick={() => setOpenIdx(open ? null : i)}>
                  {item[0]}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                <div className="faq-a" style={{ maxHeight: open ? "300px" : 0 }}>
                  <p>{item[1]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
