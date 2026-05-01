"use client";

import React, { useState } from "react";

const AllServicesDirectory = () => {
  // Set the default active tab to "All"
  const [activeTab, setActiveTab] = useState("All");

  const serviceCategories = [
    {
      title: "Consultant",
      image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1777450149/Raj27_vqg53o.svg", 
      items: [
        "Mace audit",
        "VDA 6.3",
        "IATF 16949:2016"
      ],
    },
    {
      title: "Final Inspection",
      image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1777447369/Raj26_u0zg58.svg", 
      items: [
        "Control shipment inspection services: CS-1",
        "Control shipment inspection services: CS-2",
        "Pre-dispatch Inspection Report",
        "Layout Inspection",
        "Packaging verification & Monitoring"
      ],
    },
    {
      title: "Product Process Inspection",
      image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1777446774/Raj24_a2ladm.svg", 
      items: [
        "First off inspection",
        "Patrol inspection: product & process parameter",
        "Operator inspection",
        "Cpk & Ppk Study",
        "Known conformity monitoring"
      ],
    },
    {
      title: "Pre-Production Inspection",
      image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1777446853/Raj25_smlrv7.svg", 
      items: [
        "Sample Inspection: prototype sample ISIR",
        "Supplier assessment Audit",
        "Inward inspection",
        "Supplier PPAP",
        "PPAP, APQP document Assessment"
      ],
    },
    {
      title: "Process Upgradation",
      image: "https://res.cloudinary.com/dinnmia6e/image/upload/v1776681031/1_mpphqk.svg", 
      items: [
        "Internal audit",
        "QAMS implementation",
        "Statistical analysis",
        "Needs & Gap Analysis",
        "Capacity Analysis (Run@Rate)", 
        "Measurement System Analysis"
      ],
    },
  ];

  // Dynamically generate tabs: "All" followed by every category title
  const tabs = ["All", ...serviceCategories.map((cat) => cat.title)];

  // Filter the displayed categories based on the clicked tab
  const displayedCategories = 
    activeTab === "All" 
      ? serviceCategories 
      : serviceCategories.filter((cat) => cat.title === activeTab);

  return (
    // Deep blue background
    <section className="w-full bg-[#1e375a] font-sans text-white py-12 min-h-[40vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ==== TOP HEADING ==== */}
        <div className="mb-16 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            All kinds of Services we Provide
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed">
            Integrating specialized inspection talent with robust management systems to eliminate defects & give Quality Assurance, compliant manufacturing flow.
          </p>
        </div>

        {/* ==== TABS NAVIGATION ==== */}
        <div className="flex items-center justify-start border-b border-white/20 mb-12 gap-16 overflow-x-auto scrollbar-hide relative">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-base md:text-lg font-medium whitespace-nowrap transition-all duration-300 relative ${
                  isActive 
                    ? "text-white" 
                    : "text-blue-200/60 hover:text-white"
                }`}
              >
                {tab}
                {/* Active Mint Green Underline (Overlays the border perfectly) */}
                {isActive && (
                  <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#42d09e]"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* ==== SERVICES LIST (Content Left, Image Right) ==== */}
        <div className="flex flex-col gap-12 animate-in fade-in duration-500">
          
          {displayedCategories.map((category, index) => (
            <div 
              key={index} 
              // Changed layout: flex-col on mobile, flex-row on larger screens
              className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 bg-white/5 border border-white/10  p-8 lg:p-10 hover:bg-white/10 transition-colors duration-300  group"
            >
              
              {/* ==== LEFT SIDE: CONTENT ==== */}
              <div className="flex-1 w-full flex flex-col justify-center">
                
                {/* Small Mint Green Subtitle */}
                <span className="text-[#42d09e] font-semibold text-sm uppercase tracking-wider mb-3 block">
                  Service Category
                </span>
                
                {/* Category Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  {category.title}
                </h3>
                
                {/* Sub-services List */}
                <ul className="flex flex-col gap-5">
                  {category.items.map((item, i) => (
                    <li 
                      key={i} 
                      className="text-blue-100/80 hover:text-white transition-colors duration-200 flex items-start gap-4 group/item cursor-pointer"
                    >
                      {/* Arrow Icon */}
                      <span className="text-[#42d09e] mt-[4px] text-xs opacity-50  transition-opacity">
                        ▶
                      </span>
                      {/* List Text */}
                      <span className="text-lg leading-relaxed font-medium transform group-hover/item:translate-x-1 transition-transform">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* ==== RIGHT SIDE: IMAGE BOX ==== */}
              <div className="w-full md:w-1/2 lg:w-[45%] h-42 md:h-96 relative overflow-hidden  flex-shrink-0 bg-gray-800 ">
                <img
                  src={category.image}
                  alt={category.title}
                  onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Image'; }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
            </div>
          ))}
          
        </div>

      </div>
    </section>
  );
};

export default AllServicesDirectory;