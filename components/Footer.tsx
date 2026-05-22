"use client";
import { motion } from "framer-motion";

const links = [
  { href: "#about",   label: "About"    },
  { href: "#topics",  label: "Speaking" },
  { href: "#events",  label: "Events"   },
  { href: "#reel",    label: "Reel"     },
  { href: "#booking", label: "Contact"  },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-wrap items-center justify-between gap-4 px-12 py-10"
      style={{ background: "var(--charcoal)" }}
    >
      {/* Animated top border — draws in from left */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.75"
        style={{ background: "var(--magenta)", transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <span className="font-display text-lg font-bold text-white tracking-wide">
        Lavanya Suresh
      </span>

      <ul className="flex flex-wrap gap-6 list-none">
        {links.map((l, i) => (
          <motion.li
            key={l.href}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
          >
            <a
              href={l.href}
              className="text-[0.65rem] tracking-wider uppercase text-white/40 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          </motion.li>
        ))}
      </ul>

      <p className="text-[0.6rem] text-white/25">
        © 2026 Lavanya Suresh · AI · Fashion · Entrepreneurship
      </p>
    </motion.footer>
  );
}
