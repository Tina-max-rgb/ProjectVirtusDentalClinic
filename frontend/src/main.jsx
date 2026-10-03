import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./styles/index.css";
import App from "./App.jsx";
import { trackEvent } from "./api/analytics.js";

const GA_ID = import.meta.env.VITE_GA4_ID;

function loadAnalytics() {
  if (!GA_ID || typeof window === "undefined" || window.__virtusAnalyticsLoaded) return;
  window.__virtusAnalyticsLoaded = true;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { send_page_view: true });
  trackEvent("site_loaded");
}

if (typeof window !== "undefined") {
  if (window.localStorage.getItem("virtus_analytics_consent") === "accepted") loadAnalytics();
  window.addEventListener("virtus:analytics-consent", loadAnalytics);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);

// Register service worker for installability (Add to Home Screen) + basic offline cache
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
