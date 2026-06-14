"use client";
import { useEffect, useState } from "react";
import { clsx } from "clsx";

const links = [
  { label: "Услуги", href: "#services" },
  { label: "Работы", href: "#works" },
  { label: "Обо мне", href: "#about" },
  { label: "Контакт", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#2A2A2A]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-heading font-semibold text-[#F5F5F0] tracking-tight text-sm">
          Studio Plot
        </span>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#F5F5F0]/40 hover:text-[#F5F5F0] text-sm font-sans transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-xs font-sans tracking-widest uppercase text-[#0A0A0A] bg-[#E8D5B0] px-4 py-2 hover:bg-[#F5F5F0] transition-colors duration-200"
        >
          Связаться
        </a>
      </div>
    </header>
  );
}
