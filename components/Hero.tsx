"use client";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const heroVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.3 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY   = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity  = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden stripe-texture"
      style={{ background: "var(--magenta)" }}
    >
      {/* Radial glow — parallax */}
      <motion.div
        style={{ y: photoY, opacity }}
        className="absolute pointer-events-none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <div
          className="absolute"
          style={{
            top: "-20vh", right: "-10vw",
            width: "70vw", height: "80vh",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.1) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      {/* Photo panel — parallax */}
      <motion.div
        style={{ y: photoY }}
        className="absolute right-0 top-0 bottom-0 w-[48%] flex items-center justify-center"
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
            background: "linear-gradient(135deg, #8B003A 0%, #5B0028 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
            background:
              "linear-gradient(to right, var(--magenta) 0%, transparent 35%), linear-gradient(to top, rgba(212,0,122,0.4) 0%, transparent 40%)",
          }}
        />
        <p className="relative z-10 text-center text-xs tracking-widest uppercase text-white/20">
          <span className="block text-5xl mb-2 opacity-30">📸</span>
          Professional headshot<br />coming soon
        </p>
      </motion.div>

      {/* Content */}
      <motion.div style={{ y: contentY, opacity }} className="relative z-10 px-12 pb-20 max-w-xl">
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={item} className="flex items-center gap-3 text-[0.65rem] tracking-[0.35em] uppercase text-white/75 font-semibold mb-4">
          <span className="w-8 h-px bg-white/50" />
          Speaker · Stylist · Innovator
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display font-black text-white leading-[0.92] mb-4"
          style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
        >
          LAVANYA<br />SURESH
        </motion.h1>

        <motion.p variants={item} className="text-base leading-relaxed text-white/85 mb-3 max-w-md">
          My mission is to make AI personal — through style, technology, and entrepreneurship.
        </motion.p>

        <motion.p variants={item} className="font-script text-2xl text-white/90 mb-10">
          For the One Who&apos;s Ready!
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-3">
          {[
            { href: "#booking", label: "Book Lavanya", primary: true },
            { href: "#reel",    label: "Watch Reel",   primary: false },
            { href: "#",        label: "Download Kit", primary: false },
          ].map((btn) => (
            <motion.a
              key={btn.label}
              href={btn.href}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className={`px-8 py-3 text-[0.65rem] tracking-widest uppercase font-bold transition-shadow ${
                btn.primary
                  ? "bg-white shadow-xl"
                  : "border border-white/60 text-white hover:bg-white/15"
              }`}
              style={btn.primary ? { color: "var(--magenta)" } : {}}
            >
              {btn.label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      </motion.div>

      {/* Kit badge — spin on load */}
      <motion.div
        className="absolute z-20 flex flex-col items-center justify-center text-center text-white font-bold text-[0.55rem] tracking-wide uppercase leading-snug shadow-2xl"
        style={{
          right: "calc(52% - 60px)",
          bottom: "120px",
          width: 90, height: 90,
          borderRadius: "50%",
          background: "var(--purple)",
        }}
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
        whileHover={{ scale: 1.1, rotate: 8 }}
      >
        MY<br />SPEAKER<br />KIT
      </motion.div>
    </section>
  );
}
