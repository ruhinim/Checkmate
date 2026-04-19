import React from 'react';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { ChevronDown, Rocket, Plus, Filter, LayoutGrid, List } from "lucide-react";

export default function SavedRecommendations() {
  return (
    <div className="flex h-screen w-screen bg-[#F8FAFC] overflow-hidden font-sans relative">
      
      {/* Background Dot Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.5] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`, backgroundSize: '32px 32px' }}>
      </div>

      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 z-10 relative">
        <Topbar />

        <main className="flex-1 p-8 overflow-y-auto custom-scrollbar flex flex-col gap-6">
          
          {/* HEADER SECTION */}
          <div className="flex justify-between items-end shrink-0 mb-2">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-400 uppercase mb-4">
                <span className="hover:text-slate-600 cursor-pointer transition-colors">Modules</span>
                <span className="text-slate-300">›</span>
                <span className="text-blue-600">Recommendations Library</span>
              </div>
              <h1 className="text-[40px] font-black leading-none tracking-tighter text-[#0F172A] mb-3">
                Saved Recommendations
              </h1>
              <p className="text-slate-500 text-sm font-medium max-w-2xl leading-relaxed">
                Review and implement curriculum adjustments curated from AI analysis and industry trends.
              </p>
            </div>

            {/* Toggle View */}
            <div className="bg-white p-1.5 rounded-2xl flex border border-slate-100 shadow-sm">
              <button className="px-6 py-2.5 bg-slate-50 shadow-sm rounded-xl text-[11px] font-black text-[#1E40AF] uppercase tracking-wider flex items-center gap-2">
                <LayoutGrid size={14} /> Grid
              </button>
              <button className="px-6 py-2.5 text-[11px] font-black text-slate-400 uppercase tracking-wider hover:text-slate-600 transition-colors flex items-center gap-2">
                <List size={14} /> List
              </button>
            </div>
          </div>

          {/* FILTER BAR */}
          <div className="flex items-center gap-4 mb-6">
            <FilterButton label="Priority: All" active />
            <FilterButton label="Date: Last 30 Days" />
            <FilterButton label="Module: CS101, CS202" />
            <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest ml-2 hover:text-blue-800 transition-colors flex items-center gap-1.5">
              <Filter size={12} /> Clear Filters
            </button>
          </div>

          {/* MAIN GRID LAYOUT */}
          <div className="grid grid-cols-12 gap-6 min-h-0 pb-10">
            
            {/* Left Feed (8 Columns) */}
            <div className="col-span-8 flex flex-col gap-6">
              <CourseCard />
              
              <div className="grid grid-cols-2 gap-6">
                <SimpleCard title="Data Structures" code="CS202" priority="MEDIUM" />
                <AddModuleCard />
              </div>
            </div>

            {/* Right Sidebar Stats (4 Columns) */}
            <div className="col-span-4 flex flex-col gap-6">
              <HealthStatsCard />
            </div>
            
          </div>

        </main>
      </div>
    </div>
  );
}

/* --- REUSABLE COMPONENTS --- */

const FilterButton = ({ label, active }) => (
  <button className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-[11px] font-black uppercase tracking-wider transition-all border-2
    ${active ? 'bg-blue-50 text-blue-700 border-blue-100' : 'bg-white text-slate-600 border-white shadow-sm hover:border-slate-200'}
  `}>
    <span className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-blue-500 animate-pulse' : 'bg-slate-300'}`}></span>
    {label}
    <ChevronDown size={14} className={active ? 'text-blue-500' : 'text-slate-400'} />
  </button>
);

const CourseCard = () => (
  <div className="bg-white rounded-[32px] p-8 border border-white shadow-xl shadow-slate-200/40 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
    <div className="flex justify-between items-start mb-8">
      <div className="flex items-center gap-5">
        <div className="w-14 h-14 bg-blue-50 text-blue-600 flex items-center justify-center rounded-2xl border border-blue-100 shadow-inner">
           <span className="font-black text-[14px]">{"< >"}</span>
        </div>
        <div>
          <h3 className="text-2xl font-black text-[#0F172A] tracking-tight">Introduction to Computer Science</h3>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-[10px] font-black bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md uppercase tracking-widest border border-slate-200">CS101</span>
            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">• 4 Recommendations Saved</span>
          </div>
        </div>
      </div>
      <span className="text-[9px] font-black bg-rose-100 text-rose-600 border border-rose-200 px-3 py-1.5 rounded-full uppercase tracking-widest">
        High Priority
      </span>
    </div>

    <div className="space-y-4 mb-8">
      <RecommendationItem 
        title="Integrate Rust Basics in Week 4" 
        description="Analysis suggests introducing memory safety concepts via Rust alongside C++ to align with industry security standards." 
      />
      <RecommendationItem 
        title="AI Ethics Seminar Addition" 
        description="Recommended 2-hour guest lecture on Large Language Models and academic integrity." 
      />
    </div>

    <div className="flex justify-between items-center pt-6 border-t border-slate-100 mt-auto">
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
           {[1,2,3].map(i => (
             <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
             </div>
           ))}
        </div>
        <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">+3 Collaborators</span>
      </div>
      <button className="flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-lg shadow-blue-700/30 hover:scale-[1.03] transition-all">
        Review & Implement <Rocket size={16} className="text-blue-200" />
      </button>
    </div>
  </div>
);

