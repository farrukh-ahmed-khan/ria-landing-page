"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, slideLeft, staggerContainer, VIEWPORT } from "@/hooks/useScrollReveal";

const miniEvents = [
  { badge: "Featured Speaker", title: "TiECon Detroit",
    desc: "Featured speaker on AI innovation and digital transformation for a premier entrepreneurship and business audience." },
  { badge: "Brand Speaker",    title: "Ford Automotive Showcases",
    desc: "Multiple showcases representing FordDirect initiatives on AI-powered personalization and the future of customer experience." },
  { badge: "Upcoming",         title: "Chai and Business",
    desc: "West Bloomfield, June 2026 — intimate gathering at the intersection of culture, commerce, and AI." },
];

const metaItems = [
  ["Date",     "June 14, 2026"],
  ["Venue",    "Farmington Co-Work, MI"],
  ["Audience", "55 Curated Guests"],
  ["Format",   "VIP + General"],
];

const speakingPlatforms = [
  {
    title: "Michigan Women in Tech",
    desc: "Technologist and thought leader with Michigan Women in Tech, conducting global workshops on AI applications in automotive sales. These sessions empower women to bridge technical and creative fields.",
  },
  {
    title: "Detroit's AutoTech Developer's Alliance Summit",
    desc: "Delivered a keynote address highlighting the critical role of mentorship in empowering the next generation with practical skills.",
  },
  {
    title: "Tech Elevator",
    desc: "Mentors young students through the Tech Elevator platform, helping them navigate trending technologies, problem-solving strategies, and career development while bridging academic knowledge with industry expectations.",
  },
];

const speakerCredentials = [
  "Speaker at Indian Fashion Week events",
  "Speaker and mentor for Miss India pageant platforms",
  "Fashion stylist for pageants, fashion showcases, and editorial events",
  "Speech coach for models and pageant contestants",
  "Advocate for women in AI, fashion, and entrepreneurship",
  "Curator of AI x Fashion experiences and innovation-focused events",
];

