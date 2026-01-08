import { useState } from "react";

type NavbarProps = {
  language: "en" | "kn";
  toggleLanguage: () => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export default function Navbar({
  language,
  toggleLanguage,
  theme,
  toggleTheme,
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <a href="#hero" className="text-2xl font-bold">
            Elysian
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
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
              className="px-3 py-1 rounded-full border text-sm font-bold"
            >
              {language === "en" ? "EN" : "KN"}
            </button>

            {/* THEME */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center border"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden mt-6 flex flex-col gap-4 border-t pt-4">
            <a href="#hero" onClick={() => setOpen(false)}>Home</a>
            <a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
            <a href="#gallery" onClick={() => setOpen(false)}>Architect Gallery</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}
