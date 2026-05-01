import React from 'react';

const WhyCard: React.FC = () => {
const coreValues = [
  {
    title: "Client-Centric",
    description: "We prioritize our clients' success, building long-term partnerships through dedicated quality assurance and transparent communication.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 text-[#ffb300]">
        <path d="M20 65 C 20 30, 80 30, 80 65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M35 65 C 35 45, 65 45, 65 65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M30 85 C 45 50, 55 50, 70 85" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="4" />
      </svg>
    )
  },
  {
    title: "1000+ Expert Inspectors",
    description: "Our massive workforce ensures rapid deployment and minimum reaction time for urgent quality checks across multiple industries.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 text-[#ffb300]">
        <path 
          d="M55 15 L 35 50 L 50 55 L 45 85 L 75 40 L 55 35 Z" 
          stroke="currentColor" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    )
  },
  {
    title: "100+ Active Clients",
    description: "Trusted by industry leaders, we hold ourselves accountable for every inspection, standing responsible for our work and our impact.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 text-[#ffb300]">
        <circle cx="50" cy="30" r="7" stroke="currentColor" strokeWidth="4" />
        <path d="M25 45 C 40 30, 60 30, 75 45 C 75 45, 60 65, 50 55 C 40 65, 25 45, 25 45 Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 85 C 45 70, 50 55, 50 55 C 50 55, 55 70, 60 85" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "20 Lakh+ Monthly Audits",
    description: "We inspect and confirm over 2,000,000 products per month, delivering massive-scale precision for automotive and manufacturing sectors.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 text-[#ffb300]">
        <path d="M35 70 C 20 55, 25 25, 50 25 C 75 25, 80 55, 65 70 L 65 85 L 35 85 Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 95 L 60 95" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M50 45 L 50 60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Collaborative Spirit",
    description: "We believe in the power of teamwork, working as an extension of your own team to achieve greater quality and efficiency together.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 text-[#ffb300]">
        <path d="M25 50 C 5 25, 40 15, 50 50 C 60 85, 95 75, 75 50 C 55 25, 20 15, 10 50 C 0 85, 35 75, 50 50 Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Uncompromising Excellence",
    description: "Our commitment to high-standard quality control ensures that every part, rail, or structure we inspect meets global safety benchmarks.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 text-[#ffb300]">
        <path d="M50 15 L 60 40 L 85 50 L 60 60 L 50 85 L 40 60 L 15 50 L 40 40 Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="50" cy="50" r="4" fill="currentColor" />
      </svg>
    )
  }
];
  return (
    <section className="relative w-full bg-white py-16 lg:py-18 font-sans overflow-hidden">
      
      {/* Background Watermark Text ("caring") 
          Positioned absolutely behind the grid with a light gray color and cursive fallback 
      */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 overflow-hidden">
        <span 
          className="text-[12rem] md:text-[20rem] lg:text-[28rem] font-bold text-[#f4f6f9] select-none whitespace-nowrap opacity-60"
          style={{ fontFamily: "'Brush Script MT', 'Caveat', 'Comic Sans MS', cursive" }}
        >
          caring
        </span>
      </div>

      {/* Main Content Wrapper - Aligned exactly with max-w-6xl px-4 */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        
        {/* Top Text Area */}
        <div className="max-w-4xl mb-20 md:mb-16 text-[#17253b]">
          <p className="text-xl md:text-2xl leading-relaxed mb-8 font-medium">
            We are powered by caring. Caring is at the heart of our values. It drives us to deliver the best results, to be the best colleagues, and deliver the best solutions.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed font-medium">
            Caring is why so many of our clients have been with us over a decade.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {coreValues.map((item, index) => (
            <div key={index} className="flex flex-col items-start text-left bg-white/50 backdrop-blur-sm p-4 -mx-4 rounded-xl transition-all hover:bg-white/80">
              
              {/* Icon */}
              <div className="mb-6 md:mb-8">
                {item.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-[#17253b] mb-4">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyCard;