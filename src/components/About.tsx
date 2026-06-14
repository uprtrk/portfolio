import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="bg-[#0A0A0A] py-32 px-6 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8D5B0]" />
            <span className="text-[#E8D5B0]/60 text-xs tracking-[0.25em] uppercase font-sans">
              Обо мне
            </span>
          </div>
          <h2
            className="font-heading font-semibold leading-[1.05] tracking-[-0.025em] text-[#F5F5F0] mb-8"
            style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
          >
            Делаю сайты
            <br />с вниманием
            <br />к деталям
          </h2>
          <p className="text-[#F5F5F0]/40 font-sans text-base leading-[1.8]">
            Работаю на стыке дизайна и разработки. Мне важно, чтобы сайт не просто существовал — а работал: продавал, вызывал доверие и выглядел профессионально на любом устройстве.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="md:pt-12">
          <div className="border-l-2 border-[#E8D5B0]/30 pl-8 mb-10">
            <p
              className="font-heading font-semibold leading-[1.1] tracking-[-0.02em] text-[#F5F5F0]/80"
              style={{ fontSize: "clamp(22px, 2.5vw, 34px)" }}
            >
              «Каждый проект — как будто делаю сайт для себя»
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-[#2A2A2A]">
            {[
              { num: "3+", label: "дня — мин. срок лендинга" },
              { num: "100%", label: "без конструкторов" },
              { num: "СНГ", label: "рынок и часовой пояс" },
              { num: "Vercel", label: "быстрый деплой в сеть" },
            ].map(({ num, label }) => (
              <div key={label} className="bg-[#0A0A0A] p-6">
                <div className="font-heading text-2xl font-semibold text-[#E8D5B0] mb-1">
                  {num}
                </div>
                <div className="text-[#F5F5F0]/30 text-xs font-sans">{label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
