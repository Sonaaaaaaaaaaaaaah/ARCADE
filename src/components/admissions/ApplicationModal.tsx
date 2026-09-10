import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, PhoneCall, ShieldCheck } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgramme?: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  initialProgramme = 'B.Tech Computer Science & Engineering',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    programme: initialProgramme,
    quota: 'Merit / KEAM',
    state: 'Kerala',
  });

  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');

  useEffect(() => {
    if (initialProgramme) {
      setFormData((prev) => ({ ...prev, programme: initialProgramme }));
    }
  }, [initialProgramme]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = 'AJCE-2026-' + Math.floor(100000 + Math.random() * 900000);
    setAppId(randomId);
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="admissions-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 focus:outline-none max-h-[90vh] overflow-y-auto text-slate-900"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-bold">
                ADMISSIONS DESK • 2026-27
              </span>
            </div>
            <h3 id="admissions-modal-title" className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
              {submitted ? 'Application Initiated' : 'Start Your AJCE Journey'}
            </h3>
            <p className="text-xs text-slate-500">
              {submitted ? 'Your registration details have been dispatched' : 'Official Autonomous Admission Registration & Prospectus'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200"
            aria-label="Close Admissions Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="space-y-6 py-4 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-bold text-slate-900 font-heading">
                Thank You, {formData.fullName || 'Future Amalite'}!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Your admission enquiry token <strong className="text-amber-700 font-mono">{appId}</strong> has been logged in the AJCE Academic Registry.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500">Programme:</span>
                <span className="text-slate-900 font-bold">{formData.programme}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Quota Pathway:</span>
                <span className="text-amber-700 font-bold">{formData.quota}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Email:</span>
                <span className="text-slate-800">{formData.email}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="tel:+914828251600"
                className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-semibold text-xs flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-amber-600" />
                <span>Call Admissions: +91 4828 251600</span>
              </a>
              <button
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* Full Name */}
            <div>
              <label htmlFor="full-name" className="block text-slate-700 font-bold mb-1 font-mono">
                Candidate Full Name *
              </label>
              <input
                id="full-name"
                required
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Ronald Joseph"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-xs"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="email-addr" className="block text-slate-700 font-bold mb-1 font-mono">
                  Email Address *
                </label>
                <input
                  id="email-addr"
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="candidate@gmail.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-xs"
                />
              </div>

              <div>
                <label htmlFor="phone-number" className="block text-slate-700 font-bold mb-1 font-mono">
                  Mobile / WhatsApp *
                </label>
                <input
                  id="phone-number"
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-xs"
                />
              </div>
            </div>

            {/* Programme & Quota Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="programme-select" className="block text-slate-700 font-bold mb-1 font-mono">
                  Select Desired Programme
                </label>
                <select
                  id="programme-select"
                  value={formData.programme}
                  onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-amber-500 text-xs font-sans"
                >
                  <option value="B.Tech Computer Science & Engineering">B.Tech Computer Science & Engineering</option>
                  <option value="B.Tech Artificial Intelligence & Data Science">B.Tech AI & Data Science</option>
                  <option value="B.Tech Cyber Security">B.Tech Cyber Security</option>
                  <option value="B.Tech Electronics & Communication">B.Tech Electronics & Communication</option>
                  <option value="B.Tech Mechanical Engineering">B.Tech Mechanical Engineering</option>
                  <option value="B.Tech Civil Engineering">B.Tech Civil Engineering</option>
                  <option value="B.Tech Chemical Engineering">B.Tech Chemical Engineering</option>
                  <option value="B.Tech Electrical & Electronics">B.Tech Electrical & Electronics</option>
                  <option value="MCA - Master of Computer Applications">MCA (Master of Computer Apps)</option>
                  <option value="BCA - Bachelor of Computer Applications">BCA (Bachelor of Computer Apps)</option>
                  <option value="M.Tech in CS & AI">M.Tech Computer Science & AI</option>
                  <option value="Doctoral Research (Ph.D)">Ph.D Doctoral Research</option>
                </select>
              </div>

              <div>
                <label htmlFor="quota-select" className="block text-slate-700 font-bold mb-1 font-mono">
                  Admission Quota Track
                </label>
                <select
                  id="quota-select"
                  value={formData.quota}
                  onChange={(e) => setFormData({ ...formData, quota: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-amber-500 text-xs font-sans"
                >
                  <option value="Merit / KEAM">Merit / KEAM State Quota</option>
                  <option value="Management Quota">Management Merit Quota</option>
                  <option value="NRI / OCI Quota">NRI / Gulf Quota</option>
                  <option value="Lateral Entry (Diploma)">Lateral Entry (3-Year Degree)</option>
                  <option value="Scholarship Applicant">Fee Waiver / Merit Scholarship</option>
                </select>
              </div>
            </div>

            {/* Note */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2 text-[11px] text-slate-600 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>AJCE Autonomous Admissions Cell directly responds within 24 business hours.</span>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold text-xs tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Application & Request Prospectus</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
