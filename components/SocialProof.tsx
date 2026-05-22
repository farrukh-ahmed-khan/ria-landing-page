"use client";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, VIEWPORT } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "Lavanya doesn't just talk about AI — she shows you what it looks like when AI meets real life. The Outfitiq demo was the most memorable part of the entire event.",
    author: "Event Attendee — The 10X Premiere, Farmington MI",
  },
  {
    quote: "She brings a rare combination of technical fluency and creative vision. Watching her live-style an entire wardrobe with AI in real time is genuinely remarkable.",
    author: "Event Organizer — TiECon Detroit",
  },
];

export default function SocialProof() {
  return (
    <section id="social" className="py-24 px-6 md:px-12" style={{ background: "var(--purple)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase font-semibold text-white/50 mb-12"
        >
          <span className="w-8 h-0.5 bg-white/40" />
          Social Proof
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              variants={fadeUp}
              custom={i}
              whileHover={{ scale: 1.015, backgroundColor: "rgba(255,255,255,0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="relative p-10 border cursor-default"
              style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.12)" }}
            >
              <motion.span
                className="absolute top-3 left-6 font-display font-black leading-none select-none"
                style={{ fontSize: "5rem", color: "rgba(255,255,255,0.1)" }}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                &ldquo;
              </motion.span>
              <p className="font-display italic text-[1.05rem] leading-relaxed text-white/88 mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-[0.65rem] tracking-wider uppercase" style={{ color: "var(--gold)" }}>
                — {t.author}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
