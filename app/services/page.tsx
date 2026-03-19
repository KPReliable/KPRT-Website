import type { Metadata } from "next";
import ServicesGrid from "../components/ServicePageComponentt/ServicesGrid";
import ServicesHero from "../components/ServicePageComponentt/ServicesHero";
import ServicesHowItWorks from "../components/ServicePageComponentt/ServicesHowItWorks";
import ServicesNavStrip from "../components/ServicePageComponentt/ServicesNavStrip";
import "@/app/styles/services.css"

export const metadata: Metadata = {
  title: "Services | KP Reliable — Inspection & Quality Services",
  description:
    "Explore KPRT's six specialized quality inspection service verticals: Supplier Quality Inspection, In-Process Inspection, PDI, Audit Services, Supplier Development, and Training & Consultation.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesNavStrip />
      <ServicesGrid />
      <ServicesHowItWorks />
    </main>
  );
}
