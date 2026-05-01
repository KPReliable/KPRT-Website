"use client";

import React, { useState } from "react";

/* ============================================================
    DATA
   ============================================================ */
const TRAINING_TYPES = [
  {
    id: "onsite",
    image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776681014/CASTING_dwrrkq.svg", 
    title: "Technical Training",
    badge: "Technical Training", 
    description:
      "Our certified trainers come directly to your manufacturing floor. Real-world, hands-on sessions conducted on your equipment, your processes, and your team — ensuring immediate applicability with zero theory-practice gap.",
    outcomes: [
      "Zero disruption to production schedule",
      "Custom checklist aligned to your SOPs",
      "Team assessed on actual work environment",
    ],
  },
  {
    id: "virtual",
    image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1777361415/Raj4_deelve.svg", 
    title: "IBT Training",
    badge: "IBT Training",
    description:
      "Instructor-led live sessions delivered via video conferencing. Structured modules, interactive Q&A, and digital workbooks — full training rigour without travel cost, accessible across all 28 states.",
    outcomes: [
      "Accessible pan-India from any location",
      "Recorded sessions for future reference",
      "Assessment and certification on completion",
    ],
  },
  {
    id: "certification",
    image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1777446170/Raj18_lgovuh.svg", 
    title: "Skill Up Training",
    badge: "NPD Training",
    description:
      "Structured multi-day programmes with formal assessment, practical tests, and an industry-recognised certificate. Ideal for quality engineers, auditors, and team leads who need verified credentials.",
    outcomes: [
      "ISO & IATF 16949 aligned curriculum",
      "Written + practical examination",
      "Certificate valid for 3 years",
    ],
  },
];

const TrainingSection: React.FC = () => {
  const [active, setActive] = useState(TRAINING_TYPES[0].id);
  
  // Find current active tab data
  const current = TRAINING_TYPES.find((t) => t.id === active) || TRAINING_TYPES[0];

  return (
    <section className="w-full bg-white py-20 px-6 font-sans">
      <div className="max-w-[1200px] mx-auto">

        {/* ============================================================
            MAIN TOP HEADING
        ============================================================ */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-12 max-w-5xl leading-snug">
          Our training expertise is delivered through three integrated programmes
        </h2>

        {/* ============================================================
            TABS HEADER
        ============================================================ */}
        <div className="flex justify-start md:justify-center items-center border-b border-gray-200 mb-16 gap-8 md:gap-92 overflow-x-auto scrollbar-hide">
          {TRAINING_TYPES.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`pb-4 text-lg md:text-xl transition-all duration-300 whitespace-nowrap border-b-2 ${
                  isActive
                    ? "border-[#42d09e] text-gray-900 font-medium" // Mint Green border for active
                    : "border-transparent text-gray-400 hover:text-[#5e2750]" // Gray by default, purple on hover (like your screenshot)
                }`}
              >
                {t.title}
              </button>
            );
          })}
        </div>

        {/* ============================================================
            CONTENT PANEL (Text Left, Image Right)
        ============================================================ */}
        <div 
          key={current.id} 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-opacity duration-500 animate-in fade-in"
        >
          
          {/* Left Column: Text */}
          <div className="flex flex-col gap-6 lg:pr-8">
            {/* Subtitle (Mint Green) */}
            <span className="text-[#42d09e] font-medium text-lg">
              {current.badge}
            </span>
            
            {/* Main Heading */}
            <h3 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-2">
              Our systems-thinking <br className="hidden md:block"/> approach to {current.title.toLowerCase()}
            </h3>
            
            {/* Description Paragraph */}
            <p className="text-gray-500 text-lg leading-relaxed">
              {current.description}
            </p>

            {/* Outcomes rendered as a second paragraph/list */}
            <div className="text-gray-500 text-lg leading-relaxed">
               With our experts embedded in your context, we ensure:
               <ul className="list-disc pl-5 mt-2 space-y-1">
                 {current.outcomes.map((outcome, idx) => (
                   <li key={idx}>{outcome}</li>
                 ))}
               </ul>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={current.image} 
              alt={current.title} 
              onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/600x600?text=Image+Not+Found'; }}
              className="w-full h-auto max-h-[600px] object-cover rounded-sm"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
   
export default TrainingSection;