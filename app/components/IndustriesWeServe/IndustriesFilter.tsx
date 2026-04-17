// import React from 'react'
'use client'
import { useState } from "react";
import IndustryCard from "@/app/components/IndustriesWeServe/IndustryCard";
import { INDUSTRIES } from "@/app/constant/industries.constants";

const IndustriesFilter = () => {

  const FILTERS = ["All", "Automotive", "Electronics", "Heavy Machinery", "Consumer Goods", "Others"];

  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? INDUSTRIES
      : active === "Others"
      ? INDUSTRIES.filter((i) => ["textiles", "plastics"].includes(i.id))
      : INDUSTRIES.filter((i) =>
          i.title.toLowerCase().includes(active.toLowerCase())
        );

  return (
    <section className="flex flex-col items-center justify-center w-full">
  {/* Filters */}
  <div className="w-full max-w-6xl mx-auto ind-filters" role="tablist" aria-label="Filter industries">
    {FILTERS.map((f) => (
      <button
        key={f}
        role="tab"
        aria-selected={active === f}
        className={`ind-filter-btn${active === f ? " ind-filter-btn--active" : ""}`}
        onClick={() => setActive(f)}
      >
        {f}
      </button>
    ))}
  </div>

  {/* Cards grid */}
  <div className="w-full max-w-6xl mx-auto ind-grid">
    {filtered.map((industry, i) => (
      <IndustryCard key={industry.id} industry={industry} index={i} />
    ))}
  </div>
</section>
  )
}

export default IndustriesFilter
