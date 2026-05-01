import IndustriesWeServe from "@/app/components/IndustriesWeServe/IndustriesWeServe";
import VideoHeroSection from "../components/IndustriesWeServe/VideoHeaderSection";
import Banner from "../components/IndustriesWeServe/Banner";
import ModernizationSection from "../components/IndustriesWeServe/ModernizationSection";

import BeforeFooter from "../components/IndustriesWeServe/BeforeFooter";
import FooterAbove from "../components/IndustriesWeServe/FooterAbove";
import IndustryCard from "../components/IndustriesWeServe/IndustryCard";

export const metadata = {
  title: "Industries We Serve | QualityInspect",
  description:
    "Quality inspection and audit services across Automotive, Electronics, Heavy Machinery, Consumer Goods, Textiles and more — Pan India.",
};

export default function IndustriesPage() {
  return (
    <main>
      <IndustriesWeServe />
        {/* <KprtianCards /> */}
          <Banner />
          <IndustryCard/>
          <ModernizationSection/>
          <VideoHeroSection/>
          <BeforeFooter/>
          <FooterAbove/>
          
    </main>
  );
}