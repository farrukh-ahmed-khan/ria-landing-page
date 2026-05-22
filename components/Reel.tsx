"use client";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, VIEWPORT } from "@/hooks/useScrollReveal";

const miniReels = [
  "TiECon Detroit\nSpeaker Reel",
  "Outfitiq\nLive Demo",
  "10X Premiere\nBehind the Scenes",
];

export default function Reel() {
  return (
    <section id="reel" className="py-24 px-6 md:px-12 text-center" style={{ background: "var(--cream)" }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.p
            variants={fadeUp}
            className="flex items-center justify-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase font-semibold mb-4"
            style={{ color: "var(--magenta)" }}
          >
            <span className="w-8 h-0.5" style={{ background: "var(--magenta)" }} />
            Video Reel
            <span className="w-8 h-0.5" style={{ background: "var(--magenta)" }} />
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-black mb-2"
            style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "var(--charcoal)" }}
          >
            See the work.<br />Feel the room.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[0.75rem] tracking-widest uppercase text-neutral-400 mb-12">
            Speaking clips · Event hosting · Fashion visuals · Cinematic edits
          </motion.p>
        </motion.div>

        {/* Main video */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          whileHover={{ scale: 1.01 }}
          className="group relative flex items-center justify-center mb-3 cursor-pointer border overflow-hidden"
          style={{ aspectRatio: "16/9", background: "var(--charcoal)", borderColor: "rgba(212,0,122,0.2)" }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-70"
            style={{ background: "radial-gradient(ellipse at center, rgba(212,0,122,0.12) 0%, transparent 65%)" }}
          />

          {/* Ripple rings */}
          <motion.div
            className="absolute rounded-full"
            style={{ background: "rgba(212,0,122,0.06)", width: 200, height: 200 }}
            animate={{ scale: [1, 2.5, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{ background: "rgba(212,0,122,0.04)", width: 200, height: 200 }}
            animate={{ scale: [1, 2.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />

          {/* Play button */}
          <motion.div
            className="relative z-10 flex items-center justify-center w-18 h-18 rounded-full border-2"
            style={{ borderColor: "var(--magenta)", background: "rgba(212,0,122,0.15)" }}
            whileHover={{ scale: 1.15, background: "rgba(212,0,122,0.35)" }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <div
              className="ml-1"
              style={{
                width: 0, height: 0,
                borderStyle: "solid",
                borderWidth: "11px 0 11px 20px",
                borderColor: `transparent transparent transparent var(--magenta)`,
              }}
            />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ delay: 0.4 }}
          className="text-[0.65rem] tracking-widest uppercase text-neutral-400 mb-4"
        >
          The AI Fashion Experience — Live Demo, Farmington MI
        </motion.p>

        {/* Mini reel grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {miniReels.map((r, i) => (
            <motion.div
              key={r}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, filter: "brightness(0.88)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center text-center p-8 cursor-pointer text-[0.6rem] tracking-widest uppercase text-neutral-400 whitespace-pre-line"
              style={{ aspectRatio: "4/3", background: "#e0d8d0" }}
            >
              {r}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
