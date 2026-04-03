import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Added for navigation
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Filter, Sparkles, Cpu, Database, Cloud, ShieldCheck, Globe, Activity, BarChart3, ChevronRight } from "lucide-react";

export default function Modules() {
  const navigate = useNavigate(); // Initialize navigation
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
    if (level === 'critical') return 'bg-red-600';
    if (level === 'warning') return 'bg-orange-500';
    return 'bg-emerald-500';
  };

  return (
    <div className="flex h-screen w-screen bg-[#F8FAFC] overflow-hidden font-sans text-slate-900">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        <Topbar />
        
        <main className="flex-1 p-6 flex flex-col gap-5 overflow-hidden">
          
          {/* HEADER ROW */}
          <div className="flex justify-between items-center shrink-0">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#1E40AF] text-white text-[10px] flex items-center justify-center font-bold">1</div>
                  <span className="text-[11px] font-black text-[#1E40AF] uppercase tracking-tighter">Select Modules</span>
                </div>
                <div className="w-6 h-[1px] bg-slate-200"></div>
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-tighter">Analysis</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-32 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="w-[65%] h-full bg-[#1E40AF]"></div>
                </div>
                <span className="text-[9px] font-black text-slate-400 tracking-widest uppercase">Global Health: 65%</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <select 
                onChange={(e) => setActiveFilter(e.target.value)}
                className="px-4 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-full font-bold text-[11px] shadow-sm uppercase outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
              >
                <option value="All">Filter: All Modules</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Cloud">Cloud Tech</option>
                <option value="Cybersecurity">Cybersecurity</option>
              </select>

              {/* LINKED BUTTON */}
              <button 
                onClick={() => navigate('/analysis')}
                className="px-7 py-2.5 bg-[#1E40AF] text-white rounded-full font-black text-[11px] uppercase shadow-lg shadow-blue-100 flex items-center gap-2 hover:bg-blue-800 transition-all active:scale-95"
              >
                <Sparkles size={14} fill="white" /> Scan Selected
              </button>
            </div>
          </div>

          <div className="flex-1 flex gap-6 min-h-0 overflow-hidden">
            <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-4 h-full">
              {filteredModules.map((mod) => (
                <div key={mod.id} className="bg-white rounded-[32px] p-5 shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-blue-200 transition-all">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-[#1E40AF] transition-colors">
                      {React.cloneElement(mod.icon, { size: 20 })}
                    </div>
                    <span className={`text-[9px] font-black px-3 py-1.5 rounded-lg tracking-wider text-white shadow-md ${getStatusColor(mod.level)}`}>
                      {mod.status}
                    </span>
                  </div>

                  <div className="mt-3">
                    <h3 className="font-black text-[#0F172A] text-lg uppercase leading-none">{mod.id}</h3>
                    <p className="text-[#0F172A] font-bold text-sm tracking-tight mb-0.5">{mod.name}</p>
                    <p className="text-slate-400 text-[10px] font-medium uppercase tracking-tighter">{mod.category}</p>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-[9px] font-black mb-1.5 uppercase text-slate-400">
                      <span>Alignment</span>
                      <span className={`font-mono ${mod.level === 'critical' ? 'text-red-600' : 'text-slate-900'}`}>{mod.score}%</span>
                    </div>
                    
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-4">
                      <div 
                        className={`h-full transition-all duration-700 ${getStatusColor(mod.level)}`} 
                        style={{ width: `${mod.score}%` }} 
                      />
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 py-2 bg-slate-50 text-slate-500 rounded-xl font-black text-[10px] uppercase border border-slate-100 hover:bg-slate-100">Scan</button>
                      
                      {/* LINKED BUTTON ON CARD */}
                      <button 
                        onClick={() => navigate('/analysis')}
                        className="flex-1 py-2 bg-[#1E40AF] text-white rounded-xl font-black text-[10px] uppercase flex items-center justify-center gap-1 shadow-sm hover:bg-blue-800 transition-colors"
                      >
                        View <BarChart3 size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SIDEBAR LOGS */}
            <div className="w-72 flex flex-col h-full gap-4">
              <div className="flex-1 bg-slate-50/50 rounded-[32px] p-5 border border-slate-100 flex flex-col overflow-hidden">
                <div className="flex items-center justify-between mb-6 shrink-0">
                  <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                    <Activity size={14} className="text-[#1E40AF]" /> Live Logs
                  </h3>
                </div>
                
                <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-1">
                  <div 
                    onClick={() => navigate('/analysis')}
                    className="p-3 bg-white rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:border-red-200 transition-all cursor-pointer"
                  >
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-red-600"></div>
                    <p className="text-[9px] font-black text-red-600 uppercase mb-0.5">Critical • CS302</p>
                    <p className="text-[10px] font-bold text-slate-600 leading-tight">Outdated curriculum. Action required.</p>
                  </div>
                </div>

                <button className="w-full mt-4 py-3 bg-white border border-slate-200 text-slate-500 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                  History <ChevronRight size={12} />
                </button>
              </div>

              <div className="bg-[#0F172A] rounded-[24px] p-4 text-white">
                <p className="text-[9px] font-black opacity-50 uppercase tracking-widest mb-1">Total Score</p>
                <div className="text-xl font-black mb-1 leading-none">88.4%</div>
                <div className="text-[9px] font-bold text-emerald-400 uppercase tracking-tighter">↑ 2.4% vs last scan</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}