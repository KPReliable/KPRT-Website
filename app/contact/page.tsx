// Adjust path based on where you saved the banner
import type { Metadata } from "next";
import Contactpage from "../components/ContactPage/Contactpage";
import LocationHello from "../components/ContactPage/LocationHello";

export const metadata: Metadata = {
  title: "Our Locations | QualityInspect",
  description: "Find our offices across India including Pune, Delhi NCR, and Chennai.",
};

export default function LocationPage() {
  return (
    <main>
      <Contactpage/>
      <LocationHello/>
      
      {/* You can add your location grid or maps here later */}
    </main>
  );
}