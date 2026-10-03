import { useLanguage } from "../context/LanguageContext";

const COPY = {
  fr: { eyebrow:"Avis Google", title:"Une réputation construite patient après patient", intro:"La fiche Google de Virtus Dental Center affichait 5,0/5 et 89 avis au 17 septembre 2026. Le compteur évolue avec le temps : le lien ci-dessous ouvre directement la fiche Google.", rating:"5,0", count:"89 avis", updated:"Vérifié le 17 septembre 2026", cta:"Voir les avis Google", source:"Témoignage publié par Virtus · ouvrir Google pour la version originale" },
  en: { eyebrow:"Google reviews", title:"A reputation built one patient at a time", intro:"Virtus Dental Center’s Google listing was recorded at 5.0/5 from 89 reviews on 17 September 2026. The live count changes over time; use the link below for the current listing.", rating:"5.0", count:"89 reviews", updated:"Checked 17 September 2026", cta:"View Google reviews", source:"Testimonial published by Virtus · open Google for the original listing" },
  it: { eyebrow:"Recensioni Google", title:"Una reputazione costruita paziente dopo paziente", intro:"La scheda Google di Virtus Dental Center risultava a 5,0/5 con 89 recensioni il 17 settembre 2026. Il numero può cambiare: il link apre la scheda Google aggiornata.", rating:"5,0", count:"89 recensioni", updated:"Verificato il 17 settembre 2026", cta:"Vedi recensioni Google", source:"Testimonianza pubblicata da Virtus · apri Google per l'originale" },
  es: { eyebrow:"Reseñas de Google", title:"Una reputación construida paciente a paciente", intro:"La ficha de Google de Virtus Dental Center mostraba 5,0/5 y 89 reseñas el 17 de septiembre de 2026. El número cambia con el tiempo; el enlace abre la ficha actual.", rating:"5,0", count:"89 reseñas", updated:"Verificado el 17 de septiembre de 2026", cta:"Ver reseñas en Google", source:"Testimonio publicado por Virtus · abre Google para el original" },
  de: { eyebrow:"Google-Bewertungen", title:"Vertrauen, das Patient für Patient entsteht", intro:"Das Google-Profil von Virtus Dental Center wurde am 17. September 2026 mit 5,0/5 aus 89 Bewertungen erfasst. Die Zahl kann sich ändern; der Link öffnet das aktuelle Profil.", rating:"5,0", count:"89 Bewertungen", updated:"Geprüft am 17. September 2026", cta:"Google-Bewertungen ansehen", source:"Von Virtus veröffentlichtes Patientenfeedback · Original auf Google" },
  pt: { eyebrow:"Avaliações Google", title:"Uma reputação construída paciente a paciente", intro:"A ficha Google da Virtus Dental Center apresentava 5,0/5 com 89 avaliações em 17 de setembro de 2026. O número muda com o tempo; o link abre a ficha atual.", rating:"5,0", count:"89 avaliações", updated:"Verificado em 17 de setembro de 2026", cta:"Ver avaliações no Google", source:"Testemunho publicado pela Virtus · veja o original no Google" },
  ru: { eyebrow:"Отзывы Google", title:"Репутация, которую создают пациенты", intro:"17 сентября 2026 года в профиле Virtus Dental Center было 5,0/5 на основе 89 отзывов. Количество меняется; ссылка ниже открывает актуальную карточку Google.", rating:"5,0", count:"89 отзывов", updated:"Проверено 17 сентября 2026", cta:"Смотреть отзывы Google", source:"Отзыв опубликован Virtus · оригинал смотрите в Google" },
  ar: { eyebrow:"آراء Google", title:"ثقة تُبنى مع كل مريض", intro:"في 17 سبتمبر 2026، كان ملف Virtus Dental Center على Google يعرض 5.0/5 بناءً على 89 مراجعة. العدد يتغير مع الوقت؛ الرابط يفتح الملف الحالي.", rating:"5.0", count:"89 مراجعة", updated:"تم التحقق في 17 سبتمبر 2026", cta:"عرض آراء Google", source:"شهادة منشورة من Virtus · افتح Google للنسخة الأصلية" },
  sq: { eyebrow:"Vlerësime në Google", title:"Një reputacion i ndërtuar pacient pas pacienti", intro:"Më 17 shtator 2026, profili Google i Virtus Dental Center ishte 5,0/5 me 89 vlerësime. Numri ndryshon me kohën; lidhja hap profilin aktual.", rating:"5,0", count:"89 vlerësime", updated:"Verifikuar më 17 shtator 2026", cta:"Shiko vlerësimet në Google", source:"Dëshmi e publikuar nga Virtus · origjinali në Google" },
  zh: { eyebrow:"Google 评价", title:"每一位患者共同建立的口碑", intro:"截至 2026 年 9 月 17 日，Virtus Dental Center 的 Google 商家资料显示 5.0/5，共 89 条评价。数量会变化，下面的链接可打开最新页面。", rating:"5.0", count:"89 条评价", updated:"核验日期：2026 年 9 月 17 日", cta:"查看 Google 评价", source:"Virtus 发布的患者反馈 · 原始评价请查看 Google" }
};

