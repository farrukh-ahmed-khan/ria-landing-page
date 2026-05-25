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

const featureStats = [
  "Women in Tech Chronicles",
  "April 2025 Feature",
  "15-Page Digital Magazine",
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
              className="relative border p-6 cursor-default sm:p-8 md:p-10"
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

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-6 grid grid-cols-1 gap-6 border p-6 sm:p-8 md:grid-cols-[1fr_auto]"
          style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.12)" }}
        >
          <div>
            <p className="text-[0.6rem] tracking-[0.35em] uppercase font-semibold text-white/50 mb-3">
              Magazine Feature
            </p>
            <h3 className="font-display text-[1.45rem] font-bold text-white mb-3">
              Featured in Women in Tech Chronicles
            </h3>
            <p className="max-w-2xl text-[0.85rem] leading-relaxed text-white/65">
              The April 2025 digital feature spotlights Lavanya&apos;s path from advertising technology to AI,
              her speaking platforms, mentorship work, pageant advocacy, and women-in-tech leadership.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featureStats.map((item) => (
                <span
                  key={item}
                  className="border px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-widest text-white/70"
                  style={{ borderColor: "rgba(255,255,255,0.16)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <motion.a
            href="/lavanya-tech-chronicles-magazine.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.18)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="self-center border-2 border-white/50 px-6 py-4 text-center text-[0.65rem] font-bold uppercase tracking-widest text-white"
          >
            Read Magazine Feature
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
