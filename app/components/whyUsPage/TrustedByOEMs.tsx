import React from 'react';

interface Capability {
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    title: 'Voice Engines',
    description: 'Reusable voiceprints with tone sliders, terminology locks, and approval flows.',
  },
  {
    title: 'Narrative Systems',
    description: 'Story arcs, scripts, and campaigns with style and safety guardrails.',
  },
  {
    title: 'Multilingual',
    description: 'Meaning-preserving, idiom-aware adaptation across priority locales.',
  },
  {
    title: 'Dialogue & UX',
    description: 'Product, agent, and game dialogue kept consistent across releases.',
  },
  {
    title: 'QA & Safety',
    description: 'Style checks, bias/safety screens, factuality passes, human review.',
  },
];

const TrustedByOEMs = () => {
  return (
    <section className="bg-[#f8f6f4] py-16 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Header Tile */}
          <div className="flex items-center p-8">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
              What we make <br /> with language <br /> and AI
            </h2>
          </div>

          {/* Feature Cards */}
          {capabilities.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm flex flex-col justify-between min-h-[280px]"
            >
              {/* Bracketed Title Container */}
              <div className="relative inline-block self-start mb-6">
                <div className="flex items-center px-6 py-2 relative">
                  {/* Left Bracket */}
                  <div className="absolute left-0 top-0 bottom-0 w-3 border-l-2 border-t-2 border-b-2 border-[#2957ff] rounded-l-lg"></div>
                  
                  <h3 className="text-xl font-mono text-gray-800">
                    {item.title}
                  </h3>
                  
                  {/* Right Bracket */}
                  <div className="absolute right-0 top-0 bottom-0 w-3 border-r-2 border-t-2 border-b-2 border-[#ff4d29] rounded-r-lg"></div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default TrustedByOEMs;