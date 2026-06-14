"use client";

import { Sora, Inter } from "next/font/google";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import GrainOverlay from "@/components/GrainOverlay";
import Marquee from "@/components/Marquee";

const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-sora" });
const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

// Анимированный счётчик — считает от 0 до target при появлении в viewport
function Counter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = prefix + Math.round(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [isInView, count, target, suffix, prefix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const programs = [
  {
    name: "START",
    price: "9 900 ₽",
    period: "/ 4 недели",
    desc: "Для тех, кто только начинает. Базовая программа тренировок и питания.",
    features: ["8 тренировок в месяц", "План питания на неделю", "Поддержка в чате", "Замеры каждые 2 недели"],
    highlight: false,
  },
  {
    name: "PRO",
    price: "17 900 ₽",
    period: "/ 4 недели",
    desc: "Полное сопровождение для устойчивого результата и смены образа жизни.",
    features: ["16 тренировок в месяц", "Персональный план питания", "Ежедневный контроль", "Видеоразбор техники", "Замеры еженедельно"],
    highlight: true,
  },
  {
    name: "ELITE",
    price: "29 900 ₽",
    period: "/ 4 недели",
    desc: "Максимум внимания. Для тех, кто хочет результат как у профессионала.",
    features: ["Безлимитные тренировки", "Индивидуальный план питания", "Поддержка 24/7", "Анализ состава тела", "Спортпит в подарок"],
    highlight: false,
  },
];

const stats = [
  { num: 240, suffix: "+", label: "клиентов" },
  { num: 6, suffix: "", label: "лет практики" },
  { num: 89, suffix: "%", label: "достигли цели" },
  { num: 4, suffix: ".9", label: "рейтинг" },
];

const marqueeItems = ["ФОРМА", "ПЕРСОНАЛЬНЫЙ ТРЕНЕР", "РЕЗУЛЬТАТ", "8 НЕДЕЛЬ", "АНТОН СЕМЁНОВ", "ТРЕНИРОВКИ"];

export default function FitnessPage() {
  return (
    <div className={`${sora.variable} ${inter.variable} min-h-screen bg-[#F4F4F0] text-[#0D0D0D]`}>
      <GrainOverlay opacity={0.03} />

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F4F4F0]/95 backdrop-blur-sm border-b border-[#0D0D0D]/08">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-[family-name:var(--font-sora)] font-bold text-[#0D0D0D] tracking-tight">ФОРМА</span>
          <nav className="hidden md:flex gap-8">
            {["Программы", "Тренер", "Старт"].map((l) => (
              <a key={l} href={`#${l}`} className="font-[family-name:var(--font-inter)] text-xs tracking-[0.12em] uppercase text-[#0D0D0D]/40 hover:text-[#0D0D0D] transition-colors">{l}</a>
            ))}
          </nav>
          <a href="#Программы" className="font-[family-name:var(--font-sora)] font-semibold text-xs tracking-wide uppercase bg-[#1E3BFF] text-white px-5 py-2.5 hover:bg-[#0025DD] transition-colors">
            Начать
          </a>
        </div>
      </header>

      {/* HERO — асимметричная сетка */}
      <section className="min-h-screen flex items-end px-6 pt-32 pb-0 relative overflow-hidden">
        {/* Большой декоративный водяной знак */}
        <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden">
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-[family-name:var(--font-sora)] font-black text-[#0D0D0D]/[0.025] leading-none whitespace-nowrap"
            style={{ fontSize: "clamp(100px, 22vw, 320px)" }}
          >
            РЕЗУЛЬТАТ
          </motion.span>
        </div>

        <div className="max-w-6xl mx-auto w-full pb-0 relative z-10">
          <div className="grid md:grid-cols-[1fr_340px] gap-0 items-end">
            {/* Левая часть: имя тренера */}
            <div className="pb-16">
              <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-10">
                <span className="w-6 h-px bg-[#1E3BFF]" />
                <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#1E3BFF]">Персональный тренер</span>
              </motion.div>

              <h1 className="font-[family-name:var(--font-sora)] font-extrabold text-[#0D0D0D] leading-[0.88] tracking-[-0.04em] mb-8"
                style={{ fontSize: "clamp(52px, 10vw, 136px)" }}>
                {["АНТОН", "СЕМЁНОВ"].map((word, wi) => (
                  <div key={wi}>
                    {word.split("").map((char, ci) => (
                      <motion.span key={ci}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 + wi * 0.3 + ci * 0.05, ease: "easeOut" }}
                        className={`inline-block ${wi === 1 ? "text-[#1E3BFF]" : ""}`}>
                        {char}
                      </motion.span>
                    ))}
                  </div>
                ))}
              </h1>

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
                className="font-[family-name:var(--font-inter)] text-[#0D0D0D]/50 text-base leading-relaxed max-w-sm mb-10">
                Изменю твоё тело за 8 недель. Без магии — только система, дисциплина и правильный подход.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" }}
                className="flex flex-wrap gap-3">
                <a href="#Программы" className="group inline-flex items-center gap-2 font-[family-name:var(--font-sora)] font-semibold text-sm tracking-wide uppercase bg-[#1E3BFF] text-white px-8 py-4 hover:bg-[#0025DD] transition-colors">
                  Выбрать программу
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://t.me/" className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-sm text-[#0D0D0D]/50 border border-[#0D0D0D]/18 px-6 py-4 hover:border-[#0D0D0D]/40 hover:text-[#0D0D0D] transition-all">
                  <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                  Написать в Telegram
                </a>
              </motion.div>
            </div>

            {/* Правая часть: animated counters — таблица статистики */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
              className="self-end mb-0">
              <div className="grid grid-cols-2 gap-px bg-[#0D0D0D]/10 border-t border-x border-[#0D0D0D]/10">
                {stats.map(({ num, suffix, label }) => (
                  <div key={label} className="bg-[#F4F4F0] p-6 md:p-8">
                    <div className="font-[family-name:var(--font-sora)] font-extrabold text-[#0D0D0D] leading-none mb-1.5"
                      style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
                      <Counter target={num} suffix={suffix} />
                    </div>
                    <div className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-wider text-[#0D0D0D]/35">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE — тёмная полоса между секциями */}
      <Marquee
        items={marqueeItems}
        speed={25}
        className="py-3.5 bg-[#0D0D0D] font-[family-name:var(--font-sora)] font-bold text-sm tracking-[0.15em] text-[#F4F4F0]/70"
        separator="/"
      />

      {/* PROGRAMS — диагональный clip */}
      <section id="Программы" className="py-24 px-6 bg-[#EEEEE8]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 40px), 0 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="mb-14">
            <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#1E3BFF] mb-4 block">Тарифы</span>
            <h2 className="font-[family-name:var(--font-sora)] font-extrabold text-[#0D0D0D] leading-tight tracking-[-0.03em]"
              style={{ fontSize: "clamp(32px, 5vw, 64px)" }}>
              Выбери<br />свою программу
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {programs.map(({ name, price, period, desc, features, highlight }, i) => (
              <motion.div key={name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className={`relative flex flex-col p-8 ${highlight ? "bg-[#1E3BFF] text-white" : "bg-[#F4F4F0] border border-[#0D0D0D]/10 text-[#0D0D0D]"}`}>
                {highlight && (
                  <span className="absolute top-4 right-4 font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase bg-white/20 text-white px-2 py-1">
                    Популярный
                  </span>
                )}
                <div className={`font-[family-name:var(--font-sora)] font-bold text-sm tracking-widest mb-6 ${highlight ? "text-white/55" : "text-[#0D0D0D]/35"}`}>{name}</div>
                <div className="mb-6">
                  <div className="font-[family-name:var(--font-sora)] font-extrabold leading-none tracking-tight" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>{price}</div>
                  <div className={`font-[family-name:var(--font-inter)] text-sm mt-1 ${highlight ? "text-white/45" : "text-[#0D0D0D]/30"}`}>{period}</div>
                </div>
                <p className={`font-[family-name:var(--font-inter)] text-sm leading-relaxed mb-8 ${highlight ? "text-white/65" : "text-[#0D0D0D]/50"}`}>{desc}</p>
                <ul className="flex flex-col gap-3 mb-10 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${highlight ? "text-white" : "text-[#1E3BFF]"}`} strokeWidth={2.5} />
                      <span className={`font-[family-name:var(--font-inter)] text-sm ${highlight ? "text-white/75" : "text-[#0D0D0D]/60"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://t.me/"
                  className={`group inline-flex items-center justify-center gap-2 font-[family-name:var(--font-sora)] font-semibold text-xs tracking-widest uppercase py-4 transition-all duration-200 ${highlight ? "bg-white text-[#1E3BFF] hover:bg-[#F0F0EE]" : "bg-[#0D0D0D] text-white hover:bg-[#1E3BFF]"}`}>
                  Выбрать
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TRAINER */}
      <section id="Тренер" className="py-32 px-6 -mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#1E3BFF] mb-4 block">Тренер</span>
            <h2 className="font-[family-name:var(--font-sora)] font-extrabold text-[#0D0D0D] leading-tight tracking-[-0.03em] mb-8"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>Антон Семёнов</h2>
            <div className="flex flex-col gap-4 text-[#0D0D0D]/55 font-[family-name:var(--font-inter)] text-sm leading-[1.85]">
              <p>Сертифицированный тренер по силовым тренировкам и нутрициологии. Специализируюсь на трансформации тела и устойчивых изменениях образа жизни.</p>
              <p>За 6 лет работы помог более 240 клиентам достичь своих целей — от снижения веса до подготовки к соревнованиям.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}>
            <div className="border-l-4 border-[#1E3BFF] pl-8 mb-10">
              <p className="font-[family-name:var(--font-sora)] font-bold text-[#0D0D0D] leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(20px, 2.5vw, 30px)" }}>
                «Результат — это не случайность. Это система, которую я выстраиваю под каждого»
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {["Сертификат NASM Personal Trainer", "Нутрициология — MedAcademy", "6+ лет практики", "Призёр городских соревнований"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="w-4 h-4 shrink-0 text-[#1E3BFF]" strokeWidth={2.5} />
                  <span className="font-[family-name:var(--font-inter)] text-sm text-[#0D0D0D]/60">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="Старт" className="py-24 px-6 bg-[#0D0D0D] text-white"
        style={{ clipPath: "polygon(0 40px, 100% 0, 100% 100%, 0 100%)" }}>
        <div className="max-w-6xl mx-auto pt-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-[family-name:var(--font-sora)] font-extrabold text-white leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: "clamp(48px, 8vw, 110px)" }}>
            НАЧНИ<br /><span className="text-[#1E3BFF]">СЕГОДНЯ</span>
          </motion.h2>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-4">
            <p className="font-[family-name:var(--font-inter)] text-white/35 text-sm max-w-xs">
              Первая консультация бесплатно. Напишите в Telegram — отвечу в течение часа.
            </p>
            <a href="https://t.me/" className="group inline-flex items-center gap-2 font-[family-name:var(--font-sora)] font-semibold text-xs tracking-widest uppercase bg-[#1E3BFF] text-white px-8 py-4 hover:bg-[#3D5BFF] transition-colors">
              Написать тренеру
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#0D0D0D] border-t border-white/06 px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-[family-name:var(--font-sora)] font-bold text-white/20 tracking-tight">ФОРМА</span>
          <span className="font-[family-name:var(--font-inter)] text-white/12 text-xs">© 2025</span>
        </div>
      </footer>
    </div>
  );
}
