import React from 'react';
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatsCard from "../components/StatsCard";
import { Link2, Cloud, ArrowRight, Eye, ScanLine } from "lucide-react";

// 🔥 ASSET IMPORT
import bg1 from '../assets/bg1.jpeg';

export default function Dashboard() {
  return (
    <div className="flex h-screen w-screen bg-[#F8FAFC] overflow-hidden font-sans relative">
      {/* Background Dot Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.5] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`, backgroundSize: '32px 32px' }}>
      </div>

      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 z-10 relative">
        <Topbar />

        <main className="flex-1 p-8 flex flex-col gap-6 overflow-hidden">
          
          {/* HEADER SECTION */}
          <div className="flex justify-between items-center shrink-0">
            <div>
              <h1 className="text-[36px] font-black text-[#0F172A] tracking-tighter leading-none">Intelligence Hub</h1>
              <p className="text-slate-400 font-bold text-[11px] uppercase tracking-[2px] mt-2">Academic Year 2024/25 • Semester 2 Overview</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3.5 bg-white border-2 border-slate-100 rounded-2xl text-[11px] font-black shadow-sm hover:shadow-md transition-all flex items-center gap-2 text-slate-600 uppercase tracking-wider">
                <Eye size={18} className="text-slate-400" /> View recommendations
              </button>
              
              {/* 🔗 LINK TO MODULES PAGE */}
              <Link to="/modules">
                <button className="px-8 py-3.5 bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white rounded-2xl text-[11px] font-black shadow-xl shadow-blue-700/30 hover:scale-[1.03] transition-all flex items-center gap-2 uppercase tracking-widest">
                  <ScanLine size={18} className="text-blue-200" /> Scan modules
                </button>
              </Link>
            </div>
          </div>

          {/* TOP STATS - 12% Height */}
          <div className="h-[12%] grid grid-cols-4 gap-5 shrink-0">
            <StatsCard title="Modules Analysed" value="124" iconType="modules" accentColor="blue" />
            <StatsCard title="Alignment %" value="78%" iconType="alignment" highlight="+5%" accentColor="green" />
            <StatsCard title="Recommendations" value="12" iconType="recommendations" accentColor="indigo" />
            <StatsCard title="Avg Pass Rate" value="82%" iconType="passRate" accentColor="orange" />
          </div>

          {/* MIDDLE SECTION - Flex-1 (Fixed for no overlap) */}
          <div className="flex-1 grid grid-cols-12 gap-6 overflow-hidden min-h-0">
            
            {/* HERO INSIGHT CARD - FULL IMAGE FIT */}
            <div className="col-span-8 relative bg-white rounded-[40px] border border-white shadow-2xl shadow-slate-200/40 overflow-hidden p-10 flex flex-col justify-center group">
              
              {/* 🎨 FULL CARD BACKGROUND IMAGE (bg1.jpeg) */}
              <img 
                src={bg1} 
                className="absolute inset-0 w-full h-full object-cover opacity-[0.25] pointer-events-none grayscale mix-blend-multiply transition-transform duration-1000 group-hover:scale-110"
                alt="AI Background Visual"
              />

              {/* Readability Gradient Layer (Fades image out behind text) */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-1"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#CCFBF1] rounded-full mb-6 border border-[#14B8A6]/10">
                  <span className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full animate-pulse"></span>
                  <span className="text-[9px] font-black text-[#14B8A6] uppercase tracking-widest leading-none">Intelligence Insight</span>
                </div>

                <h2 className="text-[36px] leading-[1.05] font-black text-[#0F172A] mb-4 max-w-lg tracking-tighter">
                  AI and ML adoption in FinTech is rising by <span className="text-[#2563EB]">40% annually.</span>
                </h2>

                <p className="text-slate-500 text-lg max-w-md mb-8 leading-relaxed font-medium">
                  Our analysis suggests a critical skills gap. We recommend updating the <span className="font-bold text-slate-800 underline decoration-blue-500/30">CS302 Syllabus</span>.
                </p>

                <div className="flex items-center gap-6">
                  <button className="px-10 py-4 bg-[#0F172A] text-white rounded-2xl font-black text-[11px] shadow-2xl hover:bg-black hover:scale-105 transition-all uppercase tracking-[1.5px]">
                    Action Syllabus Update
                  </button>
                  <button className="text-slate-400 font-bold text-xs hover:text-black hover:translate-x-1 transition-all cursor-pointer">Explore Data →</button>
                </div>
              </div>
            </div>

            {/* CRITICAL RISK ALERTS (Red Section) */}
            <div className="col-span-4 h-full bg-[#FFF1F2] rounded-[40px] border border-[#FFE4E6] p-8 flex flex-col overflow-hidden">
              <h3 className="text-[11px] font-black text-[#E11D48] uppercase tracking-[3px] mb-6 shrink-0 text-center">Critical Risk Alerts</h3>
              <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                <div className="bg-white p-5 rounded-[24px] border border-red-50 shadow-sm hover:translate-x-1 transition-transform cursor-pointer">
                  <p className="text-[9px] font-bold text-red-500 uppercase mb-1 tracking-widest">Engagement</p>
                  <h4 className="font-bold text-slate-800 text-xs leading-snug">CS201 has low student engagement scores this week.</h4>
                </div>
                <div className="bg-white p-5 rounded-[24px] border border-red-50 shadow-sm hover:translate-x-1 transition-transform cursor-pointer">
                  <p className="text-[9px] font-black text-orange-500 uppercase mb-1 tracking-widest">Pass Rate</p>
                  <h4 className="font-bold text-slate-800 text-xs leading-snug">MT105 predicted pass rate is at critical risk.</h4>
                </div>
              </div>
              <button className="w-full mt-4 py-4 border-2 border-red-100 text-red-500 rounded-2xl text-[10px] font-black uppercase tracking-widest bg-white/50 hover:bg-white transition-all shadow-sm">
                Launch Intervention Plan
              </button>
            </div>
          </div>

          {/* BOTTOM SECTION - 22% Height (Yellow Highlight) */}
          <div className="h-[22%] shrink-0">
            <div className="bg-[#fcf8c5] rounded-[36px] border border-[#FEF3C7] p-6 h-full shadow-[0_8px_30px_rgba(251,191,36,0.06)] flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-4 bg-amber-400 rounded-full animate-pulse"></div>
                <h3 className="text-[10px] font-black text-amber-700 uppercase tracking-[2px]">Modules Needing Attention</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6 flex-1 items-center">
                {/* Module Item 1 */}
                <div className="flex items-center gap-5 p-4 bg-white/70 rounded-[28px] border border-amber-100 group hover:bg-white hover:shadow-xl hover:shadow-amber-200/30 transition-all cursor-pointer h-full">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-amber-600 border border-amber-50 group-hover:bg-amber-500 group-hover:text-white transition-all">
                    <Link2 size={22} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-extrabold text-[14px] text-slate-800 leading-none">CS102 - Data Structures</h4>
                    <div className="flex items-center gap-2 mt-2">
                       <span className="text-[8px] font-black text-amber-600 uppercase bg-amber-100 px-2 py-0.5 rounded leading-none">Action Required</span>
                       <span className="text-amber-700/50 text-[10px] font-bold italic">Updated 3y ago</span>
                    </div>
                  </div>
                  <ArrowRight size={18} className="text-amber-300 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                </div>

                {/* Module Item 2 */}
                <div className="flex items-center gap-5 p-4 bg-white/70 rounded-[28px] border border-amber-100 group hover:bg-white hover:shadow-xl hover:shadow-amber-200/30 transition-all cursor-pointer h-full">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-amber-600 border border-amber-50 group-hover:bg-amber-500 group-hover:text-white transition-all">
                    <Cloud size={22} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-extrabold text-[14px] text-slate-800 leading-none">CS304 - Cloud Computing</h4>
                    <div className="flex items-center gap-2 mt-2">
                       <span className="text-[8px] font-black text-amber-600 uppercase bg-amber-100 px-2 py-0.5 rounded leading-none">Gap Detected</span>
                       <span className="text-amber-700/50 text-[10px] font-bold italic">Industry Mismatch</span>
                    </div>
                  </div>
                  <ArrowRight size={18} className="text-amber-300 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}