import React from 'react';
import { ShieldCheck, BookOpenText, Unplug, Scale, Target } from 'lucide-react'; // Icons for visual context

// Color Palette Definition
const theme = {
  primary: '#284c87', // Dark Blue
  primaryDark: '#1a3460', // Darker Blue
  secondary: '#00a2e9', // Light Blue
  textMain: '#0f1f3d', // Dark Text
  textMuted: '#5a6a85', // Muted Text
  bg: '#f5f8ff', // Very Light Blue BG
  white: '#ffffff',
  iconColor: '#10b981', // Green from the original image (can be re-mapped to secondary if preferred)
};

// Data Structure to map the content
const tpiPoints = [
  {
    icon: Unplug, // Represents Independence
    title: "INDEPENDENT (THE STRUCTURE)",
    details: [
      { key: "Complete Autonomy:", value: "We operate as a distinct entity, strictly separate from the First Party (Buyer) and Second Party (Manufacturer)." },
      { key: "Standard-Driven:", value: "Our authority is derived solely from mutually agreed standards and guidelines. We are free to make decisions based on technical compliance, not commercial pressure." }
    ],
  },
  {
    icon: Scale, // Represents Impartiality
    title: "IMPARTIAL / UNBIASED (THE PROCESS)",
    details: [
      { key: "Fact-Based Integrity:", value: "Our reports act as a \"mirror to reality.\" Every observation is documented exactly as seen." },
      { key: "Data-Driven Decisions:", value: "Conclusions are influenced only by hard facts and physical evidence, ensuring that personal opinions or external influences never alter the results." }
    ],
  },
  {
    icon: Target, // Represents clear, conflict-free service
    title: "ZERO CONFLICT OF INTEREST (THE ETHICS)",
    details: [
      { key: "Absolute Neutrality:", value: "We maintain a strict firewall against conflicts of interest. We have no financial or operational stake in the First or Second parties." },
      { key: "Trusted Bridge:", value: "This neutrality allows us to serve as a trusted bridge, protecting the interests of both the user and the end-user equally." }
    ],
  },
];

const TpiValueProposition: React.FC = () => {
  return (
    <section 
      style={{ backgroundColor: theme.bg }} 
      className="py-16 px-6 md:py-24 md:px-12 font-sans"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header Section (matching layout of image_1.png) --- */}
        <div className="mb-16 md:mb-20 space-y-4">
          <h1 
            style={{ color: theme.textMain }} 
            className="text-3xl md:text-4xl font-extrabold leading-snug tracking-tight"
          >
            We define Third Party Inspection (TPI) by three key pillars, ensuring we serve as an 
            unbiased, qualified, and neutral entity in your process.
          </h1>
          <p 
            style={{ color: theme.textMuted }} 
            className="text-lg font-medium"
          >
            TPI is inspection services delivered by a fully independent qualified professional, 
            providing objective verification of quality without any bias or commercial influence.
          </p>
        </div>

        {/* --- Content Grid (matching 3-column layout of image_1.png) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {tpiPoints.map((point, index) => (
            <div key={index} className="flex flex-col items-start space-y-6">
              
              {/* Icon Container - using the specific style from image_1.png */}
              <div 
                style={{ 
                  color: theme.iconColor, // Green color from original image
                  boxShadow: '0 0 15px rgba(16, 185, 129, 0.4)' // Soft green glow
                }}
                className="w-16 h-16 rounded-xl flex items-center justify-center border border-current p-4"
              >
                <point.icon className="w-full h-full" strokeWidth={1.5} />
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <h3 
                  style={{ color: theme.textMain }} 
                  className="text-xl font-semibold tracking-wide uppercase"
                >
                  {point.title}
                </h3>
                
                <div style={{ color: theme.textMain }} className="space-y-3 text-base leading-relaxed">
                  {point.details.map((detail, dIndex) => (
                    <p key={dIndex}>
                      <span className="font-bold">{detail.key}</span> {detail.value}
                    </p>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TpiValueProposition;