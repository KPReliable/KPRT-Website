import React from "react";
import Image from "next/image";

// 1. The Data Array (Kept safely inside this file so it doesn't clutter your main page)
const KPRTIAN_DIFFERENCES = [
  {
    id: 1,
    title: "Sorting & Rework",
    description: "Rapid response teams deployed to your site to sort out defective mechanical parts and rework them to acceptable standards.",
    imageSrc: "/images/sorting.jpg" // Replace with your actual image paths
  },
  {
    id: 2,
    title: "Dimensional Inspection",
    description: "Precise measurements and visual checks to ensure components perfectly match engineering drawings and tight tolerances.",
    imageSrc: "/images/dimensional.jpg"
  },
  {
    id: 3,
    title: "In-Process Control",
    description: "Independent verification during your manufacturing cycle to catch deviations early and significantly reduce scrap rates.",
    imageSrc: "/images/in-process.jpg"
  },
  {
    id: 4,
    title: "Pre-Dispatch Audits",
    description: "Final, independent quality sign-offs before shipments leave the facility, guaranteeing zero-defect delivery to your clients.",
    imageSrc: "/images/dispatch.jpg"
  }
];

const KprtianCards = () => {
  return (
    /* Responsive Grid: 1 column on mobile, 2 on tablets (sm), 4 on desktops (lg) */
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 w-full">
      
      {KPRTIAN_DIFFERENCES.map((item) => (
        /* The Card Container with Hover Effects */
        <div 
          key={item.id} 
          className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >
          
          {/* The Image Wrapper */}
          {/* border-[#00A2E9] uses Tailwind's arbitrary value feature to apply your brand blue! */}
          <div className="relative w-full h-48 border-b-4 border-[#00A2E9]">
            <Image 
              src={item.imageSrc} 
              alt={item.title} 
              fill 
              className="object-cover"
            />
          </div>

          {/* The Text Content */}
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {item.description}
            </p>
          </div>

        </div>
      ))}

    </div>
  );
};

export default KprtianCards;