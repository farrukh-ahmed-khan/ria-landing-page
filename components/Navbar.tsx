"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
      className="fixed top-0 left-0 right-0 z-50 px-5 py-4 transition-all duration-300 md:px-12"
      style={{
        background: scrolled ? "rgba(212,0,122,0.97)" : "rgba(212,0,122,0.88)",
        backdropFilter: "blur(10px)",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.2)" : "none",
      }}
    >
      <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
        <Link href="#" className="font-display text-lg font-bold text-white tracking-wide">
          Lavanya Suresh
        </Link>

        <ul className="flex w-full flex-wrap gap-2 list-none md:w-auto md:gap-8">
          {links.map((l, i) => (
            <motion.li
              key={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.07, duration: 0.4 }}
            >
              <a
                href={l.href}
                className="relative block border border-white/20 px-3 py-2 text-[0.58rem] tracking-widest uppercase font-medium text-white/80 transition-colors hover:border-white/45 hover:text-white md:border-0 md:px-0 md:py-0 md:text-[0.68rem] md:text-white/75 md:group"
              >
                {l.label}
                <span
                  className="absolute -bottom-0.5 left-0 hidden h-px w-0 bg-white transition-all duration-300 md:block md:group-hover:w-full"
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
