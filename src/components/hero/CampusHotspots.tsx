import React, { useState } from 'react';
import { HERO_HOTSPOTS } from '../../data/ajceData';
import { Hotspot } from '../../types';
import { ArrowRight, X, MapPin } from 'lucide-react';

export const CampusHotspots: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] lg:aspect-[2.5/1] rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/60 group">
      {/* Real High-Resolution Campus Aerial Photograph */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02]"
        style={{
          backgroundImage: "url('/images/campus_bg.jpg'), url('https://www.ajce.in/bg.jpg')"
        }}
      />

      {/* Light Clean Gradient Overlays for High Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-slate-900/60 backdrop-blur-[0.5px]" />

      {/* Architectural Location Watermark */}
      <div className="absolute top-4 left-6 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-slate-200 backdrop-blur-md shadow-sm">
        <MapPin className="w-3.5 h-3.5 text-amber-600" />
        <span className="text-[11px] font-mono tracking-wider text-slate-800 uppercase font-semibold">
          68-Acre Green Campus • Kanjirappally
        </span>
      </div>

      <div className="absolute bottom-4 left-6 z-10 hidden sm:flex items-center gap-2 text-[10px] font-mono text-white/90 drop-shadow">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Live Interactive Ecosystem • Click pins to inspect</span>
      </div>

      {/* Hotspots Interactive Pins Layer */}
      <div className="absolute inset-0 p-4 sm:p-8 z-20">
        {HERO_HOTSPOTS.map((hotspot) => {
          const isSelected = activeHotspot?.id === hotspot.id;

          return (
            <div
              key={hotspot.id}
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              {/* Hotspot Pulse Trigger Button */}
              <button
                type="button"
                onClick={() => setActiveHotspot(isSelected ? null : hotspot)}
                onMouseEnter={() => setActiveHotspot(hotspot)}
                aria-expanded={isSelected}
                aria-label={`Explore ${hotspot.category} node: ${hotspot.name}`}
                className="group/btn relative flex items-center gap-2 focus:outline-none"
              >
                {/* Ping rings */}
                <span className="relative flex h-8 w-8 items-center justify-center">
                  <span className={`absolute inline-flex h-full w-full rounded-full opacity-80 animate-ping ${isSelected ? 'bg-amber-400' : 'bg-amber-500/60'}`} />
                  <span className={`relative inline-flex items-center justify-center rounded-full h-4 w-4 border transition-all ${
                    isSelected
                      ? 'bg-amber-500 border-white scale-125 shadow-lg shadow-amber-500/80'
                      : 'bg-white border-amber-500 group-hover/btn:scale-125 group-hover/btn:bg-amber-500'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 group-hover/btn:bg-black" />
                  </span>
                </span>

                {/* Hotspot Category Label Chip */}
                <span className={`hidden sm:inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase border backdrop-blur-md transition-all shadow-sm ${
                  isSelected
                    ? 'bg-amber-500 text-black border-amber-400 shadow-md'
                    : 'bg-white/95 text-slate-800 border-slate-200 group-hover/btn:border-amber-500 group-hover/btn:text-amber-700'
                }`}>
                  {hotspot.category}
                </span>
              </button>

              {/* Detail Popover Card */}
              {isSelected && (
                <div
                  role="tooltip"
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 sm:w-80 p-4 rounded-2xl bg-white/98 border border-slate-200 backdrop-blur-xl shadow-2xl z-30 animate-in fade-in zoom-in-95 duration-150 text-slate-900"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-700 font-bold">
                      {hotspot.category} SECTOR
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveHotspot(null);
                      }}
                      className="text-slate-400 hover:text-slate-700 p-0.5"
                      aria-label="Close details"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight mb-1">
                    {hotspot.title}
                  </h4>

                  <p className="text-[11px] text-slate-600 leading-relaxed mb-3">
                    {hotspot.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-amber-700 font-bold">{hotspot.stat}</span>
                    <a
                      href={`#${hotspot.linkSection}`}
                      onClick={() => setActiveHotspot(null)}
                      className="inline-flex items-center gap-1 text-slate-600 hover:text-amber-600 transition-colors font-semibold"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 text-amber-600" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
