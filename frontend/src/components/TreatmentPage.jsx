import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { TREATMENT_CATALOG } from "../data/siteData";
import SEOHead from "./SEOHead";
import Header from "./Header";
import Footer from "./Footer";
import AppNav from "./AppNav";
import Chatbot from "./Chatbot";
import Contact from "./Contact";
import { useState } from "react";
import { UI } from "../data/uiTranslations.js";
import SmartAnchor from "./SmartAnchor";

const HERO_IMAGES = [
  "/assets/gallery/full-mouth-restoration.avif", "/assets/gallery/dritan-all-on-6.jpg", "/assets/gallery/dritan-all-on-6.jpg", "/assets/gallery/full-mouth-restoration.avif",
  "/assets/gallery/general-treatment.avif", "/assets/gallery/general-treatment.avif", "/assets/gallery/general-treatment.avif", "/assets/gallery/anna-maria-facette.avif",
  "/assets/gallery/general-treatment.avif", "/assets/gallery/general-treatment.avif", "/assets/gallery/general-treatment.avif", "/assets/gallery/general-treatment.avif",
  "/assets/gallery/general-treatment.avif", "/assets/gallery/general-treatment.avif", "/assets/gallery/general-treatment.avif", "/assets/gallery/general-treatment.avif",
  "/assets/gallery/general-treatment.avif", "/assets/gallery/general-treatment.avif", "/assets/gallery/general-treatment.avif", "/assets/gallery/aesthetic-treatment-1.avif",
  "/assets/gallery/general-treatment.avif", "/assets/gallery/general-treatment.avif", "/assets/gallery/general-treatment.avif", "/assets/gallery/general-treatment.avif",
  "/assets/gallery/general-treatment.avif", "/assets/gallery/matilda.avif", "/assets/gallery/general-treatment.avif", "/assets/gallery/general-treatment.avif",
  "/assets/gallery/aesthetic-treatment-2.avif", "/assets/gallery/general-treatment.avif", "/assets/gallery/general-treatment.avif", "/assets/gallery/general-treatment.avif",
  "/assets/gallery/general-treatment.avif", "/assets/gallery/aesthetic-treatment-1.avif", "/assets/gallery/general-treatment.avif"
];

const PRICES = {
  "dental-implants": "400–800 €",
  "all-on-4": "à partir de 6 000 €",
  "all-on-6": "5 000–8 000 €",
  "all-on-8": "5 000–8 000 €",
  "dental-crowns": "150–300 € / dent",
  "crowns-bridges": "150–300 € / dent"
};

const LABELS = {
  fr: { indicative: "Prix indicatif", overview: "Ce qu'il faut savoir", candidacy: "À qui ce traitement peut convenir", pathway: "Parcours de traitement", questions: "Questions fréquentes", estimate: "Votre situation mérite une évaluation personnalisée", note: "Les indications, les délais et le prix sont confirmés après examen clinique et, si nécessaire, imagerie.", quote: "Demander une orientation", related: "Dans la même spécialité", discover: "Découvrir" },
  en: { indicative: "Indicative price", overview: "What to know", candidacy: "Who it may be suitable for", pathway: "Treatment pathway", questions: "Frequently asked questions", estimate: "Your situation deserves a personalised assessment", note: "Indications, timing and pricing are confirmed after clinical examination and imaging when required.", quote: "Request an assessment", related: "Same specialty", discover: "Discover" },
  it: { indicative: "Prezzo indicativo", overview: "Cosa sapere", candidacy: "Per chi può essere indicato", pathway: "Percorso di trattamento", questions: "Domande frequenti", estimate: "La tua situazione merita una valutazione personalizzata", note: "Indicazioni, tempi e prezzo vengono confermati dopo la valutazione clinica e, se necessario, l'imaging.", quote: "Richiedi una valutazione", related: "Stessa specialità", discover: "Scopri" },
  es: { indicative: "Precio orientativo", overview: "Lo que debe saber", candidacy: "Para quién puede estar indicado", pathway: "Proceso de tratamiento", questions: "Preguntas frecuentes", estimate: "Tu caso merece una valoración personalizada", note: "Las indicaciones, los plazos y el precio se confirman tras la evaluación clínica y las pruebas de imagen cuando sean necesarias.", quote: "Solicitar valoración", related: "Misma especialidad", discover: "Descubrir" },
  de: { indicative: "Richtpreis", overview: "Was Sie wissen sollten", candidacy: "Für wen es geeignet sein kann", pathway: "Behandlungsablauf", questions: "Häufige Fragen", estimate: "Ihr Fall verdient eine individuelle Beurteilung", note: "Indikation, Ablauf und Preis werden nach klinischer Untersuchung und bei Bedarf Bildgebung bestätigt.", quote: "Beurteilung anfragen", related: "Gleiche Fachrichtung", discover: "Entdecken" },
  pt: { indicative: "Preço indicativo", overview: "O que deve saber", candidacy: "Para quem pode ser indicado", pathway: "Percurso do tratamento", questions: "Perguntas frequentes", estimate: "O seu caso merece uma avaliação personalizada", note: "Indicações, prazos e preço são confirmados após avaliação clínica e, quando necessário, imagiologia.", quote: "Pedir avaliação", related: "Mesma especialidade", discover: "Descobrir" },
  ru: { indicative: "Ориентировочная цена", overview: "Что важно знать", candidacy: "Кому может подойти", pathway: "Этапы лечения", questions: "Частые вопросы", estimate: "Ваш случай требует индивидуальной оценки", note: "Показания, сроки и стоимость подтверждаются после клинического осмотра и, при необходимости, диагностики.", quote: "Запросить оценку", related: "Та же специализация", discover: "Подробнее" },
  ar: { indicative: "السعر التقريبي", overview: "ما يجب معرفته", candidacy: "لمن قد يناسب العلاج", pathway: "مسار العلاج", questions: "الأسئلة الشائعة", estimate: "حالتك تستحق تقييماً مخصصاً", note: "يتم تأكيد الاستطباب والمدة والسعر بعد الفحص السريري والتصوير عند الحاجة.", quote: "طلب تقييم", related: "التخصص نفسه", discover: "اكتشف" },
  sq: { indicative: "Çmim orientues", overview: "Çfarë duhet të dini", candidacy: "Për kë mund të jetë i përshtatshëm", pathway: "Rruga e trajtimit", questions: "Pyetje të shpeshta", estimate: "Rasti juaj meriton një vlerësim të personalizuar", note: "Indikacionet, afatet dhe çmimi konfirmohen pas ekzaminimit klinik dhe imazherisë kur nevojitet.", quote: "Kërko vlerësim", related: "E njëjta specializim", discover: "Zbulo" },
  zh: { indicative: "参考价格", overview: "需要了解的信息", candidacy: "可能适合哪些情况", pathway: "治疗流程", questions: "常见问题", estimate: "您的情况需要个性化评估", note: "适应证、时间和价格需在临床检查及必要的影像检查后确认。", quote: "申请评估", related: "同一专科", discover: "了解更多" }
};

const FAQ_TEMPLATES = {
  fr: ["Le traitement est-il adapté à tout le monde ?", "Combien de temps faut-il prévoir ?", "Comment obtenir un plan personnalisé ?"],
  en: ["Is this treatment suitable for everyone?", "How much time should I plan?", "How do I get a personalised plan?"],
  it: ["Il trattamento è adatto a tutti?", "Quanto tempo devo prevedere?", "Come posso ottenere un piano personalizzato?"],
  es: ["¿Este tratamiento es adecuado para todos?", "¿Cuánto tiempo debo prever?", "¿Cómo obtengo un plan personalizado?"],
  de: ["Ist die Behandlung für jeden geeignet?", "Wie viel Zeit sollte ich einplanen?", "Wie erhalte ich einen individuellen Plan?"],
  pt: ["Este tratamento é adequado para todos?", "Quanto tempo devo reservar?", "Como obtenho um plano personalizado?"],
  ru: ["Подходит ли лечение всем пациентам?", "Сколько времени нужно запланировать?", "Как получить индивидуальный план?"],
  ar: ["هل يناسب العلاج جميع المرضى؟", "كم من الوقت يجب التخطيط له؟", "كيف أحصل على خطة مخصصة؟"],
  sq: ["A është trajtimi i përshtatshëm për të gjithë?", "Sa kohë duhet të planifikoj?", "Si mund të marr një plan të personalizuar?"],
  zh: ["这种治疗适合所有患者吗？", "需要预留多长时间？", "如何获得个性化方案？"]
};

function findLocalized(content, catalog) {
  const items = content?.treatments?.items || [];
  const exact = items.find((item) => item?.[0] === catalog.title);
  if (exact) return exact;
  const grouped = items.find((item) => item?.[0] && String(item[0]).includes(catalog.title));
  return grouped || null;
}

