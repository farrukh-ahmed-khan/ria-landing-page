"use client";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, staggerContainer, VIEWPORT } from "@/hooks/useScrollReveal";

const miniEvents = [
  { badge: "Featured Speaker", title: "TiECon Detroit",
    desc: "Featured speaker on AI innovation and digital transformation for a premier entrepreneurship and business audience." },
  { badge: "Brand Speaker",    title: "Ford Automotive Showcases",
    desc: "Multiple showcases representing FordDirect initiatives on AI-powered personalization and the future of customer experience." },
  { badge: "Upcoming",         title: "Chai and Business",
    desc: "West Bloomfield, June 2026 — intimate gathering at the intersection of culture, commerce, and AI." },
];

const metaItems = [
  ["Date",     "June 14, 2026"],
  ["Venue",    "Farmington Co-Work, MI"],
  ["Audience", "55 Curated Guests"],
  ["Format",   "VIP + General"],
];

export default function Events() {
  return (
    <section id="events" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-12"
        >
          <motion.p
            variants={fadeUp}
            className="flex items-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase font-semibold mb-4"
            style={{ color: "var(--purple)" }}
          >
            <span className="w-8 h-0.5" style={{ background: "var(--purple)" }} />
            Event Highlights
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-black"
            style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "var(--charcoal)" }}
          >
            On stage. In the room.<br />
            <em style={{ color: "var(--magenta)" }}>In the moment.</em>
          </motion.h2>
        </motion.div>

        {/* Hero event card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] overflow-hidden mb-6"
          style={{ background: "var(--magenta)" }}
        >
          <div className="p-12 flex flex-col justify-between">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEWPORT}
                transition={{ delay: 0.3 }}
                className="inline-block bg-white/20 text-white text-[0.55rem] tracking-[0.2em] uppercase font-bold px-3 py-1.5 mb-5"
              >
                Featured Event — June 2026
              </motion.span>
              <h3 className="font-display text-[1.9rem] font-black text-white leading-snug mb-4">
                The 10X Premiere<br />AI × Fashion Experience
              </h3>
              <p className="text-[0.88rem] leading-relaxed text-white/90 mb-6">
                A live AI Fashion Experience featuring Lavanya Suresh and Outfitiq — AI capsule collection
                reveal, live styling demos, and an intimate audience at a Black and White Affair.
              </p>
            </div>
            <motion.div
              className="flex flex-wrap gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              {metaItems.map(([lbl, val]) => (
                <motion.div key={lbl} variants={fadeUp} className="text-sm text-white">
                  <span className="block text-[0.55rem] tracking-widest uppercase text-white/60 mb-0.5">{lbl}</span>
                  {val}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hidden md:flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#A8005F,#7B0044)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT}
            transition={{ delay: 0.2 }}
          >
            <motion.p
              className="font-display font-black text-center leading-none select-none"
              style={{ fontSize: "5rem", color: "rgba(255,255,255,0.12)" }}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              10X<br />✦
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Mini cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {miniEvents.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, borderColor: "var(--magenta)", boxShadow: "0 12px 40px rgba(212,0,122,0.12)" }}
              className="p-8 border border-neutral-200 transition-colors duration-200 cursor-default"
            >
              <span
                className="inline-block text-white text-[0.55rem] tracking-widest uppercase font-bold px-3 py-1 mb-4"
                style={{ background: "var(--purple)" }}
              >
                {e.badge}
              </span>
              <h4 className="font-display font-bold text-[1.05rem] mb-2" style={{ color: "var(--charcoal)" }}>
                {e.title}
              </h4>
              <p className="text-[0.8rem] leading-relaxed text-neutral-500">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
