"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, VIEWPORT } from "@/hooks/useScrollReveal";

type Reel = {
  title: string;
  subtitle: string;
  src: string;
  num: string;
  poster?: string;
};

const reels: Reel[] = [
  {
    title: "10X Premiere Event",
    subtitle: "AI Book & App Launch Event",
    src: "/media/lavanya-10x-premiere-launch.mp4",
    poster: "/media/lavanya-10x-premiere-cover.jpeg",
    num: "01",
  },
  {
    title: "TiEcon Detroit 2018",
    subtitle: "Featured Speaking Reel",
    src: "/media/lavanya-reel-01.mp4",
    num: "02",
  },
  {
    title: "Outfitiq Styling Flow",
    subtitle: "Mobile App Video",
    src: "/media/lavanya-reel-02.mp4",
    num: "03",
  },
  {
    title: "Outfitiq Experience",
    subtitle: "Mobile App Video",
    src: "/media/lavanya-reel-03.mp4",
    num: "04",
  },
];

function VideoCard({
  reel,
  className = "",
}: {
  reel: Reel;
  className?: string;
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
      className={`group relative overflow-hidden rounded-xl cursor-pointer select-none ${className}`}
      style={{ background: "#111", boxShadow: "0 4px 32px rgba(0,0,0,0.5)" }}
    >
      <video
        ref={ref}
        src={reel.src}
        poster={reel.poster}
        playsInline
        preload="metadata"
        loop
        onEnded={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />

      {/* bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* top-left number */}
      <div className="absolute top-3.5 left-4 pointer-events-none">
        <span
          className="text-[0.5rem] font-bold tracking-[0.3em] uppercase"
          style={{ color: "var(--magenta)" }}
        >
          {reel.num}
        </span>
      </div>

      {/* top-right magenta bar */}
      <div
        className="absolute top-0 right-0 h-0.5 w-10 pointer-events-none"
        style={{ background: "var(--magenta)" }}
      />

      {/* play button */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/30 backdrop-blur-sm transition-all duration-300 group-hover:border-white/60 group-hover:bg-white/20 group-hover:scale-110">
            <svg width={18} height={18} viewBox="0 0 24 24" fill="white">
              <path d="M8 5.14v14l11-7-11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
        <p className="text-[0.48rem] tracking-[0.3em] uppercase font-medium text-white/50 mb-0.5">
          {reel.subtitle}
        </p>
        <p className="text-[0.9rem] font-bold text-white leading-snug">
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

        {/* heading — left aligned, description floated right */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="flex items-center gap-3 text-[0.58rem] tracking-[0.4em] uppercase font-semibold mb-4"
              style={{ color: "var(--magenta)" }}
            >
              <span className="w-6 h-px" style={{ background: "var(--magenta)" }} />
              Video Reel
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-sans font-black text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)" }}
            >
              See the work.{" "}
              <span style={{ color: "var(--magenta)" }}>Feel&nbsp;the&nbsp;room.</span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="text-[0.68rem] tracking-widest uppercase text-white/35 md:text-right shrink-0"
          >
            App demos&nbsp;·&nbsp;AI styling flows
            <br className="hidden md:block" />
            &nbsp;·&nbsp;Product experience
          </motion.p>
        </motion.div>

        {/* featured — full width 16:9 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <VideoCard reel={featured} className="aspect-video w-full" />
        </motion.div>

        {/* supporting — 3-col square grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {supporting.map((reel, i) => (
            <motion.div
              key={reel.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{
                delay: 0.1 + i * 0.1,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <VideoCard reel={reel} className="aspect-square w-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
