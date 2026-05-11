// Adjust path based on where you saved the banner
"use client";
// import type { Metadata } from "next";

import Contactpage from "../components/ContactPage/Contactpage";
import LocationHello from "../components/ContactPage/LocationHello";
import ContactPopup from "../components/ContactPage/ContactPopup";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: "Our Locations | QualityInspect",
//   description:
//     "Find our offices across India including Pune, Delhi NCR, and Chennai.",
// };

export default function LocationPage() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      // Scroll lock karna
      document.body.style.overflow = "hidden";
    } else {
      // Scroll wapas enable karna
      document.body.style.overflow = "unset";
    }

    // Cleanup function: Agar component unmount ho jaye toh scroll wapas aa jaye
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <main>
      <Contactpage isOpen={isOpen} setIsOpen={setIsOpen} />
      <LocationHello />

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className=" fixed inset-0 bg-black/60 z-50 items-center justify-center"
        >
          {" "}
          {/* <Login  /> */}
          <ContactPopup isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}

      {/* You can add your location grid or maps here later */}
    </main>
  );
}
