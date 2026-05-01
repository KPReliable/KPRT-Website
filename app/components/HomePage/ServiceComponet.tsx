"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  // Trimmed to 4 services for the grid
  const allServices = [
    {
      category: "Consultant",
      description: "Mace audit,VDA 6.3,IATF 16949:2016",
    },
    {
      category: "Final Inspection",
      description: "Control shipment inspection services",
    },
    {
      category: "Product Process Inspection",
      description: "Cutting, bending, forming of sheet metal.",
    },
    {
      category: "Pre-Production Inspection",
      description: "Molten metal poured into moulds.",
    },
  ];

  // Added 4 distinct image slots here so you can easily replace them
  const images = [
    "https://res.cloudinary.com/dinnmia6e/image/upload/v1777280862/Ram100_amyc2u.svg",
    "https://res.cloudinary.com/dinnmia6e/image/upload/v1777361414/Raj5_frniqa.svg", 
    "https://res.cloudinary.com/dinnmia6e/image/upload/v1777361414/Raj6_huhwyh.svg", 
    "https://res.cloudinary.com/dinnmia6e/image/upload/v1777361414/Raj7_lsnump.svg",
  ];

  return (
    <section className="bg-[var(--color-bg)] px-4 font-sans pb-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#ffb300]">
          Services we offer
        </h2>
       
        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 mb-16 items-stretch">
          
          {/* HERO CARD (Left Side) */}
          <div className="relative group overflow-hidden p-10 min-h-[450px] h-full flex flex-col justify-end text-white">
            <img
              src="https://res.cloudinary.com/dinnmia6e/image/upload/v1777280768/Ram99_uzbsd1.svg"
              alt="hero"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Added a subtle dark gradient so the white text is always readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="relative z-10 drop-shadow-md">
              <p className="text-xs uppercase tracking-widest mb-4 text-blue-200">
                Audit & Compliance
              </p>
              <h3 className="text-4xl font-light leading-tight mb-6 text-white drop-shadow-lg">
                Inspection Services <br />
                <span className="font-bold text-[#ffb300]">
                  End-to-End Services
                </span>
              </h3>
              <button className="flex items-center gap-2 border-b border-white/30 pb-1 hover:border-white transition-all text-white drop-shadow-md w-max">
                Learn more <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* 4-IMAGE GRID (Right Side - PURE IMAGES) */}
          <div className="grid grid-cols-2 gap-1 h-full">
            {allServices.slice(0, 4).map((service, i) => (
              <div
                key={i}
                className="relative overflow-hidden group min-h-[220px] bg-gray-100"
              >
                {/* Pure Image - No text overlays, no card padding */}
                <img
                  src={images[i]}
                  alt={service.category}
                  onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'; }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;