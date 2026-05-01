import React from 'react';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

interface Expert {
  id: number;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  linkedinUrl: string;
}

const experts: Expert[] = [
  {
    id: 1,
    name: "Mr.Mahesh Kandpal",
    role: "GM-Marketing & Operation",
    description: "",
    imageUrl: "https://res.cloudinary.com/dinnmia6e/image/upload/v1777543668/Raj40_n2vdpf.svg",
    linkedinUrl: "#",
  },
  {
    id: 2, // Fixed duplicate ID
    name: "Mr.Ashok Dhar",
    role: "Marketing head",
    description: "",
    imageUrl: "https://res.cloudinary.com/dinnmia6e/image/upload/v1777545245/Raj41_tknv2a.svg",
    linkedinUrl: "#",
  },
  {
    id: 2, // Fixed duplicate ID
    name: "Mr.Mukesh Kumar",
    role: "Quality head",
    description: "",
    imageUrl: "https://res.cloudinary.com/dinnmia6e/image/upload/v1777545965/Raj43_kv6bzp.svg",
    linkedinUrl: "#",
  },
];

const ExpertSection = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-18 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Navigation */}
        <div className="flex justify-between items-end mb-12 border-b border-gray-100 pb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1a2b3c]">
            Connect with our experts
          </h2>
          <div className="flex gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
              <span className="text-2xl font-light">&lt;</span>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
              <span className="text-2xl font-light">&gt;</span>
            </button>
          </div>
        </div>

        {/* Experts Grid - Centered items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {experts.map((expert, index) => (
            <div 
              key={expert.id} 
              className={`flex flex-col p-6 md:p-8 ${
                // Border logic remains, but applies based on grid position
                index !== experts.length - 1 ? 'md:border-r border-gray-200' : ''
              }`}
            >
              {/* Image Container - Aspect ratio changed to 1/1 to decrease height */}
              <div className="relative w-full aspect-square mb-6 overflow-hidden bg-gray-100 rounded-sm">
                <Image 
                  src={expert.imageUrl} 
                  alt={expert.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  // object-center ensures the face stays in the middle
                  className="object-cover object-center" 
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#1a2b3c]">
                  {expert.name}
                </h3>
                <div className="text-gray-600 text-sm leading-relaxed">
                  <p className="font-semibold">{expert.role}</p>
                  {expert.description && <p className="line-clamp-2">{expert.description}</p>}
                </div>
                
                {/* LinkedIn Link */}
                <a 
                  href={expert.linkedinUrl}
                  className="inline-flex items-center gap-2 pt-4 text-xs font-bold text-gray-500 hover:text-[#0077b5] transition-colors uppercase tracking-wider group"
                >
                  <div className="bg-gray-400 p-0.5 rounded-[2px] group-hover:bg-[#0077b5] transition-colors">
                    <Linkedin size={12} className="text-white fill-current" />
                  </div>
                  connect
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;