const RecommendationItem = ({ title, description }) => (
  <div className="bg-slate-50/50 border border-slate-100 p-5 rounded-[24px] hover:bg-slate-50 transition-colors">
    <h4 className="text-[14px] font-black text-slate-800 mb-1.5 tracking-tight">{title}</h4>
    <p className="text-[13px] text-slate-500 leading-relaxed font-medium">{description}</p>
  </div>
);

const SimpleCard = ({ title, code, priority }) => (
  <div className="bg-white rounded-[32px] p-8 border border-white shadow-xl shadow-slate-200/40 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
      <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 bg-teal-50 border border-teal-100 rounded-2xl flex items-center justify-center text-teal-600 shadow-inner">
              <div className="w-5 h-4 bg-teal-500/20 rounded"></div>
          </div>
          <span className="text-[9px] font-black bg-amber-100 text-amber-700 border border-amber-200 px-3 py-1.5 rounded-full uppercase tracking-widest">{priority}</span>
      </div>
      <h3 className="text-xl font-black text-slate-800 mb-2 tracking-tight">{title}</h3>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 border border-slate-100 px-2.5 py-1 rounded-md inline-block w-fit bg-slate-50">{code}</p>
      <p className="text-[13px] text-slate-500 leading-relaxed font-medium mb-8 flex-1">
        Recent industry feedback suggests shifting focus from purely relational to hybrid NoSQL-SQL paradigms...
      </p>
      <div className="flex justify-between items-center pt-5 border-t border-slate-100 mt-auto">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Updated 2d ago</span>
          <button className="text-[10px] font-black text-teal-600 uppercase tracking-widest flex items-center gap-1.5 hover:text-teal-800 transition-colors">
            Review <span className="text-[14px] leading-none">↗</span>
          </button>
      </div>
  </div>
);

const HealthStatsCard = () => (
  <div className="bg-[#E2F8F0] rounded-[40px] p-8 border border-white shadow-xl shadow-teal-200/40 relative overflow-hidden flex flex-col h-full min-h-[500px]">
    <div className="relative z-10">
      <h3 className="text-teal-950 font-black text-xl mb-8 tracking-tight">Implementation Health</h3>
      
      <div className="flex justify-between items-end mb-3">
          <span className="text-[10px] font-black text-teal-800 tracking-widest uppercase">Adoption Rate</span>
          <span className="text-3xl font-black text-teal-950 tracking-tighter leading-none">68%</span>
      </div>
      
      <div className="w-full h-2.5 bg-white rounded-full mb-10 overflow-hidden shadow-inner">
          <div className="h-full bg-teal-500 rounded-full transition-all duration-1000" style={{ width: '68%' }}></div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-[24px] p-6 border border-teal-50 shadow-sm hover:-translate-y-1 transition-transform">
              <p className="text-4xl font-black text-slate-800 tracking-tighter">12</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Pending</p>
          </div>
          <div className="bg-white rounded-[24px] p-6 border border-teal-50 shadow-sm hover:-translate-y-1 transition-transform">
              <p className="text-4xl font-black text-teal-600 tracking-tighter">45</p>
              <p className="text-[10px] font-black text-teal-700/50 uppercase tracking-widest mt-2">Applied</p>
          </div>
      </div>
    </div>

    {/* Graphic Background Fill */}
    <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-teal-200/40 to-transparent pointer-events-none">
        <img src="https://i.imgur.com/vHqBNoo.png" alt="abstract-waves" className="w-full h-full object-cover opacity-30 mix-blend-multiply" />
    </div>
  </div>
);

const AddModuleCard = () => (
  <div className="border-2 border-dashed border-slate-200 rounded-[32px] p-8 flex flex-col items-center justify-center text-center bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all cursor-pointer group min-h-[300px]">
    <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 mb-6 group-hover:scale-110 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-all duration-300">
        <Plus size={28} />
    </div>
    <h4 className="font-black text-slate-800 text-lg tracking-tight mb-2">Add Recommendation</h4>
    <p className="text-[12px] text-slate-500 font-medium max-w-[200px] leading-relaxed">
      Manually save or import recommendations from ChatMate intelligence sessions.
    </p>
  </div>
);