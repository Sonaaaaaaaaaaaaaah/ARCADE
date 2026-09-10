import React, { useState, useEffect, useRef } from 'react';
import { AJCE_STATS } from '../../data/ajceData';
import {
  Award,
  GraduationCap,
  Users,
  BookOpen,
  Rocket,
  Cpu,
  Trees,
  Layers,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';

const ICON_COMPONENTS: Record<string, React.ReactNode> = {
  Award: <Award className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  Rocket: <Rocket className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Trees: <Trees className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />
};

export const GlanceSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(AJCE_STATS.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800; // ms
          const startTime = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts(
              AJCE_STATS.map((stat) => Math.floor(easeOut * stat.value))
            );

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCounts(AJCE_STATS.map((stat) => stat.value));
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="glance"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden border-t border-slate-200"
      aria-labelledby="glance-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-mono uppercase tracking-widest mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              <span>Verified Institutional Scale</span>
            </div>
            <h2 id="glance-heading" className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight uppercase">
              AJCE AT A <span className="text-gradient-amber">GLANCE.</span>
            </h2>
          </div>

          <div className="max-w-md text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
            A quarter-century of relentless engineering rigor, high-range sustainable infrastructure, and an autonomous incubation ecosystem recognized across India.
          </div>
        </div>

        {/* Dynamic Non-Boring Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AJCE_STATS.map((stat, idx) => {
            const isMilestone = idx === 0 || idx === 4; // Highlight 25 Years & 95+ Startups
            return (
              <div
                key={stat.label}
                className={`group relative p-6 sm:p-7 rounded-3xl border transition-all duration-300 transform hover:-translate-y-1 ${
                  isMilestone
                    ? 'bg-gradient-to-br from-amber-500/10 via-amber-50/50 to-white border-amber-300 shadow-lg shadow-amber-500/10'
                    : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Top icon and pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-2xl border ${
                    isMilestone
                      ? 'bg-amber-100 border-amber-300 text-amber-800'
                      : 'bg-slate-100 border-slate-200 text-slate-700 group-hover:text-amber-700 group-hover:border-amber-300 group-hover:bg-amber-50'
                  }`}>
                    {ICON_COMPONENTS[stat.iconName]}
                  </div>

                  <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Animated Metric Number */}
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl sm:text-5xl font-black font-heading tracking-tight text-slate-900">
                    {hasAnimated ? counts[idx].toLocaleString() : 0}
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold font-heading text-amber-600">
                    {stat.suffix}
                  </span>
                </div>

                {/* Metric Label */}
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-amber-700 transition-colors">
                  {stat.label}
                </h3>

                {/* Subtext */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Autonomy & Quality Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold block">
                Autonomous Academic Freedom
              </span>
              <span className="text-xs text-slate-600">
                Crafting curricula in real-time with industry leaders, eliminating academic lag.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-600 font-semibold">
            <span>UGC Autonomous</span>
            <span>•</span>
            <span>NAAC A+ Grade</span>
            <span>•</span>
            <span>NBA Accredited</span>
          </div>
        </div>
      </div>
    </section>
  );
};
