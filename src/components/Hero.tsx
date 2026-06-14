"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!blobRef.current) return;
      blobRef.current.style.background = `radial-gradient(700px at ${e.clientX}px ${e.clientY}px, rgba(232,213,176,0.09), transparent 80%)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Mouse blob */}
      <div
        ref={blobRef}
        className="pointer-events-none fixed inset-0 z-10 transition-none"
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-3 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8D5B0]" />
          <span className="text-[#E8D5B0]/70 text-xs tracking-[0.25em] uppercase font-sans">
            Веб-разработка · 2025
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="font-heading font-semibold leading-[0.93] tracking-[-0.03em] text-[#F5F5F0] mb-8"
          style={{ fontSize: "clamp(52px, 9vw, 128px)" }}
        >
          Сайты,
          <br />
          <span className="text-[#E8D5B0]">которые</span>
          <br />
          работают
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-[#F5F5F0]/45 text-lg max-w-sm font-sans leading-[1.75] mb-12"
        >
          Разрабатываю лендинги и сайты под ключ для бизнеса. Без конструкторов — только чистый код и результат.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-[#E8D5B0] text-[#0A0A0A] px-8 py-4 font-sans font-medium text-sm tracking-wide hover:bg-[#F5F5F0] transition-colors duration-200"
          >
            Обсудить проект
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#works"
            className="text-[#F5F5F0]/35 text-sm font-sans hover:text-[#F5F5F0]/70 transition-colors duration-200 tracking-wide"
          >
            Смотреть работы ↓
          </a>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
          className="absolute bottom-0 left-6 right-6 h-px bg-[#2A2A2A] origin-left"
        />
      </div>
    </section>
  );
}
