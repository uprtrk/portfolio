"use client";

import { Cormorant_Garamond, Inter } from "next/font/google";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react";
import GrainOverlay from "@/components/GrainOverlay";
import Marquee from "@/components/Marquee";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});
const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

const menu = [
  { name: "Крем-суп из лесных грибов", desc: "Трюфельное масло, хрустящий нут, свежий тимьян", price: "680 ₽", tag: "Суп" },
  { name: "Утиная грудка sous-vide", desc: "Вишнёвый соус, пюре из сельдерея, микрозелень", price: "1 490 ₽", tag: "Горячее" },
  { name: "Рибай на угле", desc: "Мраморная говядина, масло с травами, запечённый чеснок", price: "2 200 ₽", tag: "Горячее" },
  { name: "Тарт татен с яблоком", desc: "Карамельный соус, взбитые сливки, ваниль Мадагаскара", price: "520 ₽", tag: "Десерт" },
];

const words = ["Гастрономия,", "которую", "помнят"];
const marqueeItems = ["VOLTA", "АВТОРСКАЯ КУХНЯ", "МОСКВА", "2025", "ОТКРЫТО ЕЖЕДНЕВНО", "ОТ ШЕФА"];

export default function RestaurantPage() {
  return (
    <div className={`${cormorant.variable} ${inter.variable} min-h-screen bg-[#F8F2E6] text-[#1A1208]`}>
      <GrainOverlay opacity={0.045} />

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F2E6]/90 backdrop-blur-sm border-b border-[#1A1208]/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-[family-name:var(--font-cormorant)] text-lg font-medium tracking-widest uppercase">Volta</span>
          <nav className="hidden md:flex gap-8">
            {["Меню", "О нас", "Контакты"].map((l) => (
              <a key={l} href={`#${l}`} className="font-[family-name:var(--font-inter)] text-xs tracking-[0.15em] uppercase text-[#1A1208]/50 hover:text-[#1A1208] transition-colors">{l}</a>
            ))}
          </nav>
          <a href="#contact" className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase bg-[#1A1208] text-[#F8F2E6] px-5 py-2.5 hover:bg-[#9B6B1A] transition-colors duration-300">
            Забронировать
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-16 max-w-6xl mx-auto relative">

        {/* Декоративный круг — уникальный элемент этой страницы */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-8 w-[38vw] h-[38vw] max-w-[520px] max-h-[520px] rounded-full border border-[#1A1208]/10 hidden lg:flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
            className="w-[65%] h-[65%] rounded-full border border-[#9B6B1A]/25 flex items-center justify-center"
          >
            <span
              className="font-[family-name:var(--font-cormorant)] italic text-[#9B6B1A]/30 text-center leading-none"
              style={{ fontSize: "clamp(14px, 2vw, 22px)" }}
            >
              est.<br />2019
            </span>
          </motion.div>
        </motion.div>

        {/* Eyebrow */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10">
          <span className="w-6 h-px bg-[#9B6B1A]" />
          <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#9B6B1A]">
            Авторский ресторан · Москва
          </span>
        </motion.div>

        {/* H1 — слова появляются по одному */}
        <h1 className="font-[family-name:var(--font-cormorant)] font-light italic text-[#1A1208] leading-[0.92] mb-10 relative z-10"
          style={{ fontSize: "clamp(60px, 11vw, 148px)" }}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 48, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.18, ease: "easeOut" }}
              className="inline-block mr-[0.25em] last:mr-0"
            >
              {i === 1 ? <span className="text-[#9B6B1A]">{word}</span> : word}
            </motion.span>
          ))}
        </h1>

        {/* Subtext + CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-8 md:items-end">
          <p className="font-[family-name:var(--font-inter)] text-[#1A1208]/50 text-sm leading-[1.85] max-w-xs">
            Кухня с акцентом на сезонные продукты и локальных фермеров. Меняем меню четырежды в год.
          </p>
          <div className="flex flex-col gap-3">
            <a href="#Меню" className="group inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[#9B6B1A] border-b border-[#9B6B1A]/40 pb-1 w-fit hover:border-[#9B6B1A] transition-colors">
              Смотреть меню
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-2 font-[family-name:var(--font-inter)] text-[10px] text-[#1A1208]/35 tracking-wide">
              <Clock className="w-3 h-3" strokeWidth={1.5} />
              Ежедневно 12:00 — 23:00
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
          className="mt-16 h-px bg-[#1A1208]/12 origin-left" />
      </section>

      {/* MARQUEE */}
      <Marquee
        items={marqueeItems}
        speed={28}
        className="py-4 border-y border-[#1A1208]/10 font-[family-name:var(--font-cormorant)] italic text-[#9B6B1A]/60 text-lg"
      />

      {/* MENU */}
      <section id="Меню" className="py-32 px-6 bg-[#F0E8D2]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }} className="mb-16">
            <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#9B6B1A]">Избранное</span>
            <h2 className="font-[family-name:var(--font-cormorant)] font-light italic text-[#1A1208] mt-3 leading-tight"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
              Авторское меню
            </h2>
          </motion.div>

          <div className="divide-y divide-[#1A1208]/10">
            {menu.map(({ name, desc, price, tag }, i) => (
              <motion.div key={name} initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 py-8 hover:bg-[#E8DCC4]/50 px-3 transition-colors rounded">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#9B6B1A]/70 bg-[#9B6B1A]/10 px-2 py-0.5">{tag}</span>
                    <h3 className="font-[family-name:var(--font-cormorant)] font-medium text-[#1A1208]"
                      style={{ fontSize: "clamp(18px, 2vw, 24px)" }}>{name}</h3>
                  </div>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[#1A1208]/45 leading-relaxed">{desc}</p>
                </div>
                <div className="font-[family-name:var(--font-cormorant)] font-medium text-[#1A1208] text-right md:self-center"
                  style={{ fontSize: "clamp(20px, 2vw, 26px)" }}>{price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="О нас" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Большая декоративная цитата */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[#1A1208]/06 font-[family-name:var(--font-cormorant)] italic leading-none select-none mb-16 hidden md:block"
            style={{ fontSize: "clamp(80px, 16vw, 220px)" }}>
            Volta
          </motion.div>

          <div className="grid md:grid-cols-2 gap-20 items-start -mt-4 md:-mt-32 relative z-10">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }}>
              <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#9B6B1A] mb-4 block">О ресторане</span>
              <h2 className="font-[family-name:var(--font-cormorant)] font-light italic text-[#1A1208] leading-tight mb-8"
                style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
                Кухня как<br />точка зрения
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[#1A1208]/55 text-sm leading-[1.9]">
                Volta — это пространство, где шеф-повар ведёт диалог с гостем через вкус. Каждое блюдо — отражение сезона, места и идеи. Работаем только с локальными фермерами.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}>
              <div className="grid grid-cols-2 gap-px bg-[#1A1208]/10">
                {[["2019", "год открытия"], ["4×", "меню в год"], ["12", "поставщиков"], ["50+", "позиций"]].map(([num, label]) => (
                  <div key={label} className="bg-[#F8F2E6] p-8">
                    <div className="font-[family-name:var(--font-cormorant)] font-medium text-[#9B6B1A] mb-2"
                      style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>{num}</div>
                    <div className="font-[family-name:var(--font-inter)] text-[10px] text-[#1A1208]/40 uppercase tracking-wide">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 bg-[#1A1208] text-[#F8F2E6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-[family-name:var(--font-cormorant)] font-light italic leading-tight"
            style={{ fontSize: "clamp(40px, 6vw, 80px)" }}>
            Забронировать<br /><span className="text-[#C4963A]">столик</span>
          </motion.h2>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col gap-4">
            <a href="tel:+74951234567" className="group flex items-center justify-between border border-[#F8F2E6]/12 hover:border-[#C4963A]/50 px-8 py-6 transition-colors duration-300">
              <div>
                <div className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#F8F2E6]/25 mb-1">Телефон</div>
                <div className="font-[family-name:var(--font-cormorant)] text-2xl">+7 495 123-45-67</div>
              </div>
              <Phone className="w-4 h-4 text-[#F8F2E6]/15 group-hover:text-[#C4963A] transition-colors" strokeWidth={1.5} />
            </a>
            <div className="border border-[#F8F2E6]/12 px-8 py-6">
              <div className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#F8F2E6]/25 mb-3">Часы работы</div>
              {[["Пн — Чт", "12:00 — 23:00"], ["Пт — Вс", "12:00 — 01:00"]].map(([d, h]) => (
                <div key={d} className="flex justify-between font-[family-name:var(--font-inter)] text-sm mb-1">
                  <span className="text-[#F8F2E6]/40">{d}</span>
                  <span className="text-[#F8F2E6]/75">{h}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 font-[family-name:var(--font-inter)] text-xs text-[#F8F2E6]/30 px-1">
              <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
              Москва, ул. Пречистенка, 14
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#1A1208] border-t border-[#F8F2E6]/08 px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-[family-name:var(--font-cormorant)] italic text-[#F8F2E6]/40">Volta</span>
          <span className="font-[family-name:var(--font-inter)] text-[#F8F2E6]/15 text-xs">© 2025</span>
        </div>
      </footer>
    </div>
  );
}
