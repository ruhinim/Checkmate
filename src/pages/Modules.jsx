import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Filter, Sparkles, Cpu, Database, Cloud, ShieldCheck, Globe, Activity, BarChart3, ChevronRight, Link2, ArrowRight } from "lucide-react";

export default function Modules() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const modules = [
    { id: "CS101", name: "Programming", icon: <Cpu />, score: 42, status: "CRITICAL", level: "critical", category: "Computer Science" },
    { id: "CS102", name: "Structures", icon: <Database />, score: 89, status: "ALIGNED", level: "success", category: "Computer Science" },
    { id: "CS201", name: "Cloud Tech", icon: <Cloud />, score: 56, status: "ATTENTION", level: "warning", category: "Cloud" },
    { id: "CS202", name: "Security", icon: <ShieldCheck />, score: 94, status: "ALIGNED", level: "success", category: "Cybersecurity" },
    { id: "CS301", name: "Intelligence", icon: <Cpu />, score: 91, status: "ALIGNED", level: "success", category: "Computer Science" },
    { id: "CS302", name: "Global Dev", icon: <Globe />, score: 34, status: "CRITICAL", level: "critical", category: "Software Eng" },
  ];

  const filteredModules = activeFilter === "All" 
    ? modules 
    : modules.filter(m => m.category === activeFilter);

  const getStatusColor = (level) => {
    if (level === 'critical') return 'bg-[#E11D48]';
    if (level === 'warning') return 'bg-orange-500';
    return 'bg-[#14B8A6]';
  };

  const getStatusBadgeStyle = (level) => {
    if (level === 'critical') return 'bg-rose-100 text-rose-700 border-rose-200';
    if (level === 'warning') return 'bg-orange-100 text-orange-700 border-orange-200';
    return 'bg-teal-100 text-teal-700 border-teal-200';
  };

  return (
    <div className="flex h-screen w-screen bg-[#F8FAFC] overflow-hidden font-sans relative">
      {/* Background Dot Texture - Matched to Dashboard */}
      <div className="absolute inset-0 z-0 opacity-[0.5] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`, backgroundSize: '32px 32px' }}>
      </div>

      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 z-10 relative">
        <Topbar />

        <main className="flex-1 p-8 flex flex-col gap-6 overflow-hidden">
          
          {/* HEADER SECTION - Matched to Dashboard */}
          <div className="flex justify-between items-center shrink-0">
            <div>
              <h1 className="text-[36px] font-black text-[#0F172A] tracking-tighter leading-none">Module Scanner</h1>
              <p className="text-slate-400 font-bold text-[11px] uppercase tracking-[2px] mt-2">Curriculum Intelligence • Alignment Overview</p>
            </div>
            <div className="flex gap-4">
              <select 
                onChange={(e) => setActiveFilter(e.target.value)}
                className="px-6 py-3.5 bg-white border-2 border-slate-100 rounded-2xl text-[11px] font-black shadow-sm hover:shadow-md transition-all text-slate-600 uppercase tracking-wider outline-none focus:ring-2 focus:ring-blue-100 cursor-pointer"
              >
                <option value="All">All Modules</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Cloud">Cloud Tech</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Software Eng">Software Eng</option>
              </select>
              
              <button 
                onClick={() => navigate('/analysis')}
                className="px-8 py-3.5 bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white rounded-2xl text-[11px] font-black shadow-xl shadow-blue-700/30 hover:scale-[1.03] transition-all flex items-center gap-2 uppercase tracking-widest"
              >
                <Sparkles size={18} className="text-blue-200" /> Scan Selected
              </button>
            </div>
          </div>

          {/* MAIN CONTENT AREA - 12 Column Grid Matched to Dashboard */}
          <div className="flex-1 grid grid-cols-12 gap-6 overflow-hidden min-h-0">
            
            {/* MODULES GRID (Takes up 8 columns like the Hero Image in Dashboard) */}
            <div className="col-span-8 h-full overflow-y-auto pr-2 custom-scrollbar">
              <div className="grid grid-cols-2 gap-5">
                {filteredModules.map((mod) => (
                  <div 
                    key={mod.id} 
                    className="bg-white rounded-[32px] p-6 border border-white shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all group hover:border-blue-100 flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-[#1E40AF] transition-all">
                        {React.cloneElement(mod.icon, { size: 24 })}
                      </div>
                      <span className={`text-[9px] font-black px-3 py-1.5 rounded-full border ${getStatusBadgeStyle(mod.level)} uppercase tracking-wider`}>
                        {mod.status}
                      </span>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <h3 className="font-black text-[#0F172A] text-xl tracking-tighter">{mod.id}</h3>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-tighter">{mod.category}</p>
                      </div>
                      <p className="text-[#0F172A] font-bold text-base tracking-tight">{mod.name}</p>
                    </div>

                    <div className="mt-auto">
                      <div className="flex justify-between text-[10px] font-black mb-2 uppercase tracking-wider">
                        <span className="text-slate-400">Alignment Score</span>
                        <span className={`font-mono ${mod.level === 'critical' ? 'text-red-600' : 'text-slate-900'}`}>{mod.score}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-5">
                        <div 
                          className={`h-full transition-all duration-700 ${getStatusColor(mod.level)}`} 
                          style={{ width: `${mod.score}%` }} 
                        />
                      </div>

                      <div className="flex gap-3">
                        <button className="flex-1 py-3 bg-slate-50 text-slate-600 rounded-xl font-black text-[10px] uppercase tracking-wider border border-slate-100 hover:bg-slate-100 transition-all">
                          Quick Scan
                        </button>
                        <button 
                          onClick={() => navigate('/analysis')}
                          className="flex-1 py-3 bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white rounded-xl font-black text-[10px] uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-black transition-all shadow-md"
                        >
                          Analyse <BarChart3 size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SIDEBAR LOGS & STATS - Matched to Dashboard's Critical Alerts */}
            <div className="col-span-4 h-full flex flex-col gap-6 overflow-hidden">
              {/* Critical Risk / Live Logs Card */}
              <div className="flex-1 bg-[#FFF1F2] rounded-[40px] border border-[#FFE4E6] p-8 flex flex-col overflow-hidden">
                <div className="flex items-center gap-2 mb-6 shrink-0 justify-center">
                  <div className="w-1.5 h-4 bg-rose-500 rounded-full animate-pulse"></div>
                  <h3 className="text-[11px] font-black text-[#E11D48] uppercase tracking-[3px]">Live Intelligence Logs</h3>
                </div>
                
                <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                  <div 
                    onClick={() => navigate('/analysis')}
                    className="bg-white p-5 rounded-[24px] border border-red-50 shadow-sm hover:translate-x-1 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 shrink-0"></div>
                      <div>
                        <p className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-1">Critical • CS302</p>
                        <h4 className="font-bold text-slate-800 text-xs leading-snug">Outdated curriculum detected. Immediate revision recommended.</h4>
                        <div className="flex items-center gap-2 mt-3">
                          <span className="text-[8px] font-black text-rose-500 bg-rose-50 px-2 py-0.5 rounded-full">Action Required</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    onClick={() => navigate('/analysis')}
                    className="bg-white p-5 rounded-[24px] border border-orange-50 shadow-sm hover:translate-x-1 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 shrink-0"></div>
                      <div>
                        <p className="text-[9px] font-black text-orange-500 uppercase tracking-widest mb-1">Attention • CS201</p>
                        <h4 className="font-bold text-slate-800 text-xs leading-snug">Low engagement scores this week. Intervention plan ready.</h4>
                        <div className="flex items-center gap-2 mt-3">
                          <span className="text-[8px] font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Monitor</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-4 py-4 border-2 border-red-100 text-red-500 rounded-2xl text-[10px] font-black uppercase tracking-widest bg-white/50 hover:bg-white transition-all shadow-sm">
                  View Full History
                </button>
              </div>

              {/* Total Score Dark Card */}
              <div className="bg-[#fcf8c5] rounded-[32px] p-6 text-white border border-slate-800 shadow-2xl shrink-0">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[2px]">Global Alignment</p>
                  <Activity size={16} className="text-[#14B8A6]" />
                </div>
                <div className="text-4xl font-black mb-2 text-[#14B8A6] tracking-tighter">88.4%</div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black text-[#14B8A6] uppercase tracking-wider">↑ 2.4% vs last scan</span>
                  <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[88%] h-full bg-[#14B8A6]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}