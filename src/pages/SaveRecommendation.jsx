import React from 'react';
import Sidebar from "../components/Sidebar";
import { Search, Bell, HelpCircle, ChevronDown, Rocket, Plus } from "lucide-react";

export default function SavedRecommendations() {
  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Top Header */}
        <nav className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-8 shrink-0">
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search saved items..." 
              className="w-full bg-slate-50 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none border border-transparent focus:border-slate-200"
            />
          </div>
          <div className="flex items-center gap-6">
            <Bell size={18} className="text-slate-400" />
            <HelpCircle size={18} className="text-slate-400" />
            <div className="flex items-center gap-3 border-l pl-6">
               <div className="text-right">
                  <p className="text-[11px] font-bold text-slate-800">Dr. Smith</p>
                  <p className="text-[9px] text-slate-400 uppercase font-black tracking-tighter">CS Lead</p>
               </div>
               <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden border border-slate-100">
                  <img src="https://ui-avatars.com/api/?name=Dr+Smith" alt="profile" />
               </div>
            </div>
          </div>
        </nav>

        {/* Content */}
        <main className="p-10 max-w-[1400px] mx-auto w-full">
          {/* Breadcrumbs & Title */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-400 uppercase mb-2">
                <span>Modules</span>
                <span className="text-slate-300">›</span>
                <span className="text-blue-600">Recommendations Library</span>
              </div>
              <h1 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Saved Recommendations</h1>
              <p className="text-slate-500 text-sm max-w-xl leading-relaxed">
                Review and implement curriculum adjustments curated from AI analysis and industry trends.
              </p>
            </div>

            {/* Toggle View */}
            <div className="bg-slate-100 p-1 rounded-full flex">
              <button className="px-6 py-1.5 bg-white shadow-sm rounded-full text-xs font-bold text-blue-600">Grid View</button>
              <button className="px-6 py-1.5 text-xs font-bold text-slate-400">List View</button>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-3 mb-8">
            <FilterButton label="Priority: All" />
            <FilterButton label="Date: Last 30 Days" />
            <FilterButton label="Module: CS101, CS202" />
            <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest ml-4 hover:underline">Clear All Filters</button>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-12 gap-8">
            {/* Left Feed */}
            <div className="col-span-8 space-y-6">
              <CourseCard />
              <div className="grid grid-cols-2 gap-6">
                <SimpleCard title="Data Structures" code="CS202" priority="MEDIUM" />
                <AddModuleCard />
              </div>
            </div>

            {/* Right Sidebar Stats */}
            <div className="col-span-4">
              <HealthStatsCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Reusable Components
const FilterButton = ({ label }) => (
  <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-200 transition">
    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
    {label}
    <ChevronDown size={14} />
  </button>
);

const CourseCard = () => (
  <div className="bg-white border border-slate-200 border-l-[4px] border-l-blue-600 rounded-xl shadow-sm overflow-hidden">
    <div className="p-6">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 flex items-center justify-center rounded-lg border border-blue-100">
             <span className="font-bold text-xs">{"< >"}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">Introduction to Computer Science</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded font-bold text-slate-500 uppercase">CS101</span>
              <span className="text-[11px] text-slate-400 font-medium">• 4 Recommendations Saved</span>
            </div>
          </div>
        </div>
        <span className="text-[9px] font-black bg-red-50 text-red-500 px-2.5 py-1 rounded-full uppercase tracking-tighter">High Priority</span>
      </div>

      <div className="space-y-3 mb-6">
        <RecommendationItem title="Integrate Rust Basics in Week 4" description="Analysis suggests introducing memory safety concepts via Rust alongside C++ to align with industry security standards." />
        <RecommendationItem title="AI Ethics Seminar Addition" description="Recommended 2-hour guest lecture on Large Language Models and academic integrity." />
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-slate-50">
        <div className="flex -space-x-2">
           {[1,2,3].map(i => (
             <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
             </div>
           ))}
           <div className="w-7 h-7 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[9px] font-bold text-slate-400">+3</div>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-full text-xs font-bold hover:bg-blue-700 shadow-lg shadow-blue-100">
          Review and Implement <Rocket size={14} />
        </button>
      </div>
    </div>
  </div>
);

const RecommendationItem = ({ title, description }) => (
  <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl">
    <h4 className="text-sm font-bold text-slate-800 mb-1">{title}</h4>
    <p className="text-xs text-slate-500 leading-relaxed font-medium">{description}</p>
  </div>
);

const SimpleCard = ({ title, code, priority }) => (
    <div className="bg-white border border-slate-200 border-l-[4px] border-l-emerald-500 rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
                <div className="w-5 h-4 bg-emerald-600/20 rounded"></div>
            </div>
            <span className="text-[9px] font-black bg-slate-100 text-slate-500 px-2 py-0.5 rounded uppercase">{priority}</span>
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-1">{title}</h3>
        <p className="text-[10px] font-bold text-slate-400 uppercase mb-4">{code}</p>
        <p className="text-[12px] text-slate-500 leading-relaxed font-medium mb-6">Recent industry feedback suggests shifting focus from purely relational to hybrid NoSQL-SQL paradigms in...</p>
        <div className="flex justify-between items-center pt-4 border-t border-slate-50">
            <span className="text-[10px] text-slate-400 font-bold">Last updated 2 days ago</span>
            <button className="text-[10px] font-black text-emerald-600 uppercase tracking-widest flex items-center gap-1">Review ↗</button>
        </div>
    </div>
);

const HealthStatsCard = () => (
  <div className="bg-[#EBFDF9] border border-emerald-100 rounded-2xl p-8 relative overflow-hidden h-full min-h-[500px]">
    <h3 className="text-emerald-900 font-bold text-lg mb-6 tracking-tight">Implementation Health</h3>
    
    <div className="flex justify-between items-end mb-2">
        <span className="text-[10px] font-black text-emerald-700 tracking-widest uppercase">Adoption Rate</span>
        <span className="text-lg font-black text-emerald-900">68%</span>
    </div>
    <div className="w-full h-2 bg-white rounded-full mb-8 overflow-hidden">
        <div className="h-full bg-emerald-400 rounded-full" style={{ width: '68%' }}></div>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-xl p-6 border border-emerald-50 shadow-sm">
            <p className="text-2xl font-black text-slate-800">12</p>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Pending</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-emerald-50 shadow-sm">
            <p className="text-2xl font-black text-emerald-600">45</p>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Applied</p>
        </div>
    </div>

    {/* Graphic area mock */}
    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-emerald-100/50 to-transparent">
        <img src="https://i.imgur.com/vHqBNoo.png" alt="abstract-waves" className="w-full h-full object-cover opacity-40 mix-blend-multiply" />
    </div>
  </div>
);

const AddModuleCard = () => (
  <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-center bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer group">
    <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 mb-4 group-hover:scale-110 transition-transform">
        <Plus size={24} />
    </div>
    <h4 className="font-bold text-slate-800 mb-1">Add Module Recommendation</h4>
    <p className="text-[11px] text-slate-400 max-w-[180px]">Manually save or import recommendations from ChatMate sessions.</p>
  </div>
);