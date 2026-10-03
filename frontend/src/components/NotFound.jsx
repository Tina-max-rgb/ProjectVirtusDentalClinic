import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { UI } from "../data/uiTranslations.js";
import SmartAnchor from "./SmartAnchor";

export default function NotFound() {
  const { content, lang } = useLanguage();
  const u = UI[lang] || UI.en;
  const label = content?.nav?.book || "Contact";
  return <main className="not-found"><div className="wrap"><span className="sample-tag">404</span><h1>{u.notFound}</h1><p>{u.notFoundText}</p><Link className="btn btn-primary" to="/">{u.homePage}</Link> <SmartAnchor className="btn btn-ghost" href="#contact">{label}</SmartAnchor></div></main>;
}
