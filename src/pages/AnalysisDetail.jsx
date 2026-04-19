import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { 
  FileText, 
  History, 
  TrendingDown, 
  ThumbsDown, 
  Lightbulb, 
  AlertTriangle,
  Stethoscope
} from "lucide-react";

export default function AnalysisDetail() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-screen bg-[#F8FAFC] overflow-hidden font-sans text-slate-900 relative">
      
      {/* Background Dot Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.5] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`, backgroundSize: '32px 32px' }}>
      </div>

      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden z-10 relative">
        <Topbar />

        <main className="flex-1 p-8 overflow-y-auto custom-scrollbar flex flex-col gap-6">
          
          {/* HEADER SECTION */}
          <div className="flex justify-between items-start shrink-0">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                Curriculum Audit v2.4 — At Risk
              </span>
              
              <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-3">
                CS201 – Database Systems Analysis
              </h1>
              
              <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-2xl">
                Critical audit reveals significant misalignment with modern distributed systems. 
                Legacy focus on Relational-only architecture creates substantial readiness gaps for 
                NoSQL and Cloud deployments.
              </p>
            </div>

            <button className="px-6 py-4 bg-[#2563EB] hover:bg-blue-700 text-white rounded-[20px] font-black text-sm transition-all shadow-lg shadow-blue-500/30 flex items-center gap-3 mt-2">
              <div className="text-left leading-tight">
                <div className="font-bold text-blue-100 text-[10px] uppercase tracking-wider">View AI</div>
                <div>Recovery Plan</div>
              </div>
              <Stethoscope size={24} />
            </button>
          </div>

          {/* TOP GRID: DONUT (Left) + METRICS & BARS (Right) */}
          <div className="grid grid-cols-12 gap-6 min-h-0 shrink-0">
            
            {/* LEFT: Alignment Score Donut */}
            <div className="col-span-4 bg-white rounded-[32px] p-8 border border-white shadow-xl shadow-slate-200/40 flex flex-col items-center justify-center text-center">
              <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-8">
                Industry Alignment Score
              </h3>
              
              <div className="mb-8">
                <Donut value={32} />
              </div>

              <p className="text-xs text-slate-500 font-medium leading-relaxed px-4">
                The curriculum is heavily skewed towards 1990s relational standards, 
                lacking essential modern data engineering competencies.
              </p>
            </div>

            {/* RIGHT: Metric Cards + Skills Bar Chart */}
            <div className="col-span-8 flex flex-col gap-6">
              
              {/* 3 Metric Cards */}
              <div className="grid grid-cols-3 gap-6">
                <MetricCard 
                  color="red"
                  icon={<FileText size={14}/>}
                  badge="Urgent Attention"
                  value="12"
                  title="Skill Gaps Identified"
                  desc="Zero coverage of Document Stores, Key-Value pairs, or CAP Theorem."
                />
                <MetricCard 
                  color="blue"
                  icon={<History size={14}/>}
                  badge="Recency Audit"
                  value="65%"
                  title="Outdated Content"
                  desc="Excessive focus on manual normalization and legacy SQL dialects."
                />
                <MetricCard 
                  color="blue"
                  icon={<TrendingDown size={14}/>}
                  badge="Benchmark"
                  value="Low"
                  title="Industry Match"
                  desc="Bottom 10% performance compared to peer research institutions."
                />
              </div>

              {/* Skill Alignment Bar Chart */}
              <div className="flex-1 bg-white rounded-[32px] p-8 border border-white shadow-xl shadow-slate-200/40 flex flex-col justify-center">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
                    Skill Alignment By Industry Sector
                  </h3>
                  <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500">
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-600"></div> Current</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-slate-200"></div> Market Need</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <SkillBar label="Big Data & Scalability" value={24} />
                  <SkillBar label="Cloud Infrastructure" value={31} />
                  <SkillBar label="Real-time Stream Processing" value={18} />
                </div>
              </div>

            </div>
          </div>

          {/* BOTTOM GRID: FEEDBACK TILE (Left) + BENCHMARKING (Right) */}
          <div className="grid grid-cols-12 gap-6 pb-6">
            
            {/* 🔥 NEW SINGLE TILE FEEDBACK SECTION 🔥 */}
            <div className="col-span-8 bg-white rounded-[32px] p-8 border border-white shadow-xl shadow-slate-200/40 flex flex-col">
              
              {/* Unified Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-[22px] font-black text-slate-900 tracking-tight">Student Feedback Influence</h3>
                  <p className="text-[13px] text-slate-500 font-medium mt-1">Frustration trends emerging from student internship placement data.</p>
                </div>
                <div className="bg-[#EFF6FF] text-blue-700 px-6 py-3 rounded-[20px] flex flex-col items-center justify-center border border-blue-100">
                  <span className="text-[11px] font-bold mb-1">Positive Sentiment:</span>
                  <span className="text-3xl font-black leading-none">38%</span>
                </div>
              </div>

              {/* Inner Split Content */}
              <div className="grid grid-cols-2 gap-6 flex-1">
                
                {/* Left: Verbatim Quotes */}
                <div className="flex flex-col gap-5">
                  {/* Quote 1 */}
                  <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm shadow-slate-100 flex-1 hover:border-red-100 transition-colors">
                    <div className="flex items-center gap-2 mb-4 text-[#E11D48]">
                      <ThumbsDown size={18} />
                      <span className="text-[11px] font-black uppercase tracking-[2px]">Workplace Irrelevance</span>
                    </div>
                    <p className="text-[13px] text-slate-700 italic font-medium leading-relaxed">
                      "Felt completely unprepared for my internship where they used MongoDB and DynamoDB exclusively."
                    </p>
                  </div>
                  
                  {/* Quote 2 */}
                  <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm shadow-slate-100 flex-1 hover:border-blue-100 transition-colors">
                    <div className="flex items-center gap-2 mb-4 text-[#2563EB]">
                      <Lightbulb size={18} />
                      <span className="text-[11px] font-black uppercase tracking-[2px]">Requested Topics</span>
                    </div>
                    <p className="text-[13px] text-slate-700 italic font-medium leading-relaxed">
                      "Needs more focus on how databases scale in the cloud rather than manual disk management."
                    </p>
                  </div>
                </div>

                {/* Right: Word Cloud Box */}
                <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm shadow-slate-100 flex flex-col items-center justify-center text-center hover:border-slate-200 transition-colors">
                  <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-8">Sentiment Word Cloud</h4>
                  
                  {/* Word Cloud Arrangement */}
                  <div className="flex flex-wrap justify-center items-baseline gap-x-5 gap-y-3 px-4">
                    <span className="text-4xl font-black text-[#CB4538] tracking-tight">Obsolete</span>
                    <span className="text-2xl font-black text-[#5C8AE8] tracking-tight">Outdated</span>
                    <span className="text-3xl font-black text-[#1F2937] tracking-tight">Rigid</span>
                    <span className="text-base font-bold text-[#6B7280]">Theoretical</span>
                    <span className="text-xl font-bold text-[#9CA3AF]">Limited</span>
                    <span className="text-lg font-black text-[#ED746A]">Frustrating</span>
                  </div>
                </div>

              </div>
            </div>

            {/* BENCHMARKING SECTION (Right Sidebar) */}
            <div className="col-span-4 bg-[#E2E8F0] rounded-[32px] p-8 flex flex-col shadow-inner">
              <h3 className="text-[11px] font-black text-slate-600 uppercase tracking-widest mb-8">Internal Peer Benchmarking</h3>
              
              <div className="space-y-8 flex-1">
                <div className="flex items-center gap-5 bg-white/50 p-4 rounded-[20px] backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white rounded-[16px] flex items-center justify-center text-red-500 shadow-sm">
                    <TrendingDown size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">vs Department Avg</p>
                    <p className="text-2xl font-black text-red-600 leading-none">22% Lower</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 bg-white/50 p-4 rounded-[20px] backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white rounded-[16px] flex items-center justify-center text-orange-500 shadow-sm">
                    <AlertTriangle size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Student Engagement</p>
                    <p className="text-xl font-black text-orange-600 leading-none">Bottom Tier</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-300">
                <p className="text-[10px] font-bold text-slate-500 mb-4">Module historical performance trend</p>
                <div className="flex items-end gap-2 h-16">
                  <div className="flex-1 bg-blue-400/80 rounded-t-md h-full hover:bg-blue-500 transition-colors cursor-pointer"></div>
                  <div className="flex-1 bg-blue-500/80 rounded-t-md h-[60%] hover:bg-blue-600 transition-colors cursor-pointer"></div>
                  <div className="flex-1 bg-blue-700/90 rounded-t-md h-[25%] hover:bg-blue-800 transition-colors cursor-pointer"></div>
                </div>
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}

