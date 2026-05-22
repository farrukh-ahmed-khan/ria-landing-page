"use client";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, VIEWPORT } from "@/hooks/useScrollReveal";

const talks = [
  { num: "01", title: "AI + Fashion",
    desc: "The future of AI-powered styling: live demos with Outfitiq showing how machine intelligence transforms personal style, retail, and the creative economy — where tech meets taste." },
  { num: "02", title: "Women in AI",
    desc: "Confidence, leadership, and innovation. The journey of women building technology and breaking into spaces where they were never meant to be — but belong entirely." },
  { num: "03", title: "Personal Branding in the AI Era",
    desc: "How authenticity, aesthetics, and strategic content creation compound into a brand that opens doors at the highest level — from 0 to 20K+ and growing." },
  { num: "04", title: "Entrepreneurship",
    desc: "Turning creativity into business: from a style idea to a live AI app. The discipline, clarity, and creative courage required to build something entirely your own." },
];

export default function Topics() {
  return (
    <section id="topics" className="py-24 px-6 md:px-12" style={{ background: "var(--charcoal)" }}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="max-w-6xl mx-auto mb-14"
      >
        <motion.p
          variants={fadeUp}
          className="flex items-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase font-semibold mb-4"
          style={{ color: "var(--magenta)" }}
        >
          <span className="w-8 h-0.5" style={{ background: "var(--magenta)" }} />
          Signature Talks
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display font-black text-white"
          style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
        >
          Conversations that move<br />the room forward.
        </motion.h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {talks.map((t, i) => (
          <motion.div
            key={t.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.65, delay: (i % 2) * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ backgroundColor: "rgba(212,0,122,0.07)" }}
            className="group relative p-10 border cursor-default overflow-hidden transition-colors duration-300"
            style={{ background: "var(--charcoal)", borderColor: "rgba(255,255,255,0.06)" }}
          >
            {/* Animated left accent bar */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-[3px]"
              style={{ background: "var(--magenta)" }}
              initial={{ scaleY: 0 }}
              whileHover={{ scaleY: 1 }}
              transition={{ duration: 0.3 }}
            />

            <motion.span
              className="font-display font-black block mb-3 leading-none"
              style={{ fontSize: "3.5rem", color: "rgba(212,0,122,0.15)" }}
              whileHover={{ color: "rgba(212,0,122,0.25)" }}
              transition={{ duration: 0.3 }}
            >
              {t.num}
            </motion.span>
            <h3 className="font-display text-xl font-bold text-white mb-3">{t.title}</h3>
            <p className="text-[0.85rem] leading-[1.7] text-white/50">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
