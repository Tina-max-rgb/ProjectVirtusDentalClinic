import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import MediaImage from "./MediaImage";

export default function Gallery() {
  const { content, gallery } = useLanguage();
  const ref = useReveal();
  const [lightbox, setLightbox] = useState(null);
  if (!content || !gallery.length) return null;
  const { gallery: g } = content;

  return (
    <section id="gallery" className="reveal" ref={ref}>
      <div className="wrap">
        <div className="sec-head">
          <h2>{g.title}</h2>
          <p>{g.intro}</p>
        </div>
        <div className="gallery-grid">
          {gallery.map((item, i) => (
            <button key={i} className="gallery-item" onClick={() => setLightbox(item)} aria-label={`Agrandir : ${item.name}`}>
              <MediaImage src={item.src} alt={item.name} loading="lazy" fallbackLabel={item.name} />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox.src} alt={lightbox.name} />
        </div>
      )}
    </section>
  );
}