const REVIEWS = [
  { name:"Mimoza Tego", country:"🇦🇱", date:"21 mars 2025", text:"Elle décrit une clinique moderne et propre, une équipe disponible et des explications claires tout au long de son parcours." },
  { name:"Mehmet Yıldız", country:"🇹🇷", date:"26 janvier 2025", text:"Il raconte être venu sur recommandation d'amis et souligne l'accueil, la propreté et l'attention portée aux différentes étapes." },
  { name:"Wissal Foufi", country:"🇫🇷", date:"10 octobre 2025", text:"Elle met en avant l'accueil, l'hygiène et la qualité des soins, ainsi que l'accompagnement d'une équipe parlant français." },
  { name:"Sofia Andreadi", country:"🇬🇷", date:"8 mai 2026", text:"Elle raconte être venue de Grèce et souligne l'accueil chaleureux, la disponibilité de l'équipe et la qualité de l'environnement." },
  { name:"Irina Lisitskaya", country:"🇫🇷🇷🇺", date:"7 février 2026", text:"Elle décrit plusieurs séjours à la clinique et insiste sur le professionnalisme, l'organisation et l'accompagnement du parcours international." },
  { name:"Harenala JEANMICHEL", country:"🇫🇷", date:"4 juin 2026", text:"Il mentionne un accueil agréable, un devis détaillé et une équipe professionnelle après son expérience en Albanie." }
];

export default function GoogleReviews() {
  const { lang } = useLanguage();
  const t = COPY[lang] || COPY.en;
  const googleUrl = "https://www.google.com/maps?cid=13877941505326394748&hl=en";
  return (
    <section className="google-reviews" id="google-reviews">
      <div className="wrap">
        <div className="google-reviews-head">
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <h2>{t.title}</h2>
            <p>{t.intro}</p>
          </div>
          <a className="google-score" href={googleUrl} target="_blank" rel="noreferrer">
            <span className="google-mark">G</span>
            <span><strong>{t.rating}</strong><span className="stars" aria-label="5 étoiles">★★★★★</span><small>{t.count}</small></span>
            <span className="google-arrow">↗</span>
          </a>
        </div>
        <div className="google-review-grid">
          {REVIEWS.map((review) => (
            <article className="google-review-card" key={review.name}>
              <div className="review-top"><span className="review-avatar">{review.name.charAt(0)}</span><div><strong>{review.name}</strong><small>{review.country} · {review.date}</small></div><span className="review-google" aria-label="Google">G</span></div>
              <div className="review-stars">★★★★★</div>
              <p>{review.text}</p>
              <span className="review-source">{t.source}</span>
            </article>
          ))}
        </div>
        <div className="google-reviews-footer">
          <span>★ {t.rating} · {t.count} · {t.updated}</span>
          <a href={googleUrl} target="_blank" rel="noreferrer">{t.cta} ↗</a>
        </div>
      </div>
    </section>
  );
}
