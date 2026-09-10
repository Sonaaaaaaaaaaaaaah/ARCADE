import React from 'react';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';

interface AdmissionsCTAProps {
  onOpenApply: (programme?: string) => void;
}

export const AdmissionsCTA: React.FC<AdmissionsCTAProps> = ({ onOpenApply }) => {
  const pathways = [
    { name: 'B.Tech', desc: '8 Semesters • KEAM & Management Quota', defaultProg: 'B.Tech Computer Science & Engineering' },
    { name: 'M.Tech', desc: 'Research & Advanced Specializations', defaultProg: 'M.Tech in CS & AI' },
    { name: 'BCA', desc: 'Fast-Track 3-Year Computing Foundation', defaultProg: 'BCA - Bachelor of Computer Applications' },
    { name: 'MCA', desc: 'Enterprise 2-Year Software Master', defaultProg: 'MCA - Master of Computer Applications' },
    { name: 'BBA', desc: 'Technology Management & Venture Skills', defaultProg: 'BBA - Tech Management' },
    { name: 'International / NRI', desc: 'Dedicated OCI & Gulf Student Advisory', defaultProg: 'B.Tech Computer Science & Engineering' },
  ];

  return (
    <section
      id="admissions"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden border-t border-slate-200"
      aria-labelledby="admissions-heading"
    >
      {/* Subtle Warm Glow in background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-400/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Autonomous Admissions 2026-27</span>
        </div>

        {/* Minimal High-Impact Headline */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 id="admissions-heading" className="text-3xl sm:text-5xl md:text-6xl font-black font-heading text-slate-900 tracking-tight uppercase leading-tight">
            YOUR NEXT CHAPTER <span className="text-gradient-amber">STARTS HERE.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-sans max-w-xl mx-auto leading-relaxed">
            Join 3,500+ student engineers, researchers, and venture founders turning ambitious concepts into global impact.
          </p>
        </div>

        {/* 6 Minimalist Pathway Selection Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-left">
          {pathways.map((p) => (
            <button
              key={p.name}
              onClick={() => onOpenApply(p.defaultProg)}
              className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-amber-400 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
            >
              <span className="text-sm font-bold font-heading text-slate-900 group-hover:text-amber-700 block mb-1">
                {p.name}
              </span>
              <span className="text-[11px] text-slate-500 font-mono leading-tight block">
                {p.desc}
              </span>
            </button>
          ))}
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onOpenApply()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-wide shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <span>START YOUR APPLICATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#academics"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-md focus:outline-none focus:ring-2 focus:ring-slate-900"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span>EXPLORE PROGRAMMES</span>
          </a>
        </div>

        {/* Assurance footnote */}
        <div className="pt-2 text-xs font-mono text-slate-500 flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium">
          <span>• KEAM Code: AJC</span>
          <span>• Direct Merit & NRI Seats Available</span>
          <span>• Over ₹2 Cr Annual Scholarships</span>
        </div>
      </div>
    </section>
  );
};
