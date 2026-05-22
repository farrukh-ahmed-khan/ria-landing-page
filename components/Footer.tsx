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
      className="flex flex-wrap items-center justify-between gap-4 px-12 py-10"
      style={{ background: "var(--charcoal)", borderTop: "3px solid var(--magenta)" }}
    >
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
