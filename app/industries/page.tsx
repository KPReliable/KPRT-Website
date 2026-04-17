import IndustriesWeServe from "@/app/components/IndustriesWeServe/IndustriesWeServe";
// import "@/app/styles/header.css";
// import "@/app/globals.css"
// import "@/app/styles/industries.css"
// import "@/app/styles/homepage.css"
// import KprtianCards from "../components/IndustriesWeServe/KprtianCards";
import Banner from "../components/IndustriesWeServe/Banner";
import ModernizationSection from "../components/IndustriesWeServe/ModernizationSection";
import IndustriesFilter from "../components/IndustriesWeServe/IndustriesFilter";

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
    </main>
  );
}