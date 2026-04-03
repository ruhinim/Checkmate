import React from 'react';
import Sidebar from "../components/Sidebar";
import { 
  Search, Bell, HelpCircle, TrendingUp, Target, 
  Users, MessageSquare, MoreVertical, ExternalLink 
} from "lucide-react";

export default function StudentAnalytics() {
  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Navigation Bar */}
        <nav className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-8 shrink-0 sticky top-0 z-10">
          <div className="text-slate-800 font-bold text-sm tracking-tight">Student Analytics Dashboard</div>
          <div className="flex items-center gap-6">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input 
                type="text" 
                placeholder="Search students or metrics..." 
                className="w-full bg-slate-50 rounded-full pl-9 pr-4 py-2 text-xs focus:outline-none border border-transparent focus:border-slate-200"
              />
            </div>
            <Bell size={18} className="text-slate-400" />
            <HelpCircle size={18} className="text-slate-400" />
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-100">
              <img src="https://ui-avatars.com/api/?name=Dr+Smith" alt="profile" />
            </div>
          </div>
        </nav>

        <main className="p-8 max-w-[1400px] mx-auto w-full space-y-8">
          
          {/* Top Metric Cards */}
          <div className="grid grid-cols-3 gap-6">
            <MetricCard 
              label="Avg Grades" 
              value="74%" 
              trend="+2.4%" 
              progress={74} 
              color="bg-blue-600" 
              trendIcon={<TrendingUp size={12}/>} 
            />
            <MetricCard 
              label="Pass Rate" 
              value="92%" 
              trend="Target Met" 
              progress={92} 
              color="bg-emerald-500" 
              trendIcon={<Target size={12}/>} 
            />
            <MetricCard 
              label="Engagement Index" 
              value="High" 
              trend="Top 5%" 
              dots={4} 
              color="text-emerald-500" 
              trendIcon={<Users size={12}/>} 
            />
          </div>

          <div className="grid grid-cols-12 gap-8">
            {/* Performance Trends Chart Placeholder */}
            <div className="col-span-8 bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-lg font-black text-slate-800">Performance Trends</h3>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1">Course progression CS101 – CS304</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold text-slate-400 uppercase">AY 2023/24</span>
                  <span className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-lg text-[10px] font-bold text-blue-600 uppercase">All Sections</span>
                </div>
              </div>
              
              {/* Simplified Visual Representation of the Line Chart */}
              <div className="h-64 relative mt-12 flex items-end justify-between px-4 border-b border-slate-100">
                 {/* This represents the grid lines and data points from the design */}
                 <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    {[1,2,3,4].map(i => <div key={i} className="w-full border-t border-slate-50"></div>)}
                 </div>
                 {['CS101', 'CS102', 'CS201', 'CS202', 'CS301', 'CS302', 'CS304'].map((code, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-4 relative z-10">
                        <div className={`w-2.5 h-2.5 rounded-full border-2 border-white shadow-sm ${idx % 2 === 0 ? 'bg-blue-600' : 'bg-emerald-500'}`}></div>
                        <span className="text-[10px] font-bold text-slate-400 mb-[-28px]">{code}</span>
                    </div>
                 ))}
                 {/* Svg line overlays would go here in a production implementation */}
              </div>

              <div className="flex gap-6 mt-12 pt-6 border-t border-slate-50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  <span className="text-[11px] font-bold text-slate-600">Current Cohort Performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-[11px] font-bold text-slate-600">Historical Institution Average</span>
                </div>
              </div>
            </div>

            {/* Qualitative Feedback Sidebar */}
            <div className="col-span-4 bg-blue-600 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl shadow-blue-100">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8">
                  <MessageSquare size={18} className="text-blue-200" />
                  <h3 className="font-black tracking-tight text-lg">Feedback Insights</h3>
                </div>

                <div className="bg-blue-500/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl mb-8 italic text-sm leading-relaxed">
                  "Students find CS202 lab assignments highly relevant but challenging."
                  <div className="flex justify-between items-center mt-4 not-italic font-black text-[10px] uppercase tracking-widest text-blue-200">
                    <span>Top Insight</span>
                    <span>84 mentions</span>
                  </div>
                </div>

                <ul className="space-y-4">
                  <FeedbackBullet text="Positive sentiment regarding the new AI Ethics module integration." />
                  <FeedbackBullet text="Requested more real-world case studies in CS304 capstones." />
                  <FeedbackBullet text="Strong preference for asynchronous lecture recordings noted." />
                </ul>

                <button className="w-full mt-10 py-3 bg-white text-blue-600 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-50 transition-colors shadow-lg">
                  View Qualitative Data
                </button>
              </div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Top Performing Students Table */}
          <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm">
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-black text-slate-800">Top Performing Students</h3>
                <button className="flex items-center gap-2 text-blue-600 text-xs font-bold hover:underline">
                    View Full Directory <ExternalLink size={14} />
                </button>
            </div>
            
            <table className="w-full">
                <thead>
                    <tr className="text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50">
                        <th className="pb-4">Student Name</th>
                        <th className="pb-4">Current Module</th>
                        <th className="pb-4">Avg Grade</th>
                        <th className="pb-4">Engagement</th>
                        <th className="pb-4 text-right">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                    <StudentRow name="Alex Martinez" id="440129" module="CS304: Advanced Algos" grade="98%" engagement={5} avatar="https://ui-avatars.com/api/?name=Alex+M" />
                    <StudentRow name="Jordan Lee" id="440210" module="CS304: Advanced Algos" grade="94%" engagement={4} avatar="https://ui-avatars.com/api/?name=Jordan+L" />
                    <StudentRow name="Sarah Khan" id="440332" module="CS202: Systems Design" grade="91%" engagement={4} avatar="https://ui-avatars.com/api/?name=Sarah+K" />
                </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

// Sub-components
const MetricCard = ({ label, value, trend, progress, dots, color, trendIcon }) => (
  <div className="bg-white border border-slate-100 rounded-[28px] p-6 shadow-sm flex flex-col justify-between min-h-[160px]">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
        <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-900">{value}</span>
            <span className={`text-[10px] font-bold flex items-center gap-1 ${color}`}>
                {trendIcon} {trend}
            </span>
        </div>
      </div>
    </div>
    
    {progress ? (
      <div className="w-full bg-slate-50 h-1.5 rounded-full overflow-hidden mt-6">
        <div className={`${color} h-full rounded-full transition-all`} style={{ width: `${progress}%` }}></div>
      </div>
    ) : dots ? (
      <div className="flex gap-1.5 mt-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${i < dots ? 'bg-emerald-500' : 'bg-slate-100'}`}></div>
        ))}
      </div>
    ) : null}
  </div>
);

const FeedbackBullet = ({ text }) => (
    <li className="flex items-start gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-1.5 shrink-0"></div>
        <span className="text-[11px] font-bold text-blue-50 leading-relaxed">{text}</span>
    </li>
);

const StudentRow = ({ name, id, module, grade, engagement, avatar }) => (
    <tr className="group hover:bg-slate-50 transition-colors">
        <td className="py-4">
            <div className="flex items-center gap-3">
                <img src={avatar} className="w-9 h-9 rounded-full border border-slate-100" alt={name} />
                <div>
                    <p className="text-xs font-black text-slate-900">{name}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">ID: #{id}</p>
                </div>
            </div>
        </td>
        <td className="text-xs font-bold text-slate-600">{module}</td>
        <td className="text-xs font-black text-emerald-600">{grade}</td>
        <td>
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-[10px] ${i < engagement ? 'text-emerald-500' : 'text-slate-200'}`}>★</span>
                ))}
            </div>
        </td>
        <td className="text-right">
            <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors"><MoreVertical size={16} /></button>
        </td>
    </tr>
);