"use client";

import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const ServicesSection = () => {
  const allServices = [
    {
      category: "Plastic Moulding",
      description:
        "Manufacturing using thermoplastics/thermosets via injection, blow, or compression moulding.",
      points:
        "Material traceability; Mould condition & maintenance; Process parameters control; First-off approval; Rejection handling",
    },
    {
      category: "Rubber Components",
      description:
        "Production of rubber parts using compression/transfer/injection moulding.",
      points:
        "Compound control; Hardness testing; Curing parameters; Dimensional inspection; Storage conditions",
    },
    {
      category: "Sheet Metal (Press Parts)",
      description:
        "Cutting, bending, forming of sheet metal using press machines and dies.",
      points:
        "Die maintenance; Press capacity; Burr control; Dimensional checks; In-process inspection",
    },
    {
      category: "Casting",
      description:
        "Molten metal poured into moulds to form complex shapes.",
      points:
        "Raw material control; Melting parameters; Porosity defects; Heat treatment; Inspection reports",
    },
    {
      category: "Forging",
      description:
        "Shaping metal using compressive forces to enhance strength.",
      points:
        "Billet quality; Temperature control; Die life; Grain flow; Mechanical testing",
    },
    {
      category: "Machining",
      description:
        "Precision machining using CNC/conventional machines.",
      points:
        "Machine calibration; Tool wear; SPC control; Dimensional accuracy; Coolant management",
    },
    {
      category: "Fabrication & Welding",
      description:
        "Assembly of parts using welding and fabrication processes.",
      points:
        "Welding qualification; WPS adherence; Visual inspection; Distortion control; NDT if applicable",
    },
    {
      category: "Surface Treatment / Coating",
      description:
        "Processes like painting, plating, anodizing for protection and finish.",
      points:
        "Coating thickness; Adhesion test; Bath control; Surface prep; Corrosion resistance test",
    },
    {
      category: "Electrical & Electronics",
      description:
        "Manufacturing of electrical components and electronic systems.",
      points:
        "ESD control; Functional testing; Soldering quality; Traceability; Calibration",
    },
    {
      category: "Consumables & Chemicals",
      description:
        "Materials used during production like lubricants, adhesives, coolants.",
      points:
        "MSDS availability; Storage conditions; Shelf life; Usage control; Safety compliance",
    },
    {
      category: "Tooling & Fixtures",
      description:
        "Tools like dies, molds, jigs, fixtures used in manufacturing.",
      points:
        "Design validation; Preventive maintenance; Accuracy check; Tool life monitoring",
    },
    {
      category: "Packaging Materials",
      description:
        "Materials used for packing and transportation.",
      points:
        "Packaging standard; Damage prevention; Labeling; FIFO; Handling method",
    },
  ];

  const images = [
    "https://res.cloudinary.com/dinnmia6e/image/upload/v1776100685/2_gfcxgo.svg",
    "https://res.cloudinary.com/dinnmia6e/image/upload/v1776100478/Ram16_md8d0h.svg",
  ];

  return (
    <section className="bg-[var(--color-bg)] px-4 font-sans">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0f1f3d]">
          Services we offer
        </h2>

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 mb-1">

          {/* HERO CARD */}
         <div className="relative group overflow-hidden p-10 min-h-[450px] flex flex-col justify-end text-white">

  {/* 🔥 BACKGROUND IMAGE */}
  <img
    src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776100685/2_gfcxgo.svg"
    alt="hero"
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  />

  {/* 🔥 GRADIENT OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)]/80 to-[var(--color-primary)]/80" />

  {/* 🔥 GLOW EFFECT */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-secondary)] opacity-20 blur-3xl rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>

  {/* CONTENT */}
  <div className="relative z-10">
    <p className="text-xs uppercase tracking-widest mb-4 text-blue-200">
      Future forward with data and AI
    </p>

    <h3 className="text-4xl font-light leading-tight mb-6">
      artificial intelligence, <br />
      <span className="font-bold text-[var(--color-secondary-light)]">
        data & analytics
      </span>
    </h3>

    <button className="flex items-center gap-2 border-b border-white/30 pb-1 hover:border-white transition-all">
      Learn more <ArrowRight size={16} />
    </button>
  </div>

</div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-2 gap-1">

            {[0, 1, 2, 3].map((i) => (
            <div
  key={i}
  className={[
    "relative overflow-hidden p-6 flex flex-col justify-end transition group",
    i === 0
      ? "text-white"
      : i === 1
      ? "text-white"
      : i === 2
      ? "text-[var(--color-text)]"
      : "text-[var(--color-primary-dark)]",
  ].join(" ")}
>

  {/* 🔥 BACKGROUND IMAGE */}
  <img
    src={images[i % 2]}
    alt="service"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* 🔥 OVERLAY (IMPORTANT for readability) */}
  <div
    className={[
      "absolute inset-0",
      i === 0
        ? "bg-[var(--color-primary-dark)]/70"
        : i === 1
        ? "bg-[var(--color-secondary)]/70"
        : i === 2
        ? "bg-white/80"
        : "bg-[var(--color-primary-light)]/80",
    ].join(" ")}
  />

  {/* CONTENT */}
  <div className="relative z-10">
    <p className="text-sm font-medium leading-snug">
      Sample Service Title
      <span className="block font-bold mt-1 uppercase text-xs">
        category
      </span>
    </p>
  </div>

</div>
            ))}

          </div>
        </div>

        {/* SERVICES LIST */}
        <div className="bg-[var(--color-primary-dark)] p-8 lg:p-12">
          <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
            <h4 className="text-[var(--color-secondary-light)] font-bold border-b-2 border-[var(--color-secondary)] pb-6 -mb-[26px]">
              All Services
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-3">
            {allServices.map((service, idx) => (
              <a
                key={idx}
                href="#"
                className="text-white/70 hover:text-[var(--color-secondary-light)] text-[13px] transition-colors flex items-center group"
              >
                <ChevronRight
                  size={12}
                  className="opacity-0 group-hover:opacity-100 -ml-4 transition-all mr-1"
                />
                {service.category}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;