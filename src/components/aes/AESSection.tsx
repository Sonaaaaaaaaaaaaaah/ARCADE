import React, { useState } from 'react';
import { AES_MODULES } from '../../data/ajceData';
import {
  Server,
  Cloud,
  FileCheck2,
  BookOpenCheck,
  Smartphone,
  Cpu,
  Activity,
  CheckCircle2,
  Code2,
  Sparkles
} from 'lucide-react';

const MODULE_ICONS: Record<string, React.ReactNode> = {
  'campus-mgmt': <Server className="w-5 h-5" />,
  'cloud-storage': <Cloud className="w-5 h-5" />,
  'online-testing': <FileCheck2 className="w-5 h-5" />,
  'e-learning': <BookOpenCheck className="w-5 h-5" />,
  'mobile-apps': <Smartphone className="w-5 h-5" />,
  'automation': <Cpu className="w-5 h-5" />
};

export const AESSection: React.FC = () => {
  const [activeModuleId, setActiveModuleId] = useState<string>('campus-mgmt');

  const currentModule = AES_MODULES.find((m) => m.id === activeModuleId) || AES_MODULES[0];

  return (
    <section
      id="aes"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden border-t border-slate-200"
      aria-labelledby="aes-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-4">
            <Code2 className="w-3.5 h-3.5 text-amber-600" />
            <span>In-House Software Engineering</span>
          </div>

          <h2 id="aes-heading" className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight uppercase">
            BUILT HERE. <span className="text-gradient-amber">USED HERE.</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-800 font-sans mt-3 font-semibold">
            AJCE doesn't only teach technology. It builds technology for itself.
          </p>

          <p className="text-xs sm:text-sm text-slate-600 font-mono mt-2 max-w-2xl mx-auto">
            Introducing Academic Enterprise Solutions (AES) — an indigenously engineered campus enterprise operating system powering 100% of AJCE's daily academic, administrative, and research operations.
          </p>
        </div>

        {/* Interactive AES System Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 6 Interactive Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AES_MODULES.map((module) => {
              const isActive = module.id === activeModuleId;
              return (
                <button
                  key={module.id}
                  onClick={() => setActiveModuleId(module.id)}
                  className={`group p-5 rounded-2xl border text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    isActive
                      ? 'bg-amber-50/80 border-amber-400 shadow-md scale-[1.02]'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 hover:border-slate-300'
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl border ${
                      isActive
                        ? 'bg-amber-500 text-black border-amber-400 shadow-sm'
                        : 'bg-white text-slate-600 border-slate-200 group-hover:text-amber-700'
                    }`}>
                      {MODULE_ICONS[module.id]}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 font-semibold">
                      {module.tag}
                    </span>
                  </div>

                  <h3 className={`text-sm font-bold tracking-tight mb-1.5 transition-colors ${
                    isActive ? 'text-slate-900' : 'text-slate-800 group-hover:text-amber-700'
                  }`}>
                    {module.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {module.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-500">Live Metric:</span>
                    <span className="text-amber-700 font-bold truncate max-w-[170px]">
                      {module.systemMetric}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Simulated AES Live Telemetry Console */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-800 bg-[#0F172A] p-6 shadow-2xl relative text-white">
            {/* Terminal Window Chrome */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 text-[11px] text-slate-300 font-medium">aes-core-node-01 • v5.4.2</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-semibold">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>ONLINE 24/7</span>
              </div>
            </div>

            {/* Active Module Details */}
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                  ACTIVE SUBSYSTEM INSPECTOR
                </span>
                <h4 className="text-lg font-bold font-heading text-white mt-1">
                  {currentModule.title}
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {currentModule.description}
                </p>
              </div>

              {/* Module Feature Checklist */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                  Core Enterprise Capabilities
                </span>
                {currentModule.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stack Spec & Live Metric */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Architecture:</span>
                  <span className="text-slate-200">{currentModule.techStack}</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Throughput:</span>
                  <span className="text-emerald-400 font-semibold">{currentModule.systemMetric}</span>
                </div>
              </div>

              {/* Student Software Engineering Credit */}
              <div className="p-4 rounded-xl bg-amber-500/15 border border-amber-500/30 text-xs text-slate-200 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300 block font-heading font-bold">The Student Developer Pipeline</strong>
                  <span className="text-[11px] text-slate-300">
                    Students contribute code, security audits, and UI components directly into AES through campus co-ops, graduating with production commits on a system serving thousands.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
