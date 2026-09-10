import React, { useRef } from 'react';
import { STUDENT_CLUBS } from '../../data/ajceData';
import {
  Users,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Trophy
} from 'lucide-react';

export const StudentLifeCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="student-life"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden border-t border-slate-200"
      aria-labelledby="student-life-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-mono uppercase tracking-widest mb-3">
              <Users className="w-3.5 h-3.5 text-amber-700" />
              <span>Vibrant Campus Guilds</span>
            </div>
            <h2 id="student-life-heading" className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight uppercase">
              STUDENT <span className="text-gradient-amber">LIFE.</span>
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left through student clubs"
              className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right through student clubs"
              className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Horizontal Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {STUDENT_CLUBS.map((club) => (
            <div
              key={club.id}
              className="snap-start shrink-0 w-[310px] sm:w-[380px] p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md group"
            >
              <div>
                {/* Header tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
                    {club.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 font-semibold">
                    {club.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-amber-700 transition-colors mb-1.5">
                  {club.name}
                </h3>

                <p className="text-xs font-mono text-amber-700 font-semibold mb-3">
                  {club.lead}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {club.description}
                </p>
              </div>

              {/* Achievements Checklist */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1 font-semibold">
                  Key Achievements & Activities
                </span>
                {club.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <Trophy className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="text-[11px] font-medium">{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Bonus Festival Card: Azure & Nakshatra */}
          <div className="snap-start shrink-0 w-[310px] sm:w-[380px] p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-amber-500/10 via-amber-50 to-white border border-amber-300 transition-all duration-300 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500 text-black">
                  Annual Techfest
                </span>
                <span className="text-[11px] font-mono text-slate-600 font-semibold">National Stage</span>
              </div>

              <h3 className="text-xl font-bold font-heading text-slate-900 mb-1.5">
                Azure & Nakshatra
              </h3>

              <p className="text-xs font-mono text-amber-800 font-bold mb-3">
                Kerala's Premier Technical & Cultural Conclaves
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                48-hour national hackathons, robotic combat arenas, pro-nights, e-sports battles, and multi-tier innovation expos attracting over 5,000 students across India.
              </p>
            </div>

            <div className="pt-4 border-t border-amber-200 text-xs font-mono text-amber-800 font-bold flex items-center justify-between">
              <span>Over ₹10 Lakhs in Annual Prizes</span>
              <Sparkles className="w-4 h-4 text-amber-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
