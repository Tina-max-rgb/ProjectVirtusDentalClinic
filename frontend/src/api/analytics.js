const GA_ID = import.meta.env.VITE_GA4_ID;

export function trackEvent(name, params = {}) {
  if (!GA_ID || typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

export function trackLead(source = "contact_form") {
  trackEvent("generate_lead", { source });
}

export function trackContact(method) {
  trackEvent("contact", { method });
}
