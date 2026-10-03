import { useLocation, useNavigate } from "react-router-dom";

/**
 * Route-safe anchor: scrolls in-place when the section exists, otherwise
 * returns to the localized home page and scrolls there after navigation.
 */
export default function SmartAnchor({ href = "#top", children, className, ...props }) {
  const navigate = useNavigate();
  const location = useLocation();

  const hash = href.startsWith("#") ? href.slice(1) : "";
  const targetPath = href.startsWith("#") ? location.pathname : href;

  const onClick = (event) => {
    if (!hash) return;
    event.preventDefault();
    const current = document.getElementById(hash);
    if (current) {
      current.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${hash}`);
      return;
    }

    const isHome = location.pathname === "/" || /^\/(en|it|es|de|pt|ru|ar|sq|zh)\/?$/.test(location.pathname);
    if (isHome) return;

    const langPrefix = location.pathname.match(/^\/(en|it|es|de|pt|ru|ar|sq|zh)(?:\/|$)/)?.[1];
    const home = langPrefix ? `/${langPrefix}/` : "/";
    navigate(`${home}#${hash}`);
    window.setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  };

  return <a href={href || targetPath} className={className} onClick={onClick} {...props}>{children}</a>;
}
