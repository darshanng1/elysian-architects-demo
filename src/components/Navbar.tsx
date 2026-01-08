import { useState } from "react";

type NavbarProps = {
  language: "en" | "kn";
  toggleLanguage: () => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
  labels: {
    home: string;
    portfolio: string;
    gallery: string;
    about: string;
    contact: string;
  };
};

export default function Navbar({
  language,
  toggleLanguage,
  theme,
  toggleTheme,
  labels,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-6 py-4 text-stone-900 dark:text-stone-100">
        {/* TOP BAR */}
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <a href="#hero" className="text-2xl font-bold">
            Elysian
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#hero">{labels.home}</a>
            <a href="#portfolio">{labels.portfolio}</a>
            <a href="#gallery">{labels.gallery}</a>
            <a href="#about">{labels.about}</a>
            <a href="#contact">{labels.contact}</a>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            {/* LANGUAGE */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full border border-stone-400 dark:border-stone-600 text-sm font-bold"
            >
              {language === "en" ? "EN" : "KN"}
            </button>

            {/* THEME */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full border border-stone-400 dark:border-stone-600 flex items-center justify-center"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU (ALWAYS MOUNTED) */}
        <div
          className={`md:hidden mt-6 flex flex-col gap-4 font-medium border-t border-stone-200 dark:border-stone-700 pt-4 transition-all ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <a href="#hero" onClick={() => setMenuOpen(false)}>
            {labels.home}
          </a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>
            {labels.portfolio}
          </a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            {labels.gallery}
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            {labels.about}
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            {labels.contact}
          </a>
        </div>
      </div>
    </nav>
  );
}
