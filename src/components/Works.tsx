import AnimatedSection from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    title: "Volta — ресторан авторской кухни",
    tag: "Ресторан",
    year: "2025",
    href: "/restaurant",
    gradient: "from-[#1C1410] via-[#2A1F0E] to-[#1C1410]",
    accent: "#C4963A",
    lines: ["#3D2B1A", "#4A3520"],
  },
  {
    title: "Klif — барбершоп",
    tag: "Барбершоп",
    year: "2025",
    href: "/beauty",
    gradient: "from-[#0A0A0A] via-[#141414] to-[#0A0A0A]",
    accent: "#C8A84B",
    lines: ["#2A2A1A", "#333320"],
  },
  {
    title: "Форма — персональный тренер",
    tag: "Фитнес",
    year: "2025",
    href: "/fitness",
    gradient: "from-[#0E1018] via-[#101420] to-[#0E1018]",
    accent: "#1E3BFF",
    lines: ["#1A1E30", "#20253A"],
  },
];

export default function Works() {
  return (
    <section id="works" className="bg-[#0A0A0A] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8D5B0]" />
              <span className="text-[#E8D5B0]/60 text-xs tracking-[0.25em] uppercase font-sans">
                Работы
              </span>
            </div>
            <h2
              className="font-heading font-semibold leading-[1.05] tracking-[-0.025em] text-[#F5F5F0]"
              style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
            >
              Избранные
              <br />
              проекты
            </h2>
          </div>
          <span className="text-[#F5F5F0]/20 text-sm font-sans hidden md:block">
            01 — 03
          </span>
        </AnimatedSection>

        <div className="space-y-4">
          {works.map(({ title, tag, year, href, gradient, accent, lines }, i) => (
            <AnimatedSection key={title} delay={i * 0.12}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden border border-[#2A2A2A] hover:border-[#3A3A3A] transition-colors duration-300 cursor-pointer block">
                {/* Abstract preview */}
                <div
                  className={`h-48 md:h-64 bg-gradient-to-br ${gradient} relative overflow-hidden`}
                >
                  {/* Decorative lines */}
                  <div
                    className="absolute left-8 top-8 right-8 h-px opacity-60"
                    style={{ background: lines[0] }}
                  />
                  <div
                    className="absolute left-8 top-14 w-1/3 h-px opacity-40"
                    style={{ background: lines[1] }}
                  />
                  <div
                    className="absolute left-8 top-20 w-1/2 h-px opacity-30"
                    style={{ background: lines[0] }}
                  />
                  {/* Accent dot */}
                  <div
                    className="absolute right-10 bottom-10 w-16 h-16 rounded-full opacity-20 blur-xl"
                    style={{ background: accent }}
                  />
                  <div
                    className="absolute right-12 bottom-12 w-3 h-3 rounded-full"
                    style={{ background: accent }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#E8D5B0]/0 group-hover:bg-[#E8D5B0]/[0.03] transition-colors duration-500" />
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between px-8 py-5 border-t border-[#2A2A2A]">
                  <div className="flex items-center gap-6">
                    <span className="text-[#F5F5F0]/20 text-xs font-sans tabular-nums">
                      0{i + 1}
                    </span>
                    <h3 className="font-heading font-medium text-[#F5F5F0] tracking-[-0.01em]">
                      {title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-[#F5F5F0]/30 text-xs font-sans tracking-widest uppercase hidden md:block">
                      {tag}
                    </span>
                    <span className="text-[#F5F5F0]/20 text-xs font-sans">
                      {year}
                    </span>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#F5F5F0]/20 group-hover:text-[#E8D5B0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
