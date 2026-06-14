"use client";

import { Space_Grotesk, Inter } from "next/font/google";
import { motion } from "framer-motion";
import { ArrowRight, AtSign, Phone, MapPin } from "lucide-react";
import GrainOverlay from "@/components/GrainOverlay";
import Marquee from "@/components/Marquee";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-space" });
const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

const services = [
  { name: "Мужская стрижка", price: "1 800 ₽", time: "45 мин" },
  { name: "Стрижка + борода", price: "2 400 ₽", time: "60 мин" },
  { name: "Оформление бороды", price: "900 ₽", time: "30 мин" },
  { name: "Королевское бритьё", price: "1 400 ₽", time: "40 мин" },
  { name: "Детская стрижка", price: "1 200 ₽", time: "30 мин" },
  { name: "Тонирование волос", price: "2 800 ₽", time: "90 мин" },
];

const masters = [
  { name: "Артём Громов", spec: "Мастер · 7 лет опыта", tag: "Основатель" },
  { name: "Дмитрий Лисин", spec: "Барбер · классические стрижки", tag: "" },
  { name: "Кирилл Вашков", spec: "Барбер · работа с бородой", tag: "" },
];

const marqueeItems = ["KLIF", "BARBERSHOP", "MOSCOW", "EST. 2018", "BOOK NOW", "HAIRCUT", "BEARD"];

