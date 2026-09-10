import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Radio,
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-600 text-xs" role="contentinfo">
      {/* Top Accreditation & Institutional Credibility Strip */}
      <div className="border-b border-slate-200/80 py-6 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-600" aria-hidden="true" />
              <span className="text-slate-900 font-bold text-xs tracking-wider uppercase font-mono">
                Institutional Accreditations
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-slate-700 text-[11px] font-mono">
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs font-semibold">
                UGC Autonomous Institution
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs font-semibold">
                NAAC 'A+' Accredited
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs font-semibold">
                NBA Accredited Programmes
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs font-semibold">
                Affiliated to APJ Abdul Kalam Technological University (KTU)
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs font-semibold">
                Approved by AICTE New Delhi
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Col 1 & 2: Institutional Identity & Address */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/images/ajceJubileeLogo.png"
                alt="AJCE Logo"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://www.ajce.in/ajceJubileeLogo.png';
                }}
              />
              <div>
                <span className="font-heading font-extrabold text-slate-900 text-sm tracking-tight block">
                  AMAL JYOTHI COLLEGE OF ENGINEERING
                </span>
                <span className="text-[11px] text-amber-700 font-mono font-bold">
                  Autonomous • Estd. 2001
                </span>
              </div>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              Amal Jyothi College of Engineering (AJCE) is an autonomous Catholic minority engineering institution established and managed by the Catholic Diocese of Kanjirappally. Where ideas become impact.
            </p>

            <div className="space-y-2.5 text-xs text-slate-700 pt-2 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Koovappally P.O., Kanjirappally, Kottayam District, Kerala, India - 686518</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
                <span>+91 4828 251600 / 251800 (Office)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
                <span>info@ajce.in / admissions@ajce.in</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Radio className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
                <span>Radio 90FM: radio90@ajce.in (90.0 MHz)</span>
              </div>
            </div>
          </div>

          {/* Col 3: Academics */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-900 font-bold">
              Academics
            </h4>
            <ul className="space-y-2 font-medium">
              <li><a href="#academics" className="hover:text-amber-700 transition-colors">B.Tech Programmes</a></li>
              <li><a href="#academics" className="hover:text-amber-700 transition-colors">Computer Science & AI</a></li>
              <li><a href="#academics" className="hover:text-amber-700 transition-colors">Cyber Security</a></li>
              <li><a href="#academics" className="hover:text-amber-700 transition-colors">Electronics & VLSI</a></li>
              <li><a href="#academics" className="hover:text-amber-700 transition-colors">Mechanical & EV</a></li>
              <li><a href="#academics" className="hover:text-amber-700 transition-colors">Civil & Chemical Engg</a></li>
              <li><a href="#academics" className="hover:text-amber-700 transition-colors">MCA & BCA</a></li>
              <li><a href="#academics" className="hover:text-amber-700 transition-colors">M.Tech & Ph.D Research</a></li>
            </ul>
          </div>

          {/* Col 4: Innovation & AES */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-900 font-bold">
              Innovation & Tech
            </h4>
            <ul className="space-y-2 font-medium">
              <li><a href="#impact-journey" className="hover:text-amber-700 transition-colors">Idea to Impact Pipeline</a></li>
              <li><a href="#innovation-timeline" className="hover:text-amber-700 transition-colors">Startups Valley TBI</a></li>
              <li><a href="#innovation-timeline" className="hover:text-amber-700 transition-colors">BIRAC Bio-TBI</a></li>
              <li><a href="#innovation-timeline" className="hover:text-amber-700 transition-colors">I²U Prototype Funding</a></li>
              <li><a href="#aes" className="hover:text-amber-700 transition-colors">AES Campus OS</a></li>
              <li><a href="#aes" className="hover:text-amber-700 transition-colors">FabLab AJCE</a></li>
              <li><a href="#research" className="hover:text-amber-700 transition-colors">Patents & IPR Cell</a></li>
            </ul>
          </div>

          {/* Col 5: Admissions & Life */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-900 font-bold">
              Admissions
            </h4>
            <ul className="space-y-2 font-medium">
              <li><a href="#admissions" className="hover:text-amber-700 transition-colors">B.Tech Eligibility & KEAM</a></li>
              <li><a href="#admissions" className="hover:text-amber-700 transition-colors">Management & Merit Quota</a></li>
              <li><a href="#admissions" className="hover:text-amber-700 transition-colors">NRI / OCI Admissions</a></li>
              <li><a href="#admissions" className="hover:text-amber-700 transition-colors">Scholarships & Fee Concessions</a></li>
              <li><a href="#campus" className="hover:text-amber-700 transition-colors">Santhome & Amala Hostels</a></li>
              <li><a href="#campus" className="hover:text-amber-700 transition-colors">Amal Jyothi Driving Academy</a></li>
              <li><a href="#pulse" className="hover:text-amber-700 transition-colors">Placement Records 2026</a></li>
            </ul>
          </div>

          {/* Col 6: Portals & External */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-900 font-bold">
              Portals & Access
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <a href="https://www.ajce.in/home/aes.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-amber-700 transition-colors">
                  AES Login <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.ajce.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-amber-700 transition-colors">
                  Official College Website <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://ktu.edu.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-amber-700 transition-colors">
                  KTU Portal <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://swayam.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-amber-700 transition-colors">
                  NPTEL / Swayam Local Chapter <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#a11y-control-panel" className="text-amber-700 font-bold hover:underline">
                  AJCE Access Controls
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal disclaimer */}
        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Amal Jyothi College of Engineering (Autonomous), Kanjirappally. All rights reserved.</p>
          <div className="flex items-center gap-6 font-medium">
            <span className="text-slate-600">Design & Architecture Challenge 2026</span>
            <a href="https://www.ajce.in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-700">
              Official Reference Ecosystem
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
