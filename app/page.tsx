import HeroBanner from "@/app/components/HomePage/HeroBannner";
// import QuickHighlights from "@/app/components/HomePage/QuickHighlights";
import KeyServices from "@/app/components/HomePage/KeyServices";
import TrustBuilders from "@/app/components/HomePage/TrustBuilders";
// import ExpertCTA from "@/app/components/HomePage/ExpertCTA";
import Faqs from "./components/Faqs";
// import BentoGrid from "./components/HomePage/BentoGrid";
import ImpactStatement from "./components/HomePage/ImpactStatement";
import TpiValueProposition from "./components/HomePage/TpiValuePreposition";

export default function HomePage() {
  return (
    <main>
   
      <HeroBanner />
      
     <ImpactStatement/>
      <KeyServices />
      {/* <BentoGrid/> */}
      <TrustBuilders />
      {/* <ExpertCTA /> */}
      <TpiValueProposition/>
      <Faqs/>
   
    </main>
  );
}