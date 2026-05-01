"use client";

import React, { useState, useRef, MouseEvent, useEffect } from "react";
import { MapPin } from "lucide-react"; // Using Lucide React for the location icon

/* ============================================================
    TYPES & DATA STRUCTURE
   ============================================================ */
interface LocationItem {
  name: string;
}

type RegionData = {
  [key: string]: LocationItem[];
};

// Spellings, capitalizations, and spacing corrected
const REGION_DATA: RegionData = {
  "Haryana": [
    { name: "Faridabad" },
    { name: "Gurugram" },
    { name: "Bawal" },
    { name: "Palwal" },
    { name: "Dhatir" },
  ],
  "Rajasthan": [
    { name: "Bhiwadi" },
    { name: "Tapukara" }, 
    { name: "Kharane" },
    { name: "Pathredi" },
  ],
  "Uttar Pradesh": [
    { name: "Noida" },
  ],
  "Tamil Nadu": [
    { name: "Chennai - Oragadam" },
  ],
  "Himachal Pradesh": [
    { name: "Bharrote" },
  ],
};

const REGIONS: string[] = Object.keys(REGION_DATA);
// 🔥 Added "All" to the beginning of our tabs list
const TABS: string[] = ["All", ...REGIONS];

const RegionSelector: React.FC = () => {
  // 🔥 Default the active tab to "All"
  const [activeTab, setActiveTab] = useState<string>("All");

  // Refs and state for click-and-drag scrolling on desktop
  const scrollRef = useRef<HTMLUListElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  // Failsafe: Reset active tab if data structure changes
  useEffect(() => {
    if (activeTab !== "All" && REGIONS.length > 0 && !REGION_DATA[activeTab]) {
      setActiveTab("All");
    }
  }, [activeTab]);

  /* ---- Drag to Scroll Handlers ---- */
  const handleMouseDown = (e: MouseEvent<HTMLUListElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: MouseEvent<HTMLUListElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  if (!TABS.length) return null;

  // 🔥 Logic to determine which locations to show
  const displayedLocations = activeTab === "All" 
    ? Object.values(REGION_DATA).flat() // Combines all region arrays into one big array
    : REGION_DATA[activeTab] || [];

  return (
    <section className="bg-[#f2f4f7] min-h-[200px] py-16 px-4 font-sans text-[#2d3350]">
      <div className="max-w-5xl mx-auto">
        
        {/* =========================================
            HEADER SECTION
        ========================================= */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="inline-block text-sm font-bold tracking-[0.15em] uppercase text-[#3b2a82] mb-3">
            Our Presence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3350]">
            Actively Serving Multiple Locations
          </h2>
          <p className="mt-4 text-[#5e668a] max-w-2xl mx-auto text-base">
            Find our high-quality services and trusted partnerships across key industrial hubs and states.
          </p>
        </div>

        {/* =========================================
            TABS SECTION (Draggable & Centered)
        ========================================= */}
        <div className="border-b border-gray-300 mb-12 relative">
          <ul
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            // Added md:justify-center to center the tabs on larger screens
            className={`flex md:justify-center space-x-6 md:space-x-10 overflow-x-auto whitespace-nowrap pb-0 select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {/* 🔥 Loop through TABS instead of REGIONS */}
            {TABS.map((tabName) => {
              const isActive = activeTab === tabName;
              return (
                <li key={tabName} className="relative">
                  <button
                    onClick={() => setActiveTab(tabName)}
                    className={`pb-4 text-base md:text-lg font-medium transition-colors duration-200 ${
                      isActive ? "text-[#3b2a82]" : "text-[#5e668a] hover:text-[#3b2a82]"
                    }`}
                  >
                    {tabName}
                  </button>
                  {/* Active Tab Indicator */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#3b2a82]" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* =========================================
            LOCATION PILLS GRID
        ========================================= */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-4 md:px-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {/* 🔥 Use our dynamically created displayedLocations array */}
          {displayedLocations.map((location: LocationItem, idx: number) => (
            <button
              key={`${location.name}-${idx}`} // Ensures keys are unique even in the "All" view
              className="group flex items-center gap-3 bg-white rounded-full px-6 py-3.5 shadow-sm hover:shadow-md transition-all duration-200 border border-transparent hover:border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3b2a82]/20"
            >
              <MapPin className="w-5 h-5 text-[#3b2a82]/70 group-hover:text-[#3b2a82] transition-colors shrink-0" />
              
              <span className="text-base font-medium text-[#2d3350] group-hover:text-[#3b2a82] transition-colors">
                {location.name}
              </span>
            </button>
          ))}

        </div>

      </div>
    </section>
  );
};

export default RegionSelector;