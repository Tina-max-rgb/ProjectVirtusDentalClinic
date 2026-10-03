import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import { sendContactForm } from "../api/client";
import { trackLead, trackContact } from "../api/analytics.js";

const initialForm = { name: "", country: "", email: "", phone: "", message: "" };

// Clipboard blocking is a UX requirement for this form. It is intentionally
// only a client-side friction layer; all real security validation happens on
// the Node.js API because browser handlers can always be bypassed.
const blockClipboard = (event) => {
  event.preventDefault();
};

export default function Contact() {
  const { content, contact, lang } = useLanguage();
  const ref = useReveal();
  const [form, setForm] = useState(initialForm);
  const [treatmentIdx, setTreatmentIdx] = useState(0);
  const [website, setWebsite] = useState(""); // honeypot — must stay empty
  const [formLoadedAt] = useState(() => Date.now());
  const [step, setStep] = useState(1);
  const [consent, setConsent] = useState(false);
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredChannel, setPreferredChannel] = useState("email");
  const [attachment, setAttachment] = useState(null);
  const [attachmentError, setAttachmentError] = useState("");
  const [state, setState] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [stepError, setStepError] = useState("");

  if (!content || !contact) return null;
  const { contact: c, form: f } = content;

  const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));
  const textFieldSecurity = {
    onPaste: blockClipboard,
    onCopy: blockClipboard,
    onCut: blockClipboard,
    onDrop: blockClipboard,
    onDragOver: (event) => event.preventDefault()
  };
  const handleAttachment = (e) => {
    const file = e.target.files?.[0];
    setAttachmentError("");
    if (!file) { setAttachment(null); return; }
    const allowed = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
    if (!allowed.includes(file.type)) { setAttachmentError("Format accepté : JPG, PNG, WebP ou PDF."); e.target.value = ""; return; }
    if (file.size > 6 * 1024 * 1024) { setAttachmentError("Fichier trop volumineux (6 Mo maximum)."); e.target.value = ""; return; }
    const reader = new FileReader();
    reader.onload = () => setAttachment({ name: file.name.slice(0, 120), type: file.type, size: file.size, data: String(reader.result).split(",")[1] || "" });
    reader.onerror = () => setAttachmentError("Impossible de lire le fichier.");
    reader.readAsDataURL(file);
  };

  const goToStep2 = () => {
    const name = form.name.trim();
    const country = form.country.trim();
    const email = form.email.trim();
    if (name.length < 2 || country.length < 2) {
      setStepError("Merci de renseigner votre nom et votre pays.");
      return;
    }
    if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/.test(email)) {
      setStepError("Merci de renseigner une adresse email valide.");
      return;
    }
    setStepError("");
    setStep(2);
  };

  const goToStep3 = () => {
    if (form.message.length > 2000) {
      setStepError("Votre message est trop long (2 000 caractères maximum).");
      return;
    }
    setStepError("");
    setStep(3);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState("sending");
    try {
      await sendContactForm({
        ...form,
        treatment: f.options[treatmentIdx],
        lang,
        website, // honeypot field — backend silently drops if filled
        formLoadedAt,
        consent,
        preferredDate,
        preferredChannel,
        attachment
      });
      setState("success");
      trackLead("contact_form");
      setForm(initialForm);
      setTreatmentIdx(0);
      setConsent(false);
      setPreferredDate("");
      setPreferredChannel("email");
      setAttachment(null);
      setStep(1);
    } catch (err) {
      setState("error");
      setErrorMsg(err.message || f.error);
    }
  };

  return (
    <section className="contact reveal" id="contact" ref={ref}>
      <div className="wrap">
        <div>
          <div className="sec-head" style={{ marginBottom: 28 }}>
            <h2>{c.title}</h2>
            <p>{c.intro}</p>
          </div>
          <div className="contact-info">
            <div className="info-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.4 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.4 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" /></svg>
              <div><div className="label">{c.phoneLabel}</div><p><a href={`tel:${contact.phoneHref}`} onClick={() => trackContact("phone")}>{contact.phone}</a></p></div>
            </div>
            {contact.whatsapp && (
              <div className="info-row">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#25D366" }}><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 20Z" /></svg>
                <div><div className="label">WhatsApp</div><p><a href={contact.whatsapp} onClick={() => trackContact("whatsapp")} target="_blank" rel="noopener noreferrer">{contact.phone}</a></p></div>
              </div>
            )}
            <div className="info-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
              <div><div className="label">{c.emailLabel}</div><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
            </div>
            <div className="info-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              <div>
                <div className="label">{c.addrLabel}</div>
                <p>{c.addr}</p>
                <p style={{ marginTop: 2 }}><a href={contact.mapUrl} target="_blank" rel="noopener noreferrer">{c.mapLink}</a></p>
              </div>
            </div>
            <div className="info-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
              <div><div className="label">{c.hoursLabel}</div><p>{c.hours}</p></div>
            </div>
            <div className="social-row">
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
              </a>
              <a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" /></svg>
              </a>
              <a href={contact.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3Z" /></svg>
              </a>
              <a href={contact.virtualTour} target="_blank" rel="noopener noreferrer" aria-label="Visite virtuelle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 12s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7Z" /><circle cx="12" cy="12" r="3" /></svg>
              </a>
            </div>
          </div>
        </div>

        <form className="book" onSubmit={handleSubmit}>
          {/* Honeypot field: hidden from real users via CSS, invisible but present
              in the DOM so bots that auto-fill every input get caught. */}
          <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }} aria-hidden="true">
            <label htmlFor="website">Company website</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          {stepError && <div className="form-msg error" role="alert">{stepError}</div>}

          <div className="form-steps" aria-label="Étapes de la demande">
            <span className={step >= 1 ? "active" : ""}>1. Coordonnées</span>
            <span className={step >= 2 ? "active" : ""}>2. Besoin</span>
            <span className={step >= 3 ? "active" : ""}>3. Envoi</span>
          </div>

          {step === 1 && (
            <>
              <div className="form-row">
                <div><label htmlFor="contact-name">{f.name}</label><input id="contact-name" type="text" required maxLength={100} autoComplete="name" value={form.name} onChange={update("name")} {...textFieldSecurity} /></div>
                <div><label htmlFor="contact-country">{f.country}</label><input id="contact-country" type="text" required maxLength={60} autoComplete="country-name" value={form.country} onChange={update("country")} {...textFieldSecurity} /></div>
              </div>
              <div className="form-row">
                <div><label htmlFor="contact-email">{f.email}</label><input id="contact-email" type="email" required maxLength={150} autoComplete="email" value={form.email} onChange={update("email")} {...textFieldSecurity} /></div>
                <div><label htmlFor="contact-phone">{f.phone}</label><input id="contact-phone" type="tel" maxLength={30} autoComplete="tel" value={form.phone} onChange={update("phone")} {...textFieldSecurity} /></div>
              </div>
              <button type="button" className="btn btn-primary" onClick={goToStep2}>Continuer</button>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label htmlFor="contact-treatment">{f.treatment}</label>
                <select id="contact-treatment" value={treatmentIdx} onChange={(e) => setTreatmentIdx(Number(e.target.value))}>
                  {f.options.map((opt, i) => <option key={i} value={i}>{opt}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="contact-message">{f.message}</label>
                <textarea id="contact-message" maxLength={2000} value={form.message} onChange={update("message")} {...textFieldSecurity} />
              </div>
              <div className="form-row">
                <div>
                  <label htmlFor="preferred-date">Date souhaitée (optionnel)</label>
                  <input id="preferred-date" type="date" value={preferredDate} onChange={(e) => setPreferredDate(e.target.value)} min={new Date().toISOString().slice(0, 10)} />
                </div>
                <div>
                  <label htmlFor="preferred-channel">Comment vous contacter ?</label>
                  <select id="preferred-channel" value={preferredChannel} onChange={(e) => setPreferredChannel(e.target.value)}>
                    <option value="email">Email</option>
                    <option value="phone">Téléphone</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="attachment">Photos / radio (optionnel, 6 Mo max.)</label>
                <input id="attachment" type="file" accept=".jpg,.jpeg,.png,.webp,.pdf,image/jpeg,image/png,image/webp,application/pdf" onChange={handleAttachment} />
                {attachment?.name && <small>Fichier joint : {attachment.name}</small>}
                {attachmentError && <div className="form-msg error">{attachmentError}</div>}
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button type="button" className="btn" onClick={() => setStep(1)}>Retour</button>
                <button type="button" className="btn btn-primary" onClick={goToStep3}>Vérifier la demande</button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="form-summary">
                <strong>{form.name}</strong> · {form.email}<br />
                {f.options[treatmentIdx]}<br />
                <span>{form.message || "Aucun message complémentaire."}<br />Date : {preferredDate || "à convenir"} · Contact : {preferredChannel}</span>
              </div>
              <div className="consent-row"><label htmlFor="contact-consent">
                <input id="contact-consent" type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                <span>J’accepte que Virtus Dental Center utilise ces informations pour répondre à ma demande. Les informations transmises ne remplacent pas un avis médical.</span>
              </label></div>
              <div className="form-actions">
                <button type="button" className="btn back-btn" onClick={() => setStep(2)} disabled={state === "sending"}>Modifier</button>
                <button type="submit" className="btn btn-primary submit-btn" disabled={state === "sending" || !consent}>
                  {state === "sending" ? f.sending : f.submit}
                </button>
              </div>
            </>
          )}
          {state === "success" && <div className="form-msg success">{f.success}</div>}
          {state === "error" && <div className="form-msg error">{errorMsg || f.error}</div>}
        </form>
      </div>
    </section>
  );
}
