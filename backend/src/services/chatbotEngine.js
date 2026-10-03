// Predictable, dependency-free chatbot. It provides general information and routes
// clinical questions to a human team member rather than attempting diagnosis.
export const CHATBOT_LANGS = ["fr", "en", "it", "es", "de", "pt", "ru", "ar", "sq", "zh"];

const INTENT_KEYWORDS = {
  price: {
    fr: ["prix", "tarif", "cout", "coût", "combien", "budget"], en: ["price", "cost", "how much", "fee", "budget"], it: ["prezzo", "costo", "quanto", "tariffa", "budget"], es: ["precio", "coste", "costo", "cuanto", "presupuesto"], de: ["preis", "kosten", "wieviel", "budget"], pt: ["preco", "preço", "custo", "quanto", "orcamento", "orçamento"], sq: ["cmim", "çmim", "kosto", "sa kushton", "buxhet"], ru: ["цена", "стоимость", "сколько стоит", "бюджет"], ar: ["سعر", "تكلفة", "كم", "ميزانية"], zh: ["价格", "费用", "多少钱", "报价"]
  },
  travel: {
    fr: ["voyage", "hotel", "hôtel", "aeroport", "aéroport", "vol", "avion", "transfert"], en: ["travel", "hotel", "airport", "flight", "transfer"], it: ["viaggio", "hotel", "aeroporto", "volo", "transfer"], es: ["viaje", "hotel", "aeropuerto", "vuelo", "traslado"], de: ["reise", "hotel", "flughafen", "flug", "transfer"], pt: ["viagem", "hotel", "aeroporto", "voo", "transporte"], sq: ["udhetim", "udhëtim", "hotel", "aeroport", "fluturim"], ru: ["поездка", "отель", "аэропорт", "рейс", "трансфер"], ar: ["سفر", "فندق", "مطار", "رحلة", "نقل"], zh: ["旅行", "酒店", "机场", "航班", "接送"]
  },
  warranty: {
    fr: ["garantie", "assurance", "probleme apres", "problème après", "risque"], en: ["warranty", "guarantee", "problem after", "risk"], it: ["garanzia", "assicurazione", "problema dopo", "rischio"], es: ["garantia", "garantía", "seguro", "riesgo"], de: ["garantie", "versicherung", "risiko"], pt: ["garantia", "seguro", "risco"], sq: ["garanci", "sigurim", "rrezik"], ru: ["гарантия", "страховка", "риск"], ar: ["ضمان", "تأمين", "خطر"], zh: ["质保", "保证", "保险", "风险"]
  },
  duration: {
    fr: ["duree", "durée", "combien de temps", "jours", "sejour", "séjour"], en: ["duration", "how long", "days", "stay"], it: ["durata", "quanto tempo", "giorni", "soggiorno"], es: ["duracion", "duración", "cuanto tiempo", "dias", "estancia"], de: ["dauer", "wie lange", "tage", "aufenthalt"], pt: ["duracao", "duração", "quanto tempo", "dias", "estadia"], sq: ["kohezgjatje", "kohëzgjatje", "sa kohe", "dite", "qendrim"], ru: ["длительность", "сколько времени", "дней", "пребывание"], ar: ["مدة", "كم من الوقت", "أيام", "إقامة"], zh: ["时长", "多久", "天数", "停留"]
  },
  booking: {
    fr: ["rendez-vous", "rdv", "reserver", "réserver", "devis"], en: ["appointment", "book", "booking", "quote"], it: ["appuntamento", "prenot", "preventivo", "consulto"], es: ["cita", "reservar", "presupuesto", "consulta"], de: ["termin", "buchen", "angebot"], pt: ["consulta", "marcar", "orcamento", "orçamento"], sq: ["takim", "rezervo", "ofert"], ru: ["запись", "забронировать", "смета"], ar: ["موعد", "حجز", "عرض سعر"], zh: ["预约", "预订", "报价"]
  },
  documents: {
    fr: ["photo", "photos", "radio", "radioographie", "scanner", "cbct", "envoyer", "envoyer mes dents", "dossier"], en: ["photo", "photos", "x-ray", "scan", "cbct", "send", "records", "documents"], it: ["foto", "radiografia", "scanner", "cbct", "inviare", "documenti"], es: ["foto", "radiografía", "escáner", "cbct", "enviar", "documentos"], de: ["foto", "röntgen", "scan", "cbct", "senden", "unterlagen"], pt: ["foto", "radiografia", "scanner", "cbct", "enviar", "documentos"], sq: ["foto", "radiografi", "skaner", "cbct", "dërgo", "dokumente"], ru: ["фото", "рентген", "снимок", "кт", "отправить", "документы"], ar: ["صورة", "أشعة", "تصوير", "cbct", "إرسال", "ملفات"], zh: ["照片", "x光", "ct", "cbct", "发送", "资料"]
  },
  treatment: {
    fr: ["quel traitement", "quelle solution", "que me conseillez", "facette ou implant", "all-on-4 ou all-on-6", "traitement adapté"], en: ["which treatment", "what treatment", "what do you recommend", "veneer or implant", "all-on-4 or all-on-6", "best treatment"], it: ["quale trattamento", "quale soluzione", "cosa consigli", "faccette o impianti", "all-on-4 o all-on-6"], es: ["qué tratamiento", "que tratamiento", "qué recomienda", "carillas o implantes", "all-on-4 o all-on-6"], de: ["welche behandlung", "welche lösung", "was empfehlen", "veneers oder implantat", "all-on-4 oder all-on-6"], pt: ["qual tratamento", "qual solução", "o que recomenda", "facetas ou implantes", "all-on-4 ou all-on-6"], sq: ["cilin trajtim", "cila zgjidhje", "çfarë rekomandoni", "faseta apo implant", "all-on-4 apo all-on-6"], ru: ["какое лечение", "какой вариант", "что вы рекомендуете", "виниры или импланты", "all-on-4 или all-on-6"], ar: ["أي علاج", "ما الحل", "ماذا تنصح", "فينيير أم زرعة", "all-on-4 أم all-on-6"], zh: ["什么治疗", "哪种方案", "你推荐什么", "贴面还是种植牙", "all-on-4还是all-on-6"]
  },
  implants: {
    fr: ["implant", "implants", "marque implant", "materiaux", "matériaux"], en: ["implant", "implants", "implant brand", "materials"], it: ["impianto", "impianti", "marca impianto", "materiali"], es: ["implante", "implantes", "marca implante", "materiales"], de: ["implantat", "implantate", "implantatmarke", "material"], pt: ["implante", "implantes", "marca do implante", "materiais"], sq: ["implant", "implante", "marka", "materiale"], ru: ["имплант", "импланты", "марка импланта", "материалы"], ar: ["زرعة", "زراعة", "ماركة الزرعة", "مواد"], zh: ["种植牙", "种植体", "品牌", "材料"]
  },
  hygiene: {
    fr: ["brossage", "brosser", "brosse", "dentifrice", "fluor", "soie dentaire", "fil dentaire", "hygiène"], en: ["brushing", "brush", "toothbrush", "toothpaste", "fluoride", "floss", "hygiene"], it: ["spazzolare", "spazzolino", "dentifricio", "fluoro", "filo", "igiene"], es: ["cepillado", "cepillo", "pasta dental", "fluor", "hilo dental", "higiene"], de: ["putzen", "zahnbürste", "zahnpasta", "fluorid", "zahnseide", "pflege"], pt: ["escovar", "escova", "pasta de dentes", "flúor", "fio dental", "higiene"], sq: ["larje", "furce", "pastë", "fluor", "fill dentar", "higjienë"], ru: ["чистить", "щетка", "паста", "фтор", "нить", "гигиена"], ar: ["تنظيف", "فرشاة", "معجون", "فلورايد", "خيط الأسنان", "نظافة"], zh: ["刷牙", "牙刷", "牙膏", "氟", "牙线", "口腔卫生"]
  },
  pain: {
    fr: ["mal aux dents", "douleur dentaire", "douleur", "dent fait mal", "mal de dent"], en: ["toothache", "tooth pain", "dental pain", "tooth hurts"], it: ["mal di denti", "dolore dentale", "dente fa male"], es: ["dolor de muelas", "dolor dental", "me duele un diente"], de: ["zahnschmerzen", "zahnschmerz", "zahn tut weh"], pt: ["dor de dente", "dor dentária", "dente dói"], sq: ["dhimbje dhembi", "dhimbje dentare", "dhembi me dhemb"], ru: ["зубная боль", "болит зуб", "боль в зубе"], ar: ["ألم الأسنان", "ألم السن", "سنّي يؤلمني"], zh: ["牙痛", "牙齿疼", "牙疼"]
  },
  swelling: {
    fr: ["gonflement", "gonflé", "joue gonflée", "abcès", "abces", "visage gonflé"], en: ["swelling", "swollen", "swollen cheek", "abscess", "facial swelling"], it: ["gonfiore", "gonfio", "guancia gonfia", "ascesso"], es: ["hinchazón", "hinchado", "mejilla hinchada", "absceso"], de: ["schwellung", "geschwollen", "wangenschwellung", "abszess"], pt: ["inchaço", "inchado", "bochecha inchada", "abcesso"], sq: ["ënjtje", "i enjtur", "faqe e enjtur", "absces"], ru: ["отек", "опухоль", "опухла щека", "абсцесс"], ar: ["تورم", "منتفخ", "تورم الوجه", "خراج"], zh: ["肿胀", "脸肿", "面部肿胀", "脓肿"]
  },
  bleeding: {
    fr: ["saignement", "saigne", "gencive saigne"], en: ["bleeding", "bleeds", "gum bleeding"], it: ["sanguinamento", "sanguina", "gengive sanguinano"], es: ["sangrado", "sangra", "encías sangran"], de: ["blutung", "blutet", "zahnfleischbluten"], pt: ["sangramento", "sangra", "gengiva sangra"], sq: ["gjakderdhje", "gjakos", "mishrat gjakosin"], ru: ["кровотечение", "кровоточит", "кровоточивость десен"], ar: ["نزيف", "ينزف", "نزيف اللثة"], zh: ["出血", "牙龈出血", "流血"]
  },
  trauma: {
    fr: ["dent cassée", "dent casse", "dent cassé", "je me suis casse", "je me suis cassé", "dent expulsée", "dent expulsee", "traumatisme", "choc"], en: ["broken tooth", "knocked out tooth", "dental trauma", "injury", "hit my tooth"], it: ["dente rotto", "dente spezzato", "dente avulso", "trauma", "colpo"], es: ["diente roto", "diente partido", "diente expulsado", "traumatismo", "golpe"], de: ["gebrochener zahn", "ausgeschlagener zahn", "trauma", "verletzung"], pt: ["dente partido", "dente quebrado", "dente avulsionado", "trauma", "pancada"], sq: ["dhemb i thyer", "dhembi u thye", "traume", "goditje"], ru: ["сломанный зуб", "выбитый зуб", "травма зуба", "удар"], ar: ["سن مكسور", "سقط السن", "إصابة الأسنان", "ضربة"], zh: ["牙齿断了", "牙齿脱落", "牙外伤", "撞伤"]
  },
  aftercare: {
    fr: ["après implant", "apres implant", "après extraction", "apres extraction", "post opératoire", "postop", "après chirurgie"], en: ["after implant", "after extraction", "post operative", "post-op", "after surgery"], it: ["dopo impianto", "dopo estrazione", "post operatorio", "dopo chirurgia"], es: ["después de implante", "despues de implante", "después de extracción", "postoperatorio", "después de cirugía"], de: ["nach implantat", "nach extraktion", "nach operation", "postoperativ"], pt: ["depois do implante", "depois da extração", "pós-operatório", "depois da cirurgia"], sq: ["pas implantit", "pas nxjerrjes", "pas operacionit"], ru: ["после имплантации", "после удаления", "после операции", "после хирургии"], ar: ["بعد زراعة الأسنان", "بعد الخلع", "بعد العملية", "بعد الجراحة"], zh: ["种植牙后", "拔牙后", "术后", "手术后"]
  },
  human: {
    fr: ["humain", "parler a quelqu'un", "parler à quelqu'un", "personne", "conseiller"], en: ["human", "talk to someone", "agent", "person", "advisor"], it: ["operatore", "parlare con qualcuno", "persona"], es: ["humano", "hablar con alguien", "persona"], de: ["mensch", "mit jemandem sprechen", "person"], pt: ["humano", "falar com alguem", "pessoa"], sq: ["njeri", "flas me dike", "person"], ru: ["человек", "поговорить с кем-то", "оператор"], ar: ["إنسان", "شخص", "أتحدث مع"], zh: ["人工", "转人工", "客服"]
  },
  greeting: {
    fr: ["bonjour", "salut", "hello", "coucou"], en: ["hi", "hello", "hey"], it: ["ciao", "salve", "buongiorno"], es: ["hola", "buenas"], de: ["hallo", "guten tag"], pt: ["ola", "olá", "bom dia"], sq: ["pershendetje", "përshëndetje", "tung"], ru: ["привет", "здравствуйте"], ar: ["مرحبا", "السلام عليكم", "أهلا"], zh: ["你好", "您好"]
  }
};

