// import ContactPage from "@/app/components/ContactPage/Contactpage";
import type { Metadata } from "next";
import "@/app/styles/faq.css"
import Faqs from "./FaqComponent";


export const metadata: Metadata = {
  title: " Faq | KPRT",
  description:
    "Get in touch with QualityInspect. Offices in Pune, Delhi NCR and Chennai. We respond within 24 hours.",
};

export default function Contact() {
  return <Faqs />;
}