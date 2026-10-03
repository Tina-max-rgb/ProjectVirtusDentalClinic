import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import SEOHead from "./components/SEOHead";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PressLogos from "./components/PressLogos";
import TrustCenter from "./components/TrustCenter";
import WhyTirana from "./components/WhyTirana";
import Treatments from "./components/Treatments";
import Packages from "./components/Packages";
import Doctor from "./components/Doctor";
import Team from "./components/Team";
import Journey from "./components/Journey";
import Testimonials from "./components/Testimonials";
import GoogleReviews from "./components/GoogleReviews";
import FAQ from "./components/FAQ";
import HomeExplore from "./components/HomeExplore";
import SmileChallenge from "./components/SmileChallenge";
import MediaShowcase from "./components/MediaShowcase";
import Gallery from "./components/Gallery";
import VideoTestimonials from "./components/VideoTestimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AppNav from "./components/AppNav";
import Chatbot from "./components/Chatbot";
import TreatmentPage from "./components/TreatmentPage";
import DoctorProfile from "./components/DoctorProfile";
import NotFound from "./components/NotFound";
import InfoPage from "./components/InfoPage";
import LegalPage from "./components/LegalPage";
import ConsentBanner from "./components/ConsentBanner";


function RouteScrollManager() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const timer = window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" }), 60);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);
  return null;
}

function Screen() {
  const { status } = useLanguage();
  if (status === "loading") {
    return (
      <div className="loading-screen">
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: 22, color: "#0E3B39" }}>Virtus Dental Center</div>
        <div>Chargement du contenu…</div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="error-screen">
        <h2 style={{ color: "#0E3B39" }}>Impossible de contacter le serveur</h2>
        <p style={{ maxWidth: 420 }}>
          Le frontend n'arrive pas à joindre l'API backend. Vérifiez que le serveur tourne bien
          (<code>cd backend &amp;&amp; npm run dev</code>) et que <code>VITE_API_URL</code> pointe vers la bonne adresse.
        </p>
      </div>
    );
  }

  return (
    <>
      <SEOHead />
      <Header />
      <main>
        <Hero />
        <PressLogos />
        <TrustCenter />
        <GoogleReviews />
        <WhyTirana />
        <Treatments />
        <MediaShowcase />
        <Packages />
        <Pricing />
        <Gallery />
        <VideoTestimonials />
        <Doctor />
        <Team />
        <Journey />
        <Testimonials />
        <FAQ />
        <HomeExplore />
        <SmileChallenge />
        <Contact />
      </main>
      <Footer />
      <AppNav />
    </>
  );
}

function GlobalAssistant() {
  const [chatOpen, setChatOpen] = useState(false);
  return <Chatbot open={chatOpen} onToggle={() => setChatOpen((o) => !o)} />;
}

function ConsentGate({ children }) {
  const { lang } = useLanguage();
  return <><ConsentBanner lang={lang} />{children}</>;
}

function LocalizedApp({ children }) {
  return (
    <LanguageProvider>
      <ConsentGate>
        {children || <Screen />}
        <GlobalAssistant />
      </ConsentGate>
    </LanguageProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteScrollManager />
      <Routes>
        <Route path="/:langParam?/treatments/:slug" element={<LocalizedApp><TreatmentPage /></LocalizedApp>} />
        <Route path="/:langParam?/team/:slug" element={<LocalizedApp><DoctorProfile /></LocalizedApp>} />
        <Route path="/about" element={<LocalizedApp><InfoPage pageName="about" /></LocalizedApp>} />
        <Route path="/:langParam/about" element={<LocalizedApp><InfoPage pageName="about" /></LocalizedApp>} />
        <Route path="/dental-tourism" element={<LocalizedApp><InfoPage pageName="dental-tourism" /></LocalizedApp>} />
        <Route path="/:langParam/dental-tourism" element={<LocalizedApp><InfoPage pageName="dental-tourism" /></LocalizedApp>} />
        <Route path="/before-after" element={<LocalizedApp><InfoPage pageName="before-after" /></LocalizedApp>} />
        <Route path="/:langParam/before-after" element={<LocalizedApp><InfoPage pageName="before-after" /></LocalizedApp>} />
        <Route path="/virtual-tour" element={<LocalizedApp><InfoPage pageName="virtual-tour" /></LocalizedApp>} />
        <Route path="/:langParam/virtual-tour" element={<LocalizedApp><InfoPage pageName="virtual-tour" /></LocalizedApp>} />
        <Route path="/blog" element={<LocalizedApp><InfoPage pageName="blog" /></LocalizedApp>} />
        <Route path="/:langParam/blog" element={<LocalizedApp><InfoPage pageName="blog" /></LocalizedApp>} />
        <Route path="/contact" element={<LocalizedApp><InfoPage pageName="contact" /></LocalizedApp>} />
        <Route path="/:langParam/contact" element={<LocalizedApp><InfoPage pageName="contact" /></LocalizedApp>} />
        <Route path="/privacy" element={<LocalizedApp><LegalPage type="privacy" /></LocalizedApp>} />
        <Route path="/:langParam/privacy" element={<LocalizedApp><LegalPage type="privacy" /></LocalizedApp>} />
        <Route path="/cookies" element={<LocalizedApp><LegalPage type="cookies" /></LocalizedApp>} />
        <Route path="/:langParam/cookies" element={<LocalizedApp><LegalPage type="cookies" /></LocalizedApp>} />
        <Route path="/legal" element={<LocalizedApp><LegalPage type="legal" /></LocalizedApp>} />
        <Route path="/:langParam/legal" element={<LocalizedApp><LegalPage type="legal" /></LocalizedApp>} />

        {/* "/" = French (default, no prefix). "/en", "/it", "/es", "/de",
            "/pt", "/ru", "/ar", "/sq", "/zh" each get their own indexable URL. */}
        <Route path="/:langParam?" element={<LocalizedApp />} />
        <Route path="*" element={<LocalizedApp><NotFound /></LocalizedApp>} />
      </Routes>
    </BrowserRouter>
  );
}
