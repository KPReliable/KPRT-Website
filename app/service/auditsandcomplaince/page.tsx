"use client";
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { 
  ChevronRight, 
  BarChart3, 
  BrainCircuit,
  MessageSquare
} from 'lucide-react';

/**
 * Reusable Alternating Section Component
 * Derived from the layout requirements in Screenshot 2026-05-13 180715.png
 */
interface AlternatingSectionProps {
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

const AlternatingSection: React.FC<AlternatingSectionProps> = ({
  tag, title, description, imageSrc, imageAlt, isReversed = false
}) => (
  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
    {/* Text Content Block */}
    <div className={`${isReversed ? 'lg:order-2' : ''}`}>
      <p className="text-[#14B8A6] font-medium mb-4 uppercase tracking-widest text-sm">{tag}</p>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-800">
        {title}
      </h2>
      <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-md">
        {description}
      </p>
      <button className="mt-8 flex items-center gap-2 text-[#14B8A6] font-bold hover:gap-4 transition-all">
        Explore Methodology <ChevronRight className="w-5 h-5" />
      </button>
    </div>
    
    {/* Image Visual Block */}
    <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ${isReversed ? 'lg:order-1' : ''}`}>
      <Image 
        src={imageSrc} 
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
    </div>
  </div>
);

export default function ConsultantPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Head>
        <title>Production Process Inspection | KPRT Quality Intelligence</title>
      </Head>

      {/* SECTION 1: HERO BANNER 
          Focused on the "Unbiased Oversight" scenario for TPI consultancy.
      */}
      <section className="bg-[#0F172A] pt-40 pb-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#14B8A6]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-[#5EEAD4] text-lg font-medium mb-6 lowercase tracking-wide">
            Production Process Inspection
          </p>
          <h1 className="text-white text-5xl md:text-7xl font-bold max-w-4xl leading-[1.1] mb-8">
            Empowering Quality Through <br /> Unbiased Technical Oversight.
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mb-12 leading-relaxed">
            We provide the independent expertise and rigorous auditing standards required 
            to safeguard your supply chain and achieve global compliance excellence.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-[#14B8A6] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0d9488] transition-all flex items-center gap-3 shadow-lg shadow-[#14B8A6]/20">
              <MessageSquare className="w-5 h-5" /> Start the Conversation
            </button>
            <button className="border border-slate-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-all">
              Our Audit Approach
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: ALTERNATING CONTENT BLOCKS */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Block 1: MACE Audit (Image Right) */}
          <AlternatingSection 
            tag="Improve the business"
            title="MACE Audit & Supply Chain Resilience"
            description="Our specialized Manufacturing Assessment and Compliance Excellence (MACE) audits identify hidden gaps in your production workflow, ensuring your facility operates at peak global efficiency."
            imageSrc="https://res.cloudinary.com/dinnmia6e/image/upload/v1778654634/RAJ46_ydfry2.svg"
            imageAlt="MACE Auditing Session"
          />

          {/* Feature Grid connected to Block 1 - As seen in Screenshot 2026-05-13 180715.png */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-slate-100 pb-24 mb-24">
            <div className="flex flex-col gap-4 p-8 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
              <div className="flex items-center gap-4">
                <BarChart3 className="w-10 h-10 text-[#14B8A6]" />
                <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Forcastra++</h3>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed">Advanced predictive modeling for future-proofing your industrial operations and supply chain flow.</p>
            </div>
            <div className="flex flex-col gap-4 p-8 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
              <div className="flex items-center gap-4">
                <BrainCircuit className="w-10 h-10 text-[#14B8A6]" />
                <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Causal Intelligence++</h3>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed">Identifying the root causes behind process variances using AI-driven logic and deep technical auditing.</p>
            </div>
          </div>

          {/* Block 2: VDA 6.3 (Image Left) */}
          <AlternatingSection 
            tag="Operational Excellence"
            title="VDA 6.3 Process Auditing"
            description="As a third-party leader, we conduct rigorous VDA 6.3 audits to evaluate the effectiveness of your manufacturing processes, aligning your output with German automotive excellence."
            imageSrc="https://res.cloudinary.com/dinnmia6e/image/upload/v1777530237/Raj36_cpwsca.svg"
            imageAlt="VDA 6.3 Quality Control Station"
            isReversed={true}
          />

          {/* Block 3: IATF 16949 (Image Right) */}
          <AlternatingSection 
            tag="Scale & Growth"
            title="IATF 16949:2016 Certification Support"
            description="We guide your organization through the transition to IATF 16949 standards, integrating automated intelligence into your Quality Management Systems (QMS) for zero-defect production."
            imageSrc="https://res.cloudinary.com/dinnmia6e/image/upload/v1778655547/Raj49_zqdblp.svg"
            imageAlt="IATF Certification Roadmap"
          />

        </div>
      </section>

      
    </div>
  );
}