"use client";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, VIEWPORT } from "@/hooks/useScrollReveal";

const availability = [
  "Keynote Speaking","Brand Collaborations","Panels","Event Hosting","Workshops",
];

export default function Booking() {
  return (
    <section
      id="booking"
      className="relative py-28 px-6 md:px-12 text-center overflow-hidden stripe-texture"
      style={{ background: "var(--magenta)" }}
    >
      {/* Animated background circles */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 600, height: 600, top: "-20%", left: "-15%",
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.12, 1], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 400, height: 400, bottom: "-10%", right: "-10%",
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.08, 1], y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="max-w-3xl mx-auto relative z-10"
      >
        <motion.p
          variants={fadeUp}
          className="flex items-center justify-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase font-semibold text-white/60 mb-6"
        >
          <span className="w-8 h-0.5 bg-white/40" />
          Work With Lavanya
          <span className="w-8 h-0.5 bg-white/40" />
        </motion.p>

        <h2
          className="font-display font-black text-white leading-tight mb-4"
          style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
        >
          {([["Let’s", "make"], ["it", "happen."]] as string[][]).map((line, li) => (
            <span key={li} className="block">
              {line.map((word, wi) => (
                <motion.span
                  key={word}
                  className="inline-block mr-[0.2em]"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.65, delay: 0.15 + (li * 2 + wi) * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          ))}
        </h2>

        <motion.div
          variants={fadeUp}
          className="w-16 h-px mx-auto my-6 bg-linear-to-r from-transparent via-white/60 to-transparent"
        />

        <motion.p variants={fadeUp} className="text-[0.85rem] text-white/75 leading-relaxed mb-10 max-w-md mx-auto">
          Available for keynote speaking, brand collaborations, panels, event hosting, workshops,
          and luxury experiences at the intersection of AI and culture.
        </motion.p>

        {/* Availability pills */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5 justify-center mb-10">
          {availability.map((a, i) => (
            <motion.span
              key={a}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.06, backgroundColor: "rgba(255,255,255,0.18)" }}
              className="px-5 py-2 rounded-full border text-white text-[0.65rem] tracking-widest uppercase font-medium cursor-default"
              style={{ borderColor: "rgba(255,255,255,0.45)" }}
            >
              {a}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
          <motion.a
            href="mailto:hello@lavanyasuresh.com"
            whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="px-10 py-4 text-white font-bold text-[0.68rem] tracking-widest uppercase"
            style={{ background: "var(--charcoal)" }}
          >
            Inquire Now
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.18)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="px-10 py-4 border-2 border-white/60 text-white font-semibold text-[0.68rem] tracking-widest uppercase"
          >
            Download Speaker Kit
          </motion.a>
        </motion.div>

        <motion.p variants={fadeUp} className="mt-8 text-[0.75rem] text-white/50">
          Or email:{" "}
          <a href="mailto:hello@lavanyasuresh.com" className="text-white/80 hover:text-white transition-colors">
            hello@lavanyasuresh.com
          </a>
          {" "}&nbsp;·&nbsp;{" "}
          Instagram:{" "}
          <a href="https://instagram.com/lav_271" target="_blank" rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors">
            @lav_271
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
}
