"use client";

import React, { useEffect, useState } from "react";

export default function ServicesPage() {
  // State to track mouse position for the parallax effect in the Hero
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Data for the services list section based on your screenshot
  const serviceFeatures = [
    {
      title: "Reliability",
      subtitle: "Trust in Our Service",
      description: "We are dedicated to providing reliable and trustworthy services to our clients. Count on us for dependable solutions and professional expertise on every project.",
    },
    {
      title: "Affordability",
      subtitle: "Quality Within Reach",
      description: "Our affordable pricing ensures that you can access high-quality handyman services without breaking the bank. Experience top-notch services at competitive rates with Snapx Services.",
    },
    {
      title: "Customer Care",
      subtitle: "Your Satisfaction Matters",
      description: "Customer satisfaction is our priority. We go the extra mile to ensure that your experience with Snapx Services is positive and stress-free, from start to finish.",
    },
  ];

  return (
    <main className="w-full bg-[#f4f7f8] min-h-screen font-sans text-[#111]">
      
      {/* =========================================
          SECTION 1: HERO (Your interactive banner)
          ========================================= */}
      <section className="relative w-full min-h-[100vh] overflow-hidden border-b border-gray-300 flex flex-col justify-center">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute left-[20%] top-0 bottom-0 border-l border-gray-300/60"></div>
          <div className="absolute right-[20%] top-0 bottom-0 border-l border-gray-300/60"></div>
          <div className="absolute top-[40%] left-0 right-0 border-t border-gray-300/60"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col justify-between py-12 min-h-[80vh]">
          {/* Giant Title */}
          <div className="pt-10 w-full text-center">
            <h1 className="text-6xl md:text-[140px] font-medium tracking-tight leading-none">
              End-to-End Quality Solutions
            </h1>
          </div>

          {/* Floating Interactive Elements */}
          <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
            {/* Main Vernier Caliper */}
            <div
              className="absolute top-[35%] animate-float"
              style={{
                transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * 20.5}px)`,
              }}
            >
              <img
                src="https://res.cloudinary.com/dinnmia6e/image/upload/v1777101158/Ram83_vldw5k.svg"
                alt="Vernier Caliper"
                className="w-[450px] md:w-[800px] h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Bottom Row Content */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full relative z-30 mt-auto pt-40">
            <div className="max-w-[220px] mb-6 md:mb-0">
              <p className="text-lg md:text-xl text-gray-800 leading-snug">
                General handyman<br />work for home needs.
              </p>
            </div>

            {/* CTA Button */}
            <button className="bg-[#e1610d] hover:bg-[#0d4acd] text-[#02289a] px-8 py-4 text-lg font-medium transition-all duration-300 flex items-center gap-3 group">
              Book an Inspection
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
          </div>
        </div>

        {/* Custom CSS for Automatic Floating */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `,
        }} />
      </section>


      {/* =========================================
          SECTION 2: SERVICES DETAILS (From Screenshot)
          ========================================= */}
      <section className="w-full py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Large Intro Paragraph */}
          <div className="mb-8 max-w-5xl">
            <h2 className="text-3xl md:text-[28px] leading-snug text-[#222]">
              Our comprehensive range of services includes Plastic Moulding,Rubber Components, Sheet Metal,Casting,Forging,Machining,Fabrication,Fabrication & Welding,Surface Trament,Electrical & Electornics,Consumable,Tooling & Fixtures,Packaging. Whether it's a quick fix or a major renovation, we've got you covered.
            </h2>
          </div>

          {/* Details List */}
          <div className="flex flex-col">
            {serviceFeatures.map((feature, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-start py-12 md:py-16 ${index !== 0 ? 'border-t border-gray-300' : ''}`}
              >
                {/* Column 1: Main Title */}
                <div className="w-full md:w-[35%] mb-4 md:mb-0">
                  <h3 className="text-4xl md:text-5xl font-normal text-[#1a1a1a]">
                    {feature.title}
                  </h3>
                </div>

                {/* Column 2: Subtitle */}
                <div className="w-full md:w-[30%] mb-4 md:mb-0 pr-8">
                  <p className="text-xl md:text-2xl text-gray-800">
                    {feature.subtitle}
                  </p>
                </div>

                {/* Column 3: Description */}
                <div className="w-full md:w-[35%]">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}