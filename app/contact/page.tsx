import ContactPage from "@/app/components/ContactPage/Contactpage";
import type { Metadata } from "next";
import "@/app/styles/contactUs.css"

export const metadata: Metadata = {
  title: "Contact Us | QualityInspect",
  description:
    "Get in touch with QualityInspect. Offices in Pune, Delhi NCR and Chennai. We respond within 24 hours.",
};

export default function Contact() {
  return <ContactPage />;
}