const RESPONSE = (fr, en, it, es, de, pt, sq, ru, ar, zh) => ({ fr, en, it, es, de, pt, sq, ru, ar, zh });
const RESPONSES = {
  advice: RESPONSE(
    "Repères généraux : brossez-vous les dents 2 fois par jour pendant environ 2 minutes avec un dentifrice fluoré, nettoyez entre les dents chaque jour et évitez de brosser trop fort. Le chatbot ne pose pas de diagnostic.",
    "General guidance: brush twice a day for about 2 minutes with fluoride toothpaste, clean between your teeth daily and avoid brushing too hard. This chatbot cannot diagnose you.",
    "Consigli generali: lava i denti 2 volte al giorno per circa 2 minuti con dentifricio al fluoro, pulisci tra i denti ogni giorno ed evita di spazzolare troppo forte. Il chatbot non fa diagnosi.",
    "Orientación general: cepíllate 2 veces al día durante unos 2 minutos con pasta fluorada, limpia entre los dientes a diario y evita cepillar con demasiada fuerza. El chatbot no puede diagnosticar.",
    "Allgemeine Hinweise: Putzen Sie zweimal täglich etwa 2 Minuten mit fluoridhaltiger Zahnpasta, reinigen Sie die Zahnzwischenräume täglich und vermeiden Sie zu starken Druck. Der Chatbot stellt keine Diagnose.",
    "Orientação geral: escove os dentes 2 vezes por dia durante cerca de 2 minutos com pasta fluoretada, limpe entre os dentes diariamente e evite força excessiva. O chatbot não faz diagnósticos.",
    "Këshilla të përgjithshme: lani dhëmbët 2 herë në ditë për rreth 2 minuta me pastë me fluor, pastroni hapësirat ndërdentare çdo ditë dhe shmangni presionin e tepërt. Chatbot-i nuk vendos diagnozë.",
    "Общие рекомендации: чистите зубы 2 раза в день около 2 минут пастой с фтором, ежедневно очищайте межзубные промежутки и не давите щёткой слишком сильно. Чат-бот не ставит диагноз.",
    "إرشادات عامة: نظف أسنانك مرتين يوميًا لمدة نحو دقيقتين باستخدام معجون بالفلورايد، ونظف بين الأسنان يوميًا وتجنب الضغط الشديد. لا يقوم المساعد بالتشخيص.",
    "一般建议：每天使用含氟牙膏刷牙2次，每次约2分钟，并每天清洁牙缝，避免用力过大。聊天助手不能进行诊断。"
  ),
  hygiene: RESPONSE(
    "Pour l'hygiène quotidienne : brossage 2 fois par jour pendant environ 2 minutes avec un dentifrice fluoré, nettoyage interdentaire 1 fois par jour et brosse souple. Si vous avez une maladie des gencives, un appareil ou des implants, demandez des conseils personnalisés à votre dentiste.",
    "For daily oral care: brush twice a day for about 2 minutes with fluoride toothpaste, clean between teeth once a day and use a soft-bristled brush. If you have gum disease, braces or implants, ask your dentist for personalised advice.",
    "Per l'igiene quotidiana: spazzola 2 volte al giorno per circa 2 minuti con dentifricio al fluoro, pulisci tra i denti una volta al giorno e usa uno spazzolino morbido. Con gengive malate, apparecchi o impianti, chiedi consigli personalizzati al dentista.",
    "Para la higiene diaria: cepíllate 2 veces al día durante unos 2 minutos con pasta fluorada, limpia entre los dientes una vez al día y usa un cepillo suave. Si tienes enfermedad de las encías, ortodoncia o implantes, pide consejo personalizado a tu dentista.",
    "Für die tägliche Pflege: zweimal täglich etwa 2 Minuten mit fluoridhaltiger Zahnpasta putzen, einmal täglich die Zahnzwischenräume reinigen und eine weiche Bürste verwenden. Bei Zahnfleischerkrankungen, Zahnspangen oder Implantaten ist individuelle Beratung sinnvoll.",
    "Para a higiene diária: escove 2 vezes por dia durante cerca de 2 minutos com pasta fluoretada, limpe entre os dentes uma vez por dia e use uma escova macia. Com doença gengival, aparelho ou implantes, peça aconselhamento personalizado ao dentista.",
    "Për higjienën e përditshme: lani dhëmbët 2 herë në ditë për rreth 2 minuta me pastë me fluor, pastroni mes dhëmbëve një herë në ditë dhe përdorni furçë të butë. Për mishrat, aparatet ose implantet, kërkoni këshillë të personalizuar.",
    "Для ежедневной гигиены: чистите зубы 2 раза в день около 2 минут пастой с фтором, очищайте промежутки между зубами раз в день и используйте мягкую щётку. При заболеваниях дёсен, брекетах или имплантах нужна индивидуальная рекомендация.",
    "للعناية اليومية: نظف أسنانك مرتين يوميًا لمدة نحو دقيقتين بمعجون بالفلورايد، ونظف بين الأسنان مرة يوميًا واستخدم فرشاة ناعمة. إذا كان لديك مرض لثة أو تقويم أو زرعات، اطلب نصيحة مخصصة من طبيب الأسنان.",
    "日常口腔护理：每天使用含氟牙膏刷牙2次，每次约2分钟，每天清洁牙缝，并使用软毛牙刷。如果有牙龈疾病、正畸或种植牙，请向牙医获取个性化建议。"
  ),
  pain: RESPONSE(
    "Une douleur dentaire qui dure plus de 2 jours, revient malgré les antalgiques, s'accompagne de fièvre, d'une mauvaise odeur/goût ou d'un gonflement doit être évaluée par un dentiste rapidement. Si le gonflement atteint l'œil ou le cou, ou gêne la respiration, la déglutition ou la parole, recherchez immédiatement des soins d'urgence.",
    "Tooth pain lasting more than 2 days, returning despite painkillers, or accompanied by fever, a bad taste or swelling should be assessed promptly by a dentist. If swelling reaches the eye or neck, or affects breathing, swallowing or speaking, seek emergency care immediately.",
    "Un mal di denti che dura più di 2 giorni, ritorna nonostante gli antidolorifici o è associato a febbre, cattivo sapore o gonfiore richiede una valutazione dentistica rapida. Se il gonfiore raggiunge l'occhio o il collo o ostacola respirazione, deglutizione o parola, cerca subito assistenza d'emergenza.",
    "El dolor dental que dura más de 2 días, reaparece pese a los analgésicos o se acompaña de fiebre, mal sabor o hinchazón requiere una valoración dental rápida. Si la hinchazón llega al ojo o cuello o afecta a la respiración, deglución o habla, busca atención de urgencia inmediatamente.",
    "Zahnschmerzen, die länger als 2 Tage anhalten, trotz Schmerzmitteln wiederkommen oder mit Fieber, schlechtem Geschmack oder Schwellung einhergehen, sollten rasch zahnärztlich abgeklärt werden. Bei Schwellung am Auge/Hals oder Problemen beim Atmen, Schlucken oder Sprechen sofort Notfallhilfe suchen.",
    "Dor de dente por mais de 2 dias, que volta apesar de analgésicos ou vem com febre, gosto ruim ou inchaço, deve ser avaliada rapidamente por um dentista. Se o inchaço atingir o olho/pescoço ou dificultar respirar, engolir ou falar, procure urgência imediatamente.",
    "Dhimbja e dhëmbit që zgjat më shumë se 2 ditë, kthehet pavarësisht qetësuesve ose shoqërohet me temperaturë, shije të keqe apo ënjtje kërkon vlerësim të shpejtë dentar. Nëse ënjtja prek syrin/qafën ose vështirëson frymëmarrjen, gëlltitjen apo të folurin, kërko urgjencë menjëherë.",
    "Зубная боль более 2 дней, возвращающаяся несмотря на обезболивающие, или сопровождающаяся температурой, неприятным вкусом или отёком требует скорой оценки стоматолога. Если отёк распространяется к глазу или шее либо мешает дышать, глотать или говорить, немедленно обращайтесь за экстренной помощью.",
    "ألم الأسنان الذي يستمر لأكثر من يومين أو يعود رغم المسكنات أو يصاحبه حمى أو طعم سيئ أو تورم يحتاج إلى تقييم سريع من طبيب الأسنان. إذا وصل التورم إلى العين أو الرقبة أو أثر في التنفس أو البلع أو الكلام، اطلب رعاية طارئة فورًا.",
    "牙痛持续超过2天、使用止痛药后仍反复，或伴有发热、口中异味/异味或肿胀，应尽快接受牙科评估。如果肿胀到达眼睛或颈部，或影响呼吸、吞咽或说话，请立即寻求急诊医疗帮助。"
  ),
  swelling: RESPONSE(
    "Un gonflement du visage ou de la mâchoire peut avoir plusieurs causes et ne peut pas être diagnostiqué par le chatbot. Il faut contacter rapidement un dentiste. Si le gonflement du visage/cou gêne la respiration, la déglutition ou la parole, c'est une situation d'urgence.",
    "Facial or jaw swelling can have several causes and cannot be diagnosed by this chatbot. Contact a dentist promptly. If swelling of the face or neck affects breathing, swallowing or speaking, it is an emergency.",
    "Il gonfiore del viso o della mandibola può avere diverse cause e non può essere diagnosticato dal chatbot. Contatta rapidamente un dentista. Se il gonfiore di viso o collo ostacola respirazione, deglutizione o parola, è un'emergenza.",
    "La hinchazón de la cara o la mandíbula puede tener varias causas y este chatbot no puede diagnosticarla. Contacta pronto con un dentista. Si afecta a la respiración, deglución o habla, es una urgencia.",
    "Eine Schwellung im Gesicht oder Kiefer kann verschiedene Ursachen haben und kann vom Chatbot nicht diagnostiziert werden. Wenden Sie sich zeitnah an einen Zahnarzt. Bei Problemen mit Atmung, Schlucken oder Sprechen besteht ein Notfall.",
    "O inchaço da face ou mandíbula pode ter várias causas e não pode ser diagnosticado pelo chatbot. Contacte rapidamente um dentista. Se afetar a respiração, deglutição ou fala, é uma emergência.",
    "Ënjtja e fytyrës ose nofullës mund të ketë disa shkaqe dhe nuk mund të diagnostikohet nga chatbot-i. Kontaktoni shpejt një dentist. Nëse prek frymëmarrjen, gëlltitjen ose të folurin, është urgjencë.",
    "Отёк лица или челюсти может иметь разные причины, и чат-бот не может поставить диагноз. Быстро свяжитесь со стоматологом. Если отёк мешает дыханию, глотанию или речи, это неотложная ситуация.",
    "تورم الوجه أو الفك قد تكون له أسباب متعددة ولا يستطيع المساعد تشخيصه. تواصل سريعًا مع طبيب الأسنان. إذا أثر التورم في التنفس أو البلع أو الكلام، فهذه حالة طارئة.",
    "面部或下颌肿胀可能有多种原因，聊天助手无法进行诊断。请尽快联系牙医。如果肿胀影响呼吸、吞咽或说话，则属于紧急情况。"
  ),
  bleeding: RESPONSE(
    "Un léger saignement des gencives peut être lié à une inflammation, mais un saignement fréquent ou important mérite un avis dentaire. Après une extraction ou une chirurgie, suivez d'abord les consignes remises par votre équipe. Un saignement qui ne s'arrête pas malgré les mesures indiquées doit être évalué rapidement.",
    "Mild gum bleeding can be linked to inflammation, but frequent or heavy bleeding deserves dental assessment. After an extraction or surgery, first follow the instructions given by your dental team. Bleeding that does not stop despite the recommended measures needs prompt assessment.",
    "Un lieve sanguinamento gengivale può essere legato all'infiammazione, ma un sanguinamento frequente o importante merita una valutazione dentistica. Dopo un'estrazione o un intervento, segui prima le istruzioni del team. Un sanguinamento che non si arresta richiede una valutazione rapida.",
    "Un sangrado leve de las encías puede estar relacionado con inflamación, pero el sangrado frecuente o abundante requiere valoración dental. Tras una extracción o cirugía, sigue primero las instrucciones de tu equipo. Si no se detiene, necesita una valoración rápida.",
    "Leichtes Zahnfleischbluten kann mit einer Entzündung zusammenhängen, häufiges oder starkes Bluten sollte jedoch zahnärztlich abgeklärt werden. Nach einer Extraktion oder Operation befolgen Sie zuerst die Anweisungen Ihres Teams. Anhaltende Blutung braucht eine rasche Abklärung.",
    "Um pequeno sangramento das gengivas pode estar ligado a inflamação, mas sangramento frequente ou intenso merece avaliação dentária. Após extração ou cirurgia, siga primeiro as instruções da equipa. Se não parar, procure avaliação rapidamente.",
    "Gjakderdhja e lehtë e mishrave mund të lidhet me inflamacionin, por gjakderdhja e shpeshtë ose e madhe kërkon vlerësim dentar. Pas nxjerrjes ose operacionit, ndiqni udhëzimet e ekipit. Gjakderdhja që nuk ndalet kërkon vlerësim të shpejtë.",
    "Небольшое кровотечение дёсен может быть связано с воспалением, но частое или сильное кровотечение требует оценки стоматолога. После удаления или операции сначала следуйте инструкциям команды. Если кровотечение не останавливается, нужна срочная оценка.",
    "قد يرتبط نزيف اللثة الخفيف بالالتهاب، لكن النزيف المتكرر أو الغزير يستدعي تقييمًا من طبيب الأسنان. بعد الخلع أو الجراحة اتبع أولًا تعليمات الفريق. إذا لم يتوقف النزيف رغم التعليمات، اطلب تقييمًا سريعًا.",
    "轻微牙龈出血可能与炎症有关，但频繁或大量出血应接受牙科评估。拔牙或手术后应先遵循牙科团队给出的护理说明。如果出血无法停止，应尽快接受评估。"
  ),
  trauma: RESPONSE(
    "Après un choc dentaire, demandez un avis dentaire rapidement même si la douleur semble faible : une dent peut être fissurée ou déplacée sans signe évident. Si une dent permanente a été expulsée, conservez-la avec précaution selon les conseils d'un professionnel et recherchez des soins dentaires d'urgence sans attendre.",
    "After dental trauma, seek dental advice promptly even if pain is mild: a tooth can be cracked or displaced without obvious signs. If a permanent tooth has been knocked out, handle it carefully according to professional advice and seek emergency dental care without delay.",
    "Dopo un trauma dentale, chiedi rapidamente un parere odontoiatrico anche se il dolore è lieve: un dente può essere incrinato o spostato senza segni evidenti. Se un dente permanente è stato espulso, maneggialo con cura seguendo le indicazioni di un professionista e cerca subito assistenza odontoiatrica d'emergenza.",
    "Tras un traumatismo dental, busca valoración pronto aunque el dolor sea leve: un diente puede estar fracturado o desplazado sin signos claros. Si se ha expulsado un diente permanente, manipúlalo con cuidado según indicaciones profesionales y busca atención dental de urgencia sin demora.",
    "Nach einem Zahntrauma sollte auch bei wenig Schmerzen rasch eine zahnärztliche Beurteilung erfolgen. Ein Zahn kann unauffällig beschädigt oder verschoben sein. Bei einem ausgeschlagenen bleibenden Zahn vorsichtig vorgehen und unverzüglich zahnärztliche Notfallhilfe suchen.",
    "Após um trauma dentário, procure avaliação rapidamente mesmo que a dor seja pequena: um dente pode estar fraturado ou deslocado sem sinais evidentes. Se um dente permanente saiu, manuseie-o com cuidado segundo orientação profissional e procure urgência dentária.",
    "Pas traumës dentare, kërkoni shpejt vlerësim edhe nëse dhimbja është e vogël: dhëmbi mund të jetë i çarë ose i zhvendosur pa shenja të dukshme. Nëse një dhëmb i përhershëm ka dalë, trajtojeni me kujdes dhe kërkoni urgjencë dentare menjëherë.",
    "После травмы зуба быстро обратитесь к стоматологу, даже если боль небольшая: зуб может быть треснувшим или смещённым без явных признаков. Если постоянный зуб выбит, осторожно обращайтесь с ним по профессиональной инструкции и без промедления ищите неотложную стоматологическую помощь.",
    "بعد إصابة الأسنان، اطلب تقييمًا سريعًا حتى لو كان الألم خفيفًا؛ فقد يكون السن متشققًا أو متحركًا دون علامات واضحة. إذا خرج سن دائم من مكانه، تعامل معه بحذر وفق إرشادات المختص واطلب رعاية أسنان طارئة دون تأخير.",
    "牙齿受到撞击后，即使疼痛轻微也应尽快接受牙科评估，因为牙齿可能出现裂纹或移位而不明显。如果恒牙脱落，请按照专业人员的指导小心处理，并立即寻求紧急牙科治疗。"
  ),
  aftercare: RESPONSE(
    "Après un implant, une extraction ou une chirurgie, les consignes de votre équipe priment sur les conseils généraux. Respectez les médicaments et soins prescrits, évitez de modifier le protocole vous-même et contactez rapidement la clinique en cas de douleur qui s'aggrave, gonflement important, fièvre ou saignement persistant.",
    "After an implant, extraction or surgery, your dental team's instructions take priority over general advice. Follow prescribed medicines and care instructions, do not change the plan yourself, and contact the clinic promptly if pain worsens, swelling is significant, fever develops or bleeding persists.",
    "Dopo un impianto, un'estrazione o un intervento, le istruzioni del team odontoiatrico hanno la priorità. Segui farmaci e cure prescritti, non modificare il protocollo da solo e contatta rapidamente la clinica se il dolore peggiora, compare un gonfiore importante, febbre o sanguinamento persistente.",
    "Después de un implante, extracción o cirugía, las instrucciones de tu equipo dental tienen prioridad. Sigue los medicamentos y cuidados indicados, no cambies el protocolo por tu cuenta y contacta pronto con la clínica si empeora el dolor, aparece hinchazón importante, fiebre o sangrado persistente.",
    "Nach Implantation, Extraktion oder Operation haben die Anweisungen Ihres Behandlungsteams Vorrang. Befolgen Sie die verordneten Medikamente und Pflegehinweise und ändern Sie den Plan nicht selbst. Bei zunehmenden Schmerzen, starker Schwellung, Fieber oder anhaltender Blutung rasch die Klinik kontaktieren.",
    "Após implante, extração ou cirurgia, as instruções da equipa dentária têm prioridade. Siga os medicamentos e cuidados prescritos, não altere o protocolo por conta própria e contacte a clínica rapidamente se a dor piorar, houver inchaço importante, febre ou sangramento persistente.",
    "Pas implantit, nxjerrjes ose operacionit, udhëzimet e ekipit dentar kanë përparësi. Ndiqni barnat dhe kujdesin e përshkruar, mos e ndryshoni vetë protokollin dhe kontaktoni shpejt klinikën nëse dhimbja përkeqësohet, ka ënjtje të madhe, temperaturë ose gjakderdhje të vazhdueshme.",
    "После имплантации, удаления или операции инструкции стоматологической команды имеют приоритет. Следуйте назначенным препаратам и уходу, не меняйте протокол самостоятельно и быстро свяжитесь с клиникой при усилении боли, сильном отёке, температуре или продолжающемся кровотечении.",
    "بعد زراعة الأسنان أو الخلع أو الجراحة، تكون تعليمات فريق الأسنان هي الأساس. التزم بالأدوية والعناية الموصوفة ولا تغير الخطة بنفسك، وتواصل مع العيادة سريعًا إذا زاد الألم أو حدث تورم شديد أو حمى أو نزيف مستمر.",
    "种植牙、拔牙或手术后，应以牙科团队的护理说明为准。按处方使用药物并遵循护理要求，不要自行改变方案。如果疼痛加重、明显肿胀、发热或持续出血，请尽快联系诊所。"
  ),
  implants: RESPONSE(
    "Le choix d'un implant dépend du diagnostic, de l'os disponible, de la restauration prévue et des habitudes du praticien. Demandez toujours la marque, la référence, les composants prothétiques et les documents de traçabilité de votre traitement.",
    "Implant choice depends on diagnosis, available bone, the planned restoration and the clinician's protocol. Ask for the implant brand, reference, prosthetic components and treatment traceability documents.",
    "La scelta dell'impianto dipende dalla diagnosi, dall'osso disponibile, dalla riabilitazione prevista e dal protocollo clinico. Chiedi marca, riferimento, componenti protesici e documenti di tracciabilità.",
    "La elección del implante depende del diagnóstico, el hueso disponible, la restauración prevista y el protocolo clínico. Pide siempre la marca, referencia, componentes protésicos y documentos de trazabilidad.",
    "Die Implantatwahl hängt von Diagnose, Knochenangebot, geplanter Versorgung und klinischem Protokoll ab. Fragen Sie nach Marke, Referenz, prothetischen Komponenten und Rückverfolgbarkeitsunterlagen.",
    "A escolha do implante depende do diagnóstico, osso disponível, restauração prevista e protocolo clínico. Peça a marca, referência, componentes protéticos e documentos de rastreabilidade.",
    "Zgjedhja e implantit varet nga diagnoza, kocka e disponueshme, restaurimi dhe protokolli klinik. Kërkoni markën, referencën, komponentët protetikë dhe dokumentet e gjurmueshmërisë.",
    "Выбор импланта зависит от диагноза, объёма кости, планируемой реставрации и клинического протокола. Запросите марку, артикул, протетические компоненты и документы для прослеживаемости лечения.",
    "اختيار الزرعة يعتمد على التشخيص وحجم العظم والترميم المخطط والبروتوكول السريري. اطلب اسم العلامة والمرجع ومكونات التعويض ووثائق تتبع العلاج.",
    "种植体的选择取决于诊断、可用骨量、计划中的修复方案和临床流程。请询问种植体品牌、型号、修复组件以及治疗可追溯文件。"
  )
};

