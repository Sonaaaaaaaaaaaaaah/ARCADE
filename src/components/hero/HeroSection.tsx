import React from 'react';
import { CampusHotspots } from './CampusHotspots';
import { ArrowRight, Compass, ChevronDown, Award } from 'lucide-react';

interface HeroSectionProps {
  onOpenApply: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenApply }) => {
  return (
    <section
      className="relative min-h-[96vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#FFFFFF]"
      aria-label="Hero Introduction"
    >
      {/* Aesthetic High-Resolution Campus Atmosphere Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10 pointer-events-none filter saturate-150"
        style={{
          backgroundImage: "url('/images/campus_bg.jpg'), url('https://www.ajce.in/bg.jpg')"
        }}
      />
      
      {/* Luminous Warm Light Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-amber-400/15 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10">
        
        {/* Top Autonomous Accreditations Pill */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-amber-300/80 text-amber-800 text-xs sm:text-sm font-mono tracking-widest uppercase font-bold shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>AUTONOMOUS INSTITUTION</span>
            <span className="text-amber-400">•</span>
            <span>NAAC 'A+' GRADE</span>
            <span className="text-amber-400 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-slate-600">ESTD. 2001</span>
          </div>
        </div>

        {/* Hero Title Container with Big Watermark Logo Directly Behind the Name */}
        <div className="relative text-center max-w-5xl mx-auto py-6 sm:py-10 flex flex-col items-center justify-center">
          {/* Big AJCE Logo Placed Directly Behind The College Name */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-visible">
            <img
              src="/images/ajceJubileeLogo.png"
              alt=""
              aria-hidden="true"
              className="h-72 sm:h-[380px] md:h-[500px] lg:h-[600px] w-auto object-contain opacity-30 select-none transition-all transform scale-125"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://www.ajce.in/ajceJubileeLogo.png';
              }}
            />
          </div>

          {/* Foreground College Name Typography Layer */}
          <div className="relative z-10 space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading text-slate-900 tracking-tight uppercase leading-[1.05] drop-shadow-sm">
              AMAL JYOTHI <br className="hidden sm:inline" />
              <span className="text-gradient-amber">COLLEGE OF ENGINEERING</span>
              <span className="block text-xl sm:text-3xl md:text-4xl font-extrabold text-amber-700 tracking-widest mt-1 font-mono">
                [ AUTONOMOUS ]
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-slate-700 font-sans font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
              Engineering education that doesn't stop at the classroom.
            </p>

            <p className="text-xs sm:text-sm text-amber-800 font-mono tracking-wider max-w-lg mx-auto uppercase font-bold">
              25 years of engineering, innovation and impact.
            </p>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 sm:mt-8">
          <a
            href="#glance"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            <span>Explore AJCE</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>

          <a
            href="#pathways"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-900 hover:text-amber-700 border border-slate-300 font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <Compass className="w-4 h-4 text-amber-600" aria-hidden="true" />
            <span>Find Your Path</span>
          </a>
        </div>

        {/* Interactive Campus Hotspot Visual Experience */}
        <div className="mt-12 sm:mt-16 w-full max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-3 px-2">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-900 uppercase tracking-wider font-bold">Interactive Campus Visual Topography</span>
              <span className="text-slate-500 hidden sm:inline">— Click hotspot pins to explore facilities</span>
            </div>
            <span className="text-[11px] font-mono text-amber-700 font-bold hidden sm:inline">6 Core Sectors</span>
          </div>

          <CampusHotspots />
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="flex items-center justify-center pt-8 relative z-10">
        <a
          href="#pathways"
          aria-label="Scroll down to pathway finder"
          className="flex flex-col items-center text-slate-500 hover:text-amber-600 transition-colors group"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest mb-1 group-hover:text-amber-600">Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-slate-400 group-hover:text-amber-600" />
        </a>
      </div>
    </section>
  );
};