export default function TreatmentPage() {
  const { slug } = useParams();
  const { content, contact, lang } = useLanguage();
  const u = UI[lang] || UI.en;
  const labels = LABELS[lang] || LABELS.en;
  const [chatOpen, setChatOpen] = useState(false);
  const catalog = TREATMENT_CATALOG.find((item) => item.slug === slug);

  if (!content) return null;
  if (!catalog) {
    const home = lang === "fr" ? "/" : `/${lang}/`;
    return (
      <>
        <SEOHead page={{ type: "page", title: "Traitement introuvable", description: "Cette page de traitement n’existe pas.", slug }} />
        <Header />
        <main className="not-found treatment-missing"><div className="wrap"><span className="sample-tag">TRAITEMENTS</span><h1>Cette page de traitement n’est pas disponible.</h1><p>Le lien a peut-être changé. Retrouvez le catalogue complet des soins Virtus.</p><div className="hero-ctas"><Link className="btn btn-primary" to={`${home}#treatments`}>Voir les traitements</Link><Link className="btn btn-ghost" to={home}>Accueil</Link></div></div></main>
        <Footer />
      </>
    );
  }

  const localized = findLocalized(content, catalog);
  const title = localized?.[0] || catalog.title;
  const description = localized?.[1] || catalog.desc;
  const seoDescription = `${description} ${labels.note}`;
  const index = TREATMENT_CATALOG.indexOf(catalog);
  const image = HERO_IMAGES[index] || "/assets/gallery/general-treatment.avif";
  const back = lang === "fr" ? "/" : `/${lang}/`;
  const related = TREATMENT_CATALOG.filter((item) => item.category === catalog.category && item.slug !== catalog.slug).slice(0, 4);
  const publicPrice = PRICES[catalog.slug] || "Sur devis";
  const faqs = FAQ_TEMPLATES[lang] || FAQ_TEMPLATES.en;

  return (
    <>
      <SEOHead page={{ type: "treatment", title, description, seoDescription, slug }} />
      <Header />
      <main className="treatment-page">
        <section className="treatment-hero">
          <div className="wrap treatment-hero-grid">
            <div className="treatment-hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> Virtus Dental Center · Tirana</div>
              <p className="breadcrumb"><Link to={back}>{u.home}</Link><span>/</span>{catalog.category}<span>/</span>{title}</p>
              <span className="sample-tag">{catalog.category}</span>
              <h1>{title}</h1>
              <p className="treatment-lede">{description}</p>
              <div className="treatment-price-chip"><span>{labels.indicative}</span><strong>{publicPrice}</strong></div>
              <div className="hero-ctas"><SmartAnchor href="#contact" className="btn btn-primary">{labels.quote} <span>↗</span></SmartAnchor>{contact?.whatsapp && <a className="btn btn-whatsapp" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>}</div>
            </div>
            <div className="treatment-image"><img src={image} alt={`${title} — Virtus Dental Center, Tirana`} fetchPriority="high" /><div className="treatment-image-caption">Virtus Dental Center · Tirana</div><div className="treatment-image-badge">{publicPrice}</div></div>
          </div>
        </section>

        <section className="treatment-overview"><div className="wrap treatment-overview-grid"><div><span className="sample-tag">{labels.overview}</span><h2>{title}</h2><p>{description}</p></div><div className="treatment-proof"><span>01</span><strong>{catalog.category}</strong><p>{catalog.indications}</p></div><div className="treatment-proof"><span>02</span><strong>{labels.pathway}</strong><p>{catalog.process}</p></div></div></section>

        <section className="treatment-content"><div className="wrap treatment-content-grid"><article><span className="sample-tag">{labels.candidacy}</span><h2>{catalog.indications}</h2><p>{catalog.process}</p><div className="treatment-detail-grid"><div><strong>{u.forWho}</strong><p>{catalog.indications}</p></div><div><strong>{u.how}</strong><p>{catalog.process}</p></div></div><div className="treatment-points"><div><strong>01</strong><span>{u.point1}</span></div><div><strong>02</strong><span>{u.point2}</span></div><div><strong>03</strong><span>{u.point3}</span></div><div><strong>04</strong><span>{u.point4}</span></div></div><div className="medical-note"><strong>{u.important} :</strong> {labels.note}</div></article><aside className="treatment-aside"><span className="aside-price-label">{labels.indicative}</span><strong className="aside-price">{publicPrice}</strong><h3>{labels.estimate}</h3><p>{labels.note}</p><SmartAnchor href="#contact" className="btn btn-primary">{labels.quote}</SmartAnchor></aside></div></section>

        <section className="treatment-faq"><div className="wrap"><div className="sec-head"><span className="sample-tag">{labels.questions}</span><h2>{labels.questions}</h2></div><div className="treatment-faq-grid">{faqs.map((question) => <details key={question}><summary>{question}</summary><p>{labels.note} {catalog.process}</p></details>)}</div></div></section>

        {related.length > 0 && <section className="related-treatments"><div className="wrap"><div className="sec-head"><span className="sample-tag">{labels.related}</span><h2>{u.explore}</h2></div><div className="treat-grid">{related.map((item) => <Link className="treat-card" key={item.slug} to={lang === "fr" ? `/treatments/${item.slug}` : `/${lang}/treatments/${item.slug}`}><span className="treat-index">{item.category}</span><h3>{item.title}</h3><p>{item.desc}</p><span className="text-link">{labels.discover} →</span></Link>)}</div></div></section>}
        <Contact />
      </main>
      <Footer /><AppNav onOpenChat={() => setChatOpen(true)} /><Chatbot open={chatOpen} onToggle={() => setChatOpen((v) => !v)} />
    </>
  );
}
