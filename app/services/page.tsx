import React from "react";
import ServiceHero from "@/app/components/service/ServiceHero";
import ServicesGrid from "@/app/components/service/ServicesGrid";
import ProcessSection from "@/app/components/service/ProcessSection";
import CTASection from "@/app/components/service/CTASection";

const page = () => {
  return (
    <div>
      <ServiceHero />
      <ServicesGrid />
      <ProcessSection />
      <CTASection />
    </div>
  );
};

export default page;