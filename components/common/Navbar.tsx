"use client";

import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Our Vision", id: "vision" },
  { label: "How It Works", id: "howitworks" },
  { label: "Testimonials", id: "testimonials" },
  // { label: "Team", id: "team" },
  { label: "FAQs", id: "faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  /* ---------------- SCROLL TO TOP VISIBILITY ---------------- */
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- OUTSIDE CLICK (MOUSE + TOUCH) ---------------- */
  useEffect(() => {
    if (!open) return;

    const handleOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [open]);

  /* ---------------- LOCK BODY SCROLL ON MOBILE MENU ---------------- */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* ---------------- CLOSE MENU ON SCREEN RESIZE ---------------- */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ---------------- SCROLL HELPERS ---------------- */
  const scrollToSection = (id: string) => {
    setOpen(false);

    const element = document.getElementById(id);
    if (!element) return;

    const navbarOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navbarOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="absolute top-0 left-0 right-0 z-30 w-full

"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 py-4 md:py-6 flex flex-col md:flex-row md:justify-between md:items-center">
          {/* LOGO + HAMBURGER */}
          <div className="flex w-full md:w-auto justify-between items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 cursor-pointer"
            >
              <svg width="32" height="32" viewBox="0 0 24 24">
                <circle cx="6" cy="9" r="1.5" fill="#90cae2ff" />
                <circle cx="12" cy="9" r="1.5" fill="#90cae2ff" />
                <circle cx="18" cy="9" r="1.5" fill="#90cae2ff" />
                <path
                  d="M6 14c1.7 2 4 3 6 3s4.3-1 6-3"
                  stroke="#28A8E0"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-black text-xl sm:text-2xl font-semibold tracking-tight">
                BraceFree
                <span className="text-[10px] align-top ml-[2px]">™</span>
              </span>
            </button>

            <button
              ref={buttonRef}
              className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <svg
                width="26"
                height="26"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* MENU */}
          <div
            ref={menuRef}
            className={`absolute md:static
    top-full left-0 right-0
    flex-col md:flex-row md:flex gap-4 sm:gap-6 md:gap-10
    text-white text-base md:text-lg font-medium tracking-wide
    w-full md:w-auto
    bg-black md:bg-transparent
    rounded-b-xl md:rounded-none
    mt-2 md:mt-0
    transition-all duration-300
    ${open ? "flex" : "hidden"} md:flex`}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-blue-300 transition cursor-pointer py-2 md:py-0 w-full md:w-auto text-left md:text-center px-4 md:px-0"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* JUMP TO TOP */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="
            fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50
            h-11 w-11 sm:h-12 sm:w-12
            flex items-center justify-center
            rounded-full
            bg-[#28A8E0]
            text-white
            shadow-[0_8px_20px_rgba(40,168,224,0.35)]
            transition-all duration-300 ease-out
            hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(40,168,224,0.45)]
            focus:outline-none focus:ring-2 focus:ring-[#28A8E0]/50
            cursor-pointer
          "
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}
    </>
  );
}
