import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";

export default function VideoTestimonials() {
  const { content, videoTestimonials } = useLanguage();
  const ref = useReveal();
  const [playing, setPlaying] = useState(null);
  if (!content || !videoTestimonials.length) return null;
  const { videoTestimonials: v } = content;

  return (
    <section id="video-testimonials" className="reveal" ref={ref}>
      <div className="wrap">
        <div className="sec-head">
          <h2>{v.title}</h2>
          <p>{v.intro}</p>
        </div>
        <div className="video-grid">
          {videoTestimonials.map((item, i) => (
            <div className="video-card" key={i}>
              {playing === i ? (
                <video src={item.video} controls autoPlay playsInline aria-label={item.name} />
              ) : (
                <button className="video-thumb" onClick={() => setPlaying(i)} aria-label={`Lire la vidéo : ${item.name}`}>
                  <img src={item.poster} alt={item.name} loading="lazy" />
                  <span className="play-icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7Z" /></svg>
                  </span>
                  <span className="video-name">{item.name}</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
