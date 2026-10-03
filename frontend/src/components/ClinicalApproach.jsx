import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";

const copy = {
  fr: {
    eyebrow: "UNE MÉTHODE PLUS CLAIRE",
    title: "Avant de parler de prix, parlons de votre cas.",
    intro: "Une prise en charge internationale ne devrait pas commencer par un forfait standard. Elle commence par comprendre votre situation, vos attentes et les contraintes de votre voyage.",
    cards: [
      ["01", "Évaluer", "Photos, radios et informations médicales disponibles servent de point de départ. Le diagnostic définitif est confirmé par le praticien après examen."],
      ["02", "Planifier", "Le plan de traitement, les étapes, les matériaux proposés et les rendez-vous sont expliqués avant votre déplacement."],
      ["03", "Soigner", "Les différentes spécialités peuvent être coordonnées au sein du centre lorsque votre cas le nécessite."],
      ["04", "Accompagner", "Les consignes de sortie et les modalités de suivi sont expliquées pour faciliter la continuité des soins après votre retour."]
    ],
    note: "Aucune photo ou consultation à distance ne remplace un examen clinique. Les délais et résultats dépendent de chaque patient."
  },
  it: { eyebrow:"UN APPROCCIO PIÙ CHIARO", title:"Prima di parlare di prezzo, parliamo del tuo caso.", intro:"Un percorso internazionale dovrebbe partire dalla comprensione della tua situazione, delle tue aspettative e dei vincoli del viaggio.", cards:[["01","Valutare","Foto, radiografie e informazioni mediche disponibili costituiscono il punto di partenza. La diagnosi definitiva viene confermata dopo la visita."],["02","Pianificare","Piano di trattamento, fasi, materiali proposti e appuntamenti vengono spiegati prima della partenza."],["03","Trattare","Le diverse specialità possono essere coordinate nel centro quando il caso lo richiede."],["04","Seguire","Le indicazioni post-trattamento e il follow-up vengono spiegati per facilitare la continuità delle cure." ]], note:"Le informazioni a distanza non sostituiscono una visita clinica. Tempi e risultati dipendono da ogni paziente." },
  es: { eyebrow:"UN ENFOQUE MÁS CLARO", title:"Antes de hablar de precio, hablemos de tu caso.", intro:"La atención internacional debe comenzar por comprender tu situación, expectativas y necesidades de viaje.", cards:[["01","Evaluar","Fotos, radiografías e información médica disponible sirven como punto de partida. El diagnóstico final se confirma tras la exploración."],["02","Planificar","El plan, las etapas, los materiales propuestos y las citas se explican antes del viaje."],["03","Tratar","Las distintas especialidades pueden coordinarse dentro del centro cuando el caso lo requiere."],["04","Acompañar","Las indicaciones posteriores y el seguimiento se explican para facilitar la continuidad de la atención." ]], note:"La información a distancia no sustituye una evaluación clínica. Los tiempos y resultados dependen de cada paciente." },
  de: { eyebrow:"EIN KLARERER ANSATZ", title:"Bevor wir über den Preis sprechen, sprechen wir über Ihren Fall.", intro:"Eine internationale Behandlung sollte mit dem Verständnis Ihrer Situation, Erwartungen und Reisebedingungen beginnen.", cards:[["01","Beurteilen","Fotos, Röntgenbilder und verfügbare medizinische Informationen dienen als Ausgangspunkt. Die endgültige Diagnose erfolgt nach der Untersuchung."],["02","Planen","Behandlungsplan, Schritte, Materialien und Termine werden vor der Reise erklärt."],["03","Behandeln","Mehrere Fachbereiche können innerhalb des Zentrums koordiniert werden, wenn Ihr Fall dies erfordert."],["04","Begleiten","Nachsorgehinweise und Follow-up werden erklärt, damit die Behandlung auch nach Ihrer Rückkehr weitergeführt werden kann." ]], note:"Informationen aus der Ferne ersetzen keine klinische Untersuchung. Dauer und Ergebnisse sind individuell." },
  pt: { eyebrow:"UMA ABORDAGEM MAIS CLARA", title:"Antes de falar de preço, vamos falar do seu caso.", intro:"O atendimento internacional deve começar pela compreensão da sua situação, expectativas e necessidades de viagem.", cards:[["01","Avaliar","Fotos, radiografias e informações médicas disponíveis servem como ponto de partida. O diagnóstico final é confirmado após avaliação clínica."],["02","Planear","O plano, as etapas, os materiais propostos e as consultas são explicados antes da viagem."],["03","Tratar","As diferentes especialidades podem ser coordenadas no centro quando o caso exige."],["04","Acompanhar","As orientações e o acompanhamento são explicados para facilitar a continuidade dos cuidados após o regresso." ]], note:"Informação à distância não substitui uma avaliação clínica. Prazos e resultados dependem de cada paciente." },
  ru: { eyebrow:"ПОНЯТНЫЙ ПОДХОД", title:"Прежде чем говорить о цене, обсудим ваш случай.", intro:"Международное лечение должно начинаться с понимания вашей ситуации, ожиданий и особенностей поездки.", cards:[["01","Оценить","Фотографии, снимки и доступная медицинская информация помогают начать оценку. Окончательный диагноз подтверждается после осмотра."],["02","Спланировать","План лечения, этапы, материалы и визиты объясняются до поездки."],["03","Лечить","При необходимости специалисты разных направлений координируют лечение внутри центра."],["04","Сопровождать","Рекомендации после лечения и дальнейшее наблюдение объясняются до возвращения домой." ]], note:"Дистанционная информация не заменяет клинический осмотр. Сроки и результаты индивидуальны." },
  ar: { eyebrow:"نهج أكثر وضوحاً", title:"قبل الحديث عن السعر، لنتحدث عن حالتك.", intro:"يبدأ العلاج للمرضى الدوليين بفهم الحالة والتوقعات واحتياجات السفر.", cards:[["01","التقييم","تساعد الصور والأشعة والمعلومات الطبية المتاحة في بدء التقييم، ويؤكد الطبيب التشخيص بعد الفحص."],["02","التخطيط","يتم شرح خطة العلاج والمراحل والمواد والمواعيد قبل السفر."],["03","العلاج","يمكن تنسيق التخصصات المختلفة داخل المركز عندما تتطلب الحالة ذلك."],["04","المتابعة","يتم شرح تعليمات ما بعد العلاج وخطة المتابعة لضمان استمرارية الرعاية بعد العودة." ]], note:"المعلومات عن بُعد لا تغني عن الفحص السريري. تختلف المدة والنتائج حسب كل مريض." },
  sq: { eyebrow:"NJË QASJE MË E QARTË", title:"Para se të flasim për çmimin, të flasim për rastin tuaj.", intro:"Kujdesi ndërkombëtar duhet të nisë duke kuptuar situatën, pritshmëritë dhe nevojat tuaja të udhëtimit.", cards:[["01","Vlerësim","Fotot, radiografitë dhe informacioni mjekësor i disponueshëm janë pikënisja. Diagnoza përfundimtare konfirmohet pas ekzaminimit."],["02","Planifikim","Plani i trajtimit, fazat, materialet dhe takimet shpjegohen para udhëtimit."],["03","Trajtim","Specialitetet e ndryshme mund të koordinohen brenda qendrës kur rasti e kërkon."],["04","Ndjekje","Udhëzimet pas trajtimit dhe ndjekja shpjegohen për vazhdimësinë e kujdesit pas kthimit." ]], note:"Informacioni në distancë nuk zëvendëson ekzaminimin klinik. Koha dhe rezultatet varen nga çdo pacient." },
  zh: { eyebrow:"更清晰的诊疗方式", title:"在谈价格之前，先了解您的情况。", intro:"国际患者的治疗应从了解您的情况、期望和出行安排开始，而不是从标准套餐开始。", cards:[["01","评估","现有的照片、影像和医疗信息可作为初步依据，最终诊断需由医生检查确认。"],["02","规划","治疗方案、阶段、材料和预约安排会在出行前向您说明。"],["03","治疗","如病例需要，中心可协调不同专业共同参与治疗。"],["04","随访","治疗后的注意事项和随访安排会提前说明，帮助您回国后继续获得支持。" ]], note:"远程信息不能替代临床检查。治疗时间和结果因患者而异。" },
  en: {
    eyebrow: "A CLEARER APPROACH",
    title: "Before we talk about price, let’s talk about your case.",
    intro: "International care should not start with a standard package. It should start by understanding your situation, expectations and travel constraints.",
    cards: [
      ["01", "Assess", "Photos, X-rays and available medical information provide a starting point. The final diagnosis is confirmed by the clinician after examination."],
      ["02", "Plan", "The treatment plan, stages, proposed materials and appointments are explained before you travel."],
      ["03", "Treat", "Different specialties can be coordinated within the centre when your case requires it."],
      ["04", "Follow up", "Aftercare instructions and follow-up arrangements are explained to support continuity after you return home."]
    ],
    note: "Remote information does not replace a clinical examination. Timing and outcomes depend on each patient."
  }
};

export default function ClinicalApproach() {
  const { lang } = useLanguage();
  const ref = useReveal();
  const c = copy[lang] || copy.en;
  return <section className="clinical-approach reveal" ref={ref} id="approach">
    <div className="wrap">
      <div className="clinical-head">
        <div><span className="eyebrow">{c.eyebrow}</span><h2>{c.title}</h2></div>
        <p>{c.intro}</p>
      </div>
      <div className="clinical-grid">
        {c.cards.map(([n,t,d]) => <article key={n} className="clinical-card"><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
      </div>
      <p className="clinical-note">{c.note}</p>
    </div>
  </section>;
}
