// Central translation dictionary — single source of truth for the whole app.
// The frontend fetches this via GET /api/content?lang=fr|en|it

export const i18n = {
  fr: {
    nav: { tourism: "Tourisme dentaire", treatments: "Traitements", team: "Toute l’équipe", journey: "Votre séjour", faq: "FAQ", book: "Devis gratuit" },
    ui: { about: 'À propos', beforeAfter: 'Avant / après', guides: 'Guides' },
    hero: {
      title: "Un plan de traitement clair. Une équipe dédiée. Votre sourire à Tirana.",
      lede: "Virtus Dental Center accompagne les patients internationaux pour l’implantologie, la réhabilitation complète et l’esthétique du sourire. Chaque dossier commence par une évaluation clinique et un plan de traitement personnalisé, avec un accompagnement avant, pendant et après le séjour.",
      cta1: "Demander un devis gratuit",
      cta2: "Voir les traitements",
      trust1: "Accompagnement des patients internationaux",
      trust2: "Équipe multilingue",
      trust3: "Clinique à Tirana",
      statLabel: "",
      li1: "Évaluation initiale à partir des informations disponibles",
      li2: "Aide à l’organisation pratique du séjour",
      li3: "Suivi après le traitement selon le protocole convenu"
    },
    why: {
      title: "Pourquoi les patients internationaux choisissent Virtus",
      intro: "Le choix d’une clinique à l’étranger doit reposer sur l’expertise, la planification, la transparence et le suivi. Virtus présente son parcours autour de ces quatre éléments, avec une équipe pluridisciplinaire à Tirana.",
      points: [
        { title: "Une approche centrée sur le patient", desc: "Le prix est présenté après évaluation, avec un devis adapté au cas réel plutôt qu’une promesse tarifaire générique." },
        { title: "Un parcours pensé pour l’international", desc: "L’équipe aide à coordonner les étapes pratiques du séjour et reste disponible pour les patients venant de l’étranger." },
        { title: "Une prise en charge pluridisciplinaire", desc: "Le centre réunit plusieurs spécialités afin que le plan de traitement puisse être discuté selon les besoins cliniques du patient." },
        { title: "Du premier contact au suivi", desc: "Consultation, planification, traitement puis suivi : les étapes sont expliquées avant le départ et adaptées au calendrier du patient." }
      ],
      table: {
        headers: ["Étape", "Ce que vous recevez"],
        rows: [
          ["Évaluation", "Analyse des informations et examens disponibles"],
          ["Planification", "Proposition de traitement à confirmer après examen clinique"],
          ["Devis", "Estimation adaptée au plan retenu"],
          ["Séjour", "Calendrier et informations pratiques expliqués avant le voyage"],
          ["Suivi", "Consignes et suivi selon le protocole de soins"]
        ],
        note: "Les tarifs et délais sont déterminés au cas par cas après évaluation clinique. Aucun montant affiché ne constitue une promesse de prix."
      }
    },
    treatments: {
      title: "Des traitements pensés autour de votre diagnostic",
      intro: "Du remplacement d’une dent à la réhabilitation complète, chaque traitement est défini après examen et discussion du dossier. Le protocole, les matériaux, le calendrier et le coût sont précisés avant le début des soins.",
      items: [
        ["Implants dentaires", "Remplacement de racine dentaire par vis en titane, base de toute réhabilitation durable."],
        ["All-on-4 / All-on-6 / All-on-8", "Réhabilitation complète d'une arcade sur 4, 6 ou 8 implants, en une seule intervention."],
        ["Facettes dentaires", "Fines coques en céramique posées sur la face visible des dents pour un sourire harmonieux."],
        ["Couronnes & bridges", "Restauration de dents abîmées ou remplacement de dents manquantes sans implant."],
        ["Blanchiment des dents", "Éclaircissement professionnel en cabinet, résultat visible dès la première séance."],
        ["Orthodontie & Invisalign", "Alignement dentaire par gouttières transparentes ou appareil traditionnel."],
        ["Chirurgie buccale", "Extractions complexes, greffes osseuses, lifting de sinus et frénectomie."],
        ["Gestion de l'apnée du sommeil", "Approche pluridisciplinaire pour les troubles respiratoires liés à l'occlusion."],
        ["Bilan & suivi à distance", "Devis sur photos, radios envoyées par email, suivi post-opératoire en visio."]
      ]
    },
    doctor: {
      name: "Dr Arnold Mboqe",
      role: "Fondateur & directeur technique — chirurgien buccal, implantologue, parodontiste, prosthodontiste, orthodontiste",
      paragraphs: [
        "Diplômé en sciences dentaires en 2014, le Dr Mboqe obtient la même année son autorisation d'exercer en Italie et dans l'Union européenne, délivrée par l'université de Rome « Tor Vergata ». Il complète ensuite un master en orthodontie ainsi qu'une spécialisation de trois ans en chirurgie buccale à l'université Aldent de Tirana.",
        "Après plusieurs années d'exercice en Belgique, où il obtient également son autorisation d'exercer, il fonde Virtus Dental Center en 2024 pour offrir aux patients internationaux une dentisterie de niveau européen dans un cadre plus accessible."
      ],
      credentials: [
        "Master en sciences dentaires — Université « Zoja e Këshillit të Mirë »",
        "Autorisation d'exercer en Italie, dans l'UE et en Belgique",
        "Spécialisation de 3 ans en chirurgie buccale — Université Aldent",
        "Formations continues en implantologie, parodontologie et esthétique faciale"
      ],
      languages: ["English", "Italiano", "Français", "Español", "Shqip"]
    },
    team: {
      title: "Notre équipe",
      intro: "Notre équipe pluridisciplinaire réunit des praticiens et soignants aux compétences complémentaires pour vous accompagner à chaque étape."
    },
    gallery: {
      title: "Avant / après",
      intro: "Des transformations réelles réalisées à la clinique — cliquez sur une photo pour l'agrandir."
    },
    videoTestimonials: {
      title: "Ils témoignent en vidéo",
      intro: "Des patients venus d'Italie, de Belgique et d'ailleurs racontent leur expérience."
    },
    packages: {
      title: "Nos forfaits",
      intro: "Trois formules pensées pour les patients internationaux, du soin ponctuel au séjour complet.",
      items: [
        { title: "Forfait All-on-4", features: ["4 implants dentaires haut de gamme", "Prothèse sur mesure à l'aspect naturel", "Dents provisoires le jour même", "2 scanners CBCT", "Suivi post-opératoire inclus"] },
        { title: "Forfait All-on-6", features: ["6 implants dentaires haut de gamme", "Prothèse sur mesure à l'aspect naturel", "Consultation et planification complètes", "Technologie de précision avancée", "Suivi post-opératoire inclus"] },
        { title: "Forfait tourisme dentaire", features: ["Devis personnalisé après consultation gratuite", "Prothèse adaptée à vos besoins", "Planification globale du séjour", "Suivi post-opératoire inclus", "Accompagnement voyage & hôtel"] }
      ]
    },

    journey: {
      title: "Votre parcours patient, étape par étape",
      intro: "Pour un patient international, la qualité du traitement compte autant que l’organisation. Voici comment nous structurons le parcours, de la première analyse au suivi après le retour.",
      steps: [
        { title: "Consultation & devis", desc: "Envoyez vos photos ou radios récentes ; l’équipe vous indique les prochaines étapes après étude du dossier." },
        { title: "Organisation du voyage", desc: "Nous coordonnons vos dates, votre hôtel partenaire et votre transfert depuis l'aéroport de Tirana." },
        { title: "Traitement à la clinique", desc: "Prise en charge en français, anglais ou italien, avec un planning resserré pour limiter la durée de votre séjour." },
        { title: "Retour & suivi", desc: "Suivi à distance selon le protocole convenu et les conditions communiquées avant le traitement." }
      ]
    },
    testimonials: {
      tag: "Avis publiés par des patients sur Virtus Dental Center",
      title: "Ce que disent nos patients",
      items: [
        { quote: "« J'ai eu une excellente expérience dans cette clinique dentaire de Tirana. L'établissement était moderne, propre et le personnel très professionnel. »", name: "Mimoza Tego · 21 mars 2025", flag: "★★★★★" },
        { quote: "« La clinique était très agréable, moderne et très propre. Les médecins sont très sympathiques, communicatifs et attentifs. »", name: "Mehmet Yıldız · 26 janvier 2025", flag: "★★★★★" },
        { quote: "« Les docteurs Arnold et Nela ont été extraordinaires. Ils m'ont mise à l'aise et j'ai trouvé le plan de traitement clair. »", name: "Marco Bellini · 12 février 2025", flag: "★★★★★" }
      ]
    },
    faq: {
      title: "Questions fréquentes",
      intro: "D'autres questions ? Notre assistant en bas à droite répond instantanément, ou écrivez-nous directement.",
      items: [
        ["Le cabinet est-il certifié et sûr pour un patient étranger ?", "Oui : le Dr Mboqe est habilité à exercer en Italie, dans l'UE et en Belgique, et la clinique applique les protocoles de stérilisation et les normes de matériaux en vigueur en Europe."],
        ["Combien de temps dois-je rester à Tirana ?", "Cela dépend du traitement : de 3-4 jours pour un blanchiment ou des facettes, à 5-7 jours pour un All-on-4, parfois réparti en deux séjours."],
        ["Que se passe-t-il si j'ai un problème après être rentré chez moi ?", "Les éventuelles conditions de garantie sont communiquées avant le traitement, avec un suivi à distance par photo ou visioconférence, et une coordination avec votre dentiste local si nécessaire."],
        ["L'équipe parle-t-elle ma langue ?", "L'équipe s'exprime en français, anglais, italien, espagnol et albanais."],
        ["Le devis inclut-il le voyage et l'hôtel ?", "Le devis dentaire est distinct des frais de voyage, mais nous vous aidons à organiser transfert aéroport et hôtel partenaire à tarif préférentiel."],
        ["Quels moyens de paiement acceptez-vous ?", "Carte bancaire, virement international et espèces sont acceptés ; les modalités précises vous sont communiquées avec votre devis."]
      ]
    },
    contact: {
      title: "Commencez par une évaluation de votre situation",
      intro: "Envoyez votre demande et, si vous en disposez, vos radios ou photos récentes. L’équipe pourra ensuite vous indiquer les prochaines étapes et préparer une proposition adaptée.",
      phoneLabel: "Téléphone / WhatsApp",
      emailLabel: "Email",
      addrLabel: "Adresse",
      addr: "Rruga Teodor Keko, Pll 29, 1027 Tirana, Albanie",
      mapLink: "Voir sur la carte →",
      hoursLabel: "Horaires",
      hours: "Lun–Sam · 9h–19h (heure de Tirana)"
    },
    form: {
      name: "Nom complet", country: "Pays", email: "Email", phone: "Téléphone",
      treatment: "Traitement qui vous intéresse",
      options: ["Je ne sais pas encore", "Implants dentaires", "All-on-4 / All-on-6", "Facettes / esthétique", "Orthodontie / Invisalign", "Autre"],
      message: "Message (facultatif)", submit: "Envoyer ma demande",
      success: "Merci ! Votre demande a bien été enregistrée — notre équipe reviendra vers vous après étude de la demande.",
      error: "Une erreur est survenue. Merci de réessayer ou de nous appeler directement.",
      sending: "Envoi en cours…"
    },
    footer: { tagline: "Implants, esthétique, chirurgie buccale et orthodontie à Tirana — pour un sourire sain, à l'échelle internationale." },
    app: { home: "Accueil", treatments: "Soins", chat: "Assistant", contact: "Contact" },
    chat: {
      title: "Assistant Virtus",
      subtitle: "Répond instantanément · relais humain si besoin",
      placeholder: "Écrivez votre question…",
      greeting: "Bonjour 👋 Je suis le chatbot de Virtus Dental Center. Comment puis-je vous aider ?",
      quickReplies: [
        { intent: "price", label: "💶 Tarifs" },
        { intent: "hygiene", label: "🦷 Hygiène" },
        { intent: "pain", label: "😣 Douleur / urgence" },
        { intent: "aftercare", label: "🩹 Après un soin" },
        { intent: "implants", label: "🦷 Implants" },
        { intent: "travel", label: "✈️ Voyage" },
        { intent: "human", label: "🗣️ Humain" },
      ],
      humanHandoff: "Un membre de l'équipe va prendre le relais. Vous pouvez nous joindre directement :",
      fallback: "Je n'ai pas de réponse toute faite pour ça — je transmets à l'équipe. Vous pouvez aussi nous écrire directement :"
    }
  },

  en: {
    nav: { tourism: "Dental tourism", treatments: "Treatments", team: "Our team", journey: "Your trip", faq: "FAQ", book: "Free quote" },
    ui: { about: 'About', beforeAfter: 'Before / after', guides: 'Guides' },
    hero: {
      title: "Your new smile starts in Tirana.",
      lede: "Virtus Dental Center welcomes patients from across Europe every year for implants, veneers and full smile makeovers — with a surgeon trained in Italy and Belgium.",
      cta1: "Get a free quote",
      cta2: "See our treatments",
      trust1: "Licensed to practice in Italy and Belgium",
      trust2: "Team speaks FR · EN · IT · ES",
      trust3: "International access via Tirana",
      statLabel: "average savings compared to Western Europe, at equal material quality",
      li1: "Initial review after the available photos or X-rays have been assessed",
      li2: "Airport transfer and partner hotel included",
      li3: "Written warranty and remote follow-up after you go home"
    },
    why: {
      title: "Why get dental care in Tirana?",
      intro: "Albania combines European clinical standards with a much lower cost of living — without compromising on implant brands, sterilisation, or follow-up care.",
      points: [
        { title: "Personalized planning", desc: "The treatment plan and estimate are defined according to the clinical situation." },
        { title: "International access", desc: "Travel planning is explained separately from the clinical treatment plan." },
        { title: "A surgeon trained in Italy", desc: "Dr. Arnold Mboqe is qualified and licensed to practice in Italy and Belgium, with a specialisation in oral surgery." },
        { title: "A stay handled end-to-end", desc: "Airport transfer, partner hotel and interpreter: you focus on your smile, we handle the rest." }
      ],
      table: {
        headers: ["Étape", "Ce que vous recevez"],
        rows: [
          ["Évaluation", "Analyse des informations et examens disponibles"],
          ["Planification", "Proposition de traitement à confirmer après examen clinique"],
          ["Devis", "Estimation adaptée au plan retenu"],
          ["Séjour", "Calendrier et informations pratiques expliqués avant le voyage"],
          ["Suivi", "Consignes et suivi selon le protocole de soins"]
        ],
        note: "Les tarifs et délais sont déterminés au cas par cas après évaluation clinique. Aucun montant affiché ne constitue une promesse de prix."
      }
    },
    treatments: {
      title: "Our treatments",
      intro: "From single implants to full mouth rehabilitation, a multidisciplinary team led by Dr. Mboqe.",
      items: [
        ["Dental implants", "Titanium screw replacing the tooth root — the foundation of any lasting restoration."],
        ["All-on-4 / All-on-6 / All-on-8", "Full arch rehabilitation on 4, 6 or 8 implants, in a single procedure."],
        ["Veneers", "Thin ceramic shells bonded to the visible surface of teeth for a harmonious smile."],
        ["Crowns & bridges", "Restoring damaged teeth or replacing missing teeth without an implant."],
        ["Teeth whitening", "Professional in-office whitening, with visible results from the first session."],
        ["Orthodontics & Invisalign", "Teeth alignment with clear aligners or traditional braces."],
        ["Oral surgery", "Complex extractions, bone grafts, sinus lifts and frenectomy."],
        ["Sleep apnoea management", "A multidisciplinary approach to breathing issues linked to your bite."],
        ["Assessment & remote follow-up", "Quotes from photos or X-rays sent by email, post-op follow-up by video call."]
      ]
    },
    doctor: {
      name: "Dr. Arnold Mboqe",
      role: "Founder & technical director — oral surgeon, implantologist, periodontist, prosthodontist, orthodontist",
      paragraphs: [
        "Graduating in dental sciences in 2014, Dr. Mboqe obtained his licence to practise in Italy and the EU that same year, issued by the University of Rome \"Tor Vergata\". He went on to complete a master's degree in orthodontics and a three-year specialisation in oral surgery at Aldent University in Tirana.",
        "After several years practising in Belgium, where he also obtained his licence, he founded Virtus Dental Center in 2024 to offer international patients European-standard dentistry in a more accessible setting."
      ],
      credentials: [
        "Master's degree in dental sciences — \"Zoja e Këshillit të Mirë\" University",
        "Licensed to practice in Italy, the EU and Belgium",
        "3-year specialisation in oral surgery — Aldent University",
        "Ongoing training in implantology, periodontology and facial aesthetics"
      ],
      languages: ["English", "Italiano", "Français", "Español", "Shqip"]
    },
    team: {
      title: "Our team",
      intro: "Our multidisciplinary team brings together complementary clinical and care expertise to support you at every step."
    },
    gallery: {
      title: "Before / after",
      intro: "Real transformations carried out at the clinic — click a photo to enlarge it."
    },
    videoTestimonials: {
      title: "Video testimonials",
      intro: "Patients from Italy, Belgium and beyond share their experience."
    },
    packages: {
      title: "Our packages",
      intro: "Three plans designed for international patients, from a single treatment to a full stay.",
      items: [
        { title: "All-on-4 Package", features: ["4 premium dental implants", "Custom prosthesis with a natural look", "Temporary teeth the same day", "2 CBCT scans", "Post-op follow-up included"] },
        { title: "All-on-6 Package", features: ["6 premium dental implants", "Custom prosthesis with a natural look", "Full consultation and planning", "Advanced precision technology", "Post-op follow-up included"] },
        { title: "Dental Tourism Package", features: ["Personalised quote after a free consultation", "Prosthesis tailored to your needs", "Full trip planning", "Post-op follow-up included", "Travel & hotel support"] }
      ]
    },

    journey: {
      title: "Your trip, step by step",
      intro: "A journey designed for patients travelling from abroad, from your first message to follow-up after you return home.",
      steps: [
        { title: "Consultation & quote", desc: "Send us your recent photos or X-rays; the team will explain the next steps after reviewing the case." },
        { title: "Trip planning", desc: "We coordinate your dates, partner hotel and transfer from Tirana airport." },
        { title: "Treatment at the clinic", desc: "Care in French, English or Italian, with a tight schedule to keep your stay as short as possible." },
        { title: "Return & follow-up", desc: "Written warranty on completed work and remote follow-up by photo or video call." }
      ]
    },
    testimonials: {
      tag: "Reviews published by patients on Virtus Dental Center",
      title: "What our patients say",
      items: [
        { quote: "“The facility is modern, clean and equipped with cutting-edge equipment. The staff is highly professional, friendly and always available to answer questions.”", name: "Mimoza Tego · 21 March 2025", flag: "★★★★★" },
        { quote: "“The doctors were very friendly, communicative and careful. They explained everything in detail and we went through the treatment step by step.”", name: "Mehmet Yıldız · 26 January 2025", flag: "★★★★★" },
        { quote: "“Dr. Arnold and Dr. Nela were amazing. They made me feel comfortable and I believe the treatment plan is actionable and has my best interest in mind.”", name: "Marco Bellini · 12 February 2025", flag: "★★★★★" }
      ]
    },
    faq: {
      title: "Frequently asked questions",
      intro: "More questions? Our assistant in the bottom right answers instantly, or write to us directly.",
      items: [
        ["Is the clinic certified and safe for international patients?", "Yes: Dr. Mboqe is licensed to practice in Italy, the EU and Belgium, and the clinic follows European sterilisation protocols and material standards."],
        ["How long do I need to stay in Tirana?", "It depends on the treatment: 3–4 days for whitening or veneers, up to 5–7 days for All-on-4, sometimes split into two visits."],
        ["What happens if something goes wrong after I go home?", "Every treatment comes with a written warranty, remote follow-up by photo or video call, and coordination with your local dentist if needed."],
        ["Does the team speak my language?", "Our team speaks French, English, Italian, Spanish and Albanian."],
        ["Does the quote include travel and hotel?", "The dental quote is separate from travel costs, but we help arrange your airport transfer and a partner hotel at preferential rates."],
        ["What payment methods do you accept?", "Card, international bank transfer and cash are accepted; exact terms are shared with your quote."]
      ]
    },
    contact: {
      title: "Request your free quote",
      intro: "Reply within  with an estimated treatment plan, no obligation.",
      phoneLabel: "Phone / WhatsApp",
      emailLabel: "Email",
      addrLabel: "Address",
      addr: "Tirana, Albania",
      mapLink: "View on map →",
      hoursLabel: "Opening hours",
      hours: "Mon–Sat · 9am–7pm (Tirana time)"
    },
    form: {
      name: "Full name", country: "Country", email: "Email", phone: "Phone",
      treatment: "Treatment you're interested in",
      options: ["Not sure yet", "Dental implants", "All-on-4 / All-on-6", "Veneers / aesthetics", "Orthodontics / Invisalign", "Other"],
      message: "Message (optional)", submit: "Send my request",
      success: "Thank you! Your request has been received — the team will get back to you after reviewing the request.",
      error: "Something went wrong. Please try again or call us directly.",
      sending: "Sending…"
    },
    footer: { tagline: "Implants, aesthetics, oral surgery and orthodontics in Tirana — for a healthy smile, internationally." },
    app: { home: "Home", treatments: "Care", chat: "Assistant", contact: "Contact" },
    chat: {
      title: "Virtus Assistant",
      subtitle: "Instant answers · human hand-off available",
      placeholder: "Type your question…",
      greeting: "Hello 👋 I am the Virtus Dental Center chatbot. How can I help you?",
      quickReplies: [
        { intent: "price", label: "💶 Pricing" },
        { intent: "hygiene", label: "🦷 Oral care" },
        { intent: "pain", label: "😣 Pain / urgent" },
        { intent: "aftercare", label: "🩹 After treatment" },
        { intent: "implants", label: "🦷 Implants" },
        { intent: "travel", label: "✈️ Travel" },
        { intent: "human", label: "🗣️ Human" },
      ],
      humanHandoff: "A team member will take over from here. You can reach us directly:",
      fallback: "I don't have a ready answer for that — I'll pass it to the team. You can also write to us directly:"
    }
  },

  it: {
    nav: { tourism: "Turismo dentale", treatments: "Trattamenti", team: "Il nostro team", journey: "Il tuo soggiorno", faq: "FAQ", book: "Preventivo gratuito" },
    ui: { about: 'Chi siamo', beforeAfter: 'Prima / dopo', guides: 'Guide' },
    hero: {
      title: "Il tuo nuovo sorriso nasce a Tirana.",
      lede: "Virtus Dental Center accoglie ogni anno pazienti da tutta Europa per impianti, faccette e sorrisi completi — con un chirurgo formato in Italia e Belgio.",
      cta1: "Richiedi un preventivo gratuito",
      cta2: "Scopri i trattamenti",
      trust1: "Abilitato all'esercizio in Italia e Belgio",
      trust2: "Team FR · EN · IT · ES",
      trust3: "Accesso internazionale via Tirana",
      statLabel: "Un accompagnamento pensé pour comparer les options selon votre dossier",
      li1: "Preventivo dettagliato entro , da foto o radiografie",
      li2: "Transfer aeroportuale e hotel partner inclusi",
      li3: "Garanzia scritta e follow-up a distanza dopo il rientro"
    },
    why: {
      title: "Perché curare i denti a Tirana?",
      intro: "L'Albania unisce standard clinici europei a un costo della vita molto più basso — senza compromessi su marche di impianti, sterilizzazione o follow-up.",
      points: [
        { title: "Planification personnalisée", desc: "Le protocole et le devis sont établis selon les besoins cliniques du patient." },
        { title: "Accesso internazionale", desc: "L'organizzazione del viaggio è distinta dal piano clinico." },
        { title: "Un chirurgo formato in Italia", desc: "Il Dr. Arnold Mboqe è abilitato all'esercizio in Italia e Belgio, con una specializzazione in chirurgia orale." },
        { title: "Un soggiorno chiavi in mano", desc: "Transfer aeroportuale, hotel partner e interprete: tu pensi al sorriso, noi al resto." }
      ],
      table: {
        headers: ["Étape", "Ce que vous recevez"],
        rows: [
          ["Évaluation", "Analyse des informations et examens disponibles"],
          ["Planification", "Proposition de traitement à confirmer après examen clinique"],
          ["Devis", "Estimation adaptée au plan retenu"],
          ["Séjour", "Calendrier et informations pratiques expliqués avant le voyage"],
          ["Suivi", "Consignes et suivi selon le protocole de soins"]
        ],
        note: "Les tarifs et délais sont déterminés au cas par cas après évaluation clinique. Aucun montant affiché ne constitue une promesse de prix."
      }
    },
    treatments: {
      title: "I nostri trattamenti",
      intro: "Dall'impianto singolo alla riabilitazione completa della bocca, un team multidisciplinare guidato dal Dr. Mboqe.",
      items: [
        ["Impianti dentali", "Vite in titanio che sostituisce la radice del dente — la base di ogni riabilitazione duratura."],
        ["All-on-4 / All-on-6 / All-on-8", "Riabilitazione completa di un'arcata su 4, 6 o 8 impianti, in un unico intervento."],
        ["Faccette dentali", "Sottili lamine in ceramica applicate sulla superficie visibile dei denti per un sorriso armonioso."],
        ["Corone & ponti", "Restauro di denti danneggiati o sostituzione di denti mancanti senza impianto."],
        ["Sbiancamento dentale", "Sbiancamento professionale in studio, con risultati visibili dalla prima seduta."],
        ["Ortodonzia & Invisalign", "Allineamento dentale con mascherine trasparenti o apparecchio tradizionale."],
        ["Chirurgia orale", "Estrazioni complesse, innesti ossei, rialzo del seno mascellare e frenulectomia."],
        ["Gestione dell'apnea notturna", "Un approccio multidisciplinare ai disturbi respiratori legati all'occlusione."],
        ["Valutazione & follow-up a distanza", "Preventivi da foto o radiografie inviate via email, follow-up post-operatorio in videochiamata."]
      ]
    },
    doctor: {
      name: "Dr. Arnold Mboqe",
      role: "Fondatore & direttore tecnico — chirurgo orale, implantologo, parodontologo, protesista, ortodontista",
      paragraphs: [
        "Laureato in scienze odontoiatriche nel 2014, il Dr. Mboqe ottiene lo stesso anno l'abilitazione all'esercizio in Italia e nell'Unione Europea, rilasciata dall'Università di Roma \"Tor Vergata\". Completa poi un master in ortodonzia e una specializzazione triennale in chirurgia orale presso l'Università Aldent di Tirana.",
        "Dopo diversi anni di attività in Belgio, dove ottiene anche l'abilitazione, fonda Virtus Dental Center nel 2024 per offrire ai pazienti internazionali un'odontoiatria di livello europeo in un contesto più accessibile."
      ],
      credentials: [
        "Master in scienze odontoiatriche — Università \"Zoja e Këshillit të Mirë\"",
        "Abilitazione all'esercizio in Italia, UE e Belgio",
        "Specializzazione triennale in chirurgia orale — Università Aldent",
        "Formazione continua in implantologia, parodontologia ed estetica facciale"
      ],
      languages: ["English", "Italiano", "Français", "Español", "Shqip"]
    },
    team: {
      title: "Il nostro team",
      intro: "Il nostro team multidisciplinare riunisce competenze cliniche e di assistenza complementari per accompagnarvi in ogni fase."
    },
    gallery: {
      title: "Prima / dopo",
      intro: "Trasformazioni reali realizzate in clinica — clicca su una foto per ingrandirla."
    },
    videoTestimonials: {
      title: "Testimonianze video",
      intro: "Pazienti da Italia, Belgio e altrove raccontano la loro esperienza."
    },
    packages: {
      title: "I nostri pacchetti",
      intro: "Tre formule pensate per i pazienti internazionali, dal trattamento singolo al soggiorno completo.",
      items: [
        { title: "Pacchetto All-on-4", features: ["4 impianti dentali di alta qualità", "Protesi su misura dall'aspetto naturale", "Denti provvisori in giornata", "2 scansioni CBCT", "Follow-up post-operatorio incluso"] },
        { title: "Pacchetto All-on-6", features: ["6 impianti dentali di alta qualità", "Protesi su misura dall'aspetto naturale", "Consulenza e pianificazione complete", "Tecnologia di precisione avanzata", "Follow-up post-operatorio incluso"] },
        { title: "Pacchetto turismo dentale", features: ["Preventivo personalizzato dopo consulto gratuito", "Protesi su misura per le tue esigenze", "Pianificazione completa del soggiorno", "Follow-up post-operatorio incluso", "Assistenza viaggio e hotel"] }
      ]
    },

    journey: {
      title: "Il tuo soggiorno, passo dopo passo",
      intro: "Un percorso pensato per i pazienti che arrivano dall'estero, dal primo messaggio al follow-up dopo il rientro.",
      steps: [
        { title: "Consulto & preventivo", desc: "Invia le tue foto o radiografie recenti; riceverai un piano di trattamento e un preventivo dettagliato entro ." },
        { title: "Organizzazione del viaggio", desc: "Coordiniamo le date, l'hotel partner e il transfer dall'aeroporto di Tirana." },
        { title: "Trattamento in clinica", desc: "Assistenza in francese, inglese o italiano, con un programma serrato per limitare la durata del soggiorno." },
        { title: "Rientro & follow-up", desc: "Garanzia scritta sui lavori eseguiti e follow-up a distanza tramite foto o videochiamata." }
      ]
    },
    testimonials: {
      tag: "Recensioni pubblicate dai pazienti sul Virtus Dental Center",
      title: "Cosa dicono i nostri pazienti",
      items: [
        { quote: "«Tutto era organizzato in anticipo, ho dovuto solo prendere l'aereo. Il risultato ha superato le mie aspettative.»", name: "Claire, Francia", flag: "🇫🇷" },
        { quote: "«Il team parla un inglese perfetto e ho risparmiato più della metà rispetto a casa.»", name: "James, Regno Unito", flag: "🇬🇧" },
        { quote: "«Il Dr. Mboqe spiega tutto chiaramente in italiano, ho avuto un vero follow-up dopo il rientro a Milano.»", name: "Marco, Italia", flag: "🇮🇹" }
      ]
    },
    faq: {
      title: "Domande frequenti",
      intro: "Altre domande? Il nostro assistente in basso a destra risponde subito, oppure scrivici direttamente.",
      items: [
        ["La clinica è certificata e sicura per i pazienti internazionali?", "Sì: il Dr. Mboqe è abilitato all'esercizio in Italia, UE e Belgio, e la clinica segue i protocolli di sterilizzazione e gli standard sui materiali europei."],
        ["Quanto tempo devo restare a Tirana?", "Dipende dal trattamento: 3-4 giorni per sbiancamento o faccette, fino a 5-7 giorni per un All-on-4, a volte diviso in due soggiorni."],
        ["Cosa succede se ho un problema dopo essere tornato a casa?", "Ogni trattamento è coperto da garanzia scritta, con follow-up a distanza tramite foto o videochiamata, e coordinamento con il tuo dentista locale se necessario."],
        ["Il team parla la mia lingua?", "Il nostro team parla francese, inglese, italiano, spagnolo e albanese."],
        ["Il preventivo include viaggio e hotel?", "Il preventivo dentale è separato dai costi di viaggio, ma ti aiutiamo a organizzare il transfer aeroportuale e un hotel partner a tariffe agevolate."],
        ["Quali metodi di pagamento accettate?", "Carta, bonifico internazionale e contanti sono accettati; le modalità esatte ti vengono comunicate con il preventivo."]
      ]
    },
    contact: {
      title: "Richiedi il tuo preventivo gratuito",
      intro: "Risposta dopo la valutazione delle informazioni disponibili, senza impegno.",
      phoneLabel: "Telefono / WhatsApp",
      emailLabel: "Email",
      addrLabel: "Indirizzo",
      addr: "Tirana, Albania",
      mapLink: "Vedi sulla mappa →",
      hoursLabel: "Orari",
      hours: "Lun–Sab · 9:00–19:00 (ora di Tirana)"
    },
    form: {
      name: "Nome completo", country: "Paese", email: "Email", phone: "Telefono",
      treatment: "Trattamento di interesse",
      options: ["Non lo so ancora", "Impianti dentali", "All-on-4 / All-on-6", "Faccette / estetica", "Ortodonzia / Invisalign", "Altro"],
      message: "Messaggio (facoltativo)", submit: "Invia la mia richiesta",
      success: "Grazie! La tua richiesta è stata registrata — il nostro team ti risponderà entro .",
      error: "Si è verificato un errore. Riprova o chiamaci direttamente.",
      sending: "Invio in corso…"
    },
    footer: { tagline: "Impianti, estetica, chirurgia orale e ortodonzia a Tirana — per un sorriso sano, su scala internazionale." },
    app: { home: "Home", treatments: "Cure", chat: "Assistente", contact: "Contatti" },
    chat: {
      title: "Assistente Virtus",
      subtitle: "Risposte immediate · passaggio a un operatore se serve",
      placeholder: "Scrivi la tua domanda…",
      greeting: "Ciao 👋 Sono il chatbot di Virtus Dental Center. Come posso aiutarti?",
      quickReplies: [
        { intent: "price", label: "💶 Prezzi" },
        { intent: "hygiene", label: "🦷 Igiene" },
        { intent: "pain", label: "😣 Dolore / urgenza" },
        { intent: "aftercare", label: "🩹 Dopo le cure" },
        { intent: "implants", label: "🦷 Impianti" },
        { intent: "travel", label: "✈️ Viaggio" },
        { intent: "human", label: "🗣️ Operatore" },
      ],
      humanHandoff: "Un membro del team prenderà in carico la richiesta. Puoi contattarci direttamente:",
      fallback: "Non ho una risposta pronta per questo — la giro al team. Puoi anche scriverci direttamente:"
    }
  },

  es: {
    nav: { tourism: "Turismo dental", treatments: "Tratamientos", team: "Nuestro equipo", journey: "Tu viaje", faq: "Preguntas frecuentes", book: "Presupuesto gratis" },
    ui: { about: 'Sobre nosotros', beforeAfter: 'Antes / después', guides: 'Guías' },
    hero: {
      title: "Tu nueva sonrisa empieza en Tirana.",
      lede: "Virtus Dental Center recibe cada año a pacientes de toda Europa para implantes, carillas y sonrisas completas — con un cirujano formado en Italia y Bélgica.",
      cta1: "Pedir un presupuesto gratis",
      cta2: "Ver los tratamientos",
      trust1: "Autorizado a ejercer en Italia y Bélgica",
      trust2: "Equipo FR · EN · IT · ES",
      trust3: "Acceso internacional a través de Tirana",
      statLabel: "Un parcours conçu pour comparer les options selon votre dossier",
      li1: "Presupuesto detallado en , a partir de fotos o radiografías",
      li2: "Traslado desde el aeropuerto y hotel colaborador incluidos",
      li3: "Garantía por escrito y seguimiento a distancia tras tu regreso"
    },
    why: {
      title: "¿Por qué cuidar tus dientes en Tirana?",
      intro: "Albania combina estándares clínicos europeos con un coste de vida mucho más bajo — sin renunciar a las marcas de implantes, la esterilización ni el seguimiento.",
      points: [
        { title: "Planificación personalizada", desc: "El protocolo y el presupuesto se definen según las necesidades clínicas del paciente." },
        { title: "Acceso internacional", desc: "La organización del viaje se explica por separado del plan clínico." },
        { title: "Un cirujano formado en Italia", desc: "El Dr. Arnold Mboqe está cualificado y autorizado a ejercer en Italia y Bélgica, con especialización en cirugía oral." },
        { title: "Una estancia llave en mano", desc: "Traslado desde el aeropuerto, hotel colaborador e intérprete: tú te centras en tu sonrisa, nosotros nos ocupamos del resto." }
      ],
      table: {
        headers: ["Étape", "Ce que vous recevez"],
        rows: [
          ["Évaluation", "Analyse des informations et examens disponibles"],
          ["Planification", "Proposition de traitement à confirmer après examen clinique"],
          ["Devis", "Estimation adaptée au plan retenu"],
          ["Séjour", "Calendrier et informations pratiques expliqués avant le voyage"],
          ["Suivi", "Consignes et suivi selon le protocole de soins"]
        ],
        note: "Les tarifs et délais sont déterminés au cas par cas après évaluation clinique. Aucun montant affiché ne constitue une promesse de prix."
      }
    },
    treatments: {
      title: "Nuestros tratamientos",
      intro: "Desde el implante individual hasta la rehabilitación completa de la boca, un equipo multidisciplinar dirigido por el Dr. Mboqe.",
      items: [
        ["Implantes dentales", "Tornillo de titanio que sustituye la raíz del diente — la base de cualquier restauración duradera."],
        ["All-on-4 / All-on-6 / All-on-8", "Rehabilitación completa de una arcada sobre 4, 6 u 8 implantes, en una sola intervención."],
        ["Carillas dentales", "Finas láminas de cerámica adheridas a la cara visible de los dientes para una sonrisa armoniosa."],
        ["Coronas y puentes", "Restauración de dientes dañados o sustitución de dientes ausentes sin implante."],
        ["Blanqueamiento dental", "Blanqueamiento profesional en clínica, con resultados visibles desde la primera sesión."],
        ["Ortodoncia e Invisalign", "Alineación dental con alineadores transparentes o aparato tradicional."],
        ["Cirugía oral", "Extracciones complejas, injertos óseos, elevación de seno y frenectomía."],
        ["Manejo de la apnea del sueño", "Un enfoque multidisciplinar para los problemas respiratorios relacionados con la mordida."],
        ["Valoración y seguimiento a distancia", "Presupuestos a partir de fotos o radiografías enviadas por email, seguimiento postoperatorio por videollamada."]
      ]
    },
    doctor: {
      name: "Dr. Arnold Mboqe",
      role: "Fundador y director técnico — cirujano oral, implantólogo, periodoncista, protesista, ortodoncista",
      paragraphs: [
        "Licenciado en ciencias dentales en 2014, el Dr. Mboqe obtuvo ese mismo año su autorización para ejercer en Italia y en la Unión Europea, expedida por la Universidad de Roma \"Tor Vergata\". Después completó un máster en ortodoncia y una especialización de tres años en cirugía oral en la Universidad Aldent de Tirana.",
        "Tras varios años ejerciendo en Bélgica, donde también obtuvo su autorización, fundó Virtus Dental Center en 2024 para ofrecer a los pacientes internacionales una odontología de nivel europeo en un entorno más accesible."
      ],
      credentials: [
        "Máster en ciencias dentales — Universidad \"Zoja e Këshillit të Mirë\"",
        "Autorizado a ejercer en Italia, la UE y Bélgica",
        "Especialización de 3 años en cirugía oral — Universidad Aldent",
        "Formación continua en implantología, periodoncia y estética facial"
      ],
      languages: ["English", "Italiano", "Français", "Español", "Shqip"]
    },
    team: {
      title: "Nuestro equipo",
      intro: "Nuestro equipo multidisciplinar reúne competencias clínicas y de atención complementarias para acompañarte en cada etapa."
    },
    gallery: {
      title: "Antes / después",
      intro: "Transformaciones reales realizadas en la clínica — haz clic en una foto para ampliarla."
    },
    videoTestimonials: {
      title: "Testimonios en vídeo",
      intro: "Pacientes de Italia, Bélgica y otros países cuentan su experiencia."
    },
    packages: {
      title: "Nuestros paquetes",
      intro: "Tres opciones pensadas para pacientes internacionales, desde un tratamiento puntual hasta una estancia completa.",
      items: [
        { title: "Paquete All-on-4", features: ["4 implantes dentales de alta gama", "Prótesis a medida de aspecto natural", "Dientes provisionales el mismo día", "2 escáneres CBCT", "Seguimiento postoperatorio incluido"] },
        { title: "Paquete All-on-6", features: ["6 implantes dentales de alta gama", "Prótesis a medida de aspecto natural", "Consulta y planificación completas", "Tecnología de precisión avanzada", "Seguimiento postoperatorio incluido"] },
        { title: "Paquete turismo dental", features: ["Presupuesto personalizado tras consulta gratuita", "Prótesis adaptada a tus necesidades", "Planificación completa de la estancia", "Seguimiento postoperatorio incluido", "Apoyo con viaje y hotel"] }
      ]
    },

    journey: {
      title: "Tu viaje, paso a paso",
      intro: "Un recorrido pensado para pacientes que llegan desde el extranjero, desde el primer mensaje hasta el seguimiento tras tu regreso.",
      steps: [
        { title: "Consulta y presupuesto", desc: "Envíanos tus fotos o radiografías recientes; recibirás un plan de tratamiento y un presupuesto detallado en ." },
        { title: "Organización del viaje", desc: "Coordinamos tus fechas, el hotel colaborador y el traslado desde el aeropuerto de Tirana." },
        { title: "Tratamiento en la clínica", desc: "Atención en francés, inglés o italiano, con una agenda ajustada para limitar la duración de tu estancia." },
        { title: "Regreso y seguimiento", desc: "Garantía por escrito sobre los trabajos realizados y seguimiento a distancia por foto o videollamada." }
      ]
    },
    testimonials: {
      tag: "Opiniones publicadas por pacientes de Virtus Dental Center",
      title: "Lo que dicen nuestros pacientes",
      items: [
        { quote: "«Todo estaba organizado de antemano, solo tuve que coger el avión. El resultado superó lo que esperaba.»", name: "Claire, Francia", flag: "🇫🇷" },
        { quote: "«El equipo habla un inglés perfecto y ahorré más de la mitad de lo que habría pagado en mi país.»", name: "James, Reino Unido", flag: "🇬🇧" },
        { quote: "«El Dr. Mboqe lo explica todo claramente en italiano, tuve un seguimiento real tras volver a Milán.»", name: "Marco, Italia", flag: "🇮🇹" }
      ]
    },
    faq: {
      title: "Preguntas frecuentes",
      intro: "¿Más preguntas? Nuestro asistente abajo a la derecha responde al instante, o escríbenos directamente.",
      items: [
        ["¿La clínica está certificada y es segura para pacientes internacionales?", "Sí: el Dr. Mboqe está autorizado a ejercer en Italia, la UE y Bélgica, y la clínica sigue los protocolos de esterilización y los estándares de materiales europeos."],
        ["¿Cuánto tiempo debo quedarme en Tirana?", "Depende del tratamiento: 3-4 días para blanqueamiento o carillas, hasta 5-7 días para un All-on-4, a veces repartido en dos estancias."],
        ["¿Qué pasa si tengo un problema después de volver a casa?", "Todos los tratamientos cuentan con garantía por escrito, seguimiento a distancia por foto o videollamada, y coordinación con tu dentista local si es necesario."],
        ["¿El equipo habla mi idioma?", "Nuestro equipo habla francés, inglés, italiano, español y albanés."],
        ["¿El presupuesto incluye el viaje y el hotel?", "El presupuesto dental es independiente de los gastos de viaje, pero te ayudamos a organizar el traslado desde el aeropuerto y un hotel colaborador a tarifas preferentes."],
        ["¿Qué métodos de pago aceptan?", "Se aceptan tarjeta, transferencia internacional y efectivo; las condiciones exactas se comunican junto con el presupuesto."]
      ]
    },
    contact: {
      title: "Solicita tu presupuesto gratuito",
      intro: "Respuesta después de revisar la información disponible, sin compromiso.",
      phoneLabel: "Teléfono / WhatsApp",
      emailLabel: "Email",
      addrLabel: "Dirección",
      addr: "Tirana, Albania",
      mapLink: "Ver en el mapa →",
      hoursLabel: "Horario",
      hours: "Lun–Sáb · 9:00–19:00 (hora de Tirana)"
    },
    form: {
      name: "Nombre completo", country: "País", email: "Email", phone: "Teléfono",
      treatment: "Tratamiento de interés",
      options: ["Aún no lo sé", "Implantes dentales", "All-on-4 / All-on-6", "Carillas / estética", "Ortodoncia / Invisalign", "Otro"],
      message: "Mensaje (opcional)", submit: "Enviar mi solicitud",
      success: "¡Gracias! Tu solicitud ha sido registrada — nuestro equipo te responderá en .",
      error: "Ha ocurrido un error. Inténtalo de nuevo o llámanos directamente.",
      sending: "Enviando…"
    },
    footer: { tagline: "Implantes, estética, cirugía oral y ortodoncia en Tirana — por una sonrisa sana, a escala internacional." },
    app: { home: "Inicio", treatments: "Tratam.", chat: "Asistente", contact: "Contacto" },
    chat: {
      title: "Asistente Virtus",
      subtitle: "Respuestas al instante · transferencia a un humano si hace falta",
      placeholder: "Escribe tu pregunta…",
      greeting: "Hola 👋 Soy el chatbot de Virtus Dental Center. ¿Cómo puedo ayudarte?",
      quickReplies: [
        { intent: "price", label: "💶 Precios" },
        { intent: "hygiene", label: "🦷 Higiene" },
        { intent: "pain", label: "😣 Dolor / urgencia" },
        { intent: "aftercare", label: "🩹 Después del tratamiento" },
        { intent: "implants", label: "🦷 Implantes" },
        { intent: "travel", label: "✈️ Viaje" },
        { intent: "human", label: "🗣️ Humano" },
      ],
      humanHandoff: "Un miembro del equipo se hará cargo. Puedes contactarnos directamente:",
      fallback: "No tengo una respuesta preparada para eso — lo paso al equipo. También puedes escribirnos directamente:"
    }
  },

  de: {
    nav: { tourism: "Zahntourismus", treatments: "Behandlungen", team: "Unser Team", journey: "Ihre Reise", faq: "FAQ", book: "Kostenloses Angebot" },
    ui: { about: 'Über uns', beforeAfter: 'Vorher / nachher', guides: 'Ratgeber' },
    hero: {
      title: "Ihr neues Lächeln beginnt in Tirana.",
      lede: "Das Virtus Dental Center empfängt jedes Jahr Patienten aus ganz Europa für Implantate, Veneers und komplette Lächeln-Erneuerungen — mit einem in Italien und Belgien ausgebildeten Chirurgen.",
      cta1: "Kostenloses Angebot anfordern",
      cta2: "Behandlungen ansehen",
      trust1: "Zugelassen in Italien und Belgien",
      trust2: "Team spricht FR · EN · IT · ES",
      trust3: "Direktflüge aus Europa",
      statLabel: "durchschnittliche Ersparnis gegenüber Westeuropa, bei gleicher Materialqualität",
      li1: "Detailliertes Angebot innerhalb von , anhand von Fotos oder Röntgenbildern",
      li2: "Flughafentransfer und Partnerhotel inklusive",
      li3: "Schriftliche Garantie und Fernbetreuung nach Ihrer Rückkehr"
    },
    why: {
      title: "Warum Zahnbehandlung in Tirana?",
      intro: "Albanien verbindet europäische klinische Standards mit deutlich niedrigeren Lebenshaltungskosten — ohne Kompromisse bei Implantatmarken, Sterilisation oder Nachsorge.",
      points: [
        { title: "Individuelle Planung", desc: "Behandlungsplan und Angebot werden entsprechend der klinischen Situation erstellt." },
        { title: "Durchschnittlich 2 Flugstunden", desc: "Direktverbindungen von den meisten europäischen Großstädten nach Tirana." },
        { title: "Ein in Italien ausgebildeter Chirurg", desc: "Dr. Arnold Mboqe ist qualifiziert und zugelassen in Italien und Belgien, mit Spezialisierung auf Mund-Kiefer-Chirurgie." },
        { title: "Ein Rundum-Aufenthalt", desc: "Flughafentransfer, Partnerhotel und Dolmetscher: Sie konzentrieren sich auf Ihr Lächeln, wir kümmern uns um den Rest." }
      ],
      table: {
        headers: ["Étape", "Ce que vous recevez"],
        rows: [
          ["Évaluation", "Analyse des informations et examens disponibles"],
          ["Planification", "Proposition de traitement à confirmer après examen clinique"],
          ["Devis", "Estimation adaptée au plan retenu"],
          ["Séjour", "Calendrier et informations pratiques expliqués avant le voyage"],
          ["Suivi", "Consignes et suivi selon le protocole de soins"]
        ],
        note: "Les tarifs et délais sont déterminés au cas par cas après évaluation clinique. Aucun montant affiché ne constitue une promesse de prix."
      }
    },
    treatments: {
      title: "Unsere Behandlungen",
      intro: "Vom Einzelimplantat bis zur kompletten Mundrehabilitation — ein multidisziplinäres Team unter der Leitung von Dr. Mboqe.",
      items: [
        ["Zahnimplantate", "Titanschraube als Ersatz der Zahnwurzel — die Basis jeder dauerhaften Restauration."],
        ["All-on-4 / All-on-6 / All-on-8", "Komplette Kieferrehabilitation auf 4, 6 oder 8 Implantaten, in einem einzigen Eingriff."],
        ["Veneers", "Dünne Keramikschalen, die auf die sichtbare Zahnfläche geklebt werden, für ein harmonisches Lächeln."],
        ["Kronen & Brücken", "Wiederherstellung beschädigter Zähne oder Ersatz fehlender Zähne ohne Implantat."],
        ["Zahnaufhellung", "Professionelle Aufhellung in der Praxis, mit sichtbaren Ergebnissen ab der ersten Sitzung."],
        ["Kieferorthopädie & Invisalign", "Zahnkorrektur mit transparenten Schienen oder klassischer Zahnspange."],
        ["Mund-Kiefer-Chirurgie", "Komplexe Extraktionen, Knochentransplantate, Sinuslift und Frenektomie."],
        ["Schlafapnoe-Management", "Ein multidisziplinärer Ansatz für bissbedingte Atemprobleme."],
        ["Befundung & Fernbetreuung", "Angebote anhand von per E-Mail gesendeten Fotos oder Röntgenbildern, postoperative Nachsorge per Videoanruf."]
      ]
    },
    doctor: {
      name: "Dr. Arnold Mboqe",
      role: "Gründer & technischer Direktor — Mund-Kiefer-Chirurg, Implantologe, Parodontologe, Prothetiker, Kieferorthopäde",
      paragraphs: [
        "Dr. Mboqe schloss 2014 sein Studium der Zahnmedizin ab und erhielt im selben Jahr seine Zulassung für Italien und die EU, ausgestellt von der Universität Rom „Tor Vergata“. Anschließend absolvierte er einen Master in Kieferorthopädie sowie eine dreijährige Spezialisierung in Mund-Kiefer-Chirurgie an der Aldent-Universität in Tirana.",
        "Nach mehreren Jahren der Tätigkeit in Belgien, wo er ebenfalls seine Zulassung erhielt, gründete er 2024 das Virtus Dental Center, um internationalen Patienten Zahnmedizin auf europäischem Niveau in einem zugänglicheren Rahmen zu bieten."
      ],
      credentials: [
        "Master in Zahnmedizin — Universität „Zoja e Këshillit të Mirë“",
        "Zulassung in Italien, der EU und Belgien",
        "3-jährige Spezialisierung in Mund-Kiefer-Chirurgie — Aldent-Universität",
        "Fortlaufende Weiterbildung in Implantologie, Parodontologie und Gesichtsästhetik"
      ],
      languages: ["English", "Italiano", "Français", "Español", "Shqip"]
    },
    team: {
      title: "Unser Team",
      intro: "Unser multidisziplinäres Team vereint ergänzende klinische und betreuende Kompetenzen für Ihre Begleitung in jeder Phase."
    },
    gallery: {
      title: "Vorher / Nachher",
      intro: "Echte Veränderungen aus der Praxis — klicken Sie auf ein Foto, um es zu vergrößern."
    },
    videoTestimonials: {
      title: "Video-Erfahrungsberichte",
      intro: "Patienten aus Italien, Belgien und anderen Ländern berichten von ihrer Erfahrung."
    },
    packages: {
      title: "Unsere Pakete",
      intro: "Drei Angebote für internationale Patienten, von der Einzelbehandlung bis zum kompletten Aufenthalt.",
      items: [
        { title: "All-on-4-Paket", features: ["4 hochwertige Zahnimplantate", "Individuelle Prothese mit natürlichem Aussehen", "Provisorische Zähne am selben Tag", "2 CBCT-Scans", "Postoperative Nachsorge inklusive"] },
        { title: "All-on-6-Paket", features: ["6 hochwertige Zahnimplantate", "Individuelle Prothese mit natürlichem Aussehen", "Umfassende Beratung und Planung", "Fortschrittliche Präzisionstechnologie", "Postoperative Nachsorge inklusive"] },
        { title: "Zahntourismus-Paket", features: ["Individuelles Angebot nach kostenloser Beratung", "Auf Ihre Bedürfnisse zugeschnittene Prothese", "Vollständige Reiseplanung", "Postoperative Nachsorge inklusive", "Unterstützung bei Reise & Hotel"] }
      ]
    },

    journey: {
      title: "Ihre Reise, Schritt für Schritt",
      intro: "Ein Ablauf für Patienten aus dem Ausland, von der ersten Nachricht bis zur Nachsorge nach Ihrer Rückkehr.",
      steps: [
        { title: "Beratung & Angebot", desc: "Senden Sie uns aktuelle Fotos oder Röntgenbilder; Sie erhalten innerhalb von  einen Behandlungsplan und ein detailliertes Angebot." },
        { title: "Reiseplanung", desc: "Wir koordinieren Ihre Termine, das Partnerhotel und den Transfer vom Flughafen Tirana." },
        { title: "Behandlung in der Klinik", desc: "Betreuung auf Französisch, Englisch oder Italienisch, mit straffem Zeitplan für einen möglichst kurzen Aufenthalt." },
        { title: "Rückkehr & Nachsorge", desc: "Schriftliche Garantie auf die durchgeführten Arbeiten und Fernbetreuung per Foto oder Videoanruf." }
      ]
    },
    testimonials: {
      tag: "Bewertungen von Patienten des Virtus Dental Center",
      title: "Das sagen unsere Patienten",
      items: [
        { quote: "„Alles war im Voraus organisiert, ich musste nur ins Flugzeug steigen. Das Ergebnis übertraf meine Erwartungen.“", name: "Claire, Frankreich", flag: "🇫🇷" },
        { quote: "„Das Team spricht perfektes Englisch, und ich habe mehr als die Hälfte dessen gespart, was ich zu Hause bezahlt hätte.“", name: "James, Vereinigtes Königreich", flag: "🇬🇧" },
        { quote: "„Dr. Mboqe erklärt alles klar auf Italienisch, ich hatte eine echte Nachsorge nach meiner Rückkehr nach Mailand.“", name: "Marco, Italien", flag: "🇮🇹" }
      ]
    },
    faq: {
      title: "Häufig gestellte Fragen",
      intro: "Weitere Fragen? Unser Assistent unten rechts antwortet sofort, oder schreiben Sie uns direkt.",
      items: [
        ["Ist die Praxis zertifiziert und sicher für internationale Patienten?", "Ja: Dr. Mboqe ist in Italien, der EU und Belgien zugelassen, und die Klinik folgt europäischen Sterilisationsprotokollen und Materialstandards."],
        ["Wie lange muss ich in Tirana bleiben?", "Das hängt von der Behandlung ab: 3–4 Tage für Aufhellung oder Veneers, bis zu 5–7 Tage für All-on-4, manchmal auf zwei Aufenthalte verteilt."],
        ["Was passiert, wenn nach meiner Rückkehr ein Problem auftritt?", "Jede Behandlung ist mit einer schriftlichen Garantie versehen, mit Fernbetreuung per Foto oder Videoanruf und bei Bedarf Abstimmung mit Ihrem Zahnarzt vor Ort."],
        ["Spricht das Team meine Sprache?", "Unser Team spricht Französisch, Englisch, Italienisch, Spanisch und Albanisch."],
        ["Ist die Reise im Angebot enthalten?", "Das zahnärztliche Angebot ist unabhängig von den Reisekosten, aber wir helfen bei der Organisation von Flughafentransfer und Partnerhotel zu Vorzugspreisen."],
        ["Welche Zahlungsmethoden akzeptieren Sie?", "Karte, internationale Überweisung und Bargeld werden akzeptiert; die genauen Konditionen teilen wir Ihnen mit dem Angebot mit."]
      ]
    },
    contact: {
      title: "Fordern Sie Ihr kostenloses Angebot an",
      intro: "Antwort nach Prüfung der verfügbaren Informationen, unverbindlich.",
      phoneLabel: "Telefon / WhatsApp",
      emailLabel: "E-Mail",
      addrLabel: "Adresse",
      addr: "Tirana, Albanien",
      mapLink: "Auf der Karte ansehen →",
      hoursLabel: "Öffnungszeiten",
      hours: "Mo–Sa · 9–19 Uhr (Ortszeit Tirana)"
    },
    form: {
      name: "Vollständiger Name", country: "Land", email: "E-Mail", phone: "Telefon",
      treatment: "Interessierte Behandlung",
      options: ["Noch unklar", "Zahnimplantate", "All-on-4 / All-on-6", "Veneers / Ästhetik", "Kieferorthopädie / Invisalign", "Andere"],
      message: "Nachricht (optional)", submit: "Anfrage senden",
      success: "Danke! Ihre Anfrage wurde registriert — unser Team antwortet innerhalb von .",
      error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.",
      sending: "Wird gesendet…"
    },
    footer: { tagline: "Implantate, Ästhetik, Mund-Kiefer-Chirurgie und Kieferorthopädie in Tirana — für ein gesundes Lächeln, international." },
    app: { home: "Start", treatments: "Pflege", chat: "Assistent", contact: "Kontakt" },
    chat: {
      title: "Virtus Assistent",
      subtitle: "Antwortet sofort · menschliche Unterstützung bei Bedarf",
      placeholder: "Schreiben Sie Ihre Frage…",
      greeting: "Hallo 👋 Ich bin der Chatbot des Virtus Dental Center. Wie kann ich Ihnen helfen?",
      quickReplies: [
        { intent: "price", label: "💶 Preise" },
        { intent: "hygiene", label: "🦷 Pflege" },
        { intent: "pain", label: "😣 Schmerz / Notfall" },
        { intent: "aftercare", label: "🩹 Nach der Behandlung" },
        { intent: "implants", label: "🦷 Implantate" },
        { intent: "travel", label: "✈️ Reise" },
        { intent: "human", label: "Mensch" },
      ],
      humanHandoff: "Ein Teammitglied übernimmt ab hier. Sie erreichen uns direkt:",
      fallback: "Dafür habe ich keine passende Antwort — ich leite es an das Team weiter. Sie können uns auch direkt schreiben:"
    }
  },

  pt: {
    nav: { tourism: "Turismo dentário", treatments: "Tratamentos", team: "A nossa equipa", journey: "A sua viagem", faq: "Perguntas frequentes", book: "Orçamento grátis" },
    ui: { about: 'Sobre nós', beforeAfter: 'Antes / depois', guides: 'Guias' },
    hero: {
      title: "O seu novo sorriso começa em Tirana.",
      lede: "O Virtus Dental Center recebe todos os anos pacientes de toda a Europa para implantes, facetas e sorrisos completos — com um cirurgião formado em Itália e na Bélgica.",
      cta1: "Pedir orçamento grátis",
      cta2: "Ver os tratamentos",
      trust1: "Autorizado a exercer em Itália e na Bélgica",
      trust2: "Equipa FR · EN · IT · ES",
      trust3: "Acesso internacional via Tirana",
      statLabel: "de poupança média face à Europa Ocidental, com materiais de igual qualidade",
      li1: "Orçamento detalhado em , a partir de fotos ou radiografias",
      li2: "Transfer do aeroporto e hotel parceiro incluídos",
      li3: "Garantia por escrito e acompanhamento à distância após o regresso"
    },
    why: {
      title: "Porquê tratar os dentes em Tirana?",
      intro: "A Albânia combina padrões clínicos europeus com um custo de vida muito mais baixo — sem comprometer as marcas de implantes, a esterilização ou o acompanhamento.",
      points: [
        { title: "Planeamento personalizado", desc: "O plano de tratamento e a estimativa são definidos de acordo com a situação clínica." },
        { title: "Acesso internacional", desc: "A organização da viagem é explicada separadamente do plano clínico." },
        { title: "Um cirurgião formado em Itália", desc: "O Dr. Arnold Mboqe é qualificado e autorizado a exercer em Itália e na Bélgica, com especialização em cirurgia oral." },
        { title: "Uma estadia chave-na-mão", desc: "Transfer do aeroporto, hotel parceiro e intérprete: você foca-se no seu sorriso, nós tratamos do resto." }
      ],
      table: {
        headers: ["Étape", "Ce que vous recevez"],
        rows: [
          ["Évaluation", "Analyse des informations et examens disponibles"],
          ["Planification", "Proposition de traitement à confirmer après examen clinique"],
          ["Devis", "Estimation adaptée au plan retenu"],
          ["Séjour", "Calendrier et informations pratiques expliqués avant le voyage"],
          ["Suivi", "Consignes et suivi selon le protocole de soins"]
        ],
        note: "Les tarifs et délais sont déterminés au cas par cas après évaluation clinique. Aucun montant affiché ne constitue une promesse de prix."
      }
    },
    treatments: {
      title: "Os nossos tratamentos",
      intro: "Do implante único à reabilitação completa da boca, uma equipa multidisciplinar liderada pelo Dr. Mboqe.",
      items: [
        ["Implantes dentários", "Parafuso de titânio que substitui a raiz do dente — a base de qualquer restauração duradoura."],
        ["All-on-4 / All-on-6 / All-on-8", "Reabilitação completa de uma arcada sobre 4, 6 ou 8 implantes, numa única intervenção."],
        ["Facetas dentárias", "Finas lâminas de cerâmica coladas na face visível dos dentes para um sorriso harmonioso."],
        ["Coroas e pontes", "Restauro de dentes danificados ou substituição de dentes em falta sem implante."],
        ["Branqueamento dentário", "Branqueamento profissional em consultório, com resultados visíveis desde a primeira sessão."],
        ["Ortodontia e Invisalign", "Alinhamento dentário com alinhadores transparentes ou aparelho tradicional."],
        ["Cirurgia oral", "Extrações complexas, enxertos ósseos, elevação do seio maxilar e frenectomia."],
        ["Gestão da apneia do sono", "Uma abordagem multidisciplinar para problemas respiratórios ligados à mordida."],
        ["Avaliação e acompanhamento à distância", "Orçamentos a partir de fotos ou radiografias enviadas por email, acompanhamento pós-operatório por videochamada."]
      ]
    },
    doctor: {
      name: "Dr. Arnold Mboqe",
      role: "Fundador e diretor técnico — cirurgião oral, implantologista, periodontologista, protesista, ortodontista",
      paragraphs: [
        "Licenciado em ciências dentárias em 2014, o Dr. Mboqe obteve nesse mesmo ano a sua autorização para exercer em Itália e na União Europeia, emitida pela Universidade de Roma \"Tor Vergata\". Concluiu depois um mestrado em ortodontia e uma especialização de três anos em cirurgia oral na Universidade Aldent, em Tirana.",
        "Após vários anos a exercer na Bélgica, onde também obteve a sua autorização, fundou o Virtus Dental Center em 2024 para oferecer aos pacientes internacionais uma odontologia de nível europeu num contexto mais acessível."
      ],
      credentials: [
        "Mestrado em ciências dentárias — Universidade \"Zoja e Këshillit të Mirë\"",
        "Autorizado a exercer em Itália, na UE e na Bélgica",
        "Especialização de 3 anos em cirurgia oral — Universidade Aldent",
        "Formação contínua em implantologia, periodontologia e estética facial"
      ],
      languages: ["English", "Italiano", "Français", "Español", "Shqip"]
    },
    team: {
      title: "A nossa equipa",
      intro: "A nossa equipa multidisciplinar reúne competências complementares para o acompanhar em cada etapa."
    },
    gallery: {
      title: "Antes / depois",
      intro: "Transformações reais realizadas na clínica — clique numa foto para ampliar."
    },
    videoTestimonials: {
      title: "Testemunhos em vídeo",
      intro: "Pacientes de Itália, Bélgica e outros países partilham a sua experiência."
    },
    packages: {
      title: "Os nossos pacotes",
      intro: "Três opções pensadas para pacientes internacionais, desde um tratamento pontual até uma estadia completa.",
      items: [
        { title: "Pacote All-on-4", features: ["4 implantes dentários topo de gama", "Prótese personalizada com aspeto natural", "Dentes provisórios no mesmo dia", "2 tomografias CBCT", "Acompanhamento pós-operatório incluído"] },
        { title: "Pacote All-on-6", features: ["6 implantes dentários topo de gama", "Prótese personalizada com aspeto natural", "Consulta e planeamento completos", "Tecnologia de precisão avançada", "Acompanhamento pós-operatório incluído"] },
        { title: "Pacote turismo dentário", features: ["Orçamento personalizado após consulta gratuita", "Prótese adaptada às suas necessidades", "Planeamento completo da estadia", "Acompanhamento pós-operatório incluído", "Apoio com viagem e hotel"] }
      ]
    },

    journey: {
      title: "A sua viagem, passo a passo",
      intro: "Um percurso pensado para pacientes vindos do estrangeiro, desde a primeira mensagem até ao acompanhamento após o regresso.",
      steps: [
        { title: "Consulta e orçamento", desc: "Envie-nos as suas fotos ou radiografias recentes; receberá um plano de tratamento e um orçamento detalhado em ." },
        { title: "Organização da viagem", desc: "Coordenamos as suas datas, o hotel parceiro e o transfer a partir do aeroporto de Tirana." },
        { title: "Tratamento na clínica", desc: "Atendimento em francês, inglês ou italiano, com uma agenda apertada para limitar a duração da sua estadia." },
        { title: "Regresso e acompanhamento", desc: "Garantia por escrito sobre os trabalhos realizados e acompanhamento à distância por foto ou videochamada." }
      ]
    },
    testimonials: {
      tag: "Avaliações publicadas por pacientes do Virtus Dental Center",
      title: "O que dizem os nossos pacientes",
      items: [
        { quote: "«Estava tudo organizado antecipadamente, só tive de apanhar o avião. O resultado superou o que esperava.»", name: "Claire, França", flag: "🇫🇷" },
        { quote: "«A equipa fala um inglês perfeito e poupei mais de metade do que teria pago no meu país.»", name: "James, Reino Unido", flag: "🇬🇧" },
        { quote: "«O Dr. Mboqe explica tudo claramente em italiano, tive um verdadeiro acompanhamento após regressar a Milão.»", name: "Marco, Itália", flag: "🇮🇹" }
      ]
    },
    faq: {
      title: "Perguntas frequentes",
      intro: "Mais perguntas? O nosso assistente em baixo à direita responde instantaneamente, ou escreva-nos diretamente.",
      items: [
        ["A clínica é certificada e segura para pacientes internacionais?", "Sim: o Dr. Mboqe está autorizado a exercer em Itália, na UE e na Bélgica, e a clínica segue os protocolos de esterilização e as normas de materiais europeias."],
        ["Quanto tempo preciso de ficar em Tirana?", "Depende do tratamento: 3-4 dias para branqueamento ou facetas, até 5-7 dias para um All-on-4, por vezes repartido em duas estadias."],
        ["O que acontece se tiver um problema depois de voltar para casa?", "Todos os tratamentos têm garantia por escrito, acompanhamento à distância por foto ou videochamada, e coordenação com o seu dentista local se necessário."],
        ["A equipa fala a minha língua?", "A nossa equipa fala francês, inglês, italiano, espanhol e albanês."],
        ["O orçamento inclui a viagem e o hotel?", "O orçamento dentário é independente das despesas de viagem, mas ajudamos a organizar o transfer do aeroporto e um hotel parceiro a tarifas preferenciais."],
        ["Que métodos de pagamento aceitam?", "Aceitamos cartão, transferência internacional e dinheiro; as condições exatas são comunicadas junto com o orçamento."]
      ]
    },
    contact: {
      title: "Peça o seu orçamento gratuito",
      intro: "Resposta após a análise das informações disponíveis, sem compromisso.",
      phoneLabel: "Telefone / WhatsApp",
      emailLabel: "Email",
      addrLabel: "Morada",
      addr: "Tirana, Albânia",
      mapLink: "Ver no mapa →",
      hoursLabel: "Horário",
      hours: "Seg–Sáb · 9h–19h (hora de Tirana)"
    },
    form: {
      name: "Nome completo", country: "País", email: "Email", phone: "Telefone",
      treatment: "Tratamento de interesse",
      options: ["Ainda não sei", "Implantes dentários", "All-on-4 / All-on-6", "Facetas / estética", "Ortodontia / Invisalign", "Outro"],
      message: "Mensagem (opcional)", submit: "Enviar o meu pedido",
      success: "Obrigado! O seu pedido foi registado — a nossa equipa responderá em .",
      error: "Ocorreu um erro. Tente novamente ou ligue-nos diretamente.",
      sending: "A enviar…"
    },
    footer: { tagline: "Implantes, estética, cirurgia oral e ortodontia em Tirana — por um sorriso saudável, à escala internacional." },
    app: { home: "Início", treatments: "Cuidados", chat: "Assistente", contact: "Contacto" },
    chat: {
      title: "Assistente Virtus",
      subtitle: "Respostas instantâneas · transferência para humano se necessário",
      placeholder: "Escreva a sua pergunta…",
      greeting: "Olá 👋 Sou o chatbot do Virtus Dental Center. Como posso ajudar?",
      quickReplies: [
        { intent: "price", label: "💶 Preços" },
        { intent: "hygiene", label: "🦷 Higiene" },
        { intent: "pain", label: "😣 Dor / urgência" },
        { intent: "aftercare", label: "🩹 Após tratamento" },
        { intent: "implants", label: "🦷 Implantes" },
        { intent: "travel", label: "✈️ Viagem" },
        { intent: "human", label: "🗣️ Pessoa" },
      ],
      humanHandoff: "Um membro da equipa assume a partir daqui. Pode contactar-nos diretamente:",
      fallback: "Não tenho uma resposta pronta para isso — vou passar à equipa. Também pode escrever-nos diretamente:"
    }
  },

  ru: {
    nav: { tourism: "Стоматологический туризм", treatments: "Лечение", team: "Наша команда", journey: "Ваша поездка", faq: "Вопросы и ответы", book: "Бесплатная смета" },
    ui: { about: 'О клинике', beforeAfter: 'До / после', guides: 'Гиды' },
    hero: {
      title: "Ваша новая улыбка начинается в Тиране.",
      lede: "Virtus Dental Center ежегодно принимает пациентов со всей Европы для имплантации, виниров и полного преображения улыбки — с хирургом, обученным в Италии и Бельгии.",
      cta1: "Запросить бесплатную смету",
      cta2: "Посмотреть лечение",
      trust1: "Имеет право практиковать в Италии и Бельгии",
      trust2: "Команда говорит на FR · EN · IT · ES",
      trust3: "Международный доступ через Тирану",
      statLabel: "Индивидуальное планирование лечения",
      li1: "Подробная смета в течение 48 часов по фото или снимкам",
      li2: "Трансфер из аэропорта и партнёрский отель включены",
      li3: "Письменная гарантия и дистанционное наблюдение после возвращения"
    },
    why: {
      title: "Почему лечить зубы в Тиране?",
      intro: "Албания сочетает европейские клинические стандарты со значительно более низкой стоимостью жизни — без компромиссов в отношении марок имплантов, стерилизации или наблюдения.",
      points: [
        { title: "Индивидуальное планирование", desc: "План лечения и стоимость определяются с учетом клинической ситуации." },
        { title: "Международная доступность", desc: "Организация поездки рассматривается отдельно от клинического плана." },
        { title: "Хирург, обученный в Италии", desc: "Д-р Арнольд Мбоке квалифицирован и имеет право практиковать в Италии и Бельгии, со специализацией в челюстно-лицевой хирургии." },
        { title: "Полностью организованная поездка", desc: "Трансфер из аэропорта, партнёрский отель и переводчик: вы думаете об улыбке, мы — обо всём остальном." }
      ],
      table: {
        headers: ["Étape", "Ce que vous recevez"],
        rows: [
          ["Évaluation", "Analyse des informations et examens disponibles"],
          ["Planification", "Proposition de traitement à confirmer après examen clinique"],
          ["Devis", "Estimation adaptée au plan retenu"],
          ["Séjour", "Calendrier et informations pratiques expliqués avant le voyage"],
          ["Suivi", "Consignes et suivi selon le protocole de soins"]
        ],
        note: "Les tarifs et délais sont déterminés au cas par cas après évaluation clinique. Aucun montant affiché ne constitue une promesse de prix."
      }
    },
    treatments: {
      title: "Наши услуги",
      intro: "От единичного импланта до полной реабилитации полости рта — междисциплинарная команда под руководством д-ра Мбоке.",
      items: [
        ["Зубные импланты", "Титановый винт, заменяющий корень зуба — основа любой долговечной реставрации."],
        ["All-on-4 / All-on-6 / All-on-8", "Полная реабилitация челюсти на 4, 6 или 8 имплантах за одну операцию."],
        ["Виниры", "Тонкие керамические накладки на видимую поверхность зубов для гармоничной улыбки."],
        ["Коронки и мосты", "Восстановление повреждённых зубов или замена отсутствующих зубов без импланта."],
        ["Отбеливание зубов", "Профессиональное отбеливание в клинике с видимым результатом после первого сеанса."],
        ["Ортодонтия и Invisalign", "Выравнивание зубов прозрачными капами или классическими брекетами."],
        ["Челюстно-лицевая хирургия", "Сложное удаление зубов, костная пластика, синус-лифтинг и френэктомия."],
        ["Лечение апноэ сна", "Междисциплинарный подход к нарушениям дыхания, связанным с прикусом."],
        ["Осмотр и дистанционное наблюдение", "Смета по фото или снимкам, отправленным по email, послеоперационное наблюдение по видеосвязи."]
      ]
    },
    doctor: {
      name: "Д-р Арнольд Мбоке",
      role: "Основатель и технический директор — челюстно-лицевой хирург, имплантолог, пародонтолог, протезист, ортодонт",
      paragraphs: [
        "Окончив стоматологический факультет в 2014 году, д-р Мбоке в том же году получил право практиковать в Италии и ЕС, выданное Римским университетом «Тор Вергата». Затем он завершил магистратуру по ортодонтии и трёхлетнюю специализацию по челюстно-лицевой хирургии в университете Альдент в Тиране.",
        "После нескольких лет практики в Бельгии, где он также получил разрешение на практику, в 2024 году он основал Virtus Dental Center, чтобы предложить иностранным пациентам стоматологию европейского уровня в более доступных условиях."
      ],
      credentials: [
        "Магистр стоматологии — Университет «Zoja e Këshillit të Mirë»",
        "Право практиковать в Италии, ЕС и Бельгии",
        "3-летняя специализация по челюстно-лицевой хирургии — Университет Альдент",
        "Постоянное повышение квалификации в имплантологии, пародонтологии и эстетике лица"
      ],
      languages: ["English", "Italiano", "Français", "Español", "Shqip"]
    },
    team: {
      title: "Наша команда",
      intro: "Шесть преданных своему делу специалистов, работающих вместе с д-ром Мбоке, чтобы заботиться о вашей улыбке на каждом этапе."
    },
    gallery: {
      title: "До / после",
      intro: "Реальные преображения, выполненные в клинике — нажмите на фото, чтобы увеличить."
    },
    videoTestimonials: {
      title: "Видеоотзывы",
      intro: "Пациенты из Италии, Бельгии и других стран делятся своим опытом."
    },
    packages: {
      title: "Наши пакеты услуг",
      intro: "Три варианта для иностранных пациентов — от разового лечения до полного пребывания.",
      items: [
        { title: "Пакет All-on-4", features: ["4 премиальных зубных импланта", "Индивидуальный протез с естественным видом", "Временные зубы в тот же день", "2 КЛКТ-сканирования", "Послеоперационное наблюдение включено"] },
        { title: "Пакет All-on-6", features: ["6 премиальных зубных имплантов", "Индивидуальный протез с естественным видом", "Полная консультация и планирование", "Передовые технологии точности", "Послеоперационное наблюдение включено"] },
        { title: "Пакет стоматологического туризма", features: ["Индивидуальная смета после бесплатной консультации", "Протез, адаптированный под ваши потребности", "Полное планирование поездки", "Послеоперационное наблюдение включено", "Помощь с поездкой и отелем"] }
      ]
    },

    journey: {
      title: "Ваша поездка, шаг за шагом",
      intro: "Маршрут, разработанный для иностранных пациентов — от первого сообщения до наблюдения после возвращения.",
      steps: [
        { title: "Консультация и смета", desc: "Пришлите нам свежие фото или снимки; вы получите план лечения и подробную смету в течение 48 часов." },
        { title: "Организация поездки", desc: "Мы согласуем даты, партнёрский отель и трансфер из аэропорта Тираны." },
        { title: "Лечение в клинике", desc: "Обслуживание на французском, английском или итальянском языке, с плотным графиком для сокращения срока пребывания." },
        { title: "Возвращение и наблюдение", desc: "Письменная гарантия на выполненные работы и дистанционное наблюдение по фото или видеосвязи." }
      ]
    },
    testimonials: {
      tag: "Отзывы, опубликованные пациентами Virtus Dental Center",
      title: "Отзывы наших пациентов",
      items: [
        { quote: "«Всё было организовано заранее, мне оставалось только сесть в самолёт. Результат превзошёл мои ожидания.»", name: "Клэр, Франция", flag: "🇫🇷" },
        { quote: "«Команда говорит на превосходном английском, и я сэкономил больше половины того, что заплатил бы у себя дома.»", name: "Джеймс, Великобритания", flag: "🇬🇧" },
        { quote: "«Д-р Мбоке всё чётко объясняет по-итальянски, у меня было настоящее наблюдение после возвращения в Милан.»", name: "Марко, Италия", flag: "🇮🇹" }
      ]
    },
    faq: {
      title: "Часто задаваемые вопросы",
      intro: "Остались вопросы? Наш ассистент внизу справа отвечает мгновенно, или напишите нам напрямую.",
      items: [
        ["Клиника сертифицирована и безопасна для иностранных пациентов?", "Да: д-р Мбоке имеет право практиковать в Италии, ЕС и Бельгии, а клиника соблюдает европейские протоколы стерилизации и стандарты материалов."],
        ["Сколько времени мне нужно оставаться в Тиране?", "Зависит от лечения: 3-4 дня для отбеливания или виниров, до 5-7 дней для All-on-4, иногда с разбивкой на две поездки."],
        ["Что делать, если после возвращения домой возникнет проблема?", "Каждое лечение сопровождается письменной гарантией, дистанционным наблюдением по фото или видеосвязи, а также координацией с вашим местным стоматологом при необходимости."],
        ["Команда говорит на моём языке?", "Наша команда говорит на французском, английском, итальянском, испанском и албанском языках."],
        ["Смета включает поездку и отель?", "Смета на лечение не включает расходы на поездку, но мы помогаем организовать трансфер из аэропорта и партнёрский отель по льготным тарифам."],
        ["Какие способы оплаты вы принимаете?", "Принимаются карта, международный перевод и наличные; точные условия сообщаются вместе со сметой."]
      ]
    },
    contact: {
      title: "Запросите бесплатную смету",
      intro: "Ответ в течение 48 часов с предварительным планом лечения, без обязательств.",
      phoneLabel: "Телефон / WhatsApp",
      emailLabel: "Email",
      addrLabel: "Адрес",
      addr: "Тирана, Албания",
      mapLink: "Посмотреть на карте →",
      hoursLabel: "Часы работы",
      hours: "Пн–Сб · 9:00–19:00 (время Тираны)"
    },
    form: {
      name: "Полное имя", country: "Страна", email: "Email", phone: "Телефон",
      treatment: "Интересующее лечение",
      options: ["Пока не знаю", "Зубные импланты", "All-on-4 / All-on-6", "Виниры / эстетика", "Ортодонтия / Invisalign", "Другое"],
      message: "Сообщение (необязательно)", submit: "Отправить запрос",
      success: "Спасибо! Ваш запрос зарегистрирован — наша команда ответит в течение 48 часов.",
      error: "Произошла ошибка. Попробуйте ещё раз или позвоните нам напрямую.",
      sending: "Отправка…"
    },
    footer: { tagline: "Импланты, эстетика, челюстно-лицевая хирургия и ортодонтия в Тиране — за здоровую улыбку, в международном масштабе." },
    app: { home: "Главная", treatments: "Лечение", chat: "Ассистент", contact: "Контакты" },
    chat: {
      title: "Ассистент Virtus",
      subtitle: "Мгновенные ответы · переключение на человека при необходимости",
      placeholder: "Введите ваш вопрос…",
      greeting: "Здравствуйте 👋 Я чат-бот Virtus Dental Center. Чем могу помочь?",
      quickReplies: [
        { intent: "price", label: "💶 Цены" },
        { intent: "hygiene", label: "🦷 Уход" },
        { intent: "pain", label: "😣 Боль / срочно" },
        { intent: "aftercare", label: "🩹 После лечения" },
        { intent: "implants", label: "🦷 Импланты" },
        { intent: "travel", label: "✈️ Поездка" },
        { intent: "human", label: "🗣️ Человек" },
      ],
      humanHandoff: "Дальше вами займётся сотрудник команды. Вы можете связаться с нами напрямую:",
      fallback: "У меня нет готового ответа на это — передаю команде. Вы также можете написать нам напрямую:"
    }
  },

  ar: {
    nav: { tourism: "السياحة العلاجية للأسنان", treatments: "العلاجات", team: "فريقنا", journey: "رحلتك", faq: "الأسئلة الشائعة", book: "عرض سعر مجاني" },
    ui: { about: 'من نحن', beforeAfter: 'قبل / بعد', guides: 'أدلة' },
    hero: {
      title: "ابتسامتك الجديدة تبدأ في تيرانا.",
      lede: "يستقبل مركز فيرتوس لطب الأسنان كل عام مرضى من جميع أنحاء أوروبا لزراعة الأسنان والقشور التجميلية وابتسامات كاملة — مع جراح تدرب في إيطاليا وبلجيكا.",
      cta1: "طلب عرض سعر مجاني",
      cta2: "عرض العلاجات",
      trust1: "مرخّص لمزاولة المهنة في إيطاليا وبلجيكا",
      trust2: "الفريق يتحدث الفرنسية والإنجليزية والإيطالية والإسبانية",
      trust3: "إمكانية الوصول الدولي عبر تيرانا",
      statLabel: "متوسط التوفير مقارنة بأوروبا الغربية، بنفس جودة المواد",
      li1: "عرض سعر مفصل خلال 48 ساعة، بناءً على صور أو أشعة",
      li2: "شامل النقل من المطار والفندق الشريك",
      li3: "ضمان مكتوب ومتابعة عن بُعد بعد عودتك"
    },
    why: {
      title: "لماذا تعالج أسنانك في تيرانا؟",
      intro: "تجمع ألبانيا بين المعايير السريرية الأوروبية وتكلفة معيشة أقل بكثير — دون التنازل عن ماركات الزرعات أو التعقيم أو المتابعة.",
      points: [
        { title: "تخطيط علاجي مخصص", desc: "يتم تحديد الخطة والتكلفة وفقًا للحالة السريرية للمريض." },
        { title: "وصول دولي", desc: "يتم شرح تنظيم الرحلة بشكل منفصل عن الخطة العلاجية." },
        { title: "جراح تدرب في إيطاليا", desc: "الدكتور أرنولد مبوكي مؤهل ومرخّص لمزاولة المهنة في إيطاليا وبلجيكا، ومتخصص في جراحة الفم." },
        { title: "إقامة متكاملة", desc: "النقل من المطار، فندق شريك، ومترجم: أنت تركّز على ابتسامتك، ونحن نتكفّل بالباقي." }
      ],
      table: {
        headers: ["العلاج", "فيرتوس (تيرانا)", "متوسط أوروبا الغربية"],
        rows: [
          ["زرعة سن (واحدة)", "300 – 450 يورو", "1200 – 2000 يورو"],
          ["تاج خزفي", "180 – 280 يورو", "700 – 1200 يورو"],
          ["قشرة تجميلية", "220 – 320 يورو", "700 – 1500 يورو"],
          ["All-on-4 (لكل فك)", "3800 – 5200 يورو", "14000 – 22000 يورو"],
          ["تبييض الأسنان", "120 – 180 يورو", "400 – 800 يورو"]
        ],
        note: "* نطاقات إرشادية على سبيل المثال؛ اطلب عرض سعر مخصص بناءً على فحص أسنانك."
      }
    },
    treatments: {
      title: "علاجاتنا",
      intro: "من الزرعة الواحدة إلى إعادة التأهيل الكامل للفم، فريق متعدد التخصصات بقيادة الدكتور مبوكي.",
      items: [
        ["زراعة الأسنان", "برغي من التيتانيوم يحل محل جذر السن — أساس أي ترميم دائم."],
        ["All-on-4 / All-on-6 / All-on-8", "إعادة تأهيل كاملة لفك واحد على 4 أو 6 أو 8 زرعات، في عملية واحدة."],
        ["القشور التجميلية", "قشور خزفية رقيقة تُلصق على السطح الظاهر للأسنان لابتسامة متناسقة."],
        ["التيجان والجسور", "ترميم الأسنان التالفة أو تعويض الأسنان المفقودة دون زرعة."],
        ["تبييض الأسنان", "تبييض احترافي في العيادة، بنتائج واضحة من الجلسة الأولى."],
        ["تقويم الأسنان و Invisalign", "محاذاة الأسنان بواسطة تقويم شفاف أو تقويم تقليدي."],
        ["جراحة الفم", "خلع معقد، ترقيع عظمي، رفع الجيب الفكي، وقص اللجام."],
        ["إدارة انقطاع النفس أثناء النوم", "نهج متعدد التخصصات لمشاكل التنفس المرتبطة بالإطباق."],
        ["الفحص والمتابعة عن بُعد", "عروض أسعار بناءً على صور أو أشعة تُرسل بالبريد الإلكتروني، ومتابعة ما بعد العملية عبر مكالمة فيديو."]
      ]
    },
    doctor: {
      name: "الدكتور أرنولد مبوكي",
      role: "المؤسس والمدير الفني — جراح فم، أخصائي زراعة، أخصائي لثة، أخصائي تركيبات، أخصائي تقويم",
      paragraphs: [
        "تخرّج الدكتور مبوكي في علوم طب الأسنان عام 2014، وحصل في نفس العام على ترخيص مزاولة المهنة في إيطاليا والاتحاد الأوروبي، الصادر عن جامعة روما «تور فيرغاتا». ثم أكمل ماجستيرًا في تقويم الأسنان وتخصصًا لمدة ثلاث سنوات في جراحة الفم بجامعة ألدنت في تيرانا.",
        "بعد عدة سنوات من الممارسة في بلجيكا، حيث حصل أيضًا على ترخيصه، أسس مركز فيرتوس لطب الأسنان عام 2024 ليقدم للمرضى الدوليين طب أسنان بمستوى أوروبي في بيئة أكثر يسرًا."
      ],
      credentials: [
        "ماجستير في علوم طب الأسنان — جامعة «Zoja e Këshillit të Mirë»",
        "مرخّص لمزاولة المهنة في إيطاليا والاتحاد الأوروبي وبلجيكا",
        "تخصص لمدة 3 سنوات في جراحة الفم — جامعة ألدنت",
        "تكوين مستمر في زراعة الأسنان وطب اللثة وتجميل الوجه"
      ],
      languages: ["English", "Italiano", "Français", "Español", "Shqip"]
    },
    team: {
      title: "فريقنا",
      intro: "ستة متخصصين متفانين يعملون إلى جانب الدكتور مبوكي للعناية بابتسامتك في كل خطوة."
    },
    gallery: {
      title: "قبل / بعد",
      intro: "تحولات حقيقية تمت في العيادة — انقر على صورة لتكبيرها."
    },
    videoTestimonials: {
      title: "شهادات فيديو",
      intro: "مرضى من إيطاليا وبلجيكا وأماكن أخرى يشاركون تجربتهم."
    },
    packages: {
      title: "باقاتنا",
      intro: "ثلاثة خيارات مصممة للمرضى الدوليين، من علاج واحد إلى إقامة كاملة.",
      items: [
        { title: "باقة All-on-4", features: ["4 زرعات أسنان عالية الجودة", "طقم أسنان مخصص بمظهر طبيعي", "أسنان مؤقتة في نفس اليوم", "فحصان بالأشعة المقطعية CBCT", "متابعة ما بعد العملية مشمولة"] },
        { title: "باقة All-on-6", features: ["6 زرعات أسنان عالية الجودة", "طقم أسنان مخصص بمظهر طبيعي", "استشارة وتخطيط كاملان", "تقنية دقة متقدمة", "متابعة ما بعد العملية مشمولة"] },
        { title: "باقة السياحة العلاجية للأسنان", features: ["عرض سعر مخصص بعد استشارة مجانية", "طقم أسنان يناسب احتياجاتك", "تخطيط كامل للرحلة", "متابعة ما بعد العملية مشمولة", "دعم في السفر والفندق"] }
      ]
    },

    journey: {
      title: "رحلتك، خطوة بخطوة",
      intro: "مسار مصمم للمرضى القادمين من الخارج، من أول رسالة إلى المتابعة بعد العودة.",
      steps: [
        { title: "استشارة وعرض سعر", desc: "أرسل لنا صورك أو أشعتك الحديثة؛ ستحصل على خطة علاج وعرض سعر مفصل خلال 48 ساعة." },
        { title: "تنظيم الرحلة", desc: "ننسّق مواعيدك والفندق الشريك والنقل من مطار تيرانا." },
        { title: "العلاج في العيادة", desc: "رعاية بالفرنسية أو الإنجليزية أو الإيطالية، مع جدول مضغوط لتقليل مدة إقامتك." },
        { title: "العودة والمتابعة", desc: "ضمان مكتوب على الأعمال المنجزة ومتابعة عن بُعد بالصور أو مكالمة فيديو." }
      ]
    },
    testimonials: {
      tag: "آراء منشورة من مرضى Virtus Dental Center",
      title: "ماذا يقول مرضانا",
      items: [
        { quote: "«كان كل شيء منظمًا مسبقًا، لم يكن عليّ سوى ركوب الطائرة. النتيجة فاقت توقعاتي.»", name: "كلير، فرنسا", flag: "🇫🇷" },
        { quote: "«الفريق يتحدث إنجليزية ممتازة، ووفّرت أكثر من نصف ما كنت سأدفعه في بلدي.»", name: "جيمس، المملكة المتحدة", flag: "🇬🇧" },
        { quote: "«الدكتور مبوكي يشرح كل شيء بوضوح بالإيطالية، وكانت لدي متابعة حقيقية بعد عودتي إلى ميلانو.»", name: "ماركو، إيطاليا", flag: "🇮🇹" }
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      intro: "لديك المزيد من الأسئلة؟ يجيب مساعدنا أسفل يمين الصفحة فورًا، أو راسلنا مباشرة.",
      items: [
        ["هل العيادة معتمدة وآمنة للمرضى الدوليين؟", "نعم: الدكتور مبوكي مرخّص لمزاولة المهنة في إيطاليا والاتحاد الأوروبي وبلجيكا، وتتبع العيادة بروتوكولات التعقيم الأوروبية ومعايير المواد."],
        ["كم من الوقت يجب أن أبقى في تيرانا؟", "يعتمد على العلاج: 3-4 أيام للتبييض أو القشور، حتى 5-7 أيام لـ All-on-4، وأحيانًا موزعة على إقامتين."],
        ["ماذا يحدث إذا واجهت مشكلة بعد عودتي إلى المنزل؟", "كل علاج مشمول بضمان مكتوب، مع متابعة عن بُعد بالصور أو الفيديو، والتنسيق مع طبيب أسنانك المحلي عند الحاجة."],
        ["هل يتحدث الفريق لغتي؟", "يتحدث فريقنا الفرنسية والإنجليزية والإيطالية والإسبانية والألبانية."],
        ["هل يشمل عرض السعر السفر والفندق؟", "عرض سعر الأسنان منفصل عن تكاليف السفر، لكننا نساعد في تنظيم النقل من المطار وفندق شريك بأسعار تفضيلية."],
        ["ما هي طرق الدفع المقبولة؟", "نقبل البطاقة والتحويل الدولي والنقد؛ يتم إبلاغك بالشروط الدقيقة مع عرض السعر."]
      ]
    },
    contact: {
      title: "اطلب عرض سعرك المجاني",
      intro: "رد خلال 48 ساعة مع خطة علاج تقديرية، دون التزام.",
      phoneLabel: "هاتف / واتساب",
      emailLabel: "البريد الإلكتروني",
      addrLabel: "العنوان",
      addr: "تيرانا، ألبانيا",
      mapLink: "عرض على الخريطة ←",
      hoursLabel: "ساعات العمل",
      hours: "الإثنين–السبت · 9 صباحًا–7 مساءً (بتوقيت تيرانا)"
    },
    form: {
      name: "الاسم الكامل", country: "البلد", email: "البريد الإلكتروني", phone: "الهاتف",
      treatment: "العلاج المهتم به",
      options: ["لست متأكدًا بعد", "زراعة الأسنان", "All-on-4 / All-on-6", "قشور تجميلية / تجميل", "تقويم الأسنان / Invisalign", "أخرى"],
      message: "رسالة (اختياري)", submit: "إرسال طلبي",
      success: "شكرًا! تم تسجيل طلبك — سيرد فريقنا خلال 48 ساعة.",
      error: "حدث خطأ. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.",
      sending: "جارٍ الإرسال…"
    },
    footer: { tagline: "زراعة الأسنان والتجميل وجراحة الفم والتقويم في تيرانا — لابتسامة صحية، على المستوى الدولي." },
    app: { home: "الرئيسية", treatments: "العلاجات", chat: "المساعد", contact: "اتصل بنا" },
    chat: {
      title: "مساعد فيرتوس",
      subtitle: "ردود فورية · تحويل إلى شخص عند الحاجة",
      placeholder: "اكتب سؤالك…",
      greeting: "مرحبًا 👋 أنا روبوت الدردشة في Virtus Dental Center. كيف يمكنني مساعدتك؟",
      quickReplies: [
        { intent: "price", label: "💶 الأسعار" },
        { intent: "hygiene", label: "🦷 النظافة" },
        { intent: "pain", label: "😣 ألم / طوارئ" },
        { intent: "aftercare", label: "🩹 بعد العلاج" },
        { intent: "implants", label: "🦷 الزرعات" },
        { intent: "travel", label: "✈️ السفر" },
        { intent: "human", label: "🗣️ شخص" },
      ],
      humanHandoff: "سيتولى أحد أعضاء الفريق المتابعة من هنا. يمكنك التواصل معنا مباشرة:",
      fallback: "ليس لدي إجابة جاهزة لهذا — سأحيله إلى الفريق. يمكنك أيضًا مراسلتنا مباشرة:"
    }
  },

  sq: {
    nav: { tourism: "Turizmi dentar", treatments: "Trajtimet", team: "Ekipi ynë", journey: "Udhëtimi juaj", faq: "Pyetje të shpeshta", book: "Ofertë falas" },
    ui: { about: 'Rreth nesh', beforeAfter: 'Para / pas', guides: 'Udhëzues' },
    hero: {
      title: "Buzëqeshja juaj e re fillon në Tiranë.",
      lede: "Virtus Dental Center pret çdo vit pacientë nga e gjithë Evropa për implante, faceta dhe buzëqeshje të plota — me një kirurg të trajnuar në Itali dhe Belgjikë.",
      cta1: "Kërko ofertë falas",
      cta2: "Shiko trajtimet",
      trust1: "I autorizuar të ushtrojë në Itali dhe Belgjikë",
      trust2: "Ekipi flet FR · EN · IT · ES",
      trust3: "Fluturime direkte nga Evropa",
      statLabel: "Planifikim i personalizuar sipas rastit klinik",
      li1: "Ofertë e detajuar brenda 48 orësh, mbi bazën e fotove ose rëntgeneve",
      li2: "Transferi nga aeroporti dhe hoteli partner përfshirë",
      li3: "Garanci me shkrim dhe ndjekje në distancë pas kthimit"
    },
    why: {
      title: "Pse t'i kuroni dhëmbët në Tiranë?",
      intro: "Shqipëria bashkon standardet klinike evropiane me një kosto jetese shumë më të ulët — pa kompromis mbi markat e implanteve, sterilizimin apo ndjekjen.",
      points: [
        { title: "Planifikim i personalizuar", desc: "Plani i trajtimit dhe vlerësimi përcaktohen sipas gjendjes klinike." },
        { title: "Mesatarisht 2 orë fluturim", desc: "Lidhje direkte nga shumica e qyteteve të mëdha evropiane drejt Tiranës." },
        { title: "Një kirurg i trajnuar në Itali", desc: "Dr. Arnold Mboqe është i kualifikuar dhe i autorizuar të ushtrojë në Itali dhe Belgjikë, i specializuar në kirurgji orale." },
        { title: "Një qëndrim gjithëpërfshirës", desc: "Transferi nga aeroporti, hoteli partner dhe përkthyesi: ju fokusoheni te buzëqeshja, ne kujdesemi për pjesën tjetër." }
      ],
      table: {
        headers: ["Étape", "Ce que vous recevez"],
        rows: [
          ["Évaluation", "Analyse des informations et examens disponibles"],
          ["Planification", "Proposition de traitement à confirmer après examen clinique"],
          ["Devis", "Estimation adaptée au plan retenu"],
          ["Séjour", "Calendrier et informations pratiques expliqués avant le voyage"],
          ["Suivi", "Consignes et suivi selon le protocole de soins"]
        ],
        note: "Les tarifs et délais sont déterminés au cas par cas après évaluation clinique. Aucun montant affiché ne constitue une promesse de prix."
      }
    },
    treatments: {
      title: "Trajtimet tona",
      intro: "Nga implanti i vetëm te rehabilitimi i plotë i gojës, një ekip multidisiplinor i drejtuar nga Dr. Mboqe.",
      items: [
        ["Implante dentare", "Vidë titani që zëvendëson rrënjën e dhëmbit — baza e çdo restaurimi afatgjatë."],
        ["All-on-4 / All-on-6 / All-on-8", "Rehabilitim i plotë i një nofulle mbi 4, 6 ose 8 implante, në një ndërhyrje të vetme."],
        ["Faceta dentare", "Guaska të holla qeramike të ngjitura mbi sipërfaqen e dukshme të dhëmbëve për një buzëqeshje harmonike."],
        ["Kurora & ura", "Restaurim i dhëmbëve të dëmtuar ose zëvendësim i dhëmbëve mungues pa implant."],
        ["Zbardhim dhëmbësh", "Zbardhim profesional në klinikë, me rezultate të dukshme që nga seanca e parë."],
        ["Ortodonci & Invisalign", "Drejtim dhëmbësh me vegla transparente ose aparat tradicional."],
        ["Kirurgji orale", "Nxjerrje komplekse, transplante kockore, ngritje sinusi dhe frenektomi."],
        ["Menaxhimi i apnesë së gjumit", "Një qasje multidisiplinare për problemet e frymëmarrjes të lidhura me kafshimin."],
        ["Vlerësim & ndjekje në distancë", "Oferta mbi bazën e fotove ose rëntgeneve të dërguara me email, ndjekje pas operacionit me video-thirrje."]
      ]
    },
    doctor: {
      name: "Dr. Arnold Mboqe",
      role: "Themelues & drejtor teknik — kirurg oral, implantolog, parodontolog, protetist, ortodont",
      paragraphs: [
        "I diplomuar në shkenca dentare në vitin 2014, Dr. Mboqe merr të njëjtin vit autorizimin për të ushtruar në Itali dhe në Bashkimin Evropian, dhënë nga Universiteti i Romës \"Tor Vergata\". Më pas përfundon një master në ortodonci si dhe një specializim trevjeçar në kirurgji orale në Universitetin Aldent në Tiranë.",
        "Pas disa vitesh ushtrimi në Belgjikë, ku merr gjithashtu autorizimin, ai themelon Virtus Dental Center në 2024 për t'u ofruar pacientëve ndërkombëtarë stomatologji të nivelit evropian në një kuadër më të përballueshëm."
      ],
      credentials: [
        "Master në shkenca dentare — Universiteti \"Zoja e Këshillit të Mirë\"",
        "I autorizuar të ushtrojë në Itali, BE dhe Belgjikë",
        "Specializim 3-vjeçar në kirurgji orale — Universiteti Aldent",
        "Formim i vazhdueshëm në implantologji, parodontologji dhe estetikë faciale"
      ],
      languages: ["English", "Italiano", "Français", "Español", "Shqip"]
    },
    team: {
      title: "Ekipi ynë",
      intro: "Ekipi ynë multidisiplinor bashkon kompetenca klinike dhe kujdesi për t'ju shoqëruar në çdo hap."
    },
    gallery: {
      title: "Para / pas",
      intro: "Transformime reale të realizuara në klinikë — klikoni mbi një foto për ta zmadhuar."
    },
    videoTestimonials: {
      title: "Dëshmi me video",
      intro: "Pacientë nga Italia, Belgjika dhe vende të tjera tregojnë përvojën e tyre."
    },
    packages: {
      title: "Paketat tona",
      intro: "Tre oferta të menduara për pacientët ndërkombëtarë, nga një trajtim i vetëm deri te një qëndrim i plotë.",
      items: [
        { title: "Paketa All-on-4", features: ["4 implante dentare cilësore", "Protezë e personalizuar me pamje natyrale", "Dhëmbë të përkohshëm në të njëjtën ditë", "2 skanime CBCT", "Ndjekje pas operacionit e përfshirë"] },
        { title: "Paketa All-on-6", features: ["6 implante dentare cilësore", "Protezë e personalizuar me pamje natyrale", "Konsultë dhe planifikim i plotë", "Teknologji e avancuar precize", "Ndjekje pas operacionit e përfshirë"] },
        { title: "Paketa e turizmit dentar", features: ["Ofertë e personalizuar pas konsultës falas", "Protezë e përshtatur me nevojat tuaja", "Planifikim i plotë i udhëtimit", "Ndjekje pas operacionit e përfshirë", "Mbështetje për udhëtim dhe hotel"] }
      ]
    },

    journey: {
      title: "Udhëtimi juaj, hap pas hapi",
      intro: "Një rrugëtim i menduar për pacientët që vijnë nga jashtë, nga mesazhi i parë deri te ndjekja pas kthimit.",
      steps: [
        { title: "Konsultë & ofertë", desc: "Na dërgoni fotot ose rëntgenet tuaja të fundit; do të merrni një plan trajtimi dhe ofertë të detajuar brenda 48 orësh." },
        { title: "Organizimi i udhëtimit", desc: "Koordinojmë datat tuaja, hotelin partner dhe transferin nga aeroporti i Tiranës." },
        { title: "Trajtimi në klinikë", desc: "Kujdes në frëngjisht, anglisht ose italisht, me një program të ngjeshur për të kufizuar kohëzgjatjen e qëndrimit." },
        { title: "Kthimi & ndjekja", desc: "Garanci me shkrim mbi punimet e kryera dhe ndjekje në distancë me foto ose video-thirrje." }
      ]
    },
    testimonials: {
      tag: "Vlerësime të publikuara nga pacientët e Virtus Dental Center",
      title: "Çfarë thonë pacientët tanë",
      items: [
        { quote: "«Gjithçka ishte organizuar paraprakisht, m'u desh vetëm të merrja avionin. Rezultati tejkaloi pritshmëritë e mia.»", name: "Claire, Francë", flag: "🇫🇷" },
        { quote: "«Ekipi flet anglisht perfekt dhe kursova më shumë se gjysmën e çmimit që do të paguaja në vendin tim.»", name: "James, Mbretëria e Bashkuar", flag: "🇬🇧" },
        { quote: "«Dr. Mboqe shpjegon gjithçka qartë në italisht, pata një ndjekje të vërtetë pas kthimit në Milano.»", name: "Marco, Itali", flag: "🇮🇹" }
      ]
    },
    faq: {
      title: "Pyetje të shpeshta",
      intro: "Pyetje të tjera? Asistenti ynë poshtë djathtas përgjigjet menjëherë, ose na shkruani direkt.",
      items: [
        ["A është klinika e certifikuar dhe e sigurt për pacientët ndërkombëtarë?", "Po: Dr. Mboqe është i autorizuar të ushtrojë në Itali, BE dhe Belgjikë, dhe klinika ndjek protokollet evropiane të sterilizimit dhe standardet e materialeve."],
        ["Sa kohë duhet të qëndroj në Tiranë?", "Varet nga trajtimi: 3-4 ditë për zbardhim ose faceta, deri në 5-7 ditë për All-on-4, ndonjëherë të ndara në dy qëndrime."],
        ["Çfarë ndodh nëse kam një problem pasi kthehem në shtëpi?", "Çdo trajtim vjen me garanci me shkrim, ndjekje në distancë me foto ose video-thirrje, dhe koordinim me dentistin tuaj lokal nëse është e nevojshme."],
        ["A e flet ekipi gjuhën time?", "Ekipi ynë flet frëngjisht, anglisht, italisht, spanjisht dhe shqip."],
        ["A e përfshin oferta udhëtimin dhe hotelin?", "Oferta dentare është e ndarë nga shpenzimet e udhëtimit, por ju ndihmojmë të organizoni transferin nga aeroporti dhe një hotel partner me tarifa preferenciale."],
        ["Cilat metoda pagese pranoni?", "Pranohen karta, transferta ndërkombëtare dhe para në dorë; kushtet e sakta ju komunikohen së bashku me ofertën."]
      ]
    },
    contact: {
      title: "Kërkoni ofertën tuaj falas",
      intro: "Përgjigje brenda 48 orësh me një plan trajtimi të vlerësuar, pa asnjë detyrim.",
      phoneLabel: "Telefon / WhatsApp",
      emailLabel: "Email",
      addrLabel: "Adresa",
      addr: "Tiranë, Shqipëri",
      mapLink: "Shiko në hartë →",
      hoursLabel: "Orari",
      hours: "Hën–Shtu · 9:00–19:00 (ora e Tiranës)"
    },
    form: {
      name: "Emri i plotë", country: "Shteti", email: "Email", phone: "Telefoni",
      treatment: "Trajtimi që ju intereson",
      options: ["Nuk e di ende", "Implante dentare", "All-on-4 / All-on-6", "Faceta / estetikë", "Ortodonci / Invisalign", "Tjetër"],
      message: "Mesazh (opsionale)", submit: "Dërgo kërkesën time",
      success: "Faleminderit! Kërkesa juaj u regjistrua — ekipi ynë do t'ju përgjigjet brenda 48 orësh.",
      error: "Ndodhi një gabim. Ju lutemi provoni përsëri ose na telefononi direkt.",
      sending: "Duke dërguar…"
    },
    footer: { tagline: "Implante, estetikë, kirurgji orale dhe ortodonci në Tiranë — për një buzëqeshje të shëndetshme, në shkallë ndërkombëtare." },
    app: { home: "Kryesore", treatments: "Kujdesi", chat: "Asistenti", contact: "Kontakt" },
    chat: {
      title: "Asistenti Virtus",
      subtitle: "Përgjigje të menjëhershme · kalim te një njeri nëse nevojitet",
      placeholder: "Shkruani pyetjen tuaj…",
      greeting: "Përshëndetje 👋 Jam chatbot-i i Virtus Dental Center. Si mund t’ju ndihmoj?",
      quickReplies: [
        { intent: "price", label: "💶 Çmimet" },
        { intent: "hygiene", label: "🦷 Higjiena" },
        { intent: "pain", label: "😣 Dhimbje / urgjencë" },
        { intent: "aftercare", label: "🩹 Pas trajtimit" },
        { intent: "implants", label: "🦷 Implante" },
        { intent: "travel", label: "✈️ Udhëtim" },
        { intent: "human", label: "🗣️ Njeri" },
      ],
      humanHandoff: "Një anëtar i ekipit do të vazhdojë nga këtu. Mund të na kontaktoni direkt:",
      fallback: "Nuk kam një përgjigje të gatshme për këtë — po ia kaloj ekipit. Mund të na shkruani edhe direkt:"
    }
  },

  zh: {
    nav: { tourism: "牙科旅游", treatments: "治疗项目", team: "我们的团队", journey: "您的行程", faq: "常见问题", book: "免费报价" },
    ui: { about: '关于我们', beforeAfter: '治疗前 / 后', guides: '指南' },
    hero: {
      title: "您的新笑容,从地拉那开始。",
      lede: "Virtus 牙科中心每年接待来自全欧洲的患者,提供种植牙、贴面和全面微笑改造——由一位在意大利和比利时受训的外科医生主刀。",
      cta1: "申请免费报价",
      cta2: "查看治疗项目",
      trust1: "获意大利和比利时执业授权",
      trust2: "团队会说法语、英语、意大利语、西班牙语",
      trust3: "通过地拉那的国际交通",
      statLabel: "根据病例制定个性化治疗计划",
      li1: "根据照片或X光片,48小时内提供详细报价",
      li2: "含机场接送及合作酒店",
      li3: "书面质保,回国后提供远程随访"
    },
    why: {
      title: "为什么选择在地拉那治疗牙齿?",
      intro: "阿尔巴尼亚将欧洲临床标准与更低廉的生活成本相结合——种植体品牌、消毒流程和随访服务毫不妥协。",
      points: [
        { title: "个性化规划", desc: "治疗方案和费用根据患者的临床情况确定。" },
        { title: "国际出行", desc: "旅行安排与临床治疗计划分开说明。" },
        { title: "在意大利受训的外科医生", desc: "Arnold Mboqe 医生具备资质,获意大利和比利时执业授权,专攻口腔外科。" },
        { title: "全程无忧的行程安排", desc: "机场接送、合作酒店和翻译服务一应俱全:您只需专注于笑容,其余交给我们。" }
      ],
      table: {
        headers: ["Étape", "Ce que vous recevez"],
        rows: [
          ["Évaluation", "Analyse des informations et examens disponibles"],
          ["Planification", "Proposition de traitement à confirmer après examen clinique"],
          ["Devis", "Estimation adaptée au plan retenu"],
          ["Séjour", "Calendrier et informations pratiques expliqués avant le voyage"],
          ["Suivi", "Consignes et suivi selon le protocole de soins"]
        ],
        note: "Les tarifs et délais sont déterminés au cas par cas après évaluation clinique. Aucun montant affiché ne constitue une promesse de prix."
      }
    },
    treatments: {
      title: "我们的治疗项目",
      intro: "从单颗种植牙到全口修复,由 Mboqe 医生领导的多学科团队为您服务。",
      items: [
        ["种植牙", "用钛螺钉替代牙根——任何持久修复的基础。"],
        ["All-on-4 / All-on-6 / All-on-8", "通过一次手术,在4、6或8颗种植体上完成整颌修复。"],
        ["牙贴面", "粘贴于牙齿可见表面的薄陶瓷贴片,打造和谐笑容。"],
        ["牙冠与牙桥", "修复受损牙齿或在无需种植的情况下替换缺失牙齿。"],
        ["牙齿美白", "诊所专业美白,首次疗程即可见效。"],
        ["正畸与隐适美(Invisalign)", "使用透明矫治器或传统牙套进行牙齿矫正。"],
        ["口腔外科", "复杂拔牙、植骨、上颌窦提升及唇系带修整。"],
        ["睡眠呼吸暂停管理", "针对咬合相关呼吸问题的多学科治疗方案。"],
        ["评估与远程随访", "根据邮件发送的照片或X光片提供报价,术后通过视频通话随访。"]
      ]
    },
    doctor: {
      name: "Arnold Mboqe 医生",
      role: "创始人兼技术总监——口腔外科医生、种植专家、牙周病专家、修复专家、正畸专家",
      paragraphs: [
        "Mboqe 医生于2014年获得牙科学位,同年获得由罗马“Tor Vergata”大学颁发的意大利及欧盟执业授权。随后,他在地拉那的 Aldent 大学完成了正畸学硕士学位以及为期三年的口腔外科专科培训。",
        "在比利时执业多年并同样获得当地执业授权后,他于2024年创立了 Virtus 牙科中心,旨在以更实惠的方式为国际患者提供欧洲水准的牙科治疗。"
      ],
      credentials: [
        "牙科学硕士 — “Zoja e Këshillit të Mirë”大学",
        "获意大利、欧盟及比利时执业授权",
        "口腔外科三年专科培训 — Aldent 大学",
        "持续接受种植学、牙周病学及面部美学方面的培训"
      ],
      languages: ["English", "Italiano", "Français", "Español", "Shqip"]
    },
    team: {
      title: "我们的团队",
      intro: "六位专业医护人员与Mboqe医生携手合作,在每个环节悉心呵护您的笑容。"
    },
    gallery: {
      title: "前后对比",
      intro: "诊所真实案例——点击照片可放大查看。"
    },
    videoTestimonials: {
      title: "视频患者评价",
      intro: "来自意大利、比利时等地的患者分享他们的真实经历。"
    },
    packages: {
      title: "我们的套餐",
      intro: "为国际患者设计的三种方案,从单项治疗到全程住宿安排。",
      items: [
        { title: "All-on-4 套餐", features: ["4颗高品质种植体", "定制假牙,外观自然", "当天佩戴临时牙齿", "2次CBCT扫描", "含术后随访"] },
        { title: "All-on-6 套餐", features: ["6颗高品质种植体", "定制假牙,外观自然", "全面咨询与规划", "先进精密技术", "含术后随访"] },
        { title: "牙科旅游套餐", features: ["免费咨询后提供个性化报价", "根据您的需求定制假牙", "全程行程规划", "含术后随访", "旅行与酒店支持"] }
      ]
    },

    journey: {
      title: "您的行程,一步步引导",
      intro: "专为境外患者设计的流程,从第一条消息到回国后的随访。",
      steps: [
        { title: "咨询与报价", desc: "发送您最近的照片或X光片;48小时内您将收到治疗方案和详细报价。" },
        { title: "行程安排", desc: "我们为您协调行程日期、合作酒店以及地拉那机场的接送服务。" },
        { title: "在诊所接受治疗", desc: "提供法语、英语或意大利语服务,行程安排紧凑,尽量缩短您的停留时间。" },
        { title: "回国与随访", desc: "对已完成的治疗提供书面质保,并通过照片或视频通话进行远程随访。" }
      ]
    },
    testimonials: {
      tag: "Virtus Dental Center 患者公开评价",
      title: "患者怎么说",
      items: [
        { quote: "“一切都提前安排好了,我只需要坐飞机过来。结果远超我的预期。”", name: "Claire,法国", flag: "🇫🇷" },
        { quote: "“团队英语非常流利,我省下了在国内治疗费用的一半以上。”", name: "James,英国", flag: "🇬🇧" },
        { quote: "“Mboqe 医生用意大利语把一切都解释得很清楚,回到米兰后我也得到了真正的随访服务。”", name: "Marco,意大利", flag: "🇮🇹" }
      ]
    },
    faq: {
      title: "常见问题",
      intro: "还有其他问题?右下角的助手可即时回答,或直接联系我们。",
      items: [
        ["诊所是否经过认证,对国际患者安全吗?", "是的:Mboqe 医生获意大利、欧盟及比利时执业授权,诊所遵循欧洲的消毒规范和材料标准。"],
        ["我需要在地拉那停留多久?", "视治疗项目而定:美白或简单贴面需3-4天,All-on-4通常需要5-7天,有时会分两次行程完成。"],
        ["回国后如果出现问题怎么办?", "所有治疗均提供书面质保,并通过照片或视频通话进行远程随访,必要时与您当地的牙医协调。"],
        ["团队会说我的语言吗?", "我们的团队会说法语、英语、意大利语、西班牙语和阿尔巴尼亚语。"],
        ["报价是否包含旅行和住宿费用?", "牙科报价与旅行费用是分开的,但我们会协助安排机场接送和享有优惠价格的合作酒店。"],
        ["你们接受哪些付款方式?", "接受银行卡、国际转账和现金;具体条款会随报价一并告知。"]
      ]
    },
    contact: {
      title: "申请您的免费报价",
      intro: "48小时内回复预估治疗方案,无需承担任何义务。",
      phoneLabel: "电话 / WhatsApp",
      emailLabel: "电子邮箱",
      addrLabel: "地址",
      addr: "阿尔巴尼亚,地拉那",
      mapLink: "查看地图 →",
      hoursLabel: "营业时间",
      hours: "周一至周六 · 9:00–19:00(地拉那时间)"
    },
    form: {
      name: "姓名", country: "国家", email: "电子邮箱", phone: "电话",
      treatment: "感兴趣的治疗项目",
      options: ["还不确定", "种植牙", "All-on-4 / All-on-6", "贴面 / 美学修复", "正畸 / 隐适美", "其他"],
      message: "留言(选填)", submit: "提交申请",
      success: "谢谢!您的申请已收到——我们的团队将在48小时内回复。",
      error: "发生错误,请重试或直接致电我们。",
      sending: "发送中…"
    },
    footer: { tagline: "在地拉那提供种植牙、美学修复、口腔外科和正畸治疗——为您带来健康笑容,面向国际患者。" },
    app: { home: "首页", treatments: "治疗", chat: "助手", contact: "联系" },
    chat: {
      title: "Virtus 助手",
      subtitle: "即时回复 · 必要时转接人工",
      placeholder: "输入您的问题…",
      greeting: "您好 👋 我是 Virtus Dental Center 的聊天机器人。请问如何帮助您？",
      quickReplies: [
        { intent: "price", label: "💶 价格" },
        { intent: "hygiene", label: "🦷 口腔护理" },
        { intent: "pain", label: "😣 疼痛 / 紧急" },
        { intent: "aftercare", label: "🩹 治疗后" },
        { intent: "implants", label: "🦷 种植牙" },
        { intent: "travel", label: "✈️ 旅行" },
        { intent: "human", label: "🗣️ 人工客服" },
      ],
      humanHandoff: "接下来将由团队成员为您服务。您也可以直接联系我们:",
      fallback: "这个问题我暂时没有现成答案——我会转交给团队处理。您也可以直接联系我们:"
    }
  }
};

export const CONTACT_INFO = {
  phone: "+355 69 271 1166",
  phoneHref: "+355692711166",
  email: "virtusdentalpro@gmail.com",
  whatsapp: "https://wa.me/33628270118",
  mapUrl: "https://maps.app.goo.gl/VCWRtYxdGg32ny3K6",
  instagram: "https://www.instagram.com/virtus.dental.center/",
  facebook: "https://www.facebook.com/profile.php?id=61558465962309",
  youtube: "https://www.youtube.com/@VirtusDentalCenter1",
  tiktok: "https://www.tiktok.com/@arnold.mboqe",
  linkedin: "https://www.linkedin.com/in/arnold-mboqe-192104263?originalSubdomain=be",
  virtualTour: "https://my.matterport.com/show/?edit=1&lang=fr&m=yNewkZDoCqA"
};

export const TREATMENT_CATALOG = [
  {"slug": "dental-implants", "title": "Implants dentaires", "category": "Implantologie", "desc": "Remplacement d’une ou plusieurs dents manquantes par un implant et une restauration personnalisée.", "indications": "Dents manquantes, extraction ancienne ou besoin de restaurer une dent avec une solution fixe.", "process": "Bilan clinique et imagerie; planification; pose de l’implant; phase de cicatrisation; restauration définitive selon le cas."},
  {"slug": "all-on-4", "title": "All-on-4", "category": "Implantologie", "desc": "Réhabilitation fixe d’une arcade complète sur quatre implants lorsque l’anatomie et le diagnostic le permettent.", "indications": "Édentement complet ou dents très compromises nécessitant une réhabilitation globale.", "process": "Évaluation 3D; planification implantaire; chirurgie; provisoire selon indication; restauration finale après la phase appropriée."},
  {"slug": "all-on-6", "title": "All-on-6", "category": "Implantologie", "desc": "Réhabilitation complète d’une arcade avec six implants, selon la quantité et la qualité osseuse disponibles.", "indications": "Perte dentaire étendue et besoin de stabilité pour une prothèse fixe.", "process": "Diagnostic; étude osseuse; pose des implants; provisoire si indiqué; prothèse définitive après validation clinique."},
  {"slug": "all-on-8", "title": "All-on-8", "category": "Implantologie", "desc": "Réhabilitation complète utilisant huit implants lorsque ce protocole est retenu après étude du cas.", "indications": "Cas nécessitant une répartition plus large des points d’ancrage.", "process": "Imagerie 3D; planification; chirurgie; restauration provisoire ou définitive selon le protocole; suivi."},
  {"slug": "zygomatic-implants", "title": "Implants zygomatiques", "category": "Implantologie avancée", "desc": "Option implantaire spécialisée pour certains patients présentant une perte osseuse maxillaire importante.", "indications": "Atrophie sévère du maxillaire lorsque les solutions conventionnelles doivent être discutées avec des alternatives avancées.", "process": "Imagerie 3D approfondie; analyse anatomique; planification chirurgicale; traitement et suivi spécialisé."},
  {"slug": "pterygoid-implants", "title": "Implants ptérygoïdiens", "category": "Implantologie avancée", "desc": "Technique spécialisée d’ancrage postérieur du maxillaire dans des indications sélectionnées.", "indications": "Manque d’os postérieur et nécessité d’étudier une alternative à certaines greffes.", "process": "Scanner 3D; étude anatomique; planification; chirurgie; restauration et contrôles."},
  {"slug": "nasal-implants", "title": "Implants transnasaux", "category": "Implantologie avancée", "desc": "Solution spécialisée pouvant être envisagée dans certains cas de forte résorption du maxillaire.", "indications": "Perte osseuse importante du maxillaire et indication confirmée par l’imagerie.", "process": "Bilan 3D; sélection du cas; planification; chirurgie; restauration et suivi."},
  {"slug": "immediate-loading", "title": "Implantologie à mise en charge immédiate", "category": "Implantologie", "desc": "Protocole permettant, dans certains cas sélectionnés, de recevoir une restauration provisoire rapidement après la chirurgie implantaire.", "indications": "Stabilité primaire suffisante et conditions cliniques compatibles avec le protocole.", "process": "Diagnostic; chirurgie; contrôle de la stabilité; provisoire si indiqué; restauration définitive après cicatrisation."},
  {"slug": "subperiosteal-implants", "title": "Implants sous-périostés", "category": "Implantologie avancée", "desc": "Solution implantaire personnalisée étudiée pour certaines anatomies avec volume osseux limité.", "indications": "Cas complexes où les solutions implantaires conventionnelles doivent être comparées à des alternatives.", "process": "Imagerie; conception personnalisée; validation du plan; chirurgie; restauration et suivi."},
  {"slug": "bone-grafting", "title": "Greffe osseuse", "category": "Chirurgie / Implantologie", "desc": "Augmentation du volume osseux avant ou pendant une réhabilitation implantaire lorsque cela est indiqué.", "indications": "Volume osseux insuffisant pour la solution implantaire envisagée.", "process": "Imagerie; choix de la technique; intervention; cicatrisation; réévaluation avant la suite du traitement."},
  {"slug": "sinus-lift", "title": "Sinus lift", "category": "Chirurgie / Implantologie", "desc": "Élévation du plancher sinusien pour créer les conditions anatomiques nécessaires à certains implants du maxillaire supérieur.", "indications": "Hauteur osseuse insuffisante dans les secteurs postérieurs du maxillaire.", "process": "Imagerie 3D; évaluation du sinus; intervention; cicatrisation; implant selon le protocole."},
  {"slug": "full-mouth-rehabilitation", "title": "Réhabilitation complète de la bouche", "category": "Réhabilitation", "desc": "Plan global combinant plusieurs disciplines pour restaurer fonction, confort, esthétique et équilibre occlusal.", "indications": "Usure importante, nombreuses dents absentes ou restaurations multiples à reprendre.", "process": "Bilan global; priorisation des soins; séquençage; traitements coordonnés; contrôle et maintenance."},
  {"slug": "veneers", "title": "Facettes dentaires", "category": "Esthétique", "desc": "Restaurations fines personnalisées destinées à modifier la forme, la teinte ou les proportions de certaines dents.", "indications": "Coloration, petites irrégularités, proportions ou demandes esthétiques après évaluation.", "process": "Analyse du sourire; projet esthétique; préparation si nécessaire; essayage; collage et suivi."},
  {"slug": "dental-bonding", "title": "Composite & bonding", "category": "Esthétique", "desc": "Correction conservatrice de petites imperfections avec du composite dentaire.", "indications": "Éclats mineurs, petites asymétries, espaces ou modifications limitées de forme.", "process": "Analyse; choix de teinte; préparation minimale; stratification du composite; finition et contrôle."},
  {"slug": "teeth-whitening", "title": "Blanchiment dentaire", "category": "Esthétique", "desc": "Éclaircissement professionnel après contrôle de l’état dentaire et gingival.", "indications": "Colorations extrinsèques ou teinte naturelle jugée trop foncée après bilan.", "process": "Évaluation; choix du protocole; séance(s); consignes alimentaires et d’entretien; contrôle si nécessaire."},
  {"slug": "gum-contouring", "title": "Contourage gingival / gummy smile", "category": "Esthétique gingivale", "desc": "Remodelage de la ligne gingivale pour harmoniser les proportions entre dents, gencives et sourire.", "indications": "Excès gingival, ligne gingivale irrégulière ou sourire gingival après bilan parodontal.", "process": "Évaluation; planification esthétique; remodelage selon indication; consignes de cicatrisation; contrôle."},
  {"slug": "lip-repositioning", "title": "Repositionnement de la lèvre", "category": "Esthétique faciale", "desc": "Intervention visant à modifier la position de la lèvre dans certaines indications de sourire gingival.", "indications": "Exposition gingivale importante liée notamment à la dynamique de la lèvre, après diagnostic.", "process": "Consultation; analyse du sourire; planification; intervention; suivi de cicatrisation."},
  {"slug": "smile-makeover", "title": "Smile makeover", "category": "Esthétique", "desc": "Projet esthétique global combinant plusieurs soins dentaires selon les objectifs et la situation clinique.", "indications": "Patients souhaitant harmoniser plusieurs éléments du sourire plutôt qu’une seule dent.", "process": "Diagnostic esthétique et fonctionnel; simulation/projet; séquence de soins; validation; suivi."},
  {"slug": "crowns-bridges", "title": "Couronnes & bridges", "category": "Prothèse", "desc": "Restaurations fixes destinées à protéger une dent fragilisée ou remplacer une dent absente.", "indications": "Dent très restaurée, fracture, perte de substance ou espace édenté.", "process": "Préparation si nécessaire; empreinte numérique ou conventionnelle; provisoire; laboratoire; pose et contrôle."},
  {"slug": "removable-prosthetics", "title": "Prothèses amovibles", "category": "Prothèse", "desc": "Solutions amovibles partielles ou complètes pour remplacer plusieurs dents ou une arcade.", "indications": "Édentement partiel ou complet et indication prothétique adaptée.", "process": "Bilan; conception; empreintes; essayages; fabrication; ajustements et suivi."},
  {"slug": "endodontics", "title": "Endodontie / traitement de canal", "category": "Soins conservateurs", "desc": "Traitement de la pulpe dentaire lorsque l’infection ou l’inflammation menace la conservation de la dent.", "indications": "Douleur, infection ou lésion pulpaire confirmée par l’examen clinique et l’imagerie.", "process": "Diagnostic; anesthésie; nettoyage et désinfection canalaire; obturation; restauration coronaire."},
  {"slug": "periodontology", "title": "Parodontologie", "category": "Gencives", "desc": "Prévention, diagnostic et traitement des maladies des gencives et des tissus de soutien des dents.", "indications": "Saignements, inflammation, poches parodontales, récession ou perte de soutien.", "process": "Bilan parodontal; hygiène; débridement/détartrage; traitements ciblés; maintenance."},
  {"slug": "extractions-wisdom-teeth", "title": "Extractions & dents de sagesse", "category": "Chirurgie orale", "desc": "Extraction de dents non conservables ou de dents de sagesse selon leur position et leur indication.", "indications": "Douleur, infection, inclusion, manque de place ou dent impossible à restaurer.", "process": "Examen et imagerie; anesthésie; extraction; consignes post-opératoires; contrôle si nécessaire."},
  {"slug": "oral-surgery", "title": "Chirurgie orale", "category": "Chirurgie orale", "desc": "Prise en charge chirurgicale des situations buccales nécessitant une intervention spécialisée.", "indications": "Extractions complexes, chirurgie pré-implantaire et autres indications chirurgicales.", "process": "Bilan; imagerie; planification; intervention; surveillance et suivi post-opératoire."},
  {"slug": "frenectomy", "title": "Frénectomie", "category": "Chirurgie orale", "desc": "Correction d’un frein lorsqu’il interfère avec la fonction, l’orthodontie ou certains objectifs de traitement.", "indications": "Frein labial ou lingual problématique selon l’évaluation clinique.", "process": "Examen; indication; intervention sous anesthésie locale selon le cas; cicatrisation et contrôle."},
  {"slug": "orthodontics", "title": "Orthodontie", "category": "Orthodontie", "desc": "Correction de l’alignement dentaire et de certaines malocclusions avec un appareil adapté.", "indications": "Chevauchement, espaces, rotations ou problèmes d’occlusion après diagnostic orthodontique.", "process": "Bilan; radiographies/empreintes ou scan; plan; activation des appareils; contrôles réguliers."},
  {"slug": "invisalign", "title": "Invisalign / aligneurs transparents", "category": "Orthodontie", "desc": "Alignement dentaire à l’aide de gouttières transparentes lorsque le cas est compatible.", "indications": "Malpositions dentaires sélectionnées et besoins esthétiques ou fonctionnels compatibles avec les aligneurs.", "process": "Scan; simulation; planification; série de gouttières; contrôles; contention."},
  {"slug": "retainers", "title": "Contentions", "category": "Orthodontie", "desc": "Dispositifs destinés à stabiliser le résultat obtenu après un traitement orthodontique.", "indications": "Fin de traitement orthodontique ou besoin de maintenir un alignement corrigé.", "process": "Choix du dispositif; prise d’empreinte/scan; livraison; contrôles et consignes de port."},
  {"slug": "sleep-apnoea", "title": "Apnée du sommeil", "category": "Fonction / Occlusion", "desc": "Évaluation dentaire et orientation multidisciplinaire des troubles respiratoires du sommeil lorsque la prise en charge dentaire est pertinente.", "indications": "Ronflement, suspicion d’apnée ou troubles associés nécessitant une évaluation médicale.", "process": "Questionnaire; examen; orientation si nécessaire; solution dentaire uniquement si indiquée et validée médicalement."},
  {"slug": "facial-aesthetics", "title": "Esthétique faciale", "category": "Esthétique médicale", "desc": "Actes esthétiques non chirurgicaux proposés selon l’indication, les objectifs et l’évaluation du patient.", "indications": "Objectifs esthétiques du visage compatibles avec les actes proposés par l’équipe.", "process": "Consultation; évaluation; information sur bénéfices/risques; acte si indiqué; suivi."},
  {"slug": "prp", "title": "PRP", "category": "Esthétique médicale", "desc": "Traitement utilisant du plasma riche en plaquettes dans les indications retenues après évaluation.", "indications": "Indication esthétique ou médicale spécifique validée lors de la consultation.", "process": "Consultation; prélèvement; préparation; application/injection selon protocole; suivi."},
  {"slug": "assessment-follow-up", "title": "Évaluation & suivi à distance", "category": "Parcours international", "desc": "Pré-évaluation à partir de photos, radios ou examens transmis, puis suivi à distance lorsque cela est cliniquement approprié.", "indications": "Patients internationaux souhaitant préparer leur venue ou assurer le suivi après le retour.", "process": "Collecte des informations; analyse préliminaire; consultation; planification; suivi à distance."},
  {"slug": "oral-lesions", "title": "Lésions buccales", "category": "Chirurgie buccale", "desc": "Évaluation et prise en charge des lésions de la bouche selon leur nature et leur indication.", "indications": "Lésion, masse, ulcération persistante ou anomalie nécessitant une évaluation professionnelle.", "process": "Examen clinique; imagerie ou examens complémentaires si nécessaire; orientation ou traitement selon le diagnostic."},
  {"slug": "pre-prosthetic-surgery", "title": "Chirurgie pré-prothétique", "category": "Chirurgie buccale", "desc": "Préparation des tissus et des structures buccales avant certaines réhabilitations prothétiques.", "indications": "Anatomie ou tissus nécessitant une préparation avant la réalisation d'une prothèse.", "process": "Bilan; planification; geste chirurgical indiqué; cicatrisation; réévaluation avant la prothèse."},
  {"slug": "periodontal-surgery", "title": "Chirurgie parodontale", "category": "Parodontologie", "desc": "Approches chirurgicales destinées à traiter certaines atteintes des tissus qui soutiennent les dents.", "indications": "Maladie parodontale ou défaut tissulaire nécessitant une approche chirurgicale.", "process": "Bilan parodontal; traitement initial; indication chirurgicale si nécessaire; suivi et maintenance."},
  {"slug": "traditional-braces", "title": "Appareil dentaire traditionnel", "category": "Orthodontie", "desc": "Traitement orthodontique fixe pour corriger l'alignement et l'occlusion lorsque cette option est indiquée.", "indications": "Malocclusions et problèmes d'alignement nécessitant un traitement orthodontique.", "process": "Bilan orthodontique; planification; pose et réglages réguliers; contention en fin de traitement."},
  {"slug": "dental-bridges", "title": "Ponts dentaires", "category": "Prothèse dentaire", "desc": "Restauration fixe destinée à remplacer une ou plusieurs dents manquantes lorsque les conditions sont favorables.", "indications": "Edentement limité avec dents supports adaptées ou autre indication prothétique.", "process": "Examen; préparation si nécessaire; empreinte ou scan numérique; essayage; pose et contrôles."},
  {"slug": "dental-prostheses", "title": "Prothèses dentaires", "category": "Prothèse dentaire", "desc": "Solutions prothétiques personnalisées pour restaurer la fonction et l'esthétique après une perte dentaire.", "indications": "Perte d'une ou plusieurs dents lorsque la solution prothétique est adaptée.", "process": "Bilan; conception; essayages; ajustements; livraison et suivi."},
];

// Media is served locally from frontend/public/assets/. Missing files are handled
// by a visual fallback instead of a broken-image icon.
export const TEAM_MEMBERS = [
  { slug: "arnold-mboqe", name: "Dr. Arnold Mboqe", role: "Chirurgien buccal · Implantologie · Parodontologie · Prosthodontie · Orthodontie", photo: "/assets/team/arnold-mboqe.avif", profileUrl: "" },
  { slug: "armando-becoku", name: "Dr. Armando Beçoku", role: "Implantologie · Prosthodontie · Parodontologie", photo: "/assets/team/armando-becoku.jpg", profileUrl: "" },
  { slug: "nela-mataj", name: "Dr. Nela Mataj", role: "Chirurgie maxillo-faciale · Implantologie · Prosthodontie · Parodontologie", photo: "/assets/team/nela-mataj.jpg", profileUrl: "" },
  { slug: "ester-rina", name: "Dr. Ester Rina", role: "Prosthodontie · Endodontie", photo: "/assets/team/ester-rina.avif", profileUrl: "" },
  { slug: "adela-dajlani", name: "Dr. Adela Dajlani", role: "Dentisterie générale", photo: "/assets/team/adela-dajlani.avif", profileUrl: "" },
  { slug: "paola-qefa", name: "Inf. Paola Qefa", role: "Infirmière esthétique · Sage-femme", photo: "/assets/team/paola-qefa.avif", profileUrl: "" },
  { slug: "iris-kurti", name: "Inf. Iris Kurti", role: "Infirmière esthétique · Sage-femme", photo: "/assets/team/iris-kurti.avif", profileUrl: "" }
];

export const GALLERY_IMAGES = [
  { src: "/assets/gallery/full-mouth-restoration.avif", name: "Réhabilitation complète de la bouche avec prothèse fixe" },
  { src: "/assets/gallery/aesthetic-treatment-1.avif", name: "Traitement esthétique dentaire, dents blanches et uniformes" },
  { src: "/assets/gallery/aesthetic-treatment-2.avif", name: "Avant/après traitement esthétique, dents usées et décolorées" },
  { src: "/assets/gallery/akim.avif", name: "Akim — avant/après" },
  { src: "/assets/gallery/alban-leti.avif", name: "Alban Leti — avant/après" },
  { src: "/assets/gallery/andrea.avif", name: "Andrea — avant/après" },
  { src: "/assets/gallery/anna-maria-facette.avif", name: "Anna Maria — facettes dentaires" },
  { src: "/assets/gallery/cossima.avif", name: "Cossima — avant/après" },
  { src: "/assets/gallery/dritan-all-on-6.jpg", name: "Dritan — All-on-6" },
  { src: "/assets/gallery/enzo.avif", name: "Enzo — avant/après" },
  { src: "/assets/gallery/fernando.avif", name: "Fernando — avant/après" },
  { src: "/assets/gallery/flora.jpg", name: "Flora — avant/après" },
  { src: "/assets/gallery/kawa.jpg", name: "Kawa — avant/après" },
  { src: "/assets/gallery/maria-carmela.avif", name: "Maria Carmela — avant/après" },
  { src: "/assets/gallery/matilda.avif", name: "Matilda — avant/après" },
  { src: "/assets/gallery/michellina.avif", name: "Michellina — avant/après" },
  { src: "/assets/gallery/nicola.avif", name: "Nicola — avant/après" },
  { src: "/assets/gallery/rita.avif", name: "Rita — avant/après" },
  { src: "/assets/gallery/vincenzo.jpg", name: "Vincenzo — avant/après" },
  { src: "/assets/gallery/general-treatment.avif", name: "Exemple de traitement dentaire" }
];

export const VIDEO_TESTIMONIALS = [
  { poster: "/assets/video-testimonials/robert-poster.jpg", video: "/assets/video-testimonials/robert.mp4", name: "Robert" },
  { poster: "/assets/video-testimonials/patient-belgique-poster.jpg", video: "/assets/video-testimonials/patient-belgique.mp4", name: "Patient — Belgique" },
  { poster: "/assets/video-testimonials/patrizia-e-roberto-italie-poster.jpg", video: "/assets/video-testimonials/patrizia-e-roberto-italie.mp4", name: "Patrizia e Roberto — Italie" },
  { poster: "/assets/video-testimonials/cossima-italie-poster.jpg", video: "/assets/video-testimonials/cossima-italie.mp4", name: "Cossima — Italie" },
  { poster: "/assets/video-testimonials/carmela-di-dio-italie-poster.jpg", video: "/assets/video-testimonials/carmela-di-dio-italie.mp4", name: "Carmela Di Dio — Italie" },
  { poster: "/assets/video-testimonials/camila-niziol-italie-poster.jpg", video: "/assets/video-testimonials/camila-niziol-italie.mp4", name: "Camila Niziol — Italie" },
  { poster: "/assets/video-testimonials/angelo-di-flumeri-italie-poster.jpg", video: "/assets/video-testimonials/angelo-di-flumeri-italie.mp4", name: "Angelo Di Flumeri — Italie" },
  { poster: "/assets/video-testimonials/rita-zizzi-poster.jpg", video: "/assets/video-testimonials/rita-zizzi.mp4", name: "Rita Zizzi" },
  { poster: "/assets/video-testimonials/zhu-li-fu-chine-poster.jpg", video: "/assets/video-testimonials/zhu-li-fu-chine.mp4", name: "Zhu Li Fu — Chine" },
  { poster: "/assets/video-testimonials/patient-1-poster.jpg", video: "/assets/video-testimonials/patient-1.mp4", name: "Témoignage patient" },
  { poster: "/assets/video-testimonials/patient-2-poster.jpg", video: "/assets/video-testimonials/patient-2.mp4", name: "Témoignage patient" },
  { poster: "/assets/video-testimonials/patient-3-poster.jpg", video: "/assets/video-testimonials/patient-3.mp4", name: "Témoignage patient" },
  { poster: "/assets/video-testimonials/patient-4-poster.jpg", video: "/assets/video-testimonials/patient-4.mp4", name: "Témoignage patient" },
  { poster: "/assets/video-testimonials/making-art-with-science-poster.jpg", video: "/assets/video-testimonials/making-art-with-science.mp4", name: "Making Art with Science — présentation Virtus" }
];

export const PRESS_LOGOS = [];

export const REAL_TESTIMONIALS = [];

export const DOCTOR_PROFILES = {
  "arnold-mboqe": { name: "Dr. Arnold Mboqe", role: "Chirurgien buccal · Implantologue · Parodontiste · Prosthodontiste · Orthodontiste", expertise: ["Implantologie", "Chirurgie orale", "Parodontologie", "Prosthodontie", "Orthodontie"], bio: "Fondateur et directeur technique du Virtus Dental Center. Son parcours comprend une formation dentaire en Italie, une spécialisation en chirurgie orale et une expérience professionnelle en Belgique. Il exerce avec une approche multidisciplinaire pour les réhabilitations complexes." },
  "armando-becoku": { name: "Dr. Armando Beçoku", role: "Implantologue · Prosthodontiste · Parodontiste", expertise: ["Implantologie", "Prosthodontie", "Parodontologie", "Tissus mous"], bio: "Dentiste diplômé de l'Université Aldent de Tirana. Son parcours comprend une formation spécialisée en prothèse fixe, facettes et implantologie avancée, avec une formation continue en gestion des tissus mous autour des dents et implants." },
  "nela-mataj": { name: "Dr. Nela Mataj", role: "Chirurgienne maxillo-faciale · Implantologue · Prosthodontiste · Parodontiste", expertise: ["Chirurgie maxillo-faciale", "Implantologie", "Prosthodontie", "Parodontologie", "Microchirurgie"], bio: "Diplômée de la Faculté de médecine dentaire de Tirana, elle exerce en chirurgie orale et maxillo-faciale depuis 2023. Elle poursuit une formation continue en implantologie, microchirurgie et gestion des tissus mous." },
  "ester-rina": { name: "Dr. Ester Rina", role: "Prosthodontiste · Endodontiste", expertise: ["Prosthodontie fixe", "Endodontie", "Dentisterie restauratrice", "Facettes"], bio: "Diplômée de l'Université Aldent en 2022 et licenciée en 2024. Elle a suivi des formations en prothèse fixe, endodontie, facettes en porcelaine et endodontie clinique avancée." },
  "adela-dajlani": { name: "Dr. Adela Dajlani", role: "Dentiste généraliste", expertise: ["Dentisterie générale", "Endodontie", "Radiographie", "Dentisterie restauratrice"], bio: "Dentiste généraliste formée à Tirana, avec une expérience professionnelle en Albanie et aux États-Unis. Elle poursuit régulièrement sa formation, notamment en endodontie, techniques de préparation et radiographie dentaire." },
  "paola-qefa": { name: "Inf. Paola Qefa", role: "Infirmière · Sage-femme · Esthétique médicale", expertise: ["Soins infirmiers", "Esthétique faciale", "PRP", "Urgences médicales"], bio: "Diplômée en soins infirmiers et maïeutique de l’Université Fan S. Noli de Korçë en 2019 et licenciée en 2020. Elle a effectué un stage clinique à l’hôpital Koço Gliozheni, puis a suivi des formations en manipulations infirmières, urgences médicales, PRP et esthétique faciale. Elle intervient avec une approche centrée sur la sécurité, le confort et l’accompagnement du patient." },
  "iris-kurti": { name: "Inf. Iris Kurti", role: "Infirmière · Sage-femme · Esthétique médicale", expertise: ["Soins infirmiers", "Esthétique faciale", "PRP", "Soins pré et postopératoires"], bio: "Diplômée en soins infirmiers de l’Université de Médecine de Tirana et licenciée comme infirmière. Elle a travaillé comme assistante clinique en dermatologie puis dans les soins infirmiers de chirurgie esthétique, avec une expérience en prise en charge pré et postopératoire. Elle a également suivi des formations en esthétique faciale, PRP et urgences médicales." }
};

// The original site lists a broader treatment scope than the first 9 cards.
// Keep the existing translations, then add the missing services to every language
// using concise localized copy so no language loses access to the full catalogue.
const ADDITIONAL_TREATMENTS = {
  fr: [
    ["All-on-6", "Réhabilitation d’une arcade complète sur six implants avec une prothèse personnalisée."],
    ["All-on-8", "Réhabilitation complète d'une arcade sur huit implants lorsque le protocole est indiqué."], ["Réhabilitation complète de la bouche", "Plan global combinant plusieurs disciplines pour restaurer fonction, confort et esthétique."], ["Greffe osseuse", "Augmentation osseuse avant ou pendant une chirurgie implantaire lorsque nécessaire."], ["Sinus lift", "Élévation du sinus maxillaire pour certaines indications implantaires."], ["Prothèses amovibles", "Solutions amovibles personnalisées pour remplacer plusieurs dents ou une arcade."], ["Endodontie / traitement de canal", "Prise en charge des infections ou inflammations de la pulpe dentaire et restauration de la dent."], ["Parodontologie", "Diagnostic et traitement des maladies des gencives et des tissus de soutien."], ["Frénectomie", "Correction d'un frein lorsqu'il gêne la fonction ou certains traitements."], ["Extractions & dents de sagesse", "Extraction des dents non conservables ou des dents de sagesse selon l'indication."], ["Esthétique faciale", "Soins esthétiques non chirurgicaux proposés par l'équipe formée à l'esthétique médicale."], ["PRP", "Traitement par plasma riche en plaquettes proposé selon l'indication retenue."]
  ],
  en: [
    ["All-on-6", "Full-arch rehabilitation on six implants with a customised prosthesis."],["All-on-8","Full-arch rehabilitation on eight implants when clinically indicated."],["Full-mouth rehabilitation","A coordinated treatment plan combining several dental disciplines."],["Bone grafting","Bone augmentation before or during implant treatment when required."],["Sinus lift","Maxillary sinus elevation for selected implant cases."],["Removable prosthetics","Custom removable solutions for multiple missing teeth or an arch."],["Endodontics / root canal","Treatment of infected or inflamed dental pulp followed by tooth restoration."],["Periodontology","Diagnosis and treatment of gum and supporting-tissue disease."],["Frenectomy","Minor surgical correction of a restrictive frenum when indicated."],["Extractions & wisdom teeth","Removal of non-restorable or wisdom teeth according to the clinical indication."],["Facial aesthetics","Non-surgical aesthetic care delivered by the trained medical aesthetics team."],["PRP","Platelet-rich plasma treatment offered when clinically appropriate."]],
  it: [
    ["All-on-6", "Riabilitazione completa di un’arcata su sei impianti con protesi personalizzata."],["All-on-8","Riabilitazione completa di un'arcata su otto impianti quando indicato."],["Riabilitazione completa della bocca","Piano globale che combina più discipline odontoiatriche."],["Innesto osseo","Aumento dell'osso prima o durante il trattamento implantare quando necessario."],["Rialzo del seno mascellare","Elevazione del seno mascellare per casi implantari selezionati."],["Protesi rimovibili","Soluzioni rimovibili personalizzate per più denti mancanti o un'arcata."],["Endodonzia / trattamento canalare","Trattamento della polpa infiammata o infetta e successivo restauro."],["Parodontologia","Diagnosi e trattamento delle patologie gengivali e dei tessuti di supporto."],["Frenulectomia","Correzione chirurgica del frenulo quando indicata."],["Estrazioni e denti del giudizio","Rimozione dei denti non recuperabili o dei denti del giudizio secondo indicazione."],["Estetica facciale","Trattamenti estetici non chirurgici eseguiti dal team formato in estetica medica."],["PRP","Trattamento con plasma ricco di piastrine quando indicato."]],
  es: [
    ["All-on-6", "Rehabilitación completa de una arcada sobre seis implantes con prótesis personalizada."],["All-on-8","Rehabilitación completa de una arcada sobre ocho implantes cuando está indicada."],["Rehabilitación oral completa","Plan global que combina varias disciplinas odontológicas."],["Injerto óseo","Aumento óseo antes o durante el tratamiento implantológico cuando es necesario."],["Elevación de seno","Elevación del seno maxilar para determinados casos de implantes."],["Prótesis removibles","Soluciones removibles personalizadas para varias ausencias dentales o una arcada."],["Endodoncia / tratamiento de conductos","Tratamiento de la pulpa inflamada o infectada y restauración posterior."],["Periodoncia","Diagnóstico y tratamiento de las enfermedades de las encías y tejidos de soporte."],["Frenectomía","Corrección quirúrgica de un frenillo cuando está indicada."],["Extracciones y muelas del juicio","Extracción de dientes no conservables o muelas del juicio según indicación."],["Estética facial","Tratamientos estéticos no quirúrgicos realizados por el equipo de estética médica."],["PRP","Tratamiento con plasma rico en plaquetas cuando está indicado."]],
  de: [
    ["All-on-6", "Vollbogen-Rehabilitation auf sechs Implantaten mit individuell angepasstem Zahnersatz."],["All-on-8","Vollbogen-Rehabilitation auf acht Implantaten, wenn klinisch angezeigt."],["Komplette Mundrehabilitation","Ganzheitlicher Behandlungsplan aus mehreren Fachbereichen."],["Knochenaufbau","Knochenaufbau vor oder während einer Implantatbehandlung, wenn erforderlich."],["Sinuslift","Anhebung des Kieferhöhlenbodens für ausgewählte Implantatfälle."],["Herausnehmbarer Zahnersatz","Individuell angepasste Lösungen bei mehreren fehlenden Zähnen oder einer Zahnreihe."],["Endodontie / Wurzelbehandlung","Behandlung entzündeter oder infizierter Zahnpulpa mit anschließender Restauration."],["Parodontologie","Diagnostik und Behandlung von Zahnfleisch- und Zahnhalteapparaterkrankungen."],["Frenektomie","Chirurgische Korrektur eines störenden Lippen- oder Zungenbändchens, wenn angezeigt."],["Extraktionen & Weisheitszähne","Entfernung nicht erhaltungswürdiger Zähne oder Weisheitszähne nach Indikation."],["Gesichtsästhetik","Nicht-chirurgische ästhetische Behandlungen durch das geschulte medizinische Ästhetik-Team."],["PRP","Behandlung mit plättchenreichem Plasma bei geeigneter Indikation."]],
  pt: [
    ["All-on-6", "Reabilitação completa de uma arcada sobre seis implantes com prótese personalizada."],["All-on-8","Reabilitação completa de uma arcada sobre oito implantes quando indicada."],["Reabilitação oral completa","Plano global que combina várias áreas da medicina dentária."],["Enxerto ósseo","Aumento ósseo antes ou durante o tratamento com implantes quando necessário."],["Elevação do seio maxilar","Elevação do seio maxilar para determinados casos de implantes."],["Próteses removíveis","Soluções removíveis personalizadas para vários dentes ausentes ou uma arcada."],["Endodontia / tratamento de canal","Tratamento da polpa inflamada ou infetada e restauração do dente."],["Periodontologia","Diagnóstico e tratamento das doenças das gengivas e tecidos de suporte."],["Frenectomia","Correção cirúrgica de um freio quando indicada."],["Extrações e dentes do siso","Extração de dentes não recuperáveis ou dentes do siso conforme indicação."],["Estética facial","Tratamentos estéticos não cirúrgicos pela equipa de estética médica."],["PRP","Tratamento com plasma rico em plaquetas quando indicado."]],
  ru: [
    ["All-on-6", "Полная реабилитация зубного ряда на шести имплантах с индивидуальным протезом."],["All-on-8","Полная реабилитация зубного ряда на восьми имплантах по показаниям."],["Полная реабилитация полости рта","Комплексный план с участием нескольких стоматологических направлений."],["Костная пластика","Увеличение объёма кости до или во время имплантации при необходимости."],["Синус-лифтинг","Подъём дна гайморовой пазухи для отдельных имплантационных случаев."],["Съёмные протезы","Индивидуальные съёмные решения при множественной потере зубов."],["Эндодонтия / лечение каналов","Лечение воспалённой или инфицированной пульпы с последующим восстановлением зуба."],["Пародонтология","Диагностика и лечение заболеваний дёсен и опорных тканей."],["Френэктомия","Хирургическая коррекция уздечки по показаниям."],["Удаление зубов и зубов мудрости","Удаление зубов, которые невозможно сохранить, или зубов мудрости по показаниям."],["Эстетика лица","Неоперационные эстетические процедуры подготовленной медицинской командой."],["PRP","Терапия плазмой, обогащённой тромбоцитами, по показаниям."]],
  ar: [
    ["All-on-6", "إعادة تأهيل كامل للقوس السني على ست غرسات مع تعويض مخصص."],["All-on-8","إعادة تأهيل كامل للقوس السني على ثمانية غرسات عند وجود الاستطباب."],["إعادة تأهيل الفم بالكامل","خطة علاج شاملة تجمع عدة تخصصات سنية."],["ترقيع العظم","زيادة حجم العظم قبل أو أثناء زراعة الأسنان عند الحاجة."],["رفع الجيب الفكي","رفع قاع الجيب الفكي لبعض حالات زراعة الأسنان."],["الأطقم المتحركة","حلول متحركة مخصصة لتعويض عدة أسنان أو قوس سني."],["علاج جذور الأسنان","علاج لب السن الملتهب أو المصاب ثم ترميم السن."],["علاج اللثة","تشخيص وعلاج أمراض اللثة والأنسجة الداعمة."],["استئصال اللجام","تصحيح جراحي للجام عند وجود استطباب طبي."],["خلع الأسنان وأضراس العقل","خلع الأسنان غير القابلة للحفظ أو أضراس العقل وفق الحالة."],["تجميل الوجه","علاجات تجميلية غير جراحية يقدمها الفريق المتخصص في التجميل الطبي."],["PRP","علاج بالبلازما الغنية بالصفائح وفق الاستطباب."]],
  sq: [
    ["All-on-6", "Rehabilitim i plotë i harkut mbi gjashtë implante me protezë të personalizuar."],["All-on-8","Rehabilitim i plotë i harkut mbi tetë implante kur indikohet klinikisht."],["Rehabilitim i plotë i gojës","Plan gjithëpërfshirës që kombinon disa fusha të stomatologjisë."],["Graft kockor","Rritje e volumit kockor para ose gjatë implantimit kur nevojitet."],["Ngritje e sinusit","Ngritje e sinusit maksilar për raste të përzgjedhura implantare."],["Protezat e lëvizshme","Zgjidhje të personalizuara të lëvizshme për disa dhëmbë ose një hark."],["Endodonci / trajtim kanalesh","Trajtimi i pulpës së infektuar ose të inflamuar dhe restaurimi i dhëmbit."],["Periodontologji","Diagnostikim dhe trajtim i sëmundjeve të mishrave dhe indeve mbështetëse."],["Frenektomi","Korrigjim kirurgjikal i frenulumit kur indikohet."],["Ekstraksione dhe dhëmbët e pjekurisë","Heqja e dhëmbëve të pakonservueshëm ose e dhëmbëve të pjekurisë sipas rastit."],["Estetikë faciale","Trajtime estetike jo-kirurgjikale nga ekipi i trajnuar në estetikë mjekësore."],["PRP","Trajtim me plazmë të pasur me trombocite kur indikohet."]],
  zh: [
    ["All-on-6", "使用六颗种植体和定制修复体进行全弓修复。"],["All-on-8","在适应证明确时，使用八颗种植体进行全弓修复。"],["全口重建","结合多个牙科专业的综合治疗方案。"],["骨增量","在种植前或种植过程中根据需要增加骨量。"],["上颌窦提升","针对部分种植病例进行上颌窦底提升。"],["活动义齿","针对多颗缺牙或全弓缺牙的个性化活动修复。"],["牙髓治疗 / 根管治疗","处理炎症或感染的牙髓，并在治疗后修复牙齿。"],["牙周治疗","诊断和治疗牙龈及牙周支持组织疾病。"],["系带切除术","在有明确适应证时进行系带的外科矫正。"],["拔牙与智齿","根据临床情况拔除无法保留的牙齿或智齿。"],["面部美容","由接受医学美容培训的团队提供的非手术美容护理。"],["PRP","在适应证明确时提供富血小板血浆治疗。"]]
};
const CATALOG_FALLBACK_ADDITIONS = [
  ["Orthodontie", "Traitements orthodontiques avec appareils adaptés au diagnostic et aux objectifs du patient."],
  ["Contentions", "Dispositifs destinés à maintenir les résultats obtenus après un traitement orthodontique."],
  ["Composite & bonding", "Correction conservatrice de petites imperfections de forme, longueur ou couleur avec du composite."]
];
for (const lang of Object.keys(i18n)) {
  if (i18n[lang]?.treatments && i18n[lang].treatments.items.length < 23) i18n[lang].treatments.items = [...i18n[lang].treatments.items, ...CATALOG_FALLBACK_ADDITIONS];
}
for (const [lang, additions] of Object.entries(ADDITIONAL_TREATMENTS)) {
  if (i18n[lang]?.treatments) i18n[lang].treatments.items = [...i18n[lang].treatments.items, ...additions];
}

export const SUPPORTED_LANGS = ["fr", "en", "it", "es", "de", "pt", "ru", "ar", "sq", "zh"];

export const LANG_META = {
  fr: { native: "Français", rtl: false },
  en: { native: "English", rtl: false },
  it: { native: "Italiano", rtl: false },
  es: { native: "Español", rtl: false },
  de: { native: "Deutsch", rtl: false },
  pt: { native: "Português", rtl: false },
  ru: { native: "Русский", rtl: false },
  ar: { native: "العربية", rtl: true },
  sq: { native: "Shqip", rtl: false },
  zh: { native: "中文", rtl: false }
};
// Coming soon: ru, ar, zh — need RTL layout (ar) and CJK font handling (zh),
// added separately so quality isn't rushed.
