import React from 'react';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { 
  TrendingUp, Target, Users, MessageSquare, 
  MoreVertical, ExternalLink, Activity
} from "lucide-react";

export default function StudentAnalytics() {
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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full mb-4 border border-slate-200 shadow-sm">
                <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full animate-pulse"></span>
                <span className="text-[9px] font-black text-[#D97706] uppercase tracking-widest leading-none">Cohort Intelligence</span>
              </div>
              
              <h1 className="text-[40px] font-black leading-none tracking-tighter text-[#0F172A] mb-3">
                Student Analytics
              </h1>
              <p className="text-slate-500 text-sm font-medium max-w-2xl leading-relaxed">
                Track global cohort performance, engagement indices, and qualitative feedback across all computer science modules.
              </p>
            </div>
            
            <div className="flex gap-4">
               <button className="px-6 py-3.5 bg-white border-2 border-slate-100 rounded-2xl text-[11px] font-black shadow-sm hover:shadow-md hover:border-slate-200 transition-all flex items-center gap-2 text-slate-700 uppercase tracking-wider">
                Export Data
              </button>
            </div>
          </div>

          {/* TOP METRIC CARDS */}
          <div className="grid grid-cols-3 gap-6 shrink-0 pb-2">
            <MetricCard 
              label="Avg Cohort Grade" 
              value="74%" 
              trend="+2.4%" 
              progress={74} 
              color="bg-[#2563EB]"
              textColor="text-[#2563EB]" 
              trendIcon={<TrendingUp size={14}/>} 
            />
            <MetricCard 
              label="Global Pass Rate" 
              value="92%" 
              trend="Target Met" 
              progress={92} 
              color="bg-[#0D9488]" 
              textColor="text-[#0D9488]"
              trendIcon={<Target size={14}/>} 
            />
            <MetricCard 
              label="Engagement Index" 
              value="High" 
              trend="Top 5%" 
              dots={4} 
              color="bg-amber-500" 
              textColor="text-amber-500"
              trendIcon={<Users size={14}/>} 
            />
          </div>

          {/* MIDDLE ROW: Chart & Feedback */}
          <div className="grid grid-cols-12 gap-6 min-h-0 shrink-0">
            
            {/* Performance Trends Chart */}
            <div className="col-span-8 bg-white border border-white rounded-[40px] p-8 shadow-xl shadow-slate-200/40 flex flex-col">
              <div className="flex justify-between items-start mb-10 shrink-0">
                <div>
                  <h3 className="text-[20px] font-black text-[#0F172A] tracking-tight">Performance Trends</h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Course progression CS101 – CS304</p>
                </div>
                <div className="flex gap-3">
                  <span className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black text-slate-500 uppercase tracking-wider">AY 2023/24</span>
                  <span className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-xl text-[10px] font-black text-[#2563EB] uppercase tracking-wider">All Sections</span>
                </div>
              </div>
              
              {/* Simplified Visual Representation of the Line Chart */}
              <div className="flex-1 min-h-[200px] relative flex items-end justify-between px-6 border-b-2 border-slate-50">
                 {/* Grid Lines */}
                 <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-50">
                    {[1,2,3,4].map(i => <div key={i} className="w-full border-t border-dashed border-slate-200"></div>)}
                 </div>
                 
                 {/* Data Points */}
                 {['CS101', 'CS102', 'CS201', 'CS202', 'CS301', 'CS302', 'CS304'].map((code, idx) => {
                    // Stagger heights for a mock chart look
                    const heights = ['h-[40%]', 'h-[60%]', 'h-[45%]', 'h-[75%]', 'h-[65%]', 'h-[85%]', 'h-[70%]'];
                    return (
                    <div key={idx} className={`flex flex-col items-center justify-end relative z-10 w-4 group ${heights[idx]}`}>
                        <div className="absolute bottom-0 w-1 bg-gradient-to-t from-slate-100 to-transparent h-full -z-10 group-hover:from-blue-100 transition-colors"></div>
                        <div className={`w-3 h-3 rounded-full border-2 border-white shadow-md mb-2 transition-transform group-hover:scale-150 ${idx % 2 === 0 ? 'bg-[#2563EB]' : 'bg-[#0D9488]'}`}></div>
                        <span className="absolute -bottom-8 text-[10px] font-black text-slate-400 tracking-widest">{code}</span>
                    </div>
                 )})}
              </div>

              <div className="flex justify-center gap-8 mt-12 pt-6 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB] shadow-sm"></div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Current Cohort Performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0D9488] shadow-sm"></div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Historical Institution Average</span>
                </div>
              </div>
            </div>

            {/* Qualitative Feedback Sidebar */}
            <div className="col-span-4 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-[40px] p-8 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20 flex flex-col shrink-0">
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-8 shrink-0">
                  <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-md">
                    <MessageSquare size={18} className="text-blue-100" />
                  </div>
                  <h3 className="font-black tracking-tight text-[20px] text-white">Feedback Insights</h3>
                </div>

                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[24px] mb-8 shadow-inner shrink-0">
                  <p className="italic text-[13px] leading-relaxed font-medium text-blue-50">
                    "Students find CS202 lab assignments highly relevant but noted that the cloud deployment pace is challenging."
                  </p>
                  <div className="flex justify-between items-center mt-5 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1.5">
                      <Activity size={12} className="text-amber-300" />
                      <span className="font-black text-[9px] uppercase tracking-widest text-amber-300">Top Insight</span>
                    </div>
                    <span className="font-bold text-[10px] text-blue-200 bg-blue-900/30 px-2 py-1 rounded-md">84 mentions</span>
                  </div>
                </div>

                <ul className="space-y-5 flex-1">
                  <FeedbackBullet text="Positive sentiment regarding the new AI Ethics module integration." />
                  <FeedbackBullet text="Requested more real-world case studies in CS304 capstones." />
                  <FeedbackBullet text="Strong preference for asynchronous lecture recordings noted." />
                </ul>

                <button className="w-full mt-6 py-4 bg-white text-[#1E40AF] rounded-2xl text-[11px] font-black uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-xl shrink-0">
                  View Qualitative Data
                </button>
              </div>
              
              {/* Ambient Glow */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-400/20 rounded-full blur-[80px] pointer-events-none"></div>
            </div>
          </div>

          {/* BOTTOM ROW: Top Performing Students Table */}
          <div className="bg-white border border-white rounded-[40px] p-8 shadow-xl shadow-slate-200/40 pb-10">
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-[20px] font-black text-[#0F172A] tracking-tight">Top Performing Students</h3>
                <button className="flex items-center gap-2 text-[#2563EB] text-[11px] font-black uppercase tracking-widest hover:underline hover:text-blue-800 transition-colors bg-blue-50 px-4 py-2 rounded-xl">
                    Full Directory <ExternalLink size={14} />
                </button>
            </div>
            
            <table className="w-full">
                <thead>
                    <tr className="text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b-2 border-slate-50">
                        <th className="pb-4 pl-4">Student Name</th>
                        <th className="pb-4">Current Module Focus</th>
                        <th className="pb-4">Avg Grade</th>
                        <th className="pb-4">Engagement Index</th>
                        <th className="pb-4 pr-4 text-right">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                    <StudentRow name="Alex Martinez" id="440129" module="CS304: Advanced Algorithms" grade="98%" engagement={5} avatar="https://ui-avatars.com/api/?name=Alex+M" />
                    <StudentRow name="Jordan Lee" id="440210" module="CS304: Advanced Algorithms" grade="94%" engagement={4} avatar="https://ui-avatars.com/api/?name=Jordan+L" />
                    <StudentRow name="Sarah Khan" id="440332" module="CS202: Systems Design" grade="91%" engagement={4} avatar="https://ui-avatars.com/api/?name=Sarah+K" />
                </tbody>
            </table>
          </div>

        </main>
      </div>
    </div>
  );
}

/* --- REUSABLE COMPONENTS --- */

const MetricCard = ({ label, value, trend, progress, dots, color, textColor, trendIcon }) => (
  <div className="bg-white border border-white rounded-[32px] p-8 shadow-xl shadow-slate-200/40 flex flex-col justify-between min-h-[180px] hover:-translate-y-1 transition-transform duration-300">
    <div className="flex justify-between items-start mb-6">
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
          <span className={`text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 ${textColor}`}>
            {trendIcon} {trend}
          </span>
        </div>
        <span className="text-[40px] font-black text-[#0F172A] tracking-tighter leading-none">{value}</span>
      </div>
    </div>
    
    <div className="mt-auto">
      {progress ? (
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden shadow-inner">
          <div className={`${color} h-full rounded-full transition-all duration-1000 ease-out`} style={{ width: `${progress}%` }}></div>
        </div>
      ) : dots ? (
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`h-2 rounded-full flex-1 transition-colors ${i < dots ? color : 'bg-slate-100'}`}></div>
          ))}
        </div>
      ) : null}
    </div>
  </div>
);

