import React, { useEffect, useRef } from 'react';
import { Programme } from '../../types';
import { X, Clock, Users, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProgrammeModalProps {
  programme: Programme | null;
  onClose: () => void;
  onApply: (programmeName: string) => void;
}

export const ProgrammeModal: React.FC<ProgrammeModalProps> = ({
  programme,
  onClose,
  onApply,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!programme) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="programme-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 focus:outline-none text-slate-900"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase bg-amber-100 text-amber-800 border border-amber-300">
                {programme.degree}
              </span>
              <span className="text-xs font-mono text-slate-500 font-medium">
                {programme.department}
              </span>
            </div>
            <h3 id="programme-modal-title" className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
              {programme.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Close details modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick specs pill row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-amber-600 shrink-0" />
            <div>
              <span className="text-[10px] text-slate-500 uppercase block font-mono font-semibold">Duration</span>
              <span className="text-xs text-slate-900 font-bold">{programme.duration}</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
            <Users className="w-4 h-4 text-amber-600 shrink-0" />
            <div>
              <span className="text-[10px] text-slate-500 uppercase block font-mono font-semibold">Annual Intake</span>
              <span className="text-xs text-slate-900 font-bold">{programme.intake} Seats</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5 col-span-2 sm:col-span-1">
            <Award className="w-4 h-4 text-amber-600 shrink-0" />
            <div>
              <span className="text-[10px] text-slate-500 uppercase block font-mono font-semibold">Status</span>
              <span className="text-xs text-amber-700 font-bold truncate block max-w-[130px]">
                {programme.accreditation.join(', ')}
              </span>
            </div>
          </div>
        </div>

        {/* Comprehensive Description */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-bold">
            Programme Overview
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed">
            {programme.fullDesc}
          </p>
        </div>

        {/* Key Areas */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-bold">
            Core Specialized Domains
          </h4>
          <div className="flex flex-wrap gap-2">
            {programme.keyAreas.map((area, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 text-xs text-slate-800 border border-slate-200 font-medium">
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Curriculum Highlights */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-bold">
            Distinctive Pedagogical Highlights
          </h4>
          <div className="space-y-2">
            {programme.curriculumHighlights.map((hl, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Career Tracks */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-bold">
            Career & Placement Pathways
          </h4>
          <div className="flex flex-wrap gap-2">
            {programme.careers.map((career, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-amber-50 text-xs font-mono text-amber-800 border border-amber-200 font-semibold">
                {career}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onApply(programme.name);
            }}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-black bg-amber-500 hover:bg-amber-400 shadow-md shadow-amber-500/20 transition-all flex items-center gap-2"
          >
            <span>Apply for this Programme</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
