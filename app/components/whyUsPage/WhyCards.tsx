import React from 'react';

const WhyCard: React.FC = () => {
  const coreValues = [
    {
      title: "Client-centric",
      description: "We care about our clients, about their success, and about the partnership we aim to build.",
      // Custom SVG recreating the double-halo figure
      icon: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 text-[#52dca7]">
          {/* Outer Arc */}
          <path d="M20 65 C 20 30, 80 30, 80 65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          {/* Inner Arc */}
          <path d="M35 65 C 35 45, 65 45, 65 65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          {/* Figure Body (Looping path) */}
          <path d="M30 85 C 45 50, 55 50, 70 85" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          {/* Figure Head */}
          <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="4" />
        </svg>
      )
    },
    {
      title: "Agile",
      description: "We are built to do, correct, explore, innovate, breakthrough and repeat.",
      // Custom SVG recreating the lightning bolt
      icon: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 text-[#52dca7]">
          {/* Continuous lightning path */}
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
      title: "Responsible",
      description: "We own up to our successes and our mistakes. We are not a process, we are not anonymous. We stand responsible for how we treat our work, our colleagues and even our planet.",
      // Custom SVG recreating the abstract figure with raised arms
      icon: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 text-[#52dca7]">
          {/* Head */}
          <circle cx="50" cy="30" r="7" stroke="currentColor" strokeWidth="4" />
          {/* Arms (Looping shape) */}
          <path d="M25 45 C 40 30, 60 30, 75 45 C 75 45, 60 65, 50 55 C 40 65, 25 45, 25 45 Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          {/* Legs */}
          <path d="M40 85 C 45 70, 50 55, 50 55 C 50 55, 55 70, 60 85" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Innovative",
      description: "We continuously push boundaries, embracing new technologies and creative methodologies to stay ahead of the curve.",
      // Custom SVG: Continuous line lightbulb
      icon: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 text-[#52dca7]">
          <path d="M35 70 C 20 55, 25 25, 50 25 C 75 25, 80 55, 65 70 L 65 85 L 35 85 Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M40 95 L 60 95" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M50 45 L 50 60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Collaborative",
      description: "We believe in the power of teamwork. By working closely with our partners, we achieve greater success together.",
      // Custom SVG: Interlocking loops/infinity knot
      icon: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 text-[#52dca7]">
          <path d="M25 50 C 5 25, 40 15, 50 50 C 60 85, 95 75, 75 50 C 55 25, 20 15, 10 50 C 0 85, 35 75, 50 50 Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Excellence",
      description: "We are committed to delivering the highest quality in everything we do, ensuring our solutions stand the test of time.",
      // Custom SVG: Continuous line geometric star/diamond
      icon: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 text-[#52dca7]">
          <path d="M50 15 L 60 40 L 85 50 L 60 60 L 50 85 L 40 60 L 15 50 L 40 40 Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="50" cy="50" r="4" fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full bg-white py-20 lg:py-32 font-sans overflow-hidden">
      
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
        <div className="max-w-4xl mb-20 md:mb-28 text-[#17253b]">
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