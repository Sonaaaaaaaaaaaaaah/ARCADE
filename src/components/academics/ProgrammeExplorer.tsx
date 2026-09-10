import React, { useState, useMemo } from 'react';
import { PROGRAMMES_DATA } from '../../data/ajceData';
import { Programme } from '../../types';
import { ProgrammeModal } from './ProgrammeModal';
import {
  GraduationCap,
  ArrowRight,
  Filter,
  Clock,
  Search
} from 'lucide-react';

interface ProgrammeExplorerProps {
  onApplyProgramme: (name: string) => void;
}

export const ProgrammeExplorer: React.FC<ProgrammeExplorerProps> = ({ onApplyProgramme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [modalProgramme, setModalProgramme] = useState<Programme | null>(null);

  const categories = ['ALL', 'ENGINEERING', 'COMPUTER APPLICATIONS', 'POSTGRADUATE', 'RESEARCH'];
  const filterPills = ['ALL', 'AI', 'COMPUTING', 'CORE ENGINEERING', 'CYBER SECURITY', 'ELECTRONICS', 'RESEARCH'];

  const filteredProgrammes = useMemo(() => {
    return PROGRAMMES_DATA.filter((item) => {
      // Category Match
      if (selectedCategory !== 'ALL' && item.category !== selectedCategory) {
        return false;
      }

      // Filter Pill Match
      if (selectedFilter !== 'ALL') {
        const textToSearch = (item.name + ' ' + item.shortDesc + ' ' + item.keyAreas.join(' ')).toLowerCase();
        if (selectedFilter === 'AI' && !textToSearch.includes('ai') && !textToSearch.includes('intelligence')) return false;
        if (selectedFilter === 'COMPUTING' && !textToSearch.includes('computing') && !textToSearch.includes('computer') && !textToSearch.includes('software')) return false;
        if (selectedFilter === 'CORE ENGINEERING' && !textToSearch.includes('mechanical') && !textToSearch.includes('civil') && !textToSearch.includes('chemical') && !textToSearch.includes('electrical')) return false;
        if (selectedFilter === 'CYBER SECURITY' && !textToSearch.includes('cyber') && !textToSearch.includes('security')) return false;
        if (selectedFilter === 'ELECTRONICS' && !textToSearch.includes('electronics') && !textToSearch.includes('vlsi') && !textToSearch.includes('communication')) return false;
        if (selectedFilter === 'RESEARCH' && item.degree !== 'Ph.D' && item.degree !== 'M.Tech') return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDept = item.department.toLowerCase().includes(q);
        const matchesAreas = item.keyAreas.some((a) => a.toLowerCase().includes(q));
        if (!matchesName && !matchesDept && !matchesAreas) return false;
      }

      return true;
    });
  }, [selectedCategory, selectedFilter, searchQuery]);

  return (
    <section
      id="academics"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden border-t border-slate-200"
      aria-labelledby="academics-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-mono uppercase tracking-widest mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-amber-700" />
              <span>Future-Aligned Curricula</span>
            </div>
            <h2 id="academics-heading" className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight uppercase">
              ACADEMIC <span className="text-gradient-amber">PROGRAMMES.</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            Autonomous curriculum engineered with tech leaders. 13 departments offering 23 accredited undergraduate, postgraduate, and doctoral tracks.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-10">
          {/* Main Group Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-2" role="tablist" aria-label="Programme Categories">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-150 border focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm ${
                    isSelected
                      ? 'bg-amber-500 text-black border-amber-400 font-bold'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Sub-Filters and Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-1.5" aria-label="Domain Filters">
              <span className="text-[11px] font-mono text-slate-500 mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3 text-amber-600" /> Filter:
              </span>
              {filterPills.map((pill) => {
                const isActive = selectedFilter === pill;
                return (
                  <button
                    key={pill}
                    onClick={() => setSelectedFilter(pill)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all border ${
                      isActive
                        ? 'bg-amber-100 text-amber-800 border-amber-300 font-semibold'
                        : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:border-slate-300'
                    }`}
                  >
                    {pill}
                  </button>
                );
              })}
            </div>

            {/* Quick Keyword Search Input */}
            <div className="relative min-w-[260px]">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search programmes, fields..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search programmes"
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 font-sans shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Progressive Programme Cards Grid */}
        {filteredProgrammes.length === 0 ? (
          <div className="p-12 text-center rounded-3xl border border-slate-200 bg-white shadow-sm">
            <p className="text-slate-600 text-sm">No programmes matched your current filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSelectedFilter('ALL');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-amber-700 hover:underline font-mono font-bold"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProgrammes.map((prog) => (
              <div
                key={prog.id}
                className="group flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Top degree & accreditation badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-amber-50 text-amber-800 border border-amber-200">
                      {prog.degree}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {prog.duration.split(' ')[0]} Yrs
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-amber-700 transition-colors mb-2 leading-snug">
                    {prog.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {prog.shortDesc}
                  </p>

                  {/* Key Areas Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {prog.keyAreas.slice(0, 3).map((area, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setModalProgramme(prog)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 group-hover:text-amber-700 transition-colors focus:outline-none focus:underline"
                  >
                    <span>Explore Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                  </button>

                  <button
                    onClick={() => onApplyProgramme(prog.name)}
                    className="px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold text-amber-800 hover:text-black hover:bg-amber-400 border border-amber-300 transition-all bg-amber-50"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Programme Detail Modal */}
      <ProgrammeModal
        programme={modalProgramme}
        onClose={() => setModalProgramme(null)}
        onApply={(name) => {
          setModalProgramme(null);
          onApplyProgramme(name);
        }}
      />
    </section>
  );
};
