import { useLanguage } from "../context/LanguageContext";

const LOGOS = [
  { name: "Top Channel", src: "https://virtus.al/wp-content/uploads/2025/04/Top-channel-Logo-1.png" },
  { name: "Psikologjia", src: "https://virtus.al/wp-content/uploads/2025/04/Revista-Psikologjia-Logo.png" },
  { name: "TV Klan", src: "https://virtus.al/wp-content/uploads/2025/04/tv-klan-logo-1.png" },
  { name: "Koha Jonë", src: "https://virtus.al/wp-content/uploads/2025/04/Koha-Jone-Logo.png" },
  { name: "Nordest24", src: "https://virtus.al/wp-content/uploads/2025/07/norders24-logo.png" },
  { name: "Meridiana Notizie", src: "https://virtus.al/wp-content/uploads/2025/07/meridiana-notizie-logo.png" },
  { name: "TuttoGolfo", src: "https://virtus.al/wp-content/uploads/2025/07/tutto-golfo-logo.png" },
  { name: "Salerno Notizie", src: "https://virtus.al/wp-content/uploads/2025/04/Salerno-Notizie.png" },
];

const LABELS = {
  fr: "TEL QUE VU DANS",
  en: "AS FEATURED IN",
  it: "COME VISTO SU",
  es: "COMO SE VIO EN",
  de: "BEKANNT AUS",
  pt: "COMO VISTO EM",
  ru: "УПОМЯНУТО В",
  ar: "كما ظهر في",
  sq: "SIÇ U PA NË",
  zh: "媒体报道",
};

export default function PressLogos() {
  const { lang } = useLanguage();
  const label = LABELS[lang] || LABELS.en;
  const items = [...LOGOS, ...LOGOS];

  return (
    <section className="press-showcase" aria-label={label}>
      <div className="wrap">
        <div className="press-label">{label}</div>
        <div className="press-marquee" aria-hidden="true">
          <div className="press-track">
            {items.map((item, i) => (
              <div className="press-logo-item" key={`${item.name}-${i}`}>
                <img src={item.src} alt="" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
