import React, { useState } from 'react';
import { CAMPUS_ZONES } from '../../data/ajceData';
import {
  BookOpen,
  Wrench,
  Home,
  Radio,
  Trophy,
  Share2,
  Sparkles,
  CheckCircle2,
  MapPin,
  Camera
} from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  LEARN: <BookOpen className="w-4 h-4" />,
  BUILD: <Wrench className="w-4 h-4" />,
  LIVE: <Home className="w-4 h-4" />,
  CREATE: <Radio className="w-4 h-4" />,
  COMPETE: <Trophy className="w-4 h-4" />,
  CONNECT: <Share2 className="w-4 h-4" />
};

const CAMPUS_IMAGES: Record<string, { url: string; fallback: string; caption: string }> = {
  LEARN: {
    url: '/images/campus_aerial.jpg',
    fallback: 'https://www.ajce.in/home/images/Gallery-widget_ajce.jpg',
    caption: 'Central Digital Library & Academic Theatres Complex'
  },
  BUILD: {
    url: '/images/campus_lab.jpg',
    fallback: 'https://www.ajce.in/home/images/Gallery-widget_lab.jpg',
    caption: 'Advanced Heavy Machine Labs & Prototyping FabLab'
  },
  LIVE: {
    url: '/images/campus_canteen.jpg',
    fallback: 'https://www.ajce.in/home/images/Gallery-widge_canteent.jpg',
    caption: 'Modern Multicuisine Dining Hall & Residential Quarters'
  },
  CREATE: {
    url: '/images/campus_bg.jpg',
    fallback: 'https://www.ajce.in/bg.jpg',
    caption: 'Radio 90FM Media Tower & Creative Amphitheatre'
  },
  COMPETE: {
    url: '/images/campus_aerial.jpg',
    fallback: 'https://www.ajce.in/home/images/Gallery-widget_ajce.jpg',
    caption: 'Olympic-Standard Track & Multi-Court Indoor Stadium'
  },
  CONNECT: {
    url: '/images/campus_bg.jpg',
    fallback: 'https://www.ajce.in/bg.jpg',
    caption: '68-Acre Green Campus with 500kW Rooftop Solar Grid'
  }
};

export const CampusExperience: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('LEARN');

  const activeZone = CAMPUS_ZONES.find((z) => z.category === activeCategory) || CAMPUS_ZONES[0];
  const activeImage = CAMPUS_IMAGES[activeCategory] || CAMPUS_IMAGES['LEARN'];

  return (
    <section
      id="campus"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden border-t border-slate-200"
      aria-labelledby="campus-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Ecological High-Range Sanctuary</span>
          </div>

          <h2 id="campus-heading" className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight uppercase">
            ONE CAMPUS. <span className="text-gradient-amber">MANY WORLDS.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-sans mt-3">
            Spread across 68 lush acres in the foothills of the Western Ghats, AJCE integrates high-performance labs, student living, and 24/7 creative ecosystems.
          </p>
        </div>

        {/* Interactive World Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12" role="tablist" aria-label="Campus Experience Worlds">
          {CAMPUS_ZONES.map((zone) => {
            const isCurrent = zone.category === activeCategory;
            return (
              <button
                key={zone.category}
                role="tab"
                aria-selected={isCurrent}
                onClick={() => setActiveCategory(zone.category)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm ${
                  isCurrent
                    ? 'bg-amber-500 text-black border-amber-400 shadow-md scale-105 font-bold'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>{CATEGORY_ICONS[zone.category]}</span>
                <span>{zone.category}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Editorial Visual World Stage */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 sm:p-10 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Editorial Content Info */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300 inline-block mb-3">
                  WORLD OF {activeZone.category}
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
                  {activeZone.title}
                </h3>
                <p className="text-sm font-mono text-amber-700 font-semibold mt-1">
                  {activeZone.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {activeZone.description}
              </p>

              {/* Verified Features Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {activeZone.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Atmosphere Pill */}
              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1 font-semibold">
                  Sensory Atmosphere
                </span>
                <span className="text-xs font-mono text-slate-700 italic">
                  "{activeZone.atmosphere}"
                </span>
              </div>
            </div>

            {/* Real College Photography Container */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md group/img">
                {/* Real College Photo */}
                <img
                  src={activeImage.url}
                  alt={activeImage.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = activeImage.fallback;
                  }}
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-slate-200 backdrop-blur-md shadow-sm">
                  <Camera className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-800 font-bold">
                    AJCE Campus Gallery
                  </span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="p-3 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md shadow-lg flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-amber-700 block uppercase font-bold">
                        {activeZone.category} INFRASTRUCTURE
                      </span>
                      <span className="text-xs font-bold text-slate-900 block">
                        {activeImage.caption}
                      </span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-slate-500 font-semibold">
                      <MapPin className="w-3 h-3 text-amber-600" />
                      <span>Kanjirappally</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sector Stats Cluster */}
              <div className="grid grid-cols-3 gap-3">
                {activeZone.stats.map((st, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-center"
                  >
                    <span className="text-[9px] font-mono text-slate-500 block uppercase font-semibold">Key Spec</span>
                    <span className="text-xs font-bold font-heading text-slate-900 truncate block">{st}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
