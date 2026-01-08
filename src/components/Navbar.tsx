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
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-6 py-4 text-stone-900 dark:text-stone-100">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <a href="#hero" className="text-2xl font-bold">
            Elysian
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#hero">Home</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#gallery">Architect Gallery</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          {/* RIGHT CONTROLS */}
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
              className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-400 dark:border-stone-600"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden mt-6 flex flex-col gap-4 font-medium border-t border-stone-200 dark:border-stone-700 pt-4">
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>
              Architect Gallery
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