const FALLBACK = RESPONSE(
  "Je n'ai pas de réponse fiable à cette question. Pour une situation personnelle ou médicale, le plus sûr est de demander à l'équipe. Vous pouvez aussi nous appeler ou utiliser le formulaire.",
  "I don't have a reliable answer to that. For a personal or medical situation, the safest option is to ask the team. You can also call us or use the contact form.",
  "Non ho una risposta affidabile. Per una situazione personale o medica, è più sicuro chiedere al team. Puoi anche chiamarci o usare il modulo.",
  "No tengo una respuesta fiable. Para una situación personal o médica, lo más seguro es preguntar al equipo. También puedes llamarnos o usar el formulario.",
  "Dafür habe ich keine verlässliche Antwort. Bei einer persönlichen oder medizinischen Situation fragen Sie am besten das Team. Sie können uns auch anrufen oder das Formular nutzen.",
  "Não tenho uma resposta fiável. Para uma situação pessoal ou médica, é mais seguro falar com a equipa. Também pode ligar-nos ou usar o formulário.",
  "Nuk kam një përgjigje të besueshme. Për një situatë personale ose mjekësore, mënyra më e sigurt është të flisni me ekipin. Mund të telefononi ose të përdorni formularin.",
  "У меня нет надёжного ответа. Для личной или медицинской ситуации безопаснее обратиться к команде. Вы также можете позвонить или воспользоваться формой.",
  "ليس لدي إجابة موثوقة لهذا السؤال. في حالة شخصية أو طبية، الخيار الأكثر أمانًا هو سؤال الفريق. يمكنك أيضًا الاتصال بنا أو استخدام النموذج.",
  "我没有可靠的答案。对于个人或医疗情况，最安全的做法是咨询团队。您也可以致电我们或使用联系表单。"
);

