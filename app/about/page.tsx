import type { Metadata } from "next";
import AboutHero from "../components/AboutPage/AboutHero";
import Certifications from "../components/AboutPage/Certifications";
import LeadershipTeam from "../components/AboutPage/LeadershipTeam";
import MissionVision from "../components/AboutPage/MissionVision";
import WhoWeAre from "../components/AboutPage/WhoWeAre";
import WhyKPReliable from "../components/AboutPage/WhyKPReliable";
import "@/app/styles/about.css";

export const metadata: Metadata = {
  title: "About Us | KP Reliable — Independent Inspection Since 2008",
  description:
    "Learn about KPRT — India's leading third-party inspection company. Founded in 2008, we deliver 100% independent quality inspection, audits, and supplier development services across India.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <LeadershipTeam />
      <Certifications />
      <WhyKPReliable />
    </main>
  );
}
