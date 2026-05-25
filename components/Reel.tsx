"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, VIEWPORT } from "@/hooks/useScrollReveal";

const reels = [
  {
    title: "Outfitiq Mobile App",
    subtitle: "Featured App Demo",
    src: "/media/lavanya-reel-01.mp4",
    num: "01",
  },
  {
    title: "Outfitiq Styling Flow",
    subtitle: "Mobile App Video",
    src: "/media/lavanya-reel-02.mp4",
    num: "02",
  },
  {
    title: "Outfitiq Experience",
    subtitle: "Mobile App Video",
    src: "/media/lavanya-reel-03.mp4",
    num: "03",
  },
];

function PlayIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
  );
}

function VideoCard({
  reel,
  featured = false,
}: {
  reel: (typeof reels)[0];
  featured?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!ref.current) return;
    if (playing) {
      ref.current.pause();
      setPlaying(false);
    } else {
      ref.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <div
      onClick={toggle}
      className="group relative overflow-hidden rounded-2xl cursor-pointer select-none"
      style={{
        background: "#0d0d0d",
        boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
      }}
    >
      {/* video */}
      <video
        ref={ref}
        src={reel.src}
        playsInline
        preload="metadata"
        loop
        onEnded={() => setPlaying(false)}
        className={`block w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] ${
          featured ? "aspect-[9/14]" : "aspect-[9/14]"
        }`}
        style={{ maxHeight: featured ? 640 : 380 }}
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10 pointer-events-none" />

      {/* number badge */}
      <div className="absolute top-4 left-4">
        <span
          className="text-[0.55rem] font-bold tracking-[0.25em] uppercase"
          style={{ color: "var(--magenta)" }}
        >
          {reel.num}
        </span>
      </div>

      {/* magenta top-right accent */}
      <div
        className="absolute top-0 right-0 w-10 h-1 rounded-bl"
        style={{ background: "var(--magenta)" }}
      />

      {/* play / pause button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ opacity: playing ? 0 : 1, scale: playing ? 0.8 : 1 }}
          transition={{ duration: 0.2 }}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm group-hover:border-white/50 group-hover:bg-white/20 transition-colors duration-300"
        >
          <PlayIcon size={featured ? 22 : 18} />
        </motion.div>
      </div>

      {/* bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none">
        <p className="text-[0.55rem] tracking-[0.3em] uppercase font-semibold text-white/50 mb-1">
          {reel.subtitle}
        </p>
        <p
          className={`font-display font-bold text-white leading-tight ${
            featured ? "text-[1.25rem]" : "text-[1rem]"
          }`}
        >
          {reel.title}
        </p>
      </div>
    </div>
  );
}

export default function Reel() {
  const [featured, ...supporting] = reels;

  return (
    <section
      id="reel"
      className="py-24 px-6 md:px-12"
      style={{ background: "var(--charcoal)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="flex items-center justify-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase font-semibold mb-4"
            style={{ color: "var(--magenta)" }}
          >
            <span className="w-8 h-px" style={{ background: "var(--magenta)" }} />
            Video Reel
            <span className="w-8 h-px" style={{ background: "var(--magenta)" }} />
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display font-black text-white mb-3"
            style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
          >
            See the work.
            <br />
            <span style={{ color: "var(--magenta)" }}>Feel the room.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[0.72rem] tracking-widest uppercase text-white/35"
          >
            App demos&nbsp;·&nbsp;AI styling flows&nbsp;·&nbsp;Product experience
          </motion.p>
        </motion.div>

        {/* grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[3fr_2fr]">
          {/* featured */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <VideoCard reel={featured} featured />
          </motion.div>

          {/* supporting */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
            {supporting.map((reel, i) => (
              <motion.div
                key={reel.src}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{
                  delay: 0.18 + i * 0.12,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <VideoCard reel={reel} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
