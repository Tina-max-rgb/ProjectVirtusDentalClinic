const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV
    ? "http://localhost:4000/api"
    : "/api");

async function request(path, options = {}) {
  const controller = new AbortController();

  const timer = setTimeout(() => {
    controller.abort();
  }, 15000);

  try {
    const headers =
      options.body instanceof FormData
        ? {}
        : {
            "Content-Type": "application/json"
          };

    const url = `${API_URL}${path}`;

    console.log("[API] Request:", options.method || "GET", url);

    const res = await fetch(url, {
      ...options,
      headers: {
        ...headers,
        ...(options.headers || {})
      },
      signal: controller.signal
    });

    const data = await res.json().catch(() => ({}));

    console.log("[API] Response:", res.status, data);

    if (!res.ok) {
      throw new Error(
        data.error || `Request failed: ${res.status}`
      );
    }

    return data;
  } catch (error) {
    console.error("[API] Error:", error);
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

// ============================================================
// CONTENT
// ============================================================

export function fetchContent(lang) {
  return request(`/content?lang=${encodeURIComponent(lang)}`);
}

// ============================================================
// CSRF
// ============================================================

let contactCsrfTokenPromise = null;

export function getContactCsrfToken() {
  if (!contactCsrfTokenPromise) {
    contactCsrfTokenPromise = request("/contact/csrf")
      .then((data) => {
        if (!data.token) {
          throw new Error("CSRF token manquant.");
        }

        return data.token;
      })
      .catch((error) => {
        contactCsrfTokenPromise = null;
        throw error;
      });
  }

  return contactCsrfTokenPromise;
}

// ============================================================
// CONTACT FORM
// ============================================================

export async function sendContactForm(payload) {
  let csrf = await getContactCsrfToken();

  try {
    return await request("/contact", {
      method: "POST",

      headers: {
        "X-CSRF-Token": csrf
      },

      body: JSON.stringify(payload)
    });
  } catch (error) {
    // Le token CSRF peut expirer si le formulaire reste ouvert
    // longtemps. On le renouvelle une seule fois.

    if (
      /403|sécurité|security|CSRF/i.test(
        error.message || ""
      )
    ) {
      contactCsrfTokenPromise = null;

      csrf = await getContactCsrfToken();

      return request("/contact", {
        method: "POST",

        headers: {
          "X-CSRF-Token": csrf
        },

        body: JSON.stringify(payload)
      });
    }

    throw error;
  }
}

// ============================================================
// LOCAL CHAT
// ============================================================

const LOCAL_CHAT = {
  fr: {
    price:
      "Je peux vous orienter sur les traitements et préparer une demande de devis. Les prix affichés sur le site restent indicatifs : le devis final dépend du bilan clinique.",

    travel:
      "Virtus indique accompagner les patients internationaux avec l'organisation du transfert depuis l'aéroport de Tirana et des recommandations d'hébergement à proximité de la clinique.",

    booking:
      "Bien sûr. Vous pouvez demander une consultation gratuite via le formulaire du site ou nous contacter directement par WhatsApp au +33 6 28 27 01 18.",

    duration:
      "La durée du séjour dépend du traitement et du plan clinique. L'équipe peut vous proposer un calendrier après étude de vos photos ou radiographies.",

    warranty:
      "Les conditions de garantie dépendent du traitement. Demandez les conditions écrites correspondant à votre plan avant de commencer les soins.",

    human:
      "Je peux vous passer à l'équipe. Vous pouvez également appeler le +33 6 28 27 01 18 ou écrire à virtusdentalpro@gmail.com.",

    fallback:
      "Je peux vous aider avec les traitements, le tourisme dentaire, les demandes de devis et la prise de rendez-vous. Pour une question médicale personnalisée, l'équipe doit d'abord étudier votre dossier."
  },

  en: {
    price:
      "I can guide you through the treatments and help prepare a quote request. Website prices are indicative; the final quote depends on your clinical assessment.",

    travel:
      "Virtus says it supports international patients with airport transfer arrangements and accommodation recommendations near the clinic.",

    booking:
      "Of course. You can request a free consultation through the form or contact Virtus on WhatsApp at +33 6 28 27 01 18.",

    duration:
      "The length of your stay depends on the treatment and clinical plan. The team can propose a schedule after reviewing your photos or X-rays.",

    warranty:
      "Warranty terms depend on the treatment. Ask for the written conditions that apply to your treatment plan before starting care.",

    human:
      "I can hand you over to the team. You can also call +33 6 28 27 01 18 or email virtusdentalpro@gmail.com.",

    fallback:
      "I can help with treatments, dental tourism, quote requests and appointments. For personalised medical questions, the clinical team needs to review your case first."
  }
};

// ============================================================
// LOCAL CHATBOT
// ============================================================

function localChatbot(message, lang = "fr") {
  const l =
    LOCAL_CHAT[lang] ||
    LOCAL_CHAT.en;

  const text = message
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const rules = [
    [
      [
        "prix",
        "tarif",
        "cout",
        "combien",
        "price",
        "cost",
        "how much"
      ],
      "price"
    ],

    [
      [
        "voyage",
        "hotel",
        "aeroport",
        "vol",
        "travel",
        "airport",
        "flight"
      ],
      "travel"
    ],

    [
      [
        "rendez",
        "rdv",
        "reserver",
        "devis",
        "appointment",
        "book",
        "quote"
      ],
      "booking"
    ],

    [
      [
        "duree",
        "combien de temps",
        "sejour",
        "jours",
        "duration",
        "how long",
        "stay"
      ],
      "duration"
    ],

    [
      [
        "garantie",
        "warranty",
        "guarantee"
      ],
      "warranty"
    ],

    [
      [
        "humain",
        "personne",
        "agent",
        "human",
        "operator"
      ],
      "human"
    ]
  ];

  const hit = rules.find(
    ([words]) =>
      words.some((word) =>
        text.includes(word)
      )
  );

  const intent = hit?.[1];

  return Promise.resolve({
    reply:
      l[intent] ||
      l.fallback,

    handoff:
      intent === "human",

    local: true
  });
}

// ============================================================
// CHATBOT
// ============================================================

export async function askChatbot(
  message,
  lang
) {
  const key =
    "virtus_chat_session";

  let sessionId = "";

  try {
    sessionId =
      localStorage.getItem(key) ||
      crypto.randomUUID();

    localStorage.setItem(
      key,
      sessionId
    );
  } catch {}

  try {
    return await request("/chatbot", {
      method: "POST",

      body: JSON.stringify({
        message,
        lang,
        sessionId
      })
    });
  } catch (error) {
    console.warn(
      "[chatbot] Backend unavailable, using local chatbot.",
      error
    );

    return localChatbot(
      message,
      lang
    );
  }
}