import AnimatedSection from "./AnimatedSection";
import { Zap, Globe, Settings } from "lucide-react";

const services = [
  {
    Icon: Zap,
    title: "Лендинги",
    desc: "Одностраничные сайты с фокусом на конверсию. Быстро, чисто, убедительно.",
    detail: "от 3 дней",
  },
  {
    Icon: Globe,
    title: "Сайты под ключ",
    desc: "Многостраничные сайты для бизнеса: витрина, портфолио, представительство.",
    detail: "от 7 дней",
  },
  {
    Icon: Settings,
    title: "Доработки",
    desc: "Правки существующего сайта, добавление функций, улучшение скорости и дизайна.",
    detail: "от 1 дня",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0A0A0A] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8D5B0]" />
            <span className="text-[#E8D5B0]/60 text-xs tracking-[0.25em] uppercase font-sans">
              Услуги
            </span>
          </div>
          <h2
            className="font-heading font-semibold leading-[1.05] tracking-[-0.025em] text-[#F5F5F0] mb-20"
            style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
          >
            Что я делаю
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#2A2A2A] border border-[#2A2A2A]">
          {services.map(({ Icon, title, desc, detail }, i) => (
            <AnimatedSection
              key={title}
              delay={i * 0.1}
              className="group p-10 hover:bg-[#141414] transition-colors duration-300 cursor-default"
            >
              <Icon
                className="w-5 h-5 text-[#E8D5B0] mb-10 opacity-80"
                strokeWidth={1.5}
              />
              <h3 className="font-heading text-xl font-semibold text-[#F5F5F0] mb-3 tracking-[-0.01em]">
                {title}
              </h3>
              <p className="text-[#F5F5F0]/40 font-sans text-sm leading-[1.7] mb-8">
                {desc}
              </p>
              <span className="text-[#E8D5B0]/50 text-xs font-sans tracking-widest uppercase">
                {detail}
              </span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
