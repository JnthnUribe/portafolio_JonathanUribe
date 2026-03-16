import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Stack", href: "#stack" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`w-full transition-colors duration-300 pointer-events-auto ${
        scrolled ? "bg-black/60 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto relative flex flex-col md:flex-row items-center justify-center h-auto py-5 px-6 md:h-20 min-h-[5rem]">
        {/* Brand - Positioned static on mobile, absolutely on the left on desktop */}
        <a href="#" className="md:absolute md:left-6 mb-4 md:mb-0 z-10 transition-transform hover:scale-105">
          <img
            src="/assets/projects/logo_portafolio.png"
            alt="jnthn.Uribe"
            className="h-9 w-auto object-contain"
          />
        </a>
        
        {/* Centered Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 z-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
