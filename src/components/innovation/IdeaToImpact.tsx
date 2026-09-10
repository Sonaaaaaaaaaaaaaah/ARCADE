import React, { useState } from 'react';
import { IDEA_TO_IMPACT_JOURNEY } from '../../data/ajceData';
import {
  Lightbulb,
  Cpu,
  Layers,
  Users2,
  Rocket,
  Globe2,
  ArrowRight,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

const STEP_ICONS = [
  <Lightbulb className="w-5 h-5" />,
  <Cpu className="w-5 h-5" />,
  <Layers className="w-5 h-5" />,
  <Users2 className="w-5 h-5" />,
  <Rocket className="w-5 h-5" />,
  <Globe2 className="w-5 h-5" />
];

export const IdeaToImpact: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStep = IDEA_TO_IMPACT_JOURNEY[activeStepIndex];

  return (
    <section
      id="impact-journey"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden border-t border-slate-200"
      aria-labelledby="impact-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-4">
            <Rocket className="w-3.5 h-3.5 text-amber-600" />
            <span>The Innovation Engine</span>
          </div>

          <h2 id="impact-heading" className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight uppercase">
            FROM IDEA TO <span className="text-gradient-amber">IMPACT.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-sans mt-3">
            At AJCE, an idea is not just homework. It is a potential enterprise. Follow the 6-stage lifecycle through which undergraduate thoughts become deployable products.
          </p>
        </div>

        {/* 6-Stage Interactive Horizontal Pipeline Track */}
        <div className="mb-10 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex items-center justify-between min-w-[700px] sm:min-w-[850px] relative px-4">
            {/* Background connecting rail */}
            <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 bg-slate-200 rounded-full z-0" />
            
            {/* Filled progress rail */}
            <div
              className="absolute top-1/2 left-8 -translate-y-1/2 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transition-all duration-500 z-0"
              style={{ width: `${(activeStepIndex / (IDEA_TO_IMPACT_JOURNEY.length - 1)) * 92}%` }}
            />

            {IDEA_TO_IMPACT_JOURNEY.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              const isPassed = idx < activeStepIndex;

              return (
                <button
                  key={step.label}
                  onClick={() => setActiveStepIndex(idx)}
                  className="group relative z-10 flex flex-col items-center focus:outline-none"
                  aria-label={`Go to Stage ${step.stepNumber}: ${step.label}`}
                >
                  {/* Circle Node */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-heading font-bold text-sm transition-all duration-300 border ${
                      isActive
                        ? 'bg-amber-500 text-black border-amber-400 scale-110 shadow-lg shadow-amber-500/30 font-bold'
                        : isPassed
                        ? 'bg-amber-100 text-amber-800 border-amber-300'
                        : 'bg-white text-slate-500 border-slate-300 group-hover:border-slate-400 group-hover:text-slate-900 shadow-sm'
                    }`}
                  >
                    {isPassed ? <CheckCircle2 className="w-5 h-5 text-amber-700" /> : STEP_ICONS[idx]}
                  </div>

                  {/* Node Label below */}
                  <span
                    className={`mt-2.5 text-xs font-mono font-bold tracking-wider uppercase transition-colors ${
                      isActive ? 'text-amber-700 font-extrabold' : 'text-slate-600 group-hover:text-slate-900'
                    }`}
                  >
                    {step.label}
                  </span>

                  <span className="text-[10px] text-slate-400 font-mono">
                    Phase 0{step.stepNumber}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Blueprint Display */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 sm:p-10 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b border-slate-200">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-amber-100 text-amber-800 border border-amber-300">
                  Stage 0{activeStep.stepNumber} • {activeStep.label}
                </span>
                <span className="text-xs font-mono text-slate-500 font-semibold">
                  {activeStep.phase}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
                {activeStep.tagline}
              </h3>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                aria-label="Previous innovation stage"
                className="p-3 rounded-xl border border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none transition-all shadow-sm"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                disabled={activeStepIndex === IDEA_TO_IMPACT_JOURNEY.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(IDEA_TO_IMPACT_JOURNEY.length - 1, prev + 1))}
                aria-label="Next innovation stage"
                className="p-3 rounded-xl border border-amber-400 bg-amber-500 hover:bg-amber-400 text-black disabled:opacity-40 disabled:pointer-events-none transition-all shadow-md font-bold"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body Content Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
                How It Happens Inside AJCE
              </h4>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {activeStep.description}
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-700 block mb-1.5 font-bold">
                  Institutional Resource Wing
                </span>
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-mono shadow-sm">
                  <Cpu className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{activeStep.ajceRole}</span>
                </div>
              </div>
            </div>

            {/* Case Study Callout Box */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    Verified Campus Case Study
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 font-medium">Student Innovation</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{activeStep.realExample}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Startups Valley Incubation Ecosystem</span>
                <a href="#innovation-timeline" className="text-amber-700 hover:text-amber-800 font-semibold flex items-center gap-1">
                  <span>View Timeline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
