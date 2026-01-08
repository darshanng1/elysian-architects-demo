import { useState } from 'react'
import Navbar from "./components/Navbar";

/* ===================== TRANSLATIONS ===================== */
const translations = {
  en: {
    nav: { home: "Home", portfolio: "Portfolio", gallery: "Architect Gallery", about: "About", contact: "Contact" },
    hero: {
      title: "Architecture that Breathes",
      subtitle: "Sculpting spaces where light, form, and function converge",
      cta: "Explore Portfolio",
    },
    portfolio: {
      heading: "Our Work",
      subheading: "Sculpting tomorrow across continents and categories",
    },
    philosophy: {
      heading: "Studio Philosophy",
      subheading: "Design is dialogue between human need and natural form",
      p1: "At Elysian Architects, we believe architecture transcends mere shelter.",
      p2: "Our design philosophy centers on minimalism, sustainability, and craft.",
      p3: "Every project is a conversation between place and people.",
    },
    gallery: {
      heading: "Architect Gallery",
      subheading: "Concepts, experiments, and competition entries",
    },
    contact: {
      heading: "Let's Build Together",
      subheading: "Transform your vision into architectural reality",
      form: {
        name: "Your Name",
        email: "Email Address",
        message: "Tell us about your project",
        submit: "Send Message",
      },
    },
  },
};

/* ===================== DATA ===================== */
const portfolioData = {
  categories: [
    {
      id: "residential",
      name: "Residential",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    },
    {
      id: "commercial",
      name: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    },
  ],
};

/* ===================== APP ===================== */
export default function App() {
  const [language] = useState<"en">("en");

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations[language];
    for (const k of keys) value = value?.[k];
    return value ?? key;
  };

  return (
    <div className="min-h-screen">
      {/* ✅ NEW NAVBAR COMPONENT */}
      <Navbar />

      {/* HERO */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-24 px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">{t("hero.title")}</h1>
          <p className="text-xl text-stone-600 mb-10">{t("hero.subtitle")}</p>
          <a
            href="#portfolio"
            className="inline-block px-8 py-4 bg-stone-900 text-white rounded-full font-bold"
          >
            {t("hero.cta")}
          </a>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">{t("portfolio.heading")}</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {portfolioData.categories.map((c) => (
            <div key={c.id} className="overflow-hidden rounded-xl">
              <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">{t("philosophy.heading")}</h2>
          <p>{t("philosophy.p1")}</p>
          <p>{t("philosophy.p2")}</p>
          <p>{t("philosophy.p3")}</p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">{t("gallery.heading")}</h2>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-stone-50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">{t("contact.heading")}</h2>
          <p className="mb-8">{t("contact.subheading")}</p>
          <form className="space-y-4">
            <input className="w-full p-3 border rounded" placeholder={t("contact.form.name")} />
            <input className="w-full p-3 border rounded" placeholder={t("contact.form.email")} />
            <textarea className="w-full p-3 border rounded" rows={4} placeholder={t("contact.form.message")} />
            <button className="w-full p-3 bg-stone-900 text-white rounded font-bold">
              {t("contact.form.submit")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