export default function BeautyPage() {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable} min-h-screen bg-[#0A0A0A] text-[#F0F0EE]`}>
      <GrainOverlay opacity={0.055} />

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#F0F0EE]/06 bg-[#0A0A0A]/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-[family-name:var(--font-space)] font-bold tracking-[0.2em] text-[#F0F0EE]">KLIF</span>
          <nav className="hidden md:flex gap-8">
            {["Услуги", "Мастера", "Контакты"].map((l) => (
              <a key={l} href={`#${l}`} className="font-[family-name:var(--font-inter)] text-xs tracking-[0.15em] uppercase text-[#F0F0EE]/30 hover:text-[#F0F0EE] transition-colors">{l}</a>
            ))}
          </nav>
          <a href="#Контакты" className="font-[family-name:var(--font-space)] font-semibold text-xs tracking-widest uppercase bg-[#C8A84B] text-[#0A0A0A] px-5 py-2.5 hover:bg-[#E0C060] transition-colors">
            Записаться
          </a>
        </div>
      </header>

      {/* HERO — уникальный элемент: гигантский watermark + rotated текст */}
      <section className="min-h-screen flex items-center px-6 pt-16 relative overflow-hidden">

        {/* Гигантский KLIF за контентом */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <motion.span
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="font-[family-name:var(--font-space)] font-bold text-[#F0F0EE]/[0.028] leading-none tracking-tighter"
            style={{ fontSize: "clamp(180px, 38vw, 520px)" }}
          >
            KLIF
          </motion.span>
        </div>

        {/* Вертикальный rotated текст справа */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:block">
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.35em] uppercase text-[#C8A84B]/50 rotate-90 block whitespace-nowrap origin-center"
          >
            Москва · Новый Арбат, 8 · 2018
          </motion.span>
        </div>

        <div className="max-w-6xl mx-auto w-full py-24 relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10">
            <span className="w-6 h-px bg-[#C8A84B]" />
            <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C8A84B]">
              Барбершоп · Москва · с 2018
            </span>
          </motion.div>

          {/* H1 по буквам */}
          <h1 className="font-[family-name:var(--font-space)] font-bold text-[#F0F0EE] leading-[0.88] tracking-[-0.04em] mb-10"
            style={{ fontSize: "clamp(72px, 15vw, 200px)" }}>
            {"KLIF".split("").map((char, i) => (
              <motion.span key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: "easeOut" }}
                className="inline-block">
                {char}
              </motion.span>
            ))}
          </h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <p className="font-[family-name:var(--font-inter)] text-[#F0F0EE]/40 text-base leading-relaxed max-w-xs">
              Мужской образ — это не просто стрижка. Это уверенность, которую видно с первого взгляда.
            </p>
            <a href="#Контакты" className="group inline-flex items-center gap-3 font-[family-name:var(--font-space)] font-semibold text-sm tracking-wider uppercase text-[#C8A84B] border border-[#C8A84B]/40 px-8 py-4 hover:bg-[#C8A84B] hover:text-[#0A0A0A] hover:border-[#C8A84B] transition-all duration-300">
              Записаться
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
            className="mt-16 h-px bg-[#F0F0EE]/08 origin-left" />
        </div>
      </section>

      {/* MARQUEE — золотой фон, инвертированный */}
      <Marquee
        items={marqueeItems}
        speed={22}
        className="py-3.5 bg-[#C8A84B] font-[family-name:var(--font-space)] font-semibold text-sm tracking-widest text-[#0A0A0A]"
        separator="×"
      />

      {/* SERVICES */}
      <section id="Услуги" className="py-24 px-6 border-t border-[#F0F0EE]/06">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="mb-14">
            <div className="flex items-end justify-between">
              <div>
                <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C8A84B] mb-4 block">Прайс-лист</span>
                <h2 className="font-[family-name:var(--font-space)] font-bold text-[#F0F0EE] leading-tight tracking-tight"
                  style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>Услуги</h2>
              </div>
              {/* Stroke text — уникальный декоративный элемент */}
              <span className="font-[family-name:var(--font-space)] font-bold text-transparent leading-none tracking-[-0.04em] select-none hidden md:block"
                style={{
                  fontSize: "clamp(48px, 7vw, 96px)",
                  WebkitTextStroke: "1px rgba(200,168,75,0.18)",
                }}>
                STYLE
              </span>
            </div>
          </motion.div>

          <div className="divide-y divide-[#F0F0EE]/06">
            {services.map(({ name, price, time }, i) => (
              <motion.div key={name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
                className="group grid grid-cols-[auto_1fr_auto_auto] gap-4 md:gap-10 py-5 hover:bg-[#141414] px-3 transition-colors items-center rounded">
                <span className="font-[family-name:var(--font-space)] text-[#C8A84B]/30 text-xs font-semibold tabular-nums w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-[family-name:var(--font-space)] font-medium text-[#F0F0EE] text-base md:text-lg">{name}</span>
                <span className="font-[family-name:var(--font-inter)] text-xs text-[#F0F0EE]/20 tracking-wide hidden md:block">{time}</span>
                <span className="font-[family-name:var(--font-space)] font-semibold text-[#C8A84B]">{price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MASTERS */}
      <section id="Мастера" className="py-24 px-6 border-t border-[#F0F0EE]/06 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="mb-14">
            <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C8A84B] mb-4 block">Команда</span>
            <h2 className="font-[family-name:var(--font-space)] font-bold text-[#F0F0EE] tracking-tight"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>Мастера</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#F0F0EE]/05">
            {masters.map(({ name, spec, tag }, i) => (
              <motion.div key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="bg-[#0D0D0D] p-10 hover:bg-[#141414] transition-colors cursor-default">
                <div className="mb-8 h-5">
                  {tag && <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#C8A84B]">{tag}</span>}
                </div>
                <h3 className="font-[family-name:var(--font-space)] font-semibold text-[#F0F0EE] text-xl mb-2 tracking-tight">{name}</h3>
                <p className="font-[family-name:var(--font-inter)] text-[#F0F0EE]/30 text-sm">{spec}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="Контакты" className="py-24 px-6 border-t border-[#F0F0EE]/06">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-[family-name:var(--font-space)] font-bold text-[#F0F0EE] leading-[0.9] tracking-tight mb-16"
            style={{ fontSize: "clamp(48px, 8vw, 110px)" }}>
            ЗАПИСЬ<br /><span className="text-[#C8A84B]">ОНЛАЙН</span>
          </motion.h2>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Телефон", value: "+7 926 000-00-00", Icon: Phone, href: "tel:+79260000000" },
              { label: "Instagram", value: "@klif.barber", Icon: AtSign, href: "#" },
              { label: "Адрес", value: "Новый Арбат, 8", Icon: MapPin, href: "#" },
            ].map(({ label, value, Icon, href }) => (
              <a key={label} href={href}
                className="group flex items-center justify-between border border-[#F0F0EE]/08 hover:border-[#C8A84B]/50 px-8 py-6 transition-colors duration-300">
                <div>
                  <div className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#F0F0EE]/20 mb-1">{label}</div>
                  <div className="font-[family-name:var(--font-space)] font-medium text-[#F0F0EE]">{value}</div>
                </div>
                <Icon className="w-4 h-4 text-[#F0F0EE]/12 group-hover:text-[#C8A84B] transition-colors" strokeWidth={1.5} />
              </a>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 border border-[#F0F0EE]/08 px-8 py-5">
            <div className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#F0F0EE]/20 mb-3">Режим работы</div>
            <div className="flex flex-wrap gap-8">
              {[["Пн — Пт", "10:00 — 21:00"], ["Сб — Вс", "10:00 — 20:00"]].map(([d, h]) => (
                <div key={d} className="flex gap-4 font-[family-name:var(--font-inter)] text-sm">
                  <span className="text-[#F0F0EE]/25">{d}</span>
                  <span className="text-[#F0F0EE]/65">{h}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-[#F0F0EE]/06 px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-[family-name:var(--font-space)] font-bold text-[#F0F0EE]/20 tracking-widest">KLIF</span>
          <span className="font-[family-name:var(--font-inter)] text-[#F0F0EE]/12 text-xs">© 2025</span>
        </div>
      </footer>
    </div>
  );
}
