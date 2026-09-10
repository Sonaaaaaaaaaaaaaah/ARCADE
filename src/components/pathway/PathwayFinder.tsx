import React, { useState } from 'react';
import { AJCE_PATHWAYS } from '../../data/pathwaysData';
import {
  Cpu,
  Radio,
  Car,
  Leaf,
  FlaskConical,
  Rocket,
  Shield,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const ICONS_MAP: Record<string, React.ReactNode> = {
  'ai-software': <Cpu className="w-4 h-4" />,
  'electronics-hardware': <Radio className="w-4 h-4" />,
  'mobility': <Car className="w-4 h-4" />,
  'sustainability': <Leaf className="w-4 h-4" />,
  'research': <FlaskConical className="w-4 h-4" />,
  'startup': <Rocket className="w-4 h-4" />,
  'cyber-security': <Shield className="w-4 h-4" />
};

export const PathwayFinder: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('ai-software');

  const activePathway = AJCE_PATHWAYS.find((p) => p.id === selectedId) || AJCE_PATHWAYS[0];

  return (
    <section
      id="pathways"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden border-t border-slate-200"
      aria-labelledby="pathway-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Pathway Finder</span>
          </div>

          <h2 id="pathway-heading" className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight uppercase">
            WHAT DO YOU WANT TO <span className="text-gradient-amber">BUILD?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-sans mt-3">
            Your interests can shape your AJCE journey. Choose a domain to generate your personalized engineering roadmap.
          </p>
        </div>

        {/* Choice Pills Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12" role="tablist" aria-label="Engineering Domains">
          {AJCE_PATHWAYS.map((pathway) => {
            const isCurrent = pathway.id === selectedId;
            return (
              <button
                key={pathway.id}
                role="tab"
                id={`tab-${pathway.id}`}
                aria-selected={isCurrent}
                aria-controls={`panel-${pathway.id}`}
                onClick={() => setSelectedId(pathway.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  isCurrent
                    ? 'bg-amber-500 text-black border-amber-400 shadow-lg shadow-amber-500/25 scale-105 font-bold'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className={isCurrent ? 'text-black' : 'text-amber-600'}>
                  {ICONS_MAP[pathway.id]}
                </span>
                <span>{pathway.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Pathway Blueprint Experience Card */}
        <div
          role="tabpanel"
          id={`panel-${activePathway.id}`}
          aria-labelledby={`tab-${activePathway.id}`}
          className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 sm:p-10 shadow-xl shadow-slate-200/50 transition-all duration-300"
        >
          {/* Pathway Header Banner */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300">
                  {activePathway.category}
                </span>
                <span className="text-xs font-mono text-slate-600">
                  Core Track: <strong className="text-slate-900">{activePathway.coreDegree}</strong>
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
                {activePathway.tagline}
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                {activePathway.summary}
              </p>
            </div>

            {/* Target Outcomes */}
            <div className="lg:text-right bg-white p-4 rounded-2xl border border-slate-200 shrink-0 shadow-sm">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2 font-semibold">
                Key Career & Venture Destinations
              </span>
              <div className="flex flex-wrap lg:justify-end gap-1.5">
                {activePathway.outcomes.map((outcome, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-xs text-slate-800 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3 text-amber-600" />
                    {outcome}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sequential 5-Stage Visual Pathway Graph */}
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {activePathway.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {/* Step Stage Pill */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono font-bold text-amber-700 uppercase tracking-wider">
                        {step.stage}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 truncate max-w-[110px]">
                        {step.badge}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 mb-2 leading-snug group-hover:text-amber-700 transition-colors">
                      {step.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Highlight Footer */}
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-600 font-mono">
                    <span className="text-amber-700 block font-bold text-[10px] uppercase">
                      AJCE Edge:
                    </span>
                    <span className="line-clamp-2 text-slate-700">{step.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer for this Pathway */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600 font-mono">
              Ready to embark on this journey? <span className="text-slate-900 font-bold">Admissions open for 2026-27 cohort.</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#academics"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 transition-all shadow-sm"
              >
                <span>View Full Curriculum</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
              </a>
              <a
                href="#admissions"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-full bg-amber-500 hover:bg-amber-400 text-black shadow-md shadow-amber-500/20 transition-all"
              >
                <span>Apply for {activePathway.coreDegree.split('/')[0].trim()}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
