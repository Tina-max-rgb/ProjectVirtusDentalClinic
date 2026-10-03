import { useState, useRef, useEffect } from "react";
import { useLanguage, SUPPORTED, LANG_LABELS } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import SmartAnchor from "./SmartAnchor";

export default function Header() {
  const { lang, setLang, content } = useLanguage();
  const ui = content?.ui || {};
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  if (!content) return null;
  const { nav } = content;

  return (
    <header>
      <nav className="nav">
        <SmartAnchor href="#top" className="logo">
          <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="19" stroke="#0E3B39" strokeWidth="1.4" />
            <path d="M20 11c-3.5 0-6 2.3-6 5.8 0 3 1.6 5.9 2.4 9.4.3 1.4.9 2.8 2 2.8s1.5-1.6 1.6-2.8c.1-1 .3-1.7 1-1.7s.9.7 1 1.7c.1 1.2.5 2.8 1.6 2.8s1.7-1.4 2-2.8c.8-3.5 2.4-6.4 2.4-9.4 0-3.5-2.5-5.8-6-5.8-1 0-1.6.3-2 .5-.4-.2-1-.5-2-.5Z" fill="#B7A57A" />
          </svg>
          Virtus Dental Center
        </SmartAnchor>
        <ul className="navlinks">
          <li><Link to={lang === "fr" ? "/about" : `/${lang}/about`}>{ui.about}</Link></li>
          <li><Link to={lang === "fr" ? "/dental-tourism" : `/${lang}/dental-tourism`}>{nav.tourism}</Link></li>
          <li><SmartAnchor href="#treatments">{nav.treatments}</SmartAnchor></li>
          <li><SmartAnchor href="#team">{nav.team || ui.team || "Toute l’équipe"}</SmartAnchor></li>
          <li><Link to={lang === "fr" ? "/before-after" : `/${lang}/before-after`}>{ui.beforeAfter}</Link></li>
          <li><Link to={lang === "fr" ? "/blog" : `/${lang}/blog`}>{ui.guides}</Link></li>
        </ul>
        <button className="mobile-menu-btn" type="button" onClick={() => setMobileOpen((o) => !o)} aria-label="Ouvrir le menu" aria-expanded={mobileOpen}>
          <span></span><span></span><span></span>
        </button>
        <div className="navright">
          <div className="langmenu" ref={menuRef}>
            <button className="langmenu-btn" onClick={() => setOpen((o) => !o)} aria-haspopup="listbox" aria-expanded={open}>
              🌐 {LANG_LABELS[lang]}
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
            </button>
            {open && (
              <ul className="langmenu-list" role="listbox">
                {SUPPORTED.map((l) => (
                  <li key={l}>
                    <button
                      className={l === lang ? "active" : ""}
                      onClick={() => { setLang(l); setOpen(false); }}
                      role="option"
                      aria-selected={l === lang}
                    >
                      {LANG_LABELS[l]}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <SmartAnchor href="#contact" className="btn btn-primary" style={{ padding: "10px 18px", fontSize: "13.5px" }}>
            {nav.book}
          </SmartAnchor>
        </div>
        {mobileOpen && (
          <div className="mobile-nav-panel">
            <Link to={lang === "fr" ? "/about" : `/${lang}/about`} onClick={() => setMobileOpen(false)}>{ui.about}</Link>
            <Link to={lang === "fr" ? "/dental-tourism" : `/${lang}/dental-tourism`} onClick={() => setMobileOpen(false)}>{nav.tourism}</Link>
            <SmartAnchor href="#treatments" onClick={() => setMobileOpen(false)}>{nav.treatments}</SmartAnchor>
            <SmartAnchor href="#team" onClick={() => setMobileOpen(false)}>{nav.team || ui.team}</SmartAnchor>
            <Link to={lang === "fr" ? "/before-after" : `/${lang}/before-after`} onClick={() => setMobileOpen(false)}>{ui.beforeAfter}</Link>
            <Link to={lang === "fr" ? "/blog" : `/${lang}/blog`} onClick={() => setMobileOpen(false)}>{ui.guides}</Link>
            <SmartAnchor href="#contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>{nav.book}</SmartAnchor>
          </div>
        )}
      </nav>
    </header>
  );
}
