import React, { useState } from 'react';
import { CAMPUS_PULSE_DATA } from '../../data/campusPulseData';
import {
  Clock,
  ArrowRight,
  Lightbulb,
  FlaskConical,
  Users,
  Globe2,
  Briefcase
} from 'lucide-react';

const TAB_ICONS = {
  INNOVATION: <Lightbulb className="w-3.5 h-3.5" />,
  RESEARCH: <FlaskConical className="w-3.5 h-3.5" />,
  'STUDENT LIFE': <Users className="w-3.5 h-3.5" />,
  GLOBAL: <Globe2 className="w-3.5 h-3.5" />,
  CAREERS: <Briefcase className="w-3.5 h-3.5" />
};

export const CampusPulse: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'INNOVATION' | 'RESEARCH' | 'STUDENT LIFE' | 'GLOBAL' | 'CAREERS'>('INNOVATION');

  const items = CAMPUS_PULSE_DATA[activeTab];

  return (
    <section
      id="pulse"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden border-t border-slate-200"
      aria-labelledby="pulse-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-mono uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Real-Time Institutional Dispatch</span>
            </div>
            <h2 id="pulse-heading" className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight uppercase">
              CAMPUS <span className="text-gradient-amber">PULSE.</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            AJCE is alive with constant technical breakthroughs, venture seed rounds, and student athletic triumphs. Explore this week's highlights.
          </p>
        </div>

        {/* Dynamic Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10" role="tablist" aria-label="Campus Pulse Categories">
          {(['INNOVATION', 'RESEARCH', 'STUDENT LIFE', 'GLOBAL', 'CAREERS'] as const).map((tab) => {
            const isSelected = activeTab === tab;
            return (
              <button
                key={tab}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm ${
                  isSelected
                    ? 'bg-amber-500 text-black border-amber-400 font-bold'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>{TAB_ICONS[tab]}</span>
                <span>{tab}</span>
              </button>
            );
          })}
        </div>

        {/* Pulse Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <article
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 group-hover:text-amber-700 transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-4">
                  {item.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{item.date}</span>
                <span className="text-amber-700 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
