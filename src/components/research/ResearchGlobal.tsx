import React from 'react';
import { RESEARCH_WINGS } from '../../data/ajceData';
import {
  Globe2,
  Award,
  Building2
} from 'lucide-react';

export const ResearchGlobal: React.FC = () => {
  const globalPartners = [
    { name: 'European Union Erasmus+ Consortia', region: 'Germany & Sweden', type: 'Sponsored Research Fellowship' },
    { name: 'Deakin & Melbourne Academic Articulation', region: 'Australia', type: 'Dual-Degree Credit Transfer' },
    { name: 'NVIDIA Deep Learning Institute', region: 'USA / Global', type: 'Curriculum & Compute CoE' },
    { name: 'Bosch Automotive Training Hub', region: 'Germany', type: 'Automotive Mechatronics' },
    { name: 'NeST Digital Center of Excellence', region: 'Global', type: 'Aerospace & Embedded Systems' },
    { name: 'Tata Consultancy Services (TCS)', region: 'India / Global', type: 'Cloud & AI Talent Alliance' }
  ];

  return (
    <section
      id="research"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden border-t border-slate-200"
      aria-labelledby="research-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-3">
              <Globe2 className="w-3.5 h-3.5 text-amber-600" />
              <span>Global Frontiers & Discovery</span>
            </div>
            <h2 id="research-heading" className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight uppercase">
              RESEARCH + <span className="text-gradient-amber">GLOBAL IMPACT.</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            Over ₹12+ Crores in government & industry research funding, 50+ patents filed, and active dual-degree bridges connecting Kerala to top scientific institutions worldwide.
          </p>
        </div>

        {/* 4 Research Centers of Excellence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {RESEARCH_WINGS.map((wing) => (
            <div
              key={wing.id}
              className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200">
                    {wing.leadDomain}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-700 font-bold flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    {wing.patents}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                  {wing.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {wing.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Major Sponsor:</span>
                  <span className="text-slate-800 font-semibold">{wing.fundedBy}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {wing.collaborations.map((collab, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] text-slate-600 shadow-2xs"
                    >
                      {collab}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Network Visual Section */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Global Details */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold block mb-1">
                  International Academic Footprint
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
                  Border-Free Engineering Alliances
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                AJCE students participate in semester-abroad fellowships, international capstone collaborations, and joint research publication tracks. Our graduates are admitted directly into premier doctoral institutions across North America, Europe, and Asia-Pacific.
              </p>

              <div className="space-y-3 pt-2">
                {globalPartners.slice(0, 3).map((p, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <Building2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-slate-900 block">{p.name}</strong>
                      <span className="text-slate-500 font-mono text-[11px]">{p.region} • {p.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Subtle Abstract World Mesh Visualization */}
            <div className="lg:col-span-6 flex items-center justify-center p-4">
              <div className="relative w-full max-w-sm aspect-square rounded-full border border-slate-200 flex items-center justify-center bg-white p-6 shadow-md">
                {/* Orbital circles */}
                <div className="absolute inset-0 rounded-full border border-dashed border-amber-400/50 animate-spin" style={{ animationDuration: '60s' }} />
                <div className="absolute inset-10 rounded-full border border-slate-200" />
                <div className="absolute inset-20 rounded-full border border-dashed border-slate-300" />

                {/* Center node: AJCE */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-amber-500 text-black flex flex-col items-center justify-center font-heading font-black shadow-lg shadow-amber-500/30">
                  <span className="text-base">AJCE</span>
                  <span className="text-[8px] font-mono tracking-widest font-bold">KERALA</span>
                </div>

                {/* Surrounding Node Badges */}
                <span className="absolute top-4 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-mono text-slate-700 shadow-sm font-semibold">
                  GERMANY
                </span>
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-mono text-slate-700 shadow-sm font-semibold">
                  AUSTRALIA
                </span>
                <span className="absolute left-2 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-mono text-slate-700 shadow-sm font-semibold">
                  SWEDEN
                </span>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-mono text-slate-700 shadow-sm font-semibold">
                  USA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
