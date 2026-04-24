"use client";

import React, { useState } from "react";
import Image from "next/image";

// 1. Updated Interface
interface TabData {
  id: string;
  tabLabel: string;
  subtitle: string;
  title: string;
  description: string;
  imageUrl: string;
  overlayImageUrl?: string;
}

// 2. Type the array using the interface
const tabsData: TabData[] = [
  {
    id: "advisory",
    tabLabel: "Interview",
    subtitle: "",
    title: "Streamlined Talent Acquisition: The KPRT Interview Experience",
    description:
      "At KP Reliable Technique India, we are continuously expanding our team of certified professionals by actively sourcing top-tier talent across leading job portals like Naukri.com and other premier professional networks. Once a candidate's profile is shortlisted, our dedicated HR team initiates a comprehensive preliminary screening. To ensure maximum flexibility and accessibility for top candidates nationwide, our technical and behavioral interviews are conducted through a hybrid model—offering both seamless online virtual assessments and immersive offline, in-person interviews. This structured approach ensures a smooth, transparent, and engaging hiring experience from the first point of contact to final selection.",
    imageUrl:
      "https://res.cloudinary.com/dinnmia6e/image/upload/v1776855631/Ram72_vjus3k.svg",
  },
  {
    id: "training",
    tabLabel: "Training & Certification",
    subtitle: "",
    title: "The KPRT Certification Pathway: Building Industry Experts",
    description: "At KP Reliable Technique India, we believe that exceptional quality starts with exceptional training. Our rigorous, multi-tiered program transforms talented individuals into highly skilled professionals ready to deliver immediate value.\n\n• Phase 1: Corporate Induction & HR Training – Foundational training focusing on corporate compliance, workplace ethics, and KPRT’s core values.\n• Phase 2: Expert-Led Technical Training – Intensive instruction in advanced quality inspection methodologies by veteran trainers.\n• Phase 3: Practical Industry Immersion – Hands-on, real-world experience handling actual quality control processes in active industrial environments.\n• Phase 4: Official KPRT Certification – Successful candidates are awarded credentials, graduating as fully Certified Quality Inspectors.",
    imageUrl: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776681031/1_mpphqk.svg",
    
    overlayImageUrl: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776851232/IBT_CERTIFICATE_hcmo0l.svg", 
  },
  {
    id: "deployment",
    tabLabel: "Deployment",
    subtitle: "",
    title: "Seamless Integration: Deploying Certified Experts to Your Floor",
    description: "The final step in the KPRT methodology is strategic deployment.\n\n• Rapid Mobilization – Quick and efficient placement of certified professionals precisely when and where your projects need them most.\n• Seamless Cultural Integration – Our engineers are trained not just in technical skills.\n• Day-One Readiness – Equipped with specialized knowledge and practical experience, our deployed experts require zero onboarding downtime and are ready to uphold your quality standards from their very first shift.",
    imageUrl: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776101079/Ram18_jccab6.svg",
  }
];

// Pipeline steps for the bottom banner
const pipelineSteps = ["ON-CAMPUS", "G.E.T.", "TRAINING", "CERTIFIED", "DEPLOYMENT"];

