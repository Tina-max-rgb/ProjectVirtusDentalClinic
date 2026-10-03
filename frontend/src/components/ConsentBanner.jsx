import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const COPY = {
  fr: { title: "Votre confidentialité compte", text: "Les cookies nécessaires au fonctionnement du site sont toujours actifs. Les statistiques Google Analytics ne sont chargées qu'après votre accord.", accept: "Accepter les statistiques", refuse: "Continuer sans statistiques", privacy: "Confidentialité" },
  en: { title: "Your privacy matters", text: "Essential cookies are always active. Google Analytics is loaded only after you agree to statistics.", accept: "Accept analytics", refuse: "Continue without analytics", privacy: "Privacy" },
  it: { title: "La tua privacy conta", text: "I cookie necessari sono sempre attivi. Google Analytics viene caricato solo dopo il tuo consenso alle statistiche.", accept: "Accetta statistiche", refuse: "Continua senza statistiche", privacy: "Privacy" },
  es: { title: "Tu privacidad importa", text: "Las cookies necesarias están siempre activas. Google Analytics solo se carga después de aceptar las estadísticas.", accept: "Aceptar estadísticas", refuse: "Continuar sin estadísticas", privacy: "Privacidad" },
  de: { title: "Ihre Privatsphäre ist wichtig", text: "Notwendige Cookies sind immer aktiv. Google Analytics wird erst nach Ihrer Zustimmung zu Statistik-Cookies geladen.", accept: "Statistik akzeptieren", refuse: "Ohne Statistik fortfahren", privacy: "Datenschutz" },
  pt: { title: "A sua privacidade é importante", text: "Os cookies necessários estão sempre ativos. O Google Analytics só é carregado após o seu consentimento para estatísticas.", accept: "Aceitar estatísticas", refuse: "Continuar sem estatísticas", privacy: "Privacidade" },
  ru: { title: "Ваша конфиденциальность важна", text: "Необходимые файлы cookie всегда активны. Google Analytics загружается только после вашего согласия на статистику.", accept: "Разрешить статистику", refuse: "Продолжить без статистики", privacy: "Конфиденциальность" },
  ar: { title: "خصوصيتك مهمة", text: "ملفات الارتباط الضرورية مفعلة دائمًا. يتم تحميل Google Analytics فقط بعد موافقتك على الإحصاءات.", accept: "السماح بالإحصاءات", refuse: "المتابعة بدون إحصاءات", privacy: "الخصوصية" },
  sq: { title: "Privatësia juaj ka rëndësi", text: "Cookie-t e nevojshme janë gjithmonë aktive. Google Analytics ngarkohet vetëm pas pëlqimit tuaj për statistikat.", accept: "Prano statistikat", refuse: "Vazhdo pa statistika", privacy: "Privatësia" },
  zh: { title: "您的隐私很重要", text: "必要的 Cookie 始终启用。只有在您同意统计后才会加载 Google Analytics。", accept: "接受统计", refuse: "不使用统计继续", privacy: "隐私" }
};

export default function ConsentBanner({ lang }) {
  const [visible, setVisible] = useState(false);
  const t = COPY[lang] || COPY.en;

  useEffect(() => {
    const choice = window.localStorage.getItem("virtus_analytics_consent");
    setVisible(!choice);
  }, []);

  const choose = (value) => {
    window.localStorage.setItem("virtus_analytics_consent", value);
    setVisible(false);
    if (value === "accepted") window.dispatchEvent(new CustomEvent("virtus:analytics-consent"));
  };

  if (!visible) return null;
  return (
    <aside className="consent-banner" role="dialog" aria-label={t.title}>
      <div>
        <strong>{t.title}</strong>
        <p>{t.text}</p>
      </div>
      <div className="consent-actions">
        <button className="btn btn-primary" onClick={() => choose("accepted")}>{t.accept}</button>
        <button className="consent-secondary" onClick={() => choose("refused")}>{t.refuse}</button>
        <Link to={lang === "fr" ? "/privacy" : `/${lang}/privacy`}>{t.privacy}</Link>
      </div>
    </aside>
  );
}
