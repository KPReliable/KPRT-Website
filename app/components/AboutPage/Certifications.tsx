'use client';

import React, { useRef } from 'react';

// Define the structure for your timeline data - KEPT EXACTLY SAME
type Milestone = {
  year: string;
  title: string;
  description: string;
};

// Updated Data with the new snapshot milestones - KEPT EXACTLY SAME
const journeyData: Milestone[] = [
  {
    year: '2008',
    title: 'Quality Consultancy Foundation',
    description: "Started our journey focusing on core quality consultancy, laying the foundation for our rigorous standards and operational excellence."
  },
  {
    year: '2010',
    title: 'Third-Party Inspection (NCR)',
    description: "Expanded into robust third-party inspection (TPI) services across the National Capital Region to ensure unparalleled manufacturing standards."
  },
  {
    year: '2012',
    title: 'Pan-India Expansion',
    description: "Scaled our quality control and inspection network nationally, establishing a presence across multiple states to serve a wider client base."
  },
  {
    year: '2014',
    title: 'Reliable Products (Manufacturing Unit)',
    description: "Established our own manufacturing unit, Reliable Products, to further integrate our quality assurance expertise directly into the production cycle."
  },
  {
    year: '2016',
    title: 'Civil & Construction Expansion',
    description: "Diversified our specialized expertise into the civil and construction sectors, bringing our strict quality standards to new industries."
  },
  {
    year: '2017',
    title: 'Rebranding to KPRT',
    description: "Officially rebranded to KP Reliable Technique India Pvt Ltd, reflecting our growing technical capabilities and broader market presence."
  },
  {
    year: '2019',
    title: 'ISO 9001:2015 Certification',
    description: "Achieved the ISO 9001:2015 certification, solidifying our unwavering commitment to international quality management systems."
  },
  {
    year: '2023',
    title: 'Workforce & Audit Expansion',
    description: "Grew our professional network to over 650+ highly qualified engineers, significantly expanding our comprehensive audit and inspection capabilities."
  },
  {
    year: '2025',
    title: 'SUNRAY Ecosystem Launch',
    description: "Launched the SUNRAY Ecosystem, marking our strategic transition from execution and consultancy to a full-scale digital and operational ecosystem."
  }
];

export default function WhoWeAre() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Function to handle smooth scrolling left and right - KEPT EXACTLY SAME
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth >= 768 ? clientWidth / 2 : clientWidth;
      
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA] font-sans relative overflow-hidden">
      
      {/* Title Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-10 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-light text-gray-900 tracking-wide mb-2">
          Our Journey (Snapshot)
        </h2>
        <p className="text-base sm:text-lg text-gray-600 font-medium">
          From consultancy to execution to ecosystem:
        </p>
      </div>

      {/* Timeline Slider Area */}
      {/* CHANGED: Made container height fluid on mobile screen layers to prevent card clipping */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-12 lg:px-24 h-[550px] sm:h-[650px] md:h-[700px]">
        
        {/* The Continuous Static Background Line */}
        <div className="absolute top-1/2 left-4 sm:left-12 right-4 sm:right-12 h-[1px] bg-gray-300 -translate-y-1/2 z-0"></div>

        {/* Left Arrow Button */}
        {/* CHANGED: Enhanced padding tap targets and added high-contrast backgrounds for mobile safety */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-1 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 text-gray-600 hover:text-black transition-colors bg-white/90 rounded-full shadow-sm md:bg-transparent md:shadow-none"
          aria-label="Previous Slide"
        >
          <svg width="20" height="36" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-7 sm:w-6 sm:h-10">
            <path d="M19 35L5 20L19 5" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-1 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 text-gray-600 hover:text-black transition-colors bg-white/90 rounded-full shadow-sm md:bg-transparent md:shadow-none"
          aria-label="Next Slide"
        >
          <svg width="20" height="36" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-7 sm:w-6 sm:h-10">
            <path d="M5 35L19 20L5 5" />
          </svg>
        </button>

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="w-full h-full flex overflow-x-auto snap-x snap-mandatory z-10 relative scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {journeyData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className="w-full md:w-1/2 shrink-0 snap-start h-full relative"
              >
                {/* The Black Dash indicating the point on the timeline */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -mt-[1px] w-4 sm:w-6 h-[2px] bg-black z-20"></div>

                {/* Alternating Card Placement (Top vs Bottom) */}
                {/* CHANGED: Swapped absolute vertical padding steps to scale flawlessly without running off smaller displays */}
                <div className={`absolute w-full px-4 sm:px-6 md:px-8 ${isEven ? 'bottom-1/2 mb-4 sm:mb-8' : 'top-1/2 mt-4 sm:mt-8'}`}>
                  
                  {/* The Card Component */}
                  <div className="bg-white border border-gray-200 p-5 sm:p-6 md:p-8 lg:p-10 mx-auto max-w-[290px] sm:max-w-[380px] md:max-w-[450px] shadow-sm hover:shadow-md transition-shadow rounded-sm">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#E86C31] tracking-wide">
                      {item.year}
                    </h3>
                    
                    {/* Small divider line under year */}
                    <div className="w-10 sm:w-14 h-[1px] bg-gray-300 my-3 sm:my-5"></div>
                    
                    <h4 className="text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] text-gray-900 uppercase mb-2 sm:mb-4 leading-relaxed min-h-[24px] sm:min-h-[32px]">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 text-xs sm:text-[13px] md:text-[14px] leading-relaxed line-clamp-4 sm:line-clamp-none">
                      {item.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}