export default function IntegratedCapabilities() {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Helper function to render text with beautiful bullet points
  const renderFormattedText = (text: string) => {
    const blocks = text.split("\n\n");

    return blocks.map((block, index) => {
      if (block.includes("•")) {
        const listItems = block.split("\n").filter((item) => item.trim() !== "");
        return (
          <ul key={index} className="mt-6 space-y-4 text-base md:text-lg text-[#64748b]">
            {listItems.map((item, i) => {
              const cleanText = item.replace(/^•\s*/, "");
              const parts = cleanText.split(" – ");

              return (
                <li key={i} className="flex items-start">
                  <span className="text-[#52d1b4] mr-3 mt-1.5 text-xs">▶</span>
                  <span className="leading-relaxed">
                    {parts.length > 1 ? (
                      <>
                        <span className="font-semibold text-[#0f172a]">{parts[0]}</span> – {parts.slice(1).join(" – ")}
                      </>
                    ) : (
                      cleanText
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        );
      }

      return (
        <p key={index} className="text-[#64748b] text-base md:text-lg leading-relaxed">
          {block}
        </p>
      );
    });
  };

  // Helper to render the looping content of the marquee
  const renderMarqueeContent = () => (
    <div className="flex items-center">
      {pipelineSteps.map((step, index) => (
        <React.Fragment key={index}>
          <span className="text-[#f97316] font-bold tracking-widest text-sm md:text-lg mx-6 md:mx-12 whitespace-nowrap">
            {step}
          </span>
          <span className="text-white/40 text-lg md:text-xl">➔</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    // UPDATED: The outermost container is now fully edge-to-edge
    <div className="w-full font-sans bg-white overflow-x-hidden">
      
      {/* UPDATED: The 1200px constraint is now applied specifically to the main content area */}
      <section className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto">
        {/* Main Section Header */}
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-tight font-medium text-[#0f172a] mb-16 max-w-4xl">
          Deploying industry-ready experts to safeguard your standards.
        </h2>

        {/* Tabs Navigation */}
        <div className="flex border-b border-gray-200 mb-12 overflow-x-auto no-scrollbar">
          {tabsData.map((tab, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`relative flex-1 text-center pb-4 px-4 text-base md:text-lg font-medium whitespace-nowrap transition-colors duration-200 
                  ${isActive ? "text-[#0f172a]" : "text-[#94a3b8] hover:text-[#475569]"}`}
              >
                {tab.tabLabel || tab.subtitle} {/* Fallback if tabLabel is empty */}

                {/* Active Tab Underline */}
                {isActive && (
                  <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#52d1b4]"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Area */}
        <div
          key={activeTab}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start min-h-[400px] animate-[fadeIn_0.5s_ease-in-out]"
        >
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-start">
            {tabsData[activeTab].subtitle && (
              <span className="text-[#52d1b4] font-medium mb-3">
                {tabsData[activeTab].subtitle}
              </span>
            )}
            <h3 className="text-3xl md:text-4xl font-medium text-[#0f172a] leading-[1.2] mb-6">
              {tabsData[activeTab].title}
            </h3>
            
            <div className="flex flex-col">
              {renderFormattedText(tabsData[activeTab].description)}
            </div>
          </div>

          {/* Right Column: Main Image + Optional Overlay Image */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] mb-32 md:mb-40">
            
            <div className="relative w-full h-full overflow-hidden shadow-lg rounded-md">
              <Image
                src={tabsData[activeTab].imageUrl}
                alt={tabsData[activeTab].title}
                fill
                className="object-cover" 
                unoptimized
              />
            </div>

            {tabsData[activeTab].overlayImageUrl && (
              <div className="absolute -bottom-[10rem] md:-bottom-[15rem] left-1/2 transform -translate-x-1/2 w-48 h-56 md:w-[28rem] md:h-80 border-[8px] border-white shadow-2xl overflow-hidden z-10 animate-[fadeIn_0.7s_ease-in-out] rounded-md">
                <Image
                  src={tabsData[activeTab].overlayImageUrl}
                  alt="KPRT Overlay"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}

          </div>
        </div>
      </section>

      {/* UPDATED: Full-Width Marquee Strip (Outside the 1200px container) */}
      <div className="w-full bg-[#0f172a] py-6 border-t-4 border-[#f97316] overflow-hidden mt-10">
        <div className="flex animate-marquee-scroll w-max">
          {renderMarqueeContent()}
          {renderMarqueeContent()}
          {renderMarqueeContent()}
          {renderMarqueeContent()}
        </div>
      </div>

      {/* Inline styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* New Marquee Animation */
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        .animate-marquee-scroll {
          animation: marqueeScroll 20s linear infinite;
        }
        
        /* Pause the animation if the user hovers over the banner */
        .animate-marquee-scroll:hover {
          animation-play-state: paused;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}