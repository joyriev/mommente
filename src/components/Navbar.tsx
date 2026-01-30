import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "The Founder", href: "#about" },
    { name: "The Collective", href: "#brands" },
    { name: "Our Team", href: "#team" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled || isMenuOpen ? "bg-brand-offwhite/95 backdrop-blur-md py-4 border-b border-brand-charcoal/5 shadow-sm" : "bg-transparent py-8 border-b border-transparent"}`}
      >
        <div className="container mx-auto px-6 md:px-12 max-w-7xl flex justify-between items-center">
          <a
            href="#"
            className="text-xl md:text-2xl font-sans font-black tracking-tighter uppercase flex items-center z-[110]"
          >
            Mommente<span className="text-brand-gold ml-0.5">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12 text-[10px] uppercase tracking-[0.3em] font-black">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-brand-gold transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="group relative px-6 py-3 overflow-hidden border border-brand-charcoal hover:border-brand-gold transition-colors"
            >
              <span className="relative z-10 group-hover:text-white transition-colors">
                Inquire
              </span>
              <div className="absolute inset-0 bg-brand-charcoal translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-[110] p-2 text-brand-charcoal hover:text-brand-gold transition-colors focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X size={28} strokeWidth={1.5} />
            ) : (
              <Menu size={28} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-brand-offwhite transition-all duration-700 ease-in-out transform ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        <div className="flex flex-col h-full justify-center p-12 space-y-12">
          <div className="flex flex-col space-y-8 text-right">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-2xl font-sans font-black uppercase tracking-widest hover:text-brand-gold transition-all duration-500 transform ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div
            className={`absolute bottom-12 right-12 transition-all duration-700 delay-500 ${isMenuOpen ? "translate-y-0 opacity-40" : "translate-y-10 opacity-0"}`}
          >
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold">
              Living Elevated.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
