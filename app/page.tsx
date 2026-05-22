import Navbar      from "@/components/Navbar";
import Hero        from "@/components/Hero";
import StatsStrip  from "@/components/StatsStrip";
import Ticker      from "@/components/Ticker";
import About       from "@/components/About";
import Topics      from "@/components/Topics";
import Events      from "@/components/Events";
import SocialProof from "@/components/SocialProof";
import Reel        from "@/components/Reel";
import Booking     from "@/components/Booking";
import Footer      from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Ticker />
        <About />
        <Topics />
        <Events />
        <SocialProof />
        <Reel />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
