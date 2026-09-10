import React, { useState } from 'react';
import { TIMELINE_MILESTONES } from '../../data/ajceData';
import { Calendar, Award } from 'lucide-react';

export const InnovationTimeline: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2026');

  const currentMilestone = TIMELINE_MILESTONES.find((m) => m.year === selectedYear) || TIMELINE_MILESTONES[TIMELINE_MILESTONES.length - 1];

  return (
    <section
      id="innovation-timeline"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden border-t border-slate-200"
      aria-labelledby="timeline-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-mono uppercase tracking-widest mb-3">
              <Calendar className="w-3.5 h-3.5 text-amber-700" />
              <span>Institutional Evolution</span>
            </div>
            <h2 id="timeline-heading" className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight uppercase">
              25 YEARS OF <span className="text-gradient-amber">INNOVATION.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            From our founding in 2001 by the Catholic Diocese of Kanjirappally to full UGC autonomy, explore the milestones that cemented AJCE’s technological leadership.
          </p>
        </div>

        {/* Horizontal Scrollable Milestones Rail */}
        <div className="mb-12 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex items-center gap-3 sm:gap-4 min-w-[760px] px-2">
            {TIMELINE_MILESTONES.map((m) => {
              const isSelected = m.year === selectedYear;
              return (
                <button
                  key={m.year}
                  onClick={() => setSelectedYear(m.year)}
                  className={`flex flex-col items-start p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 min-w-[130px] sm:min-w-[155px] focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm ${
                    isSelected
                      ? 'bg-amber-500 text-black border-amber-400 shadow-lg shadow-amber-500/20 scale-105 font-bold'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span className={`text-2xl sm:text-3xl font-black font-heading tracking-tight ${isSelected ? 'text-black' : 'text-slate-900'}`}>
                    {m.year}
                  </span>
                  <span className={`text-[10px] font-mono uppercase font-bold tracking-wider mt-1 truncate w-full ${isSelected ? 'text-black/85' : 'text-amber-700'}`}>
                    {m.category}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Milestone Expanded Interactive Stage */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl sm:text-5xl font-black font-heading text-amber-600">
                  {currentMilestone.year}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-slate-100 border border-slate-200 text-slate-700">
                  {currentMilestone.category}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
                {currentMilestone.title}
              </h3>
            </div>

            <div className="px-4 py-2.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-semibold shrink-0 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-600" />
              <span>{currentMilestone.keyMetric}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
                Strategic Landmark
              </h4>
              <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
                {currentMilestone.summary}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentMilestone.details}
              </p>
            </div>

            {/* Visual Context Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-2 font-semibold">
                  Institutional Significance
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Established progressive standards in regional engineering pedagogy and technical ecosystem building.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-2 font-semibold">
                  Present-Day Impact
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Continues to directly benefit incoming students through advanced equipment, grants, and accredited autonomy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