/* --- SUB-COMPONENTS --- */

function MetricCard({ color, icon, badge, value, title, desc }) {
  const isRed = color === "red";
  
  return (
    <div className={`bg-white rounded-[24px] p-6 shadow-xl shadow-slate-200/40 border-y border-r border-slate-100 border-l-4 ${isRed ? 'border-l-[#E11D48]' : 'border-l-[#2563EB]'} flex flex-col group hover:-translate-y-1 transition-transform`}>
      <div className={`flex items-center gap-2 text-[9px] font-black uppercase tracking-widest mb-4 ${isRed ? 'text-[#E11D48]' : 'text-[#2563EB]'}`}>
        {icon} {badge}
      </div>
      <div className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">{value}</div>
      <div className="text-[13px] font-bold text-slate-800 mb-3">{title}</div>
      <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-auto">
        {desc}
      </p>
    </div>
  );
}

function SkillBar({ label, value }) {
  return (
    <div>
      <div className="flex justify-between text-[12px] font-bold text-slate-700 mb-2">
        <span>{label}</span>
        <span className="text-[#2563EB]">{value}% Match</span>
      </div>
      <div className="h-3.5 bg-slate-100 rounded-full relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-[#2563EB] rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function Donut({ value }) {
  const radius = 65;
  const stroke = 16;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-56 h-56 flex items-center justify-center">
  <svg width="224" height="224" className="transform -rotate-90 drop-shadow-sm">
    <circle
      stroke="#F1F5F9"
      fill="transparent"
      strokeWidth={8}
      r={88}
      cx="112"
      cy="112"
    />
    <circle
      stroke="#E11D48"
      fill="transparent"
      strokeWidth={8}
      strokeDasharray={2 * Math.PI * 88}
      strokeDashoffset={offset}
      r={88}
      cx="112"
      cy="112"
      strokeLinecap="round"
      className="transition-all duration-1000 ease-out"
    />
  </svg>

  <div className="absolute inset-0 flex flex-col items-center justify-center">
    <span className="text-[60px] font-black text-slate-800 tracking-tighter leading-none">
      {value}%
    </span>

    <span className="text-[10px] font-black text-[#E11D48] uppercase tracking-widest mt-2 bg-red-50 px-2 py-1 rounded-md">
      Critical Gap
    </span>
  </div>
</div>
  );
}