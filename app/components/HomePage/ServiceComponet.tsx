import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const ServicesSection = () => {
  const allServices = [
    "Accelerated Quality & Test Engineering", "Application Managed Services", "API & Integration Excellence",
    "AR/VR & Animation", "Atlassian", "Blockchain", "Business Excellence & Transformation",
    "Cloud", "CRM", "Customer Data Platforms", "Cybersecurity", "Design Studio", "DevOps",
    "Digital Commerce Solutions", "Digital Insights", "Digital Supply Chain", "ECM & Portals",
    "Ecological Engineering", "Embedded Systems", "Enterprise Agile", "ERP", "FinOps",
    "Human Capital & Workforce Management", "Innovation", "Intelligent BPM", "Internet of Things",
    "Low Code", "Mainframe & Legacy", "Mobility Solutions", "Process Consulting", "Product Engineering",
    "Quantum Computing", "Resilience Engineering", "ServiceNow", "Site Reliability Engineering",
    "Trainings", "Transformation & Modernization", "Technical Communication", "Zendesk"
  ];

  return (
    <section className="bg-[var(--color-bg)] px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl  font-bold leading-snug tracking-tight mb-8 text-[#0f1f3d]">
          Services we offer
        </h2>

        {/* Top Grid: Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 mb-1">
          
          {/* Main Hero Card */}
          <div className="relative group overflow-hidden bg-gradient-to-br from-[#1a3460] to-[#284c87] p-10 min-h-[450px] flex flex-col justify-end text-white">
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-20 blur-3xl rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-widest mb-4 text-blue-200">Future forward with data and AI</p>
              <h3 className="text-4xl font-light leading-tight mb-6">
                artificial intelligence, <br />
                <span className="font-bold text-[var(--color-secondary-light)]">data & analytics</span>
              </h3>
              <button className="flex items-center gap-2 border-b border-white/30 pb-1 hover:border-white transition-all">
                Learn more <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Secondary Grid */}
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-[var(--color-primary-dark)] p-6 text-white flex flex-col justify-between hover:bg-[var(--color-primary)] transition-colors">
               <div className="h-24 w-full bg-white/5 rounded mb-4"></div> {/* Placeholder for Image */}
               <p className="text-sm font-medium leading-snug">Unleashing intelligent enterprises: <span className="block font-bold mt-1 uppercase text-xs">sap</span></p>
            </div>
            <div className="bg-[var(--color-secondary)] p-6 text-white flex flex-col justify-between hover:bg-[var(--color-secondary-light)] transition-colors">
               <div className="h-24 w-full bg-white/10 rounded mb-4"></div>
               <p className="text-sm font-medium leading-snug">Enabling AI-powered cloud innovation: <span className="block font-bold mt-1 uppercase text-xs">cloud</span></p>
            </div>
            <div className="bg-white p-6 border border-[var(--color-border)] flex flex-col justify-between group cursor-pointer">
               <div className="h-24 w-full bg-gray-100 rounded mb-4"></div>
               <p className="text-sm font-bold text-[var(--color-text)]">Smart buildings. Sustainable impact: <span className="block text-[var(--color-secondary)] uppercase text-xs mt-1">siemens building x</span></p>
            </div>
            <div className="bg-[var(--color-primary-light)] p-6 flex flex-col justify-between group cursor-pointer">
               <div className="h-24 w-full bg-blue-200/50 rounded mb-4"></div>
               <p className="text-sm font-bold text-[var(--color-primary-dark)]">AI-driven digital experiences: <span className="block uppercase text-xs mt-1">digital experiences</span></p>
            </div>
          </div>
        </div>

        {/* Bottom Section: All Services List */}
        <div className="bg-[var(--color-primary-dark)] p-8 lg:p-12">
          <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
            <h4 className="text-[var(--color-secondary-light)] font-bold border-b-2 border-[var(--color-secondary)] pb-6 -mb-[26px]">All Services</h4>
            <span className="text-white/40 text-sm font-bold px-3 py-1 border border-white/20 rounded-full cursor-pointer hover:bg-white/10 transition-colors">Index</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-3">
            {allServices.map((service, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="text-white/70 hover:text-[var(--color-secondary-light)] text-[13px] transition-colors flex items-center group"
              >
                <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 transition-all mr-1" />
                {service}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;