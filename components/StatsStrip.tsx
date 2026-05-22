"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { num: 20,   suffix: "K+", label: "Instagram Audience" },
  { num: 3,    suffix: "+",  label: "Speaking Events"    },
  { num: 1,    suffix: "",   label: "AI App — Outfitiq"  },
  { num: 2026, suffix: "",   label: "10X Premiere"       },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(ease * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export default function StatsStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4" style={{ background: "var(--charcoal)" }}>
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
          whileHover={{ y: -4, scale: 1.04, transition: { type: "spring", stiffness: 400, damping: 20, delay: 0 } }}
          className="py-6 text-center cursor-default"
          style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}
        >
          <span className="font-display font-bold text-3xl block" style={{ color: "var(--magenta)" }}>
            <CountUp to={s.num} suffix={s.suffix} />
          </span>
          <span className="text-[0.6rem] tracking-widest uppercase text-white/40 mt-1 block">
            {s.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
