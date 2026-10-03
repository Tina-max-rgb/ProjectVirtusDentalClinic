import { Link } from "react-router-dom";
import SmartAnchor from "./SmartAnchor";
import { useLanguage } from "../context/LanguageContext";

const LABELS = {
  fr: ["Confidentialité", "Cookies", "Mentions légales", "Contact"], en: ["Privacy", "Cookies", "Legal notice", "Contact"], it: ["Privacy", "Cookie", "Note legali", "Contatti"], es: ["Privacidad", "Cookies", "Aviso legal", "Contacto"], de: ["Datenschutz", "Cookies", "Impressum", "Kontakt"], pt: ["Privacidade", "Cookies", "Aviso legal", "Contacto"], ru: ["Конфиденциальность", "Cookies", "Правовая информация", "Контакты"], ar: ["الخصوصية", "ملفات الارتباط", "معلومات قانونية", "اتصل بنا"], sq: ["Privatësia", "Cookies", "Njoftim ligjor", "Kontakt"], zh: ["隐私政策", "Cookie", "法律声明", "联系"]
};

export default function Footer() {
  const { content, lang } = useLanguage();
  if (!content) return null;
  const { footer, nav } = content;
  const labels = LABELS[lang] || LABELS.en;
  const prefix = lang === "fr" ? "" : `/${lang}`;

  return (
    <footer>
      <div className="wrap">
        <div>
          <Link className="logo" style={{ color: "#fff", marginBottom: 10 }} to={prefix || "/"}>Virtus Dental Center</Link>
          <p className="fnote">{footer.tagline}</p>
        </div>
        <ul className="flinks">
          <li><SmartAnchor href="#treatments">{nav.treatments}</SmartAnchor></li>
          <li><SmartAnchor href="#doctor">{nav.doctor}</SmartAnchor></li>
          <li><SmartAnchor href="#faq">{nav.faq}</SmartAnchor></li>
          <li><SmartAnchor href="#contact">{nav.book}</SmartAnchor></li>
        </ul>
      </div>
      <div className="foot-bottom">© {new Date().getFullYear()} Virtus Dental Center — Tirana, Albanie · <Link to={`${prefix}/contact`}>{labels[3]}</Link> · <Link to={`${prefix}/privacy`}>{labels[0]}</Link> · <Link to={`${prefix}/cookies`}>{labels[1]}</Link> · <Link to={`${prefix}/legal`}>{labels[2]}</Link></div>
    </footer>
  );
}
