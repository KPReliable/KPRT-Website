"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Scaling Up the Quality Assurance  through Digital Strategy.",
    description: "Built a large-scale inspection network and expanded into ISO, IATF, OHSAS audit and compliance services",
    imageUrl: "https://res.cloudinary.com/dinnmia6e/image/upload/v1777451675/Untitled_design_icenlz.png"
  }
];

const NewsInsights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === newsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? newsData.length - 1 : prev - 1));
  };

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20 font-sans">
      <h2 className="text-2xl md:text-3xl font-normal text-gray-800 mb-12">Scale & Capability</h2>

      <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16">
        
        {/* Left Side: Controls & Text (Now slightly narrower to give image room) */}
        <div className="w-full lg:w-[42%] flex gap-6 md:gap-10">
          
          {/* Vertical Controls */}
          <div className="hidden md:flex flex-col items-center border-r border-gray-100 pr-6 md:pr-10">
            <div className="flex flex-col gap-2">
              <button onClick={prevSlide} className="text-gray-400 hover:text-black transition-colors">
                <ChevronUp size={24} />
              </button>
              <button onClick={nextSlide} className="text-gray-400 hover:text-black transition-colors">
                <ChevronDown size={24} />
              </button>
            </div>
            
            <div className="mt-auto mb-4 flex flex-col items-center gap-2">
              <span className="text-[15px] font-medium">1</span>
              <div className="h-24 w-[1px] bg-gray-200"></div>
              <span className="text-[15px] text-gray-300">1</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center flex-1">
            <h3 className="text-4xl lg:text-5xl font-light leading-[1.15] text-slate-800 mb-8 tracking-tight">
              {newsData[currentIndex].title}
            </h3>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              {newsData[currentIndex].description}
            </p>

          </div>
        </div>

        {/* Right Side: Image (Expanded to 58% width to show the logo) */}
        <div className="w-full lg:w-[58%] relative min-h-[400px] md:min-h-[350px]">
          <div className="w-full h-full overflow-hidden  shadow-sm">
            <img
              src={newsData[currentIndex].imageUrl}
              alt="KPRELIA Company Showcase"
              className="w-full h-full object-cover object-center transition-all duration-700"
            />
          </div>
          
          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden absolute bottom-4 right-4 gap-2">
             <button onClick={prevSlide} className="bg-white/90 p-3 rounded-full shadow-lg active:scale-95">
               <ChevronLeft size={20}/>
             </button>
             <button onClick={nextSlide} className="bg-white/90 p-3 rounded-full shadow-lg active:scale-95">
               <ChevronRight size={20}/>
             </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default NewsInsights;