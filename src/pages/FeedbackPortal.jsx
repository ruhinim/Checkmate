import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { 
  Star, ChevronDown, Send, History, 
  CheckCircle2, Info, Check, MessageSquare
} from "lucide-react";

export default function FeedbackPortal() {
  const [rating, setRating] = useState(4);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState("Select a Computer Science Module");

  const modules = ["CS101: Intro to Algorithms", "CS204: Distributed Systems", "CS402: Quantum Fundamentals"];

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
          <div className="flex justify-between items-end shrink-0 mb-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full mb-4 border border-slate-200 shadow-sm">
                <span className="w-1.5 h-1.5 bg-[#4F46E5] rounded-full animate-pulse"></span>
                <span className="text-[9px] font-black text-[#4F46E5] uppercase tracking-widest leading-none">Academic Review Cycle</span>
              </div>
              
              <h1 className="text-[40px] font-black leading-none tracking-tighter text-[#0F172A] mb-4">
                Feedback Portal
              </h1>
              <p className="text-slate-500 text-[14px] font-medium leading-relaxed">
                Share your insights on module efficacy and curriculum alignment. Your feedback directly informs the next academic review cycle.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 pb-10 min-h-0">
            
            {/* LEFT: Feedback Form */}
            <div className="col-span-8 flex flex-col h-full">
              <div className="bg-white border border-white rounded-[40px] p-10 shadow-xl shadow-slate-200/40 flex-1 flex flex-col">
                
                <div className="space-y-8">
                  
                  {/* Module Selection */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Target Module</label>
                    <div className="relative cursor-pointer">
                      <div 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full bg-[#F8FAFC] border-2 rounded-[20px] px-6 py-4 flex justify-between items-center transition-all duration-300
                          ${isDropdownOpen ? 'border-[#2563EB] shadow-md bg-white' : 'border-slate-100 hover:border-slate-200'}
                        `}
                      >
                        <span className={`text-[13px] font-bold ${selectedModule.includes('Select') ? 'text-slate-400' : 'text-slate-800'}`}>
                          {selectedModule}
                        </span>
                        <ChevronDown size={18} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-[#2563EB]' : 'text-slate-400'}`} />
                      </div>

                      {/* Dropdown Menu */}
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 shadow-xl rounded-[20px] overflow-hidden z-20">
                          {modules.map((mod) => (
                            <div 
                              key={mod}
                              onClick={() => { setSelectedModule(mod); setIsDropdownOpen(false); }}
                              className="px-6 py-4 text-[13px] font-bold text-slate-600 hover:bg-slate-50 hover:text-[#2563EB] transition-colors border-b border-slate-50 last:border-0 flex items-center gap-3"
                            >
                              {selectedModule === mod && <Check size={14} className="text-[#2563EB]" />}
                              <span className={selectedModule === mod ? 'ml-0 text-[#0F172A]' : 'ml-6'}>{mod}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quality Rating */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Curriculum Quality Rating</label>
                    <div className="flex items-center gap-6 bg-white border border-slate-100 shadow-sm w-fit p-3 rounded-[24px]">
                      <div className="flex gap-1.5 px-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star}
                            size={32} 
                            onClick={() => setRating(star)}
                            className={`cursor-pointer transition-colors hover:scale-110 active:scale-95 duration-200 
                              ${star <= rating ? 'fill-[#2563EB] text-[#2563EB]' : 'fill-slate-100 text-slate-200 hover:fill-slate-200'}
                            `} 
                          />
                        ))}
                      </div>
                      <div className="h-8 w-px bg-slate-100"></div>
                      <span className="bg-blue-50 text-[#2563EB] px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest">
                        {rating === 1 ? 'Poor (1.0)' : rating === 2 ? 'Fair (2.0)' : rating === 3 ? 'Average (3.0)' : rating === 4 ? 'Good (4.0)' : 'Excellent (5.0)'}
                      </span>
                    </div>
                  </div>

                  {/* Detailed Observations */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Detailed Observations</label>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Info size={14} />
                        <span className="text-[10px] font-bold">Markdown supported</span>
                      </div>
                    </div>
                    {/* Height increased to 200px */}
                    <textarea 
                      placeholder="Describe specific module strengths, weaknesses, or student engagement levels..."
                      className="w-full h-[200px] bg-[#F8FAFC] border-2 border-slate-100 rounded-[24px] p-6 text-[14px] font-medium text-slate-700 focus:outline-none focus:border-[#2563EB] focus:bg-white focus:shadow-md transition-all duration-300 placeholder:text-slate-400 resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Footer Actions - Brought up directly below the text area */}
                <div className="flex items-center justify-between pt-8 border-t border-slate-100 mt-8">
                  <div className="flex items-center gap-2.5 text-[#10B981] bg-emerald-50 px-4 py-2 rounded-xl">
                    <CheckCircle2 size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Draft saved 2m ago</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <button className="text-[11px] font-black text-slate-400 uppercase tracking-widest hover:text-[#0F172A] transition-colors">Discard</button>
                    <button className="bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white px-8 py-4 rounded-[20px] text-[11px] font-black uppercase tracking-widest flex items-center gap-3 shadow-xl shadow-blue-700/30 hover:scale-[1.03] transition-all">
                      Submit Feedback <Send size={16} className="rotate-[-45deg] mb-0.5 text-blue-200" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Submission History */}
            <div className="col-span-4 flex flex-col gap-6">
              
              <div className="bg-white border border-white rounded-[40px] p-8 shadow-xl shadow-slate-200/40 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-8 shrink-0">
                  <h3 className="font-black text-[#0F172A] text-[20px] tracking-tight">Recent History</h3>
                  <div className="p-3 bg-slate-50 rounded-2xl">
                    <History size={18} className="text-[#2563EB]" />
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  <HistoryCard 
                    tag="CS101 Analysis" 
                    date="Oct 24, 2026" 
                    title="Intro to Algorithms" 
                    desc="Current module mapping is excellent. Students showed high engagement during practical labs." 
                    rating={5}
                    color="border-[#10B981]"
                  />
                  <HistoryCard 
                    tag="CS402 Review" 
                    date="Sep 12, 2026" 
                    title="Quantum Fundamentals" 
                    desc="Resources for the linear algebra prerequisites need major updating." 
                    rating={3}
                    color="border-[#F59E0B]"
                  />
                  <HistoryCard 
                    tag="CS204 Update" 
                    date="Aug 05, 2026" 
                    title="Distributed Systems" 
                    desc="Network topology simulation labs were highly effective for the 3rd year cohort." 
                    rating={4}
                    color="border-[#10B981]"
                  />
                </div>

                <button className="w-full mt-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-white hover:border-slate-200 hover:text-[#0F172A] transition-all shadow-sm shrink-0">
                  View Full Repository
                </button>
              </div>

              {/* Call to Action Mini Card */}
              <div className="bg-gradient-to-br from-[#0D9488] to-[#0F766E] rounded-[32px] p-8 text-white relative overflow-hidden group shadow-xl shadow-teal-900/20 shrink-0 cursor-pointer">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-white/20 backdrop-blur-md rounded-xl">
                      <MessageSquare size={16} className="text-white" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-teal-100">Review Pending</span>
                  </div>
                  
                  <h4 className="text-[22px] font-black leading-tight tracking-tight mb-2">Shape the Future</h4>
                  <p className="text-[12px] font-medium text-teal-50 mb-6 leading-relaxed">24 active modules pending review this week. Your expertise is required.</p>
                  
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-[3px] border-[#0D9488] overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="peer" />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-[3px] border-[#0D9488] bg-teal-800 flex items-center justify-center text-[10px] font-black text-white">+12</div>
                  </div>
                </div>
                
                {/* Decorative Glow */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-teal-400/30 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-1000"></div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* --- REUSABLE COMPONENTS --- */

const HistoryCard = ({ tag, date, title, desc, rating, color }) => (
  <div className={`p-6 rounded-[24px] border-l-4 ${color} border-y border-r border-slate-100 bg-white hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group`}>
    <div className="flex justify-between items-center mb-3">
      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{tag}</span>
      <span className="text-[9px] font-bold text-slate-400">{date}</span>
    </div>
    <h5 className="text-[15px] font-black text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">{title}</h5>
    
    <div className="flex gap-1 text-[#F59E0B] mb-3">
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={12} className={i <= rating ? "fill-current" : "text-slate-200 fill-slate-50"} />
      ))}
    </div>
    
    <p className="text-[11px] text-slate-500 font-medium leading-relaxed italic line-clamp-2 pr-4 bg-slate-50/50 p-3 rounded-xl border border-slate-50">
      "{desc}"
    </p>
  </div>
);