const HUMAN_HANDOFF = RESPONSE(
  "Un membre de l'équipe va prendre le relais. Vous pouvez nous joindre directement :",
  "A team member will take over from here. You can reach us directly:",
  "Un membro del team prenderà il relais. Puoi contattarci direttamente:",
  "Un miembro del equipo continuará la conversación. Puedes contactarnos directamente:",
  "Ein Teammitglied übernimmt. Sie erreichen uns direkt:",
  "Um membro da equipa vai assumir. Pode contactar-nos diretamente:",
  "Një anëtar i ekipit do të vazhdojë. Na kontaktoni drejtpërdrejt:",
  "Дальше вами займётся сотрудник команды. Вы можете связаться с нами напрямую:",
  "سيتولى أحد أعضاء الفريق المتابعة. يمكنك التواصل معنا مباشرة:",
  "接下来将由团队成员为您服务。您也可以直接联系我们："
);

const PRICE = RESPONSE(
  "Voici les repères publics actuellement disponibles : implant unitaire 400–800 €, All-on-4 à partir de 6 000 € en céramique ou 7 440 € en zircone, All-on-6 / All-on-8 autour de 5 000–8 000 €, couronne céramique ou zircone 150–300 € par dent. Ce sont des prix indicatifs : le devis final doit être confirmé après évaluation du cas.",
  "Current public reference prices include: single implant €400–800, All-on-4 from €6,000 in ceramic or €7,440 in zirconia, All-on-6 / All-on-8 around €5,000–8,000, and ceramic or zirconia crowns €150–300 per tooth. These are indicative figures; the final quote must be confirmed after case assessment.",
  "I riferimenti pubblici includono: impianto singolo 400–800 €, All-on-4 da 6.000 € in ceramica o 7.440 € in zirconia, All-on-6 / All-on-8 circa 5.000–8.000 €, corone in ceramica o zirconia 150–300 € per dente. Sono valori indicativi; il preventivo finale va confermato dopo la valutazione del caso.",
  "Las referencias públicas incluyen: implante individual 400–800 €, All-on-4 desde 6.000 € en cerámica o 7.440 € en zirconia, All-on-6 / All-on-8 alrededor de 5.000–8.000 €, y coronas de cerámica o zirconia 150–300 € por diente. Son cifras orientativas; el presupuesto final debe confirmarse tras evaluar el caso.",
  "Öffentlich angegebene Richtwerte sind: Einzelimplantat 400–800 €, All-on-4 ab 6.000 € in Keramik oder 7.440 € in Zirkon, All-on-6 / All-on-8 etwa 5.000–8.000 € und Keramik- oder Zirkonkronen 150–300 € pro Zahn. Richtwerte; das endgültige Angebot wird nach Fallprüfung bestätigt.",
  "Os valores públicos de referência incluem: implante unitário 400–800 €, All-on-4 desde 6.000 € em cerâmica ou 7.440 € em zircónia, All-on-6 / All-on-8 cerca de 5.000–8.000 € e coroas de cerâmica ou zircónia 150–300 € por dente. São valores indicativos; o orçamento final deve ser confirmado após avaliação.",
  "Vlerat publike orientuese përfshijnë: implant individual 400–800 €, All-on-4 nga 6.000 € në qeramikë ose 7.440 € në zirkon, All-on-6 / All-on-8 rreth 5.000–8.000 € dhe kurora qeramike ose zirkoni 150–300 € për dhëmb. Janë vlera orientuese; oferta përfundimtare konfirmohet pas vlerësimit.",
  "Опубликованные ориентиры включают: одиночный имплант €400–800, All-on-4 от €6 000 в керамике или €7 440 в цирконии, All-on-6 / All-on-8 около €5 000–8 000 и керамические или циркониевые коронки €150–300 за зуб. Это ориентиры; итоговая смета подтверждается после оценки случая.",
  "تشمل الأسعار الإرشادية المنشورة: زرعة واحدة 400–800 يورو، وAll-on-4 من 6000 يورو بالسيراميك أو 7440 يورو بالزركون، وAll-on-6 / All-on-8 نحو 5000–8000 يورو، والتيجان الخزفية أو الزركون 150–300 يورو للسن. هذه أرقام إرشادية ويجب تأكيد السعر النهائي بعد تقييم الحالة.",
  "公开参考价格包括：单颗种植牙 400–800 欧元，All-on-4 陶瓷从 6,000 欧元起、氧化锆 7,440 欧元起，All-on-6 / All-on-8 约 5,000–8,000 欧元，陶瓷或氧化锆牙冠每颗 150–300 欧元。以上仅供参考，最终报价需在评估病例后确认。"
);
const TRAVEL = RESPONSE(
  "Pour un séjour dentaire, confirmez avant de réserver le nombre de rendez-vous, la durée estimée des soins, les contrôles et le temps éventuel entre deux étapes. L'équipe peut aider à organiser les aspects pratiques du séjour.",
  "Before booking a dental trip, confirm the number of appointments, estimated treatment duration, follow-up visits and any interval between treatment stages. The team can help with practical travel arrangements.",
  "Prima di prenotare un viaggio dentale, conferma il numero di appuntamenti, la durata stimata, i controlli e gli intervalli tra le fasi. Il team può aiutare con l'organizzazione pratica.",
  "Antes de reservar un viaje dental, confirma el número de citas, la duración estimada, los controles y los intervalos entre etapas. El equipo puede ayudarte con la organización práctica.",
  "Bestätigen Sie vor der Reise die Anzahl der Termine, die voraussichtliche Behandlungsdauer, Kontrollen und mögliche Abstände zwischen den Behandlungsschritten. Das Team kann bei der Reiseorganisation helfen.",
  "Antes de reservar a viagem, confirme o número de consultas, duração estimada, controlos e intervalos entre etapas. A equipa pode ajudar na organização prática.",
  "Para rezervimit të udhëtimit, konfirmoni takimet, kohëzgjatjen, kontrollet dhe intervalet mes etapave. Ekipi mund të ndihmojë me organizimin praktik.",
  "Перед поездкой подтвердите количество приёмов, предполагаемую длительность лечения, контрольные визиты и интервалы между этапами. Команда может помочь с практической организацией.",
  "قبل حجز رحلة العلاج، تأكد من عدد المواعيد ومدة العلاج المتوقعة والمتابعات والفواصل بين المراحل. يمكن للفريق المساعدة في تنظيم الجوانب العملية.",
  "预订牙科旅行前，请确认就诊次数、预计治疗时间、复诊安排以及各阶段之间的间隔。团队可以协助处理旅行方面的实际安排。"
);
const DOCUMENTS = RESPONSE(
  "Pour une première orientation, envoyez si vous les avez : photos nettes de face et des deux côtés, panoramique ou scanner/CBCT récent, et décrivez brièvement votre objectif. Cela aide l'équipe à préparer la première discussion, mais ne remplace pas l'examen clinique.",
  "For an initial orientation, send clear front and side photos, a recent panoramic X-ray or CT/CBCT if available, and a short description of your goal. This helps the team prepare the first discussion but does not replace a clinical examination.",
  "Per un primo orientamento, invia foto nitide frontali e laterali, una panoramica o CBCT recente se disponibile e descrivi brevemente il tuo obiettivo. Non sostituisce la visita clinica.",
  "Para una primera orientación, envía fotos claras de frente y de ambos lados, una panorámica o CBCT reciente si la tienes y describe brevemente tu objetivo. No sustituye la evaluación clínica.",
  "Für eine erste Orientierung können Sie klare Fotos von vorne und von beiden Seiten sowie ein aktuelles Panorama-Röntgen oder CBCT und eine kurze Beschreibung Ihres Ziels senden. Dies ersetzt keine klinische Untersuchung.",
  "Para uma primeira orientação, envie fotografias nítidas de frente e dos dois lados, uma panorâmica ou CBCT recente se disponível e descreva brevemente o seu objetivo. Não substitui a avaliação clínica.",
  "Për orientimin fillestar, dërgoni foto të qarta nga përpara dhe nga të dyja anët, panoramë ose CBCT të fundit nëse e keni dhe përshkruani shkurt qëllimin. Nuk zëvendëson ekzaminimin klinik.",
  "Для первичной ориентации отправьте чёткие фотографии спереди и с обеих сторон, недавний панорамный снимок или КЛКТ при наличии и кратко опишите цель. Это не заменяет клинический осмотр.",
  "للتوجيه الأولي، أرسل صورًا واضحة من الأمام ومن الجانبين، وأشعة بانورامية أو CBCT حديثة إن وجدت، مع وصف مختصر لهدفك. هذا لا يغني عن الفحص السريري.",
  "如需初步了解方案，可以发送正面及两侧的清晰照片、近期全景片或 CBCT（如有），并简要说明目标。这不能替代临床检查。"
);
const TREATMENT_GUIDANCE = RESPONSE(
  "Je peux comparer les grandes options, mais je ne peux pas choisir un traitement pour vous sans examen. Par exemple, implants, All-on-4/6, couronnes, facettes et orthodontie répondent à des situations différentes. Décrivez votre objectif et, si possible, envoyez vos photos/examens pour que l'équipe puisse vous orienter.",
  "I can compare the main options, but I cannot choose a treatment for you without an examination. Implants, All-on-4/6, crowns, veneers and orthodontics address different situations. Tell me your goal and, if possible, send photos or records so the team can guide you.",
  "Posso confrontare le principali opzioni, ma non scegliere un trattamento senza visita. Impianti, All-on-4/6, corone, faccette e ortodonzia rispondono a situazioni diverse. Descrivi il tuo obiettivo e, se possibile, invia foto o esami.",
  "Puedo comparar las principales opciones, pero no elegir un tratamiento sin una evaluación. Implantes, All-on-4/6, coronas, carillas y ortodoncia responden a situaciones diferentes. Cuéntame tu objetivo y, si puedes, envía fotos o pruebas.",
  "Ich kann die wichtigsten Optionen vergleichen, aber ohne Untersuchung keine Behandlung auswählen. Implantate, All-on-4/6, Kronen, Veneers und Kieferorthopädie haben unterschiedliche Indikationen. Beschreiben Sie Ihr Ziel und senden Sie möglichst Fotos oder Befunde.",
  "Posso comparar as principais opções, mas não escolher um tratamento sem avaliação. Implantes, All-on-4/6, coroas, facetas e ortodontia respondem a situações diferentes. Explique o seu objetivo e, se possível, envie fotos ou exames.",
  "Mund të krahasoj opsionet kryesore, por nuk mund të zgjedh trajtimin pa ekzaminim. Implantet, All-on-4/6, kurorat, fasetat dhe ortodoncia kanë indikacione të ndryshme. Përshkruani qëllimin dhe, nëse mundeni, dërgoni foto ose ekzaminime.",
  "Я могу сравнить основные варианты, но не могу выбрать лечение без осмотра. Импланты, All-on-4/6, коронки, виниры и ортодонтия предназначены для разных ситуаций. Опишите цель и по возможности отправьте фотографии или обследования.",
  "يمكنني مقارنة الخيارات الرئيسية، لكن لا يمكنني اختيار العلاج دون فحص. الزرعات وAll-on-4/6 والتيجان والفينيير وتقويم الأسنان تناسب حالات مختلفة. اشرح هدفك وأرسل الصور أو الفحوصات إن أمكن.",
  "我可以比较主要治疗方案，但不能在没有检查的情况下替您选择治疗。种植牙、All-on-4/6、牙冠、贴面和正畸适用于不同情况。请说明您的目标，并尽可能发送照片或检查资料。"
);

const DURATION = RESPONSE(
  "La durée varie selon le traitement et l'état clinique. Un blanchiment ou certains soins esthétiques peuvent être rapides, tandis que les traitements implantaires ou chirurgicaux peuvent nécessiter plusieurs étapes ou plusieurs séjours.",
  "Length of stay varies by treatment and clinical condition. Whitening or some cosmetic care can be quick, while implant or surgical treatments may require several stages or visits.",
  "La durata varia in base al trattamento e alla situazione clinica. Sbiancamento e alcune cure estetiche possono essere rapide, mentre implantologia e chirurgia possono richiedere più fasi o soggiorni.",
  "La duración depende del tratamiento y la situación clínica. El blanqueamiento y algunos tratamientos estéticos pueden ser rápidos, mientras que la implantología o cirugía puede requerir varias etapas o estancias.",
  "Die Aufenthaltsdauer hängt von Behandlung und klinischer Situation ab. Bleaching und manche ästhetischen Behandlungen können schnell erfolgen, Implantologie oder Chirurgie können mehrere Schritte oder Aufenthalte erfordern.",
  "A duração varia conforme o tratamento e a situação clínica. Branqueamento e alguns tratamentos estéticos podem ser rápidos, enquanto implantologia ou cirurgia podem exigir várias etapas ou estadias.",
  "Kohëzgjatja varet nga trajtimi dhe gjendja klinike. Zbardhimi dhe disa trajtime estetike mund të jenë të shpejta, ndërsa implantet ose kirurgjia mund të kërkojnë disa etapa ose qëndrime.",
  "Длительность зависит от лечения и клинической ситуации. Отбеливание и некоторые эстетические процедуры могут быть быстрыми, а имплантация или хирургия могут потребовать нескольких этапов или поездок.",
  "تختلف مدة الإقامة حسب العلاج والحالة السريرية. قد تكون إجراءات التبييض وبعض العلاجات التجميلية سريعة، بينما قد تتطلب الزراعة أو الجراحة عدة مراحل أو زيارات.",
  "停留时间取决于治疗项目和临床情况。美白或部分美容治疗可能较快完成，而种植牙或手术治疗可能需要多个阶段或多次行程。"
);
const BOOKING = RESPONSE(
  "Pour demander un rendez-vous, utilisez le formulaire de contact ou appelez directement la clinique. Une première demande peut inclure vos photos et examens disponibles ; elle ne remplace pas l'examen clinique.",
  "To request an appointment, use the contact form or call the clinic directly. You can include available photos and records; an online request does not replace a clinical examination.",
  "Per chiedere un appuntamento, usa il modulo di contatto o chiama direttamente la clinica. Puoi allegare foto ed esami disponibili; la richiesta online non sostituisce la visita clinica.",
  "Para solicitar una cita, usa el formulario de contacto o llama directamente a la clínica. Puedes adjuntar fotos y pruebas disponibles; la solicitud online no sustituye el examen clínico.",
  "Für einen Termin nutzen Sie das Kontaktformular oder rufen Sie die Klinik direkt an. Fotos und vorhandene Befunde können beigefügt werden; eine Online-Anfrage ersetzt keine klinische Untersuchung.",
  "Para marcar uma consulta, use o formulário de contacto ou telefone diretamente para a clínica. Pode anexar fotografias e exames; o pedido online não substitui o exame clínico.",
  "Për takim, përdorni formularin e kontaktit ose telefononi klinikën. Mund të bashkëngjitni foto dhe ekzaminime; kërkesa online nuk zëvendëson ekzaminimin klinik.",
  "Чтобы записаться, используйте контактную форму или позвоните в клинику. Можно приложить фотографии и имеющиеся обследования; онлайн-запрос не заменяет клинический осмотр.",
  "لطلب موعد، استخدم نموذج الاتصال أو اتصل بالعيادة مباشرة. يمكنك إرفاق الصور والفحوصات المتاحة؛ الطلب عبر الإنترنت لا يغني عن الفحص السريري.",
  "如需预约，请使用联系表单或直接致电诊所。可以附上现有照片和检查资料；在线申请不能替代临床检查。"
);
const IMPLANTS = RESPONSES.implants;

function normalize(str) { return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
function pick(dict, lang) { return dict[lang] || dict.en || dict.fr; }
export function detectIntent(message, lang = "fr") {
  const text = normalize(message);
  const byLang = (intent) => pick(INTENT_KEYWORDS[intent], lang).map(normalize);
  // Specific clinical intents must be checked before generic advice/booking terms.
  for (const intent of ["swelling", "trauma", "pain", "bleeding", "aftercare", "hygiene", "implants", "documents", "treatment", "price", "travel", "warranty", "duration", "booking", "human", "greeting"]) {
    if (byLang(intent).some((w) => text.includes(w))) return intent;
  }
  return null;
}

export function getChatbotReply(message, lang = "fr") {
  const safeLang = CHATBOT_LANGS.includes(lang) ? lang : "fr";
  const intent = detectIntent(message, safeLang);
  if (intent === "human") return { intent, reply: pick(HUMAN_HANDOFF, safeLang), handoff: true };
  if (intent === "price") return { intent, reply: pick(PRICE, safeLang), handoff: false };
  if (intent === "travel") return { intent, reply: pick(TRAVEL, safeLang), handoff: false };
  if (intent === "duration") return { intent, reply: pick(DURATION, safeLang), handoff: false };
  if (intent === "booking") return { intent, reply: pick(BOOKING, safeLang), handoff: false };
  if (intent === "documents") return { intent, reply: pick(DOCUMENTS, safeLang), handoff: false };
  if (intent === "treatment") return { intent, reply: pick(TREATMENT_GUIDANCE, safeLang), handoff: false };
  if (intent === "greeting") return { intent, reply: pick({
    fr: "Bonjour ! Je peux vous aider sur les conseils dentaires généraux, les implants, le voyage, les tarifs ou la prise de rendez-vous.",
    en: "Hello! I can help with general dental tips, implants, travel, pricing or appointments.",
    it: "Ciao! Posso aiutarti con consigli dentali generali, impianti, viaggio, prezzi o appuntamenti.",
    es: "¡Hola! Puedo ayudarte con consejos dentales generales, implantes, viaje, precios o citas.",
    de: "Hallo! Ich kann bei allgemeinen Zahntipps, Implantaten, Reise, Preisen oder Terminen helfen.",
    pt: "Olá! Posso ajudar com dicas dentárias gerais, implantes, viagem, preços ou consultas.",
    sq: "Përshëndetje! Mund t'ju ndihmoj me këshilla dentare të përgjithshme, implante, udhëtim, çmime ose takime.",
    ru: "Здравствуйте! Я могу помочь с общими стоматологическими советами, имплантацией, поездкой, ценами или записью.",
    ar: "مرحبًا! يمكنني مساعدتك في نصائح الأسنان العامة أو الزرعات أو السفر أو الأسعار أو المواعيد.",
    zh: "您好！我可以帮助您了解一般牙科建议、种植牙、旅行、价格或预约."
  }, safeLang), handoff: false };
  if (intent && RESPONSES[intent]) return { intent, reply: pick(RESPONSES[intent], safeLang), handoff: false };
  if (intent === "implants") return { intent, reply: pick(IMPLANTS, safeLang), handoff: false };
  return { intent: null, reply: pick(FALLBACK, safeLang), handoff: false };
}
