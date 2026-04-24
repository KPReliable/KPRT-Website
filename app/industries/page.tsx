import IndustriesWeServe from "@/app/components/IndustriesWeServe/IndustriesWeServe";
import VideoHeroSection from "../components/IndustriesWeServe/VideoHeaderSection";
import Banner from "../components/IndustriesWeServe/Banner";
import ModernizationSection from "../components/IndustriesWeServe/ModernizationSection";
import IndustriesFilter from "../components/IndustriesWeServe/IndustriesFilter";
import BeforeFooter from "../components/IndustriesWeServe/BeforeFooter";
import FooterAbove from "../components/IndustriesWeServe/FooterAbove";

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
          <IndustriesFilter/>
          <ModernizationSection/>
          <VideoHeroSection/>
          <BeforeFooter/>
          <FooterAbove/>
          
    </main>
  );
}