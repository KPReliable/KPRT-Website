import type { Metadata } from "next";
import WhyCards from "../components/whyUsPage/WhyCards";
import WhyCTA from "../components/whyUsPage/WhyCTA";
import WhyHero from "../components/whyUsPage/WhyHero";
import TrustedByOEMs from "../components/whyUsPage/TrustedByOEMs";
import ComparisonTable from "../components/whyUsPage/ComparisonTable";
import Testimonials from "../components/whyUsPage/Testimonials";
import CaseStudies from "../components/whyUsPage/CaseStudies";
import "@/app/styles/why-us.css"

export const metadata: Metadata = {
  title: "Why Choose Us | KP Reliable — Safer, Faster, More Reliable",
  description:
    "Discover why 500+ manufacturers choose KPRT for independent quality inspection. 100% unbiased, rapid deployment, zero PPM approach, trusted by Maruti Suzuki, Tata Motors, Bosch & more.",
};

export default function WhyUsPage() {
  return (
    <main>
      <WhyHero />
      <WhyCards />
      <TrustedByOEMs />
      <ComparisonTable />
      <Testimonials />
      <CaseStudies />
      <WhyCTA />
    </main>
  );
}
