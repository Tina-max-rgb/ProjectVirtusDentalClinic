import { useLanguage } from "../context/LanguageContext";
import SmartAnchor from "./SmartAnchor";

export default function AppNav({ onOpenChat }) {
  const { content } = useLanguage();
  if (!content) return null;
  const { app } = content;

  return (
    <nav className="appnav" aria-label="Navigation rapide">
      <SmartAnchor href="#top" className="active">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /></svg>
        <span>{app.home}</span>
      </SmartAnchor>
      <SmartAnchor href="#treatments">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3c-3.5 0-6 2.3-6 5.8 0 3 1.6 5.9 2.4 9.4.3 1.4.9 2.8 2 2.8s1.5-1.6 1.6-2.8" /><path d="M12 3c3.5 0 6 2.3 6 5.8 0 3-1.6 5.9-2.4 9.4-.3 1.4-.9 2.8-2 2.8s-1.5-1.6-1.6-2.8" /></svg>
        <span>{app.treatments}</span>
      </SmartAnchor>
      <button onClick={onOpenChat}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4A8.9 8.9 0 0 1 8 19l-5 1 1.4-4.2A8.4 8.4 0 1 1 21 11.5Z" /></svg>
        <span>{app.chat}</span>
      </button>
      <SmartAnchor href="#contact">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7" /></svg>
        <span>{app.contact}</span>
      </SmartAnchor>
    </nav>
  );
}
