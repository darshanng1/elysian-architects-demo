import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between relative">
      <div className="text-xl font-semibold">ARCHITECT</div>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Menu */}
      <nav
  className={`${
    open ? "block" : "hidden"
  } absolute top-full left-0 w-full bg-white md:static md:flex md:w-auto md:block`}
>
  <a className="block px-6 py-3" href="#home">Home</a>
  <a className="block px-6 py-3" href="#about">About</a>
  <a className="block px-6 py-3" href="#portfolio">Portfolio</a>
  <a className="block px-6 py-3" href="#gallery">Architect Gallery</a>
  <a className="block px-6 py-3" href="#contact">Contact</a>
</nav>

    </header>
  );
}

