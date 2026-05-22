# Lavanya Suresh — Speaker Kit (Next.js)

A production-ready Next.js 16 speaker landing page for **Lavanya Suresh** — AI · Fashion · Entrepreneurship.

## Stack

- **Next.js 16** (App Router, static export)
- **React 19**
- **Tailwind CSS v4**
- **TypeScript**

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Production build
npm start          # Serve production build
```

## Project Structure

```
app/
  layout.tsx       # Root layout + metadata
  page.tsx         # Page composition
  globals.css      # CSS variables, animations, fonts

components/
  Navbar.tsx       # Sticky nav with scroll effect
  Hero.tsx         # Full-height magenta hero
  StatsStrip.tsx   # 4-stat dark strip
  Ticker.tsx       # Animated purple marquee
  About.tsx        # Bio + photo + tags
  Topics.tsx       # Signature talks grid
  Events.tsx       # 10X Premiere + mini event cards
  SocialProof.tsx  # Testimonials on purple
  Reel.tsx         # Video reel section
  Booking.tsx      # CTA section
  Footer.tsx       # Dark footer

hooks/
  useReveal.ts     # IntersectionObserver scroll reveal
```

## Customization

1. **Photos** — Replace placeholder divs in `Hero.tsx` and `About.tsx` with `<Image>` from `next/image`
2. **Video** — Replace the placeholder in `Reel.tsx` with an `<iframe>` embed (YouTube/Vimeo)
3. **Email** — Update `hello@lavanyasuresh.com` in `Booking.tsx` and `Footer.tsx`
4. **Colors** — Edit CSS variables in `globals.css` (--magenta, --purple, --cream, --gold)

## Deploy

Works out of the box on **Vercel** — just connect the repo and deploy.
