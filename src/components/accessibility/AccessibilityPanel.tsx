import React, { useState, useEffect, useRef } from 'react';
import { useAccessibility } from '../../context/AccessibilityContext';
import {
  Type,
  SunMoon,
  Move,
  BookOpen,
  MousePointerClick,
  Volume2,
  VolumeX,
  RotateCcw,
  X,
  Check,
  Sliders
} from 'lucide-react';

export const AccessibilityPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    settings,
    setTextSize,
    setContrast,
    setMotion,
    toggleReadingMode,
    toggleDyslexiaFont,
    toggleHighlightLinks,
    toggleLargeTargets,
    toggleKeyboardMode,
    toggleSpeech,
    resetAll,
  } = useAccessibility();

  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Trap focus or focus first element when opened
  useEffect(() => {
    if (isOpen) {
      panelRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Floating Trigger Button: AJCE ACCESS */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          ref={triggerRef}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="a11y-control-panel"
          aria-label="Open AJCE Accessibility Controls"
          className="group relative flex items-center gap-3 px-4 py-3 bg-white hover:bg-slate-50 border border-amber-400 rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        >
          {/* Animated glow halo */}
          <span className="absolute inset-0 rounded-full bg-amber-400/20 blur-sm group-hover:bg-amber-400/30 transition-all" />
          
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-black font-bold shadow-xs">
            <Sliders className="w-4 h-4 text-black" aria-hidden="true" />
          </div>

          <div className="relative flex flex-col items-start pr-1">
            <span className="text-xs font-mono tracking-widest text-amber-700 uppercase font-bold">
              AJCE ACCESS
            </span>
            <span className="text-[10px] text-slate-500 font-medium">
              {settings.contrast === 'high' || settings.textSize !== 'normal' || settings.readingMode ? 'Custom active' : 'Accessibility suite'}
            </span>
          </div>

          {/* Active status pip if non-defaults */}
          {(settings.contrast === 'high' || settings.textSize !== 'normal' || settings.readingMode || settings.dyslexiaFont || settings.highlightLinks || settings.isSpeaking) && (
            <span className="relative flex h-2.5 w-2.5 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-600"></span>
            </span>
          )}
        </button>
      </div>

      {/* Accessibility Control Panel Modal / Flyout */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="a11y-title"
          id="a11y-control-panel"
          ref={panelRef}
          tabIndex={-1}
          className="fixed inset-y-0 right-0 z-[60] w-full max-w-md bg-white border-l border-slate-200 shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-right duration-300 focus:outline-none text-slate-900"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 bg-white/95 border-b border-slate-200 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-amber-100 border border-amber-300 text-amber-800">
                <Sliders className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h2 id="a11y-title" className="text-lg font-bold text-slate-900 tracking-wide font-heading">
                  AJCE Access Engine
                </h2>
                <p className="text-xs text-slate-500 font-medium">WCAG 2.1 AA Compliant Assistive Suite</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={resetAll}
                title="Reset all settings to default"
                className="p-2 text-xs text-slate-500 hover:text-amber-700 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
                <span className="sr-only">Reset Settings</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <X className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">Close Accessibility Panel</span>
              </button>
            </div>
          </div>

          {/* Body Options */}
          <div className="p-6 space-y-7 text-sm">
            {/* 1. TEXT SIZE */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Type className="w-4 h-4 text-amber-700" aria-hidden="true" />
                <h3 className="font-bold text-slate-800 tracking-wide uppercase text-xs font-mono">
                  Text Scale
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'normal', label: '100% Normal', sizeDesc: '16px' },
                  { id: 'large', label: '115% Large', sizeDesc: '18px' },
                  { id: 'xlarge', label: '130% X-Large', sizeDesc: '21px' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTextSize(item.id as any)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                      settings.textSize === item.id
                        ? 'bg-amber-100 border-amber-400 text-amber-900 font-bold shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs">{item.label}</span>
                    <span className="text-[10px] text-slate-500 mt-0.5">{item.sizeDesc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. CONTRAST */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <SunMoon className="w-4 h-4 text-amber-700" aria-hidden="true" />
                <h3 className="font-bold text-slate-800 tracking-wide uppercase text-xs font-mono">
                  Color Contrast
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setContrast('normal')}
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                    settings.contrast === 'normal'
                      ? 'bg-amber-100 border-amber-400 text-amber-900 font-bold shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs">Standard Contrast</span>
                  {settings.contrast === 'normal' && <Check className="w-4 h-4 text-amber-700" />}
                </button>
                <button
                  onClick={() => setContrast('high')}
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                    settings.contrast === 'high'
                      ? 'bg-amber-100 border-amber-400 text-amber-900 font-bold shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs">High Contrast (AAA)</span>
                  {settings.contrast === 'high' && <Check className="w-4 h-4 text-amber-700" />}
                </button>
              </div>
            </div>

            {/* 3. MOTION */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Move className="w-4 h-4 text-amber-700" aria-hidden="true" />
                <h3 className="font-bold text-slate-800 tracking-wide uppercase text-xs font-mono">
                  Motion & Animations
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setMotion('normal')}
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                    settings.motion === 'normal'
                      ? 'bg-amber-100 border-amber-400 text-amber-900 font-bold shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs">Full Motion</span>
                  {settings.motion === 'normal' && <Check className="w-4 h-4 text-amber-700" />}
                </button>
                <button
                  onClick={() => setMotion('reduced')}
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                    settings.motion === 'reduced'
                      ? 'bg-amber-100 border-amber-400 text-amber-900 font-bold shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs">Reduce Motion</span>
                  {settings.motion === 'reduced' && <Check className="w-4 h-4 text-amber-700" />}
                </button>
              </div>
            </div>

            {/* 4. READING MODES */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-amber-700" aria-hidden="true" />
                <h3 className="font-bold text-slate-800 tracking-wide uppercase text-xs font-mono">
                  Reading Aids
                </h3>
              </div>
              <div className="space-y-2">
                <button
                  onClick={toggleReadingMode}
                  className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all text-left ${
                    settings.readingMode
                      ? 'bg-amber-100 border-amber-400 text-amber-900 font-semibold'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold">Reading Mode</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Focus layout with relaxed line spacing</div>
                  </div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${settings.readingMode ? 'bg-amber-500 border-amber-500 text-black' : 'border-slate-300 bg-white'}`}>
                    {settings.readingMode && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <button
                  onClick={toggleDyslexiaFont}
                  className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all text-left ${
                    settings.dyslexiaFont
                      ? 'bg-amber-100 border-amber-400 text-amber-900 font-semibold'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold">Dyslexia-Friendly Typography</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">High letter-spacing & weighted character baselines</div>
                  </div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${settings.dyslexiaFont ? 'bg-amber-500 border-amber-500 text-black' : 'border-slate-300 bg-white'}`}>
                    {settings.dyslexiaFont && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>
              </div>
            </div>

            {/* 5. NAVIGATION AIDS */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MousePointerClick className="w-4 h-4 text-amber-700" aria-hidden="true" />
                <h3 className="font-bold text-slate-800 tracking-wide uppercase text-xs font-mono">
                  Navigation & Target Assist
                </h3>
              </div>
              <div className="space-y-2">
                <button
                  onClick={toggleHighlightLinks}
                  className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all text-left ${
                    settings.highlightLinks
                      ? 'bg-amber-100 border-amber-400 text-amber-900 font-semibold'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold">Highlight Links & Actions</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Add clear underlines and high-visibility outlines</div>
                  </div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${settings.highlightLinks ? 'bg-amber-500 border-amber-500 text-black' : 'border-slate-300 bg-white'}`}>
                    {settings.highlightLinks && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <button
                  onClick={toggleLargeTargets}
                  className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all text-left ${
                    settings.largeTargets
                      ? 'bg-amber-100 border-amber-400 text-amber-900 font-semibold'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold">Larger Touch & Click Targets</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Expand interactive button and link padding to min 48px</div>
                  </div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${settings.largeTargets ? 'bg-amber-500 border-amber-500 text-black' : 'border-slate-300 bg-white'}`}>
                    {settings.largeTargets && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <button
                  onClick={toggleKeyboardMode}
                  className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all text-left ${
                    settings.keyboardMode
                      ? 'bg-amber-100 border-amber-400 text-amber-900 font-semibold'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold">Enhanced Keyboard Focus Indicator</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">High-contrast rings around any tab-focused element</div>
                  </div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${settings.keyboardMode ? 'bg-amber-500 border-amber-500 text-black' : 'border-slate-300 bg-white'}`}>
                    {settings.keyboardMode && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>
              </div>
            </div>

            {/* 6. AUDIO - READ PAGE ALOUD */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Volume2 className="w-4 h-4 text-amber-700" aria-hidden="true" />
                <h3 className="font-bold text-slate-800 tracking-wide uppercase text-xs font-mono">
                  Audio Speech Engine
                </h3>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-800">
                    <span className="font-bold block">Screen Text-to-Speech</span>
                    <span className="text-[11px] text-slate-500">
                      {settings.isSpeaking ? 'Currently reading page...' : 'Narrates titles, descriptions and section details'}
                    </span>
                  </div>
                  <button
                    onClick={toggleSpeech}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
                      settings.isSpeaking
                        ? 'bg-red-500 text-white hover:bg-red-600 animate-pulse'
                        : 'bg-amber-500 text-black hover:bg-amber-400 shadow-sm'
                    }`}
                  >
                    {settings.isSpeaking ? (
                      <>
                        <VolumeX className="w-4 h-4" /> Stop Voice
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4" /> Read Page Aloud
                      </>
                    )}
                  </button>
                </div>
                {settings.isSpeaking && (
                  <div className="flex items-center gap-2 text-[11px] text-amber-800 font-mono pt-1 border-t border-slate-200">
                    <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping" />
                    Web Speech Synthesizer Active (Press Escape or button to stop)
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-auto p-5 border-t border-slate-200 bg-slate-50 text-center">
            <p className="text-[11px] text-slate-500 font-medium">
              Designed according to WCAG 2.1 AA specifications • Settings persist across visits
            </p>
          </div>
        </div>
      )}
    </>
  );
};
