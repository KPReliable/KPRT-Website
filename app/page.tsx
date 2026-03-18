import HeroBanner from "@/app/components/HomePage/HeroBannner";
import QuickHighlights from "@/app/components/HomePage/QuickHighlights";
import KeyServices from "@/app/components/HomePage/KeyServices";
import TrustBuilders from "@/app/components/HomePage/TrustBuilders";
import ExpertCTA from "@/app/components/HomePage/ExpertCTA";
import "@/app/styles/homepage.css"

export default function HomePage() {
  return (
    <main>
      <HeroBanner />
      <QuickHighlights />
      <KeyServices />
      <TrustBuilders />
      <ExpertCTA />
    </main>
  );
}