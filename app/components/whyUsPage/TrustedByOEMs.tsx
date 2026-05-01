import React from 'react';

interface Capability {
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    title: 'Precision Methodology',
    description: 'Dimensional inspection using CMM, VMM, and high-precision gauges to ensure parts meet tight tolerance specifications.',
  },
  {
    title: 'NDT Testing',
    description: 'Non-Destructive Testing including Ultrasonic, Magnetic Particle, and Dye Penetrant to detect internal and surface flaws.',
  },
  {
    title: 'Material Verification',
    description: 'Witnessing chemical and physical tests, including PMI (Positive Material Identification) and hardness testing.',
  },
  {
    title: 'Surface Integrity',
    description: 'Rigorous assessment of coating thickness, roughness profiles, and corrosion resistance for high-durability mechanical parts.',
  },
  {
    title: 'Pre-Shipment Audit',
    description: 'Final visual and technical audits to verify packing, marking, and quantity compliance before global dispatch.',
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
              Independent <br /> Quality <br /> Assurance
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
                  {/* Left Bracket - Corporate Blue */}
                  <div className="absolute left-0 top-0 bottom-0 w-3 border-l-2 border-t-2 border-b-2 border-[#2957ff] rounded-l-lg"></div>
                  
                  <h3 className="text-xl font-mono text-gray-800 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  
                  {/* Right Bracket - KPRT Green/Yellow */}
                  <div className="absolute right-0 top-0 bottom-0 w-3 border-r-2 border-t-2 border-b-2 border-[#ffb300] rounded-r-lg"></div>
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