import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import { 
  Search, Bell, HelpCircle, Star, ChevronDown, 
  Send, History, CheckCircle2, Clock, Info
} from "lucide-react";

export default function FeedbackPortal() {
  const [rating, setRating] = useState(4);

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Navigation Bar */}
        <nav className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-8 shrink-0 sticky top-0 z-10">
          <div className="text-slate-800 font-bold text-sm tracking-tight">Curriculum Feedback</div>
          <div className="flex items-center gap-6">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input 
                type="text" 
                placeholder="Search modules..." 
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

        <main className="p-10 max-w-[1200px] mx-auto w-full">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-2xl font-black text-slate-900 mb-2">Institutional Feedback Portal</h1>
            <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-2xl">
              Share your insights on module efficacy and curriculum alignment. Your feedback directly informs the next academic review cycle.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-10">
            {/* Feedback Form (Left) */}
            <div className="col-span-8 bg-white border border-slate-100 rounded-[32px] p-10 shadow-sm">
              <div className="space-y-8">
                {/* Module Selection */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Module Selection</label>
                  <div className="relative cursor-pointer group">
                    <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 flex justify-between items-center group-hover:border-blue-200 transition-colors">
                      <span className="text-sm font-bold text-slate-700">Select a Computer Science Module</span>
                      <ChevronDown size={18} className="text-slate-400" />
                    </div>
                  </div>
                </div>

                {/* Quality Rating */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Curriculum Quality Rating</label>
                  <div className="flex items-center gap-6">
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star}
                          size={28} 
                          onClick={() => setRating(star)}
                          className={`cursor-pointer transition-colors ${star <= rating ? 'fill-blue-600 text-blue-600' : 'text-slate-200'}`} 
                        />
                      ))}
                    </div>
                    <span className="bg-slate-100 px-4 py-1.5 rounded-full text-[11px] font-black text-slate-500 uppercase">
                      {rating === 4 ? 'Good (4.0/5.0)' : rating === 5 ? 'Excellent (5.0/5.0)' : 'Rated'}
                    </span>
                  </div>
                </div>

                {/* Detailed Observations */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Detailed Feedback & Observations</label>
                  <textarea 
                    placeholder="Describe specific module strengths, weaknesses, or student engagement levels..."
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-6 text-sm min-h-[180px] focus:outline-none focus:border-blue-200 focus:bg-white transition-all placeholder:text-slate-400"
                  ></textarea>
                </div>

                {/* Footer Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-emerald-500">
                    <CheckCircle2 size={16} />
                    <span className="text-[10px] font-bold">Draft automatically saved 2m ago</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="text-[11px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">Cancel</button>
                    <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">
                      Submit Feedback <Send size={14} className="rotate-[-45deg] mb-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Submission History (Right) */}
            <div className="col-span-4 space-y-8">
              <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-black text-slate-800 text-sm">Submission History</h3>
                  <History size={16} className="text-slate-400" />
                </div>

                <div className="space-y-4">
                  <HistoryCard 
                    tag="CS101 ANALYSIS" 
                    date="Oct 24, 2024" 
                    title="Introduction to Algorithms" 
                    desc="Current module mapping is excellent. Students showed high..." 
                    color="border-emerald-500"
                  />
                  <HistoryCard 
                    tag="CS402 REVIEW" 
                    date="Sep 12, 2024" 
                    title="Quantum Fundamentals" 
                    desc="Resources for the linear algebra prerequisites need updating to..." 
                    color="border-emerald-500"
                  />
                  <HistoryCard 
                    tag="CS204 UPDATE" 
                    date="Aug 05, 2024" 
                    title="Distributed Systems" 
                    desc="Network topology simulation labs were highly effective for the 3rd..." 
                    color="border-blue-600"
                  />
                </div>

                <button className="w-full mt-8 py-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black text-blue-600 uppercase tracking-widest hover:bg-blue-50 transition-colors">
                  View Full Repository
                </button>
              </div>

              {/* Call to Action Card */}
              <div className="bg-blue-600 rounded-[32px] p-8 text-white relative overflow-hidden group shadow-xl shadow-blue-100">
                <div className="relative z-10">
                  <h4 className="text-lg font-black leading-tight mb-2">Your Expertise Shapes Our Excellence</h4>
                  <p className="text-[10px] text-blue-100/80 font-bold mb-4">24 active modules pending review this week.</p>
                  <img 
                    src="https://images.unsplash.com/photo-1541339907198-e08756eaa589?q=80&w=400&auto=format&fit=crop" 
                    alt="University" 
                    className="w-full h-32 object-cover rounded-2xl opacity-60 group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

const HistoryCard = ({ tag, date, title, desc, color }) => (
  <div className={`p-5 rounded-2xl border-l-4 ${color} bg-slate-50/50 hover:bg-white hover:shadow-md transition-all cursor-pointer`}>
    <div className="flex justify-between items-center mb-2">
      <span className="text-[8px] font-black text-emerald-600 uppercase tracking-widest">{tag}</span>
      <span className="text-[8px] font-bold text-slate-400">{date}</span>
    </div>
    <h5 className="text-xs font-black text-slate-800 mb-1">{title}</h5>
    <div className="flex gap-0.5 text-blue-600 mb-2">
      {[1,2,3,4,5].map(i => <Star key={i} size={8} className="fill-current" />)}
    </div>
    <p className="text-[10px] text-slate-500 font-medium leading-relaxed italic line-clamp-2">
      "{desc}"
    </p>
  </div>
);