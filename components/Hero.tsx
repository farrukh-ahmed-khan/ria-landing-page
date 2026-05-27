"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Image from "next/image";
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen min-h-[100svh] items-end overflow-hidden stripe-texture"
      style={{ background: "var(--magenta)" }}
    >
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
            top: "-20vh",
            right: "-10vw",
            width: "70vw",
            height: "80vh",
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.1) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      {(
        [
          { size: 6, top: "22%", left: "20%", dur: 4.5, delay: 0 },
          { size: 4, top: "58%", left: "7%", dur: 6.2, delay: 1.8 },
          { size: 9, top: "13%", left: "40%", dur: 5.5, delay: 0.7 },
          { size: 3, top: "72%", left: "28%", dur: 3.8, delay: 2.4 },
        ] as {
          size: number;
          top: string;
          left: string;
          dur: number;
          delay: number;
        }[]
      ).map((p, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none rounded-full"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            background: "rgba(255,255,255,0.18)",
          }}
          animate={{ y: [0, -24, 0], opacity: [0.15, 0.55, 0.15] }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      <motion.div
        className="absolute inset-y-0 pointer-events-none"
        style={{
          width: "40%",
          background:
            "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.06) 50%, transparent 80%)",
        }}
        animate={{ x: ["-100%", "300%"] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 8,
          delay: 2.5,
        }}
      />

      <motion.div
        style={{ y: photoY }}
        className="absolute inset-x-0 top-36 h-[34%] flex items-center justify-center sm:top-32 sm:h-[38%] md:inset-y-0 md:left-auto md:top-0 md:h-auto md:w-[48%]"
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
      >
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 82%)",
            background: "linear-gradient(135deg, #8B003A 0%, #5B0028 100%)",
          }}
          data-desktop-clip="hero-photo-panel"
        />
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 82%)",
            background:
              "linear-gradient(to top, var(--magenta) 0%, transparent 65%), linear-gradient(to right, rgba(212,0,122,0.4) 0%, transparent 55%)",
          }}
          data-desktop-clip="hero-photo-overlay"
        />

        <motion.div
          className="relative z-10 mt-10 h-[72vw] max-h-[360px] w-[72vw] max-w-[360px] overflow-hidden border border-white/20 shadow-2xl md:mt-0 md:h-[42vw] md:max-h-[560px] md:w-[34vw] md:max-w-[440px]"
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.35 }}
        >
          <Image
            src="/media/lavanya_img2.jpg"
            alt="Lavanya Suresh professional portrait"
            fill
            priority
            sizes="(min-width: 768px) 34vw, 72vw"
            className="object-cover object-[center_22%] md:object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(91,0,40,0.24), transparent 45%)",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-8 right-6 z-20 hidden h-32 w-32 overflow-hidden border-4 border-white shadow-2xl md:block"
          initial={{ opacity: 0, y: 32, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.8 }}
        >
          <Image
            src="/media/lavanya-portrait-light.jpeg"
            alt="Lavanya Suresh speaker portrait"
            fill
            sizes="128px"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 max-w-xl px-5 pb-12 pt-[25rem] sm:px-8 sm:pt-[27rem] md:px-12 md:pb-20 md:pt-0"
      >
        <motion.div variants={heroVariants} initial="hidden" animate="visible">
          <motion.p
            variants={item}
            className="flex items-center gap-3 text-[0.65rem] tracking-[0.35em] uppercase text-white/75 font-semibold mb-4"
          >
            <span className="w-8 h-px bg-white/50" />
            Speaker - Stylist - Innovator
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display font-black text-white leading-[0.92] mb-4"
            style={{ fontSize: "clamp(2.9rem, 14vw, 8rem)" }}
          >
            LAVANYA
            <br />
            SURESH
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base leading-relaxed text-white/85 mb-3 max-w-md"
          >
            My mission is to make AI personal - through style, technology, and
            entrepreneurship.
          </motion.p>

          <motion.p
            variants={item}
            className="font-script text-2xl text-white/90 mb-10"
          >
            For the One Who&apos;s Ready!
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            {[
              { href: "#booking", label: "Book Lavanya", primary: true },
              { href: "#reel", label: "Watch Reel", primary: false },
              {
                href: "/lavanya-suresh-media-kit.pdf",
                label: "View Kit",
                primary: false,
                download: true,
              },
            ].map((btn) => (
              <motion.a
                key={btn.label}
                href={btn.href}
                download={btn.download}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`w-full px-8 py-3 text-center text-[0.65rem] tracking-widest uppercase font-bold transition-shadow sm:w-auto cursor-pointer ${
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

      <motion.a
        // href="/lavanya-suresh-media-kit.pdf"
        aria-label="View Lavanya Suresh media kit PDF"
        className="absolute right-5 top-40 z-20 flex h-20 w-20 flex-col items-center justify-center text-center text-white font-bold text-[0.5rem] tracking-wide uppercase leading-snug shadow-2xl sm:top-36 md:top-auto md:bottom-[120px] md:right-[calc(52%_-_60px)] md:h-[90px] md:w-[90px] md:text-[0.55rem] cursor-pointer"
        style={{ borderRadius: "50%", background: "var(--purple)" }}
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 1.1 }}
        whileHover={{ scale: 1.1, rotate: 8 }}
      >
        MY
        <br />
        SPEAKER
        <br />
        KIT
      </motion.a>
    </section>
  );
}
