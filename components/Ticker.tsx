"use client";
import { motion } from "framer-motion";

const items = [
  "AI Fashion Experience", "TiECon Detroit", "The 10X Premiere",
  "Outfitiq App Creator",  "FordDirect Innovator", "Keynote Speaker",
  "Fashion Stylist",       "20K+ Audience",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <motion.div
      className="overflow-hidden py-2.5"
      style={{ background: "var(--purple)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-block text-[0.6rem] tracking-[0.25em] uppercase text-white/90 font-semibold"
          >
            {item}
            <span className="mx-6 opacity-40">✦</span>
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}
