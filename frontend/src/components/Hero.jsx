import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import MediaImage from "./MediaImage";
import SmartAnchor from "./SmartAnchor";



const SAFE_POINTS={fr:["Première orientation à partir de vos informations disponibles","Plan de traitement à confirmer après examen clinique","Consignes et suivi expliqués avant et après les soins"],en:["Initial guidance based on the information you provide","Treatment plan confirmed after clinical examination","Care and follow-up instructions explained clearly"],it:["Prima orientazione sulla base delle informazioni disponibili","Piano confermato dopo la valutazione clinica","Indicazioni e follow-up spiegati chiaramente"],es:["Primera orientación a partir de la información disponible","Plan confirmado tras la evaluación clínica","Indicaciones y seguimiento explicados claramente"],de:["Erste Orientierung anhand Ihrer verfügbaren Informationen","Behandlungsplan nach klinischer Untersuchung","Nachsorge und Anweisungen werden klar erklärt"],pt:["Primeira orientação com base nas informações disponíveis","Plano confirmado após avaliação clínica","Cuidados e acompanhamento explicados claramente"],ru:["Первичная ориентация по предоставленной информации","План подтверждается после клинического осмотра","Рекомендации и наблюдение объясняются заранее"],ar:["توجيه أولي بناءً على المعلومات المتاحة","تأكيد خطة العلاج بعد الفحص السريري","شرح واضح للتعليمات والمتابعة"],sq:["Orientim fillestar bazuar në informacionin e disponueshëm","Plani konfirmohet pas ekzaminimit klinik","Udhëzimet dhe ndjekja shpjegohen qartë"],zh:["根据您提供的信息进行初步了解","治疗方案需在临床检查后确认","治疗后护理与随访说明清晰"]};

const STATS={fr:{label:"traitements et procédures présentés",mini:"10 langues"},en:{label:"treatments and procedures presented",mini:"10 languages"},it:{label:"trattamenti e procedure presentati",mini:"10 lingue"},es:{label:"tratamientos y procedimientos presentados",mini:"10 idiomas"},de:{label:"vorgestellte Behandlungen und Verfahren",mini:"10 Sprachen"},pt:{label:"tratamentos e procedimentos apresentados",mini:"10 idiomas"},ru:{label:"представленных видов лечения",mini:"10 языков"},ar:{label:"علاجًا وإجراءً معروضًا",mini:"10 لغات"},sq:{label:"trajtime dhe procedura të paraqitura",mini:"10 gjuhë"},zh:{label:"项治疗与医疗服务",mini:"10种语言"}};

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg>
);

export default function Hero() {
  const { content, contact, gallery, lang } = useLanguage();
  const ref = useReveal();
  if (!content) return null;
  const { hero } = content;
  const heroImage = gallery?.[0]?.src || "/assets/gallery/full-mouth-restoration.avif";
  const stat = STATS[lang] || STATS.en;
  const safePoints = SAFE_POINTS[lang] || SAFE_POINTS.en;

  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-wrap">
        <div ref={ref} className="hero-copy reveal">
          <div className="eyebrow"><span className="eyebrow-dot" /> International dental care · Tirana</div>
          <h1>{hero.title}</h1>
          <p className="lede">{hero.lede}</p>
          <div className="hero-ctas">
            <SmartAnchor href="#contact" className="btn btn-primary">{hero.cta1}<span aria-hidden="true">↗</span></SmartAnchor>
            {contact?.whatsapp && (
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">WhatsApp</a>
            )}
            <button type="button" className="btn btn-ghost" onClick={() => document.getElementById("treatments")?.scrollIntoView({ behavior: "smooth", block: "start" })}>{hero.cta2}<span aria-hidden="true">↓</span></button>
          </div>
          <div className="trustrow">
            <div className="trust-item"><Check />{hero.trust1}</div>
            <div className="trust-item"><Check />{hero.trust2}</div>
            <div className="trust-item"><Check />{hero.trust3}</div>
          </div>
        </div>

        <div className="hero-visual reveal in">
          <div className="hero-image-frame">
            <MediaImage src={heroImage} alt="Virtus Dental Center — cas avant et après" fallbackLabel="Virtus Dental Center" />
            <div className="hero-location"><span>●</span> Tirana · Albania</div>
          </div>
          <div className="hero-proof-row">
            <div className="hero-card">
              <div className="stat-num">38</div>
              <div className="stat-label">{stat.label}</div>
              <ul className="hero-card-list">
                <li><Check />{safePoints[0]}</li>
                <li><Check />{safePoints[1]}</li>
                <li><Check />{safePoints[2]}</li>
              </ul>
            </div>
            <div className="hero-mini-card"><strong>10</strong><span>{stat.mini}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
