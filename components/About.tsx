"use client";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, staggerContainer, VIEWPORT } from "@/hooks/useScrollReveal";

const tags = [
  "Technology Manager","Fashion Stylist","App Creator",
  "Keynote Speaker","Event Curator","Brand Collaborator",
];
const press = ["TiECon Detroit","Ford Showcases","The 10X Premiere","@lav_271"];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12" style={{ background: "var(--cream)" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-20 items-start">

        {/* Photo column */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="relative"
        >
          <div
            className="relative overflow-hidden flex items-center justify-center"
            style={{ aspectRatio: "3/4", background: "linear-gradient(135deg,#e8d0da,#c8a0b8)" }}
          >
            {/* animated offset border */}
            <motion.div
              className="absolute"
              style={{ top: 12, left: 12, right: -12, bottom: -12, border: "2px solid var(--purple)", zIndex: -1 }}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
            <p className="text-center text-[0.7rem] tracking-widest uppercase text-black/30">
              <span className="block text-5xl mb-2">👩🏽</span>
              Professional headshot<br />to be added
            </p>
          </div>

          <motion.div
            className="absolute -bottom-6 -right-6 px-5 py-4 text-center text-white"
            style={{ background: "var(--magenta)" }}
            initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={VIEWPORT}
            transition={{ delay: 0.55, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.06 }}
          >
            <strong className="block text-2xl font-bold">20K+</strong>
            <span className="text-[0.55rem] tracking-wider uppercase">Growing Audience</span>
          </motion.div>
        </motion.div>

        {/* Text column */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.p
            variants={fadeUp}
            className="flex items-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase font-semibold mb-5"
            style={{ color: "var(--magenta)" }}
          >
            <span className="w-8 h-0.5" style={{ background: "var(--magenta)" }} />
            About
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display font-black leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.5rem,5vw,3.8rem)", color: "var(--purple)" }}
          >
            ABOUT<br />LAVANYA
          </motion.h2>

          {[
            "Lavanya Suresh is a Technology Manager at FordDirect, a fashion stylist, and the creator of Outfitiq — an AI-powered styling app built with Claude. She stands at the unique crossroads of enterprise technology, creative entrepreneurship, and AI innovation.",
            "A featured speaker at TiECon Detroit and Ford automotive showcases, Lavanya brings AI out of the abstract and into lived, personal experience — making it feel as natural as choosing an outfit.",
            "As a luxury event curator, brand collaborator, and growing content creator, Lavanya is defining what AI-powered style and entrepreneurship looks like for the next generation of women leaders.",
          ].map((para, i) => (
            <motion.p key={i} variants={fadeUp} custom={i} className="text-[0.95rem] leading-[1.8] text-neutral-600 mb-4">
              {para}
            </motion.p>
          ))}

          {/* Tags */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-8">
            {tags.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VIEWPORT}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-1.5 rounded-full text-white text-[0.65rem] tracking-wider uppercase font-medium cursor-default"
                style={{ background: "var(--purple)" }}
              >
                {t}
              </motion.span>
            ))}
          </motion.div>

          {/* Press */}
          <motion.div variants={fadeUp} className="mt-8 pt-6 border-t border-neutral-200">
            <p className="text-[0.6rem] tracking-[0.25em] uppercase text-neutral-400 mb-3">As Seen In</p>
            <div className="flex flex-wrap gap-6 items-center">
              {press.map((p, i) => (
                <motion.span
                  key={p}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={VIEWPORT}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-[0.75rem] font-bold uppercase tracking-wide text-neutral-300 hover:text-neutral-500 transition-colors cursor-default"
                >
                  {p}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
