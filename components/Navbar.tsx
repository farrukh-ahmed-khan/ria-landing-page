"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about",   label: "About"    },
  { href: "#topics",  label: "Speaking" },
  { href: "#events",  label: "Events"   },
  { href: "#reel",    label: "Reel"     },
  { href: "#booking", label: "Book"     },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-4 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(212,0,122,0.97)" : "rgba(212,0,122,0.88)",
        backdropFilter: "blur(10px)",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.2)" : "none",
      }}
    >
      <Link href="#" className="font-display text-lg font-bold text-white tracking-wide">
        Lavanya Suresh
      </Link>

      <ul className="hidden md:flex gap-8 list-none">
        {links.map((l, i) => (
          <motion.li
            key={l.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.07, duration: 0.4 }}
          >
            <a
              href={l.href}
              className="relative text-[0.68rem] tracking-widest uppercase font-medium text-white/75 hover:text-white transition-colors group"
            >
              {l.label}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"
              />
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
