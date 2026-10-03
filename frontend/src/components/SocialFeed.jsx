import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";

const LABELS = {
  fr: { title: "Restez connecté à la clinique", sub: "Retrouvez les actualités et contenus officiels de Virtus sans alourdir la page d'accueil.", facebook: "Voir Facebook", instagram: "Voir Instagram", youtube: "Voir YouTube", tiktok: "Voir TikTok", tour: "Ouvrir la visite 3D" },
  en: { title: "Stay connected with the clinic", sub: "Follow Virtus official channels without adding a heavy social feed to the page.", facebook: "View Facebook", instagram: "View Instagram", youtube: "View YouTube", tiktok: "View TikTok", tour: "Open 3D tour" },
  it: { title: "Resta in contatto con la clinica", sub: "Segui i canali ufficiali di Virtus senza appesantire la homepage.", facebook: "Facebook", instagram: "Instagram", youtube: "YouTube", tiktok: "TikTok", tour: "Tour 3D" },
  es: { title: "Sigue conectado con la clínica", sub: "Consulta los canales oficiales de Virtus sin cargar la página de inicio.", facebook: "Facebook", instagram: "Instagram", youtube: "YouTube", tiktok: "TikTok", tour: "Tour 3D" },
  de: { title: "Mit der Klinik verbunden bleiben", sub: "Offizielle Virtus-Kanäle ohne einen schweren Social-Feed auf der Startseite.", facebook: "Facebook", instagram: "Instagram", youtube: "YouTube", tiktok: "TikTok", tour: "3D-Rundgang" },
  pt: { title: "Mantenha-se ligado à clínica", sub: "Acompanhe os canais oficiais da Virtus sem sobrecarregar a página inicial.", facebook: "Facebook", instagram: "Instagram", youtube: "YouTube", tiktok: "TikTok", tour: "Tour 3D" },
  ru: { title: "Оставайтесь на связи с клиникой", sub: "Официальные каналы Virtus без тяжёлой социальной ленты на главной странице.", facebook: "Facebook", instagram: "Instagram", youtube: "YouTube", tiktok: "TikTok", tour: "3D-тур" },
  ar: { title: "ابقَ على تواصل مع العيادة", sub: "تابع قنوات Virtus الرسمية دون إضافة محتوى اجتماعي ثقيل إلى الصفحة الرئيسية.", facebook: "فيسبوك", instagram: "إنستغرام", youtube: "يوتيوب", tiktok: "تيك توك", tour: "الجولة ثلاثية الأبعاد" },
  sq: { title: "Qëndroni në kontakt me klinikën", sub: "Ndiqni kanalet zyrtare të Virtus pa ngarkuar faqen kryesore.", facebook: "Facebook", instagram: "Instagram", youtube: "YouTube", tiktok: "TikTok", tour: "Tur 3D" },
  zh: { title: "关注诊所动态", sub: "通过 Virtus 官方渠道了解最新内容，同时保持首页轻量快速。", facebook: "Facebook", instagram: "Instagram", youtube: "YouTube", tiktok: "TikTok", tour: "3D 导览" }
};

export default function SocialFeed() {
  const { lang, contact } = useLanguage();
  const ref = useReveal();
  if (!contact) return null;
  const t = LABELS[lang] || LABELS.en;
  return (
    <section className="social-feed reveal" ref={ref}>
      <div className="wrap">
        <div className="sec-head"><h2>{t.title}</h2><p>{t.sub}</p></div>
        <div className="social-feed-grid">
          <div className="social-embed-card social-link-card"><span className="social-card-mark">V</span><div><strong>Facebook</strong><p>Virtus Dental Center</p><a className="text-link" href={contact.facebook} target="_blank" rel="noopener noreferrer">{t.facebook} ↗</a></div></div>
          <div className="social-embed-card social-link-card"><span className="social-card-mark">◎</span><div><strong>Instagram</strong><p>@virtus.dental.center</p><a className="text-link" href={contact.instagram} target="_blank" rel="noopener noreferrer">{t.instagram} ↗</a></div></div>
          <div className="social-embed-card social-link-card"><span className="social-card-mark">▶</span><div><strong>YouTube</strong><p>Virtus Dental Center</p><a className="text-link" href={contact.youtube} target="_blank" rel="noopener noreferrer">{t.youtube} ↗</a></div></div>
          <div className="social-embed-card social-link-card"><span className="social-card-mark">♪</span><div><strong>TikTok</strong><p>@arnold.mboqe</p><a className="text-link" href={contact.tiktok} target="_blank" rel="noopener noreferrer">{t.tiktok} ↗</a></div></div>
          <div className="social-embed-card social-link-card"><span className="social-card-mark">360</span><div><strong>{t.tour}</strong><p>Explorez la clinique à distance.</p><a className="text-link" href={contact.virtualTour} target="_blank" rel="noopener noreferrer">{t.tour} ↗</a></div></div>
        </div>
      </div>
    </section>
  );
}
