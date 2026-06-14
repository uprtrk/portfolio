import AnimatedSection from "./AnimatedSection";
import { ArrowRight, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0A0A0A] py-32 px-6 border-t border-[#2A2A2A]"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8D5B0]" />
            <span className="text-[#E8D5B0]/60 text-xs tracking-[0.25em] uppercase font-sans">
              Контакт
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2
            className="font-heading font-semibold leading-[1.0] tracking-[-0.03em] text-[#F5F5F0] mb-16"
            style={{ fontSize: "clamp(40px, 7vw, 100px)" }}
          >
            Есть проект?
            <br />
            <span className="text-[#E8D5B0]">Пишите.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
            <a
              href="https://t.me/uprtrk"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-[#2A2A2A] hover:border-[#E8D5B0]/40 px-8 py-6 transition-colors duration-300"
            >
              <div>
                <div className="text-[#F5F5F0]/30 text-xs font-sans tracking-widest uppercase mb-1">
                  Telegram
                </div>
                <div className="font-heading text-[#F5F5F0] font-medium">
                  @uprtrk
                </div>
              </div>
              <Send
                className="w-4 h-4 text-[#F5F5F0]/20 group-hover:text-[#E8D5B0] transition-colors duration-200"
                strokeWidth={1.5}
              />
            </a>

            <a
              href="mailto:nikolaistukov38@gmail.com"
              className="group flex items-center justify-between border border-[#2A2A2A] hover:border-[#E8D5B0]/40 px-8 py-6 transition-colors duration-300"
            >
              <div>
                <div className="text-[#F5F5F0]/30 text-xs font-sans tracking-widest uppercase mb-1">
                  Email
                </div>
                <div className="font-heading text-[#F5F5F0] font-medium">
                  nikolaistukov38@gmail.com
                </div>
              </div>
              <ArrowRight
                className="w-4 h-4 text-[#F5F5F0]/20 group-hover:text-[#E8D5B0] group-hover:translate-x-1 transition-all duration-200"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-[#F5F5F0]/25 font-sans text-sm mt-8">
            Отвечу в течение нескольких часов · Работаю по СНГ
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