const FeedbackBullet = ({ text }) => (
    <li className="flex items-start gap-4">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 shrink-0"></div>
        <span className="text-[12px] font-medium text-blue-50 leading-relaxed">{text}</span>
    </li>
);

const StudentRow = ({ name, id, module, grade, engagement, avatar }) => (
    <tr className="group hover:bg-slate-50/50 transition-colors cursor-pointer">
        <td className="py-5 pl-4 rounded-l-[20px] group-hover:bg-white group-hover:shadow-sm">
            <div className="flex items-center gap-4">
                <img src={avatar} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt={name} />
                <div>
                    <p className="text-[13px] font-black text-[#0F172A] tracking-tight">{name}</p>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-0.5">ID: #{id}</p>
                </div>
            </div>
        </td>
        <td className="text-[12px] font-bold text-slate-600 group-hover:bg-white group-hover:shadow-sm py-5">
          <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">{module}</span>
        </td>
        <td className="text-[14px] font-black text-[#0D9488] group-hover:bg-white group-hover:shadow-sm py-5">
          {grade}
        </td>
        <td className="group-hover:bg-white group-hover:shadow-sm py-5">
            <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-[12px] ${i < engagement ? 'text-[#F59E0B]' : 'text-slate-200'}`}>★</span>
                ))}
            </div>
        </td>
        <td className="text-right pr-4 rounded-r-[20px] group-hover:bg-white group-hover:shadow-sm py-5">
            <button className="p-2.5 text-slate-400 hover:text-[#2563EB] hover:bg-blue-50 rounded-xl transition-all">
              <MoreVertical size={16} />
            </button>
        </td>
    </tr>
);