export default function Events() {
  return (
    <section id="events" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-12"
        >
          <motion.p
            variants={fadeUp}
            className="flex items-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase font-semibold mb-4"
            style={{ color: "var(--purple)" }}
          >
            <span className="w-8 h-0.5" style={{ background: "var(--purple)" }} />
            Event Highlights
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-black"
            style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "var(--charcoal)" }}
          >
            On stage. In the room.<br />
            <em style={{ color: "var(--magenta)" }}>In the moment.</em>
          </motion.h2>
        </motion.div>

        {/* Hero event card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="relative grid grid-cols-1 md:grid-cols-[1.4fr_1fr] overflow-hidden mb-6"
          style={{ background: "var(--magenta)" }}
        >
          {/* Periodic light sweep across the card */}
          <motion.div
            className="absolute inset-y-0 pointer-events-none z-10"
            style={{ width: "45%", background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.07) 50%, transparent 80%)" }}
            animate={{ x: ["-100%", "300%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 9, delay: 1.5 }}
          />
          <div className="flex flex-col justify-between p-6 sm:p-8 md:p-12">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEWPORT}
                transition={{ delay: 0.3 }}
                className="inline-block bg-white/20 text-white text-[0.55rem] tracking-[0.2em] uppercase font-bold px-3 py-1.5 mb-5"
              >
                Featured Event — June 2026
              </motion.span>
              <h3 className="font-display text-[1.9rem] font-black text-white leading-snug mb-4">
                The 10X Premiere<br />AI × Fashion Experience
              </h3>
              <p className="text-[0.88rem] leading-relaxed text-white/90 mb-6">
                A live AI Fashion Experience featuring Lavanya Suresh and Outfitiq — AI capsule collection
                reveal, live styling demos, and an intimate audience at a Black and White Affair.
              </p>
            </div>
            <motion.div
              className="flex flex-wrap gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              {metaItems.map(([lbl, val]) => (
                <motion.div key={lbl} variants={fadeUp} className="text-sm text-white">
                  <span className="block text-[0.55rem] tracking-widest uppercase text-white/60 mb-0.5">{lbl}</span>
                  {val}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative min-h-[440px] overflow-hidden md:min-h-0"
            style={{ background: "linear-gradient(135deg,#A8005F,#7B0044)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/media/lavanya_img1.jpg"
              alt="Lavanya Suresh at a featured AI and fashion event"
              fill
              sizes="(min-width: 768px) 34vw, 88vw"
              className="object-cover object-[center_18%]"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(91,0,40,0.62), transparent 58%), linear-gradient(to right, rgba(212,0,122,0.18), transparent 45%)",
              }}
            />
            <motion.p
              className="absolute bottom-6 right-6 font-display font-black text-right leading-none select-none"
              style={{ fontSize: "5rem", color: "rgba(255,255,255,0.24)" }}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              10X<br />✦
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Speaking platforms */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 gap-6 border p-6 mb-6 sm:p-8 md:grid-cols-[1fr_0.85fr] md:p-10"
          style={{ borderColor: "#e5e5e5", background: "#fbfbfb" }}
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-[0.58rem] tracking-[0.32em] uppercase font-semibold mb-3"
              style={{ color: "var(--purple)" }}
            >
              Speaking Platforms & Thought Leadership
            </motion.p>
            <motion.h3
              variants={fadeUp}
              className="font-display font-black mb-4"
              style={{ fontSize: "clamp(1.6rem,3vw,2.35rem)", color: "var(--charcoal)" }}
            >
              Amplifying her voice across tech, AI, and mentorship.
            </motion.h3>
            <motion.p variants={fadeUp} className="max-w-2xl text-[0.88rem] leading-relaxed text-neutral-500">
              From women-in-tech workshops to automotive technology summits, Lavanya brings practical AI,
              creative strategy, and inclusive leadership into rooms built for the next generation of builders.
            </motion.p>
          </div>

          <motion.blockquote
            variants={slideLeft}
            className="flex items-center border-l-4 py-2 pl-5 font-display italic text-[1.25rem] leading-relaxed"
            style={{ borderColor: "var(--gold)", color: "var(--charcoal)" }}
          >
            &ldquo;Thought leadership isn&apos;t about having the loudest voice. It&apos;s about using your voice to include others.&rdquo;
          </motion.blockquote>

          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            {speakingPlatforms.map((platform, i) => (
              <motion.div
                key={platform.title}
                variants={fadeUp}
                custom={i}
                className="border bg-white p-6"
                style={{ borderColor: "#ececec" }}
              >
                <h4 className="font-display text-[1.05rem] font-bold mb-3" style={{ color: "var(--charcoal)" }}>
                  {platform.title}
                </h4>
                <p className="text-[0.8rem] leading-relaxed text-neutral-500">{platform.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="md:col-span-2 border-t pt-6" style={{ borderColor: "#ececec" }}>
            <p
              className="text-[0.58rem] tracking-[0.28em] uppercase font-semibold mb-4"
              style={{ color: "var(--purple)" }}
            >
              Speaker Segment Focus
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {speakerCredentials.map((credential) => (
                <div
                  key={credential}
                  className="flex min-h-16 items-center border bg-white px-4 py-3 text-[0.78rem] font-medium leading-snug"
                  style={{ borderColor: "#ececec", color: "var(--charcoal)" }}
                >
                  {credential}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Mini cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {miniEvents.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, borderColor: "#D4007A", boxShadow: "0 12px 40px rgba(212,0,122,0.12)" }}
              className="p-8 border transition-colors duration-200 cursor-default"
              style={{ borderColor: "#e5e5e5" }}
            >
              <span
                className="inline-block text-white text-[0.55rem] tracking-widest uppercase font-bold px-3 py-1 mb-4"
                style={{ background: "var(--purple)" }}
              >
                {e.badge}
              </span>
              <h4 className="font-display font-bold text-[1.05rem] mb-2" style={{ color: "var(--charcoal)" }}>
                {e.title}
              </h4>
              <p className="text-[0.8rem] leading-relaxed text-neutral-500">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
