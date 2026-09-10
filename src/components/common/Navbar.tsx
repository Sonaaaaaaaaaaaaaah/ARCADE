import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';

interface NavbarProps {
  onOpenApply: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Pathways', href: '#pathways' },
    { name: 'Idea to Impact', href: '#impact-journey' },
    { name: 'Academics', href: '#academics' },
    { name: 'AES OS', href: '#aes' },
    { name: 'Campus Worlds', href: '#campus' },
    { name: 'Research & Global', href: '#research' },
    { name: 'Pulse', href: '#pulse' },
  ];

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 py-2.5 shadow-sm'
          : 'bg-gradient-to-b from-white/90 via-white/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark & Official AJCE Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-xl p-1"
            aria-label="Amal Jyothi College of Engineering Home"
          >
            {/* Official AJCE Jubilee Logo from ajce.in */}
            <div className="relative h-11 w-auto flex items-center justify-center p-1 rounded-xl bg-white border border-slate-200 group-hover:border-amber-500/50 shadow-sm transition-all">
              <img
                src="/images/ajceJubileeLogo.png"
                alt="Amal Jyothi College of Engineering — Silver Jubilee Logo"
                className="h-9 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://www.ajce.in/ajceJubileeLogo.png';
                }}
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-slate-900 text-sm sm:text-base tracking-tight group-hover:text-amber-600 transition-colors">
                  AMAL JYOTHI
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-mono font-bold bg-amber-50 text-amber-700 border border-amber-300">
                  AUTONOMOUS
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-slate-500 font-sans tracking-wide">
                College of Engineering • NAAC 'A+' • Kanjirappally
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-amber-600 transition-colors py-1 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#pathways"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full transition-all"
            >
              <Compass className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
              <span>Finder</span>
            </a>

            <button
              onClick={onOpenApply}
              className="relative group inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-full shadow-md shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
            >
              <span>Apply 2026-27</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-full bg-white/98 backdrop-blur-2xl border-b border-slate-200 p-6 shadow-xl animate-in slide-in-from-top-4 duration-200"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-slate-800 hover:text-amber-600 py-2 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 rounded-xl shadow-md"
              >
                Apply for 2026-27 Admissions
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
