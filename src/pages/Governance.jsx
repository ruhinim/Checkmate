import React from 'react';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { 
  MoreHorizontal, CheckCircle2, XCircle, 
  MessageSquare, Plus, ShieldCheck, Activity
} from "lucide-react";

export default function GovernanceWorkflow() {
  return (
    <div className="flex h-screen w-screen bg-[#F8FAFC] overflow-hidden font-sans relative">
      
      {/* Background Dot Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.5] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`, backgroundSize: '32px 32px' }}>
      </div>

      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 z-10 relative">
        <Topbar />

        <main className="flex-1 p-8 overflow-y-auto custom-scrollbar flex flex-col gap-6 relative">
          
          {/* HEADER SECTION */}
          <div className="flex justify-between items-end shrink-0 mb-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full mb-4 border border-slate-200 shadow-sm">
                <span className="w-1.5 h-1.5 bg-[#4F46E5] rounded-full animate-pulse"></span>
                <span className="text-[9px] font-black text-[#4F46E5] uppercase tracking-widest leading-none">Academic Session 2024/25</span>
              </div>
              
              <h1 className="text-[40px] font-black leading-none tracking-tighter text-[#0F172A] mb-3">
                Curriculum Board
              </h1>
              <p className="text-slate-500 text-sm font-medium max-w-2xl leading-relaxed">
                Manage and review all curriculum modifications, new module proposals, and syllabus revisions across the Computer Science faculty.
              </p>
            </div>
          </div>

          {/* KANBAN BOARD */}
          <div className="grid grid-cols-3 gap-8 min-h-0 flex-1 pb-10">
            
            {/* COLUMN: Submitted */}
            <div className="flex flex-col bg-slate-100/80 rounded-[32px] p-6 h-full shadow-inner border border-slate-200/50">
              <div className="flex items-center justify-between mb-6 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB] shadow-sm"></div>
                  <h3 className="text-[15px] font-black text-[#0F172A] tracking-tight">Submitted</h3>
                  <span className="bg-slate-200 text-slate-500 text-[10px] font-black px-2.5 py-0.5 rounded-md shadow-sm">3</span>
                </div>
                <button className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-400 transition-colors">
                  <MoreHorizontal size={18} />
                </button>
              </div>
              
              <div className="flex flex-col gap-4 overflow-y-auto custom-scrollbar pb-2 pr-1 h-full">
                <ProposalCard 
                  type="Revision"
                  time="2h ago"
                  title="CS102 Syllabus Revision"
                  desc="Updating data structure modules to include modern C++20 standards and memory management."
                  comments={2}
                  user="https://ui-avatars.com/api/?name=User+1"
                  color="blue"
                />
                <ProposalCard 
                  type="New Module"
                  time="Yesterday"
                  title="Quantum Computing 101"
                  desc="Introductory module covering qubits, superposition, and basic quantum gate logic."
                  comments={0}
                  user="https://ui-avatars.com/api/?name=User+2"
                  color="indigo"
                />
                 <ProposalCard 
                  type="Policy"
                  time="2d ago"
                  title="Updated Grading Rubric"
                  desc="Standardizing project evaluation criteria across all level 300 modules."
                  comments={5}
                  user="https://ui-avatars.com/api/?name=User+3"
                  color="slate"
                />
              </div>
            </div>

            {/* COLUMN: Under Review */}
            <div className="flex flex-col bg-slate-100/80 rounded-[32px] p-6 h-full shadow-inner border border-slate-200/50">
              <div className="flex items-center justify-between mb-6 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0D9488] shadow-sm"></div>
                  <h3 className="text-[15px] font-black text-[#0F172A] tracking-tight">Under Review</h3>
                  <span className="bg-slate-200 text-slate-500 text-[10px] font-black px-2.5 py-0.5 rounded-md shadow-sm">1</span>
                </div>
                <button className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-400 transition-colors">
                  <MoreHorizontal size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-4 overflow-y-auto custom-scrollbar pb-2 pr-1 h-full">
                {/* Active Review Card */}
                <div className="bg-white border-2 border-teal-500 rounded-[28px] p-6 shadow-xl shadow-teal-100/50 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50/50 rounded-full blur-3xl group-hover:bg-teal-100/50 transition-colors pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-5">
                      <span className="bg-teal-50 text-teal-700 text-[9px] font-black uppercase px-3 py-1.5 rounded-lg tracking-widest shadow-sm">
                        Proposal
                      </span>
                      <span className="flex items-center gap-1.5 text-[9px] font-black text-teal-600 uppercase tracking-widest">
                        <Activity size={10} className="animate-pulse" /> Active
                      </span>
                    </div>
                    
                    <h4 className="text-[18px] font-black text-[#0F172A] tracking-tight mb-2">AI Ethics & Governance</h4>
                    <p className="text-[11px] text-slate-500 font-bold mb-6">Proposed by: Dr. Elena Vance</p>
                    
                    <div className="bg-slate-50 rounded-[20px] p-4 mb-6 flex items-start gap-4 border border-slate-100">
                      <div className="p-1.5 bg-white rounded-lg shadow-sm shrink-0 mt-0.5">
                        <ShieldCheck size={16} className="text-teal-600" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-800 uppercase tracking-widest mb-1.5">Internal Reviewer</p>
                        <p className="text-[12px] italic font-medium text-slate-600 leading-relaxed pr-2">"Ensure the case studies include recent EU AI Act updates before final approval."</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button className="flex items-center justify-center gap-2 py-3.5 bg-gradient-to-b from-[#0D9488] to-[#0F766E] text-white rounded-[16px] text-[10px] font-black uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-lg shadow-teal-500/30">
                        <CheckCircle2 size={16} /> Approve
                      </button>
                      <button className="flex items-center justify-center gap-2 py-3.5 bg-white border-2 border-slate-100 text-slate-600 rounded-[16px] text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 hover:border-slate-200 transition-colors shadow-sm">
                        <XCircle size={16} /> Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMN: Approved */}
            <div className="flex flex-col bg-slate-100/80 rounded-[32px] p-6 h-full shadow-inner border border-slate-200/50">
              <div className="flex items-center justify-between mb-6 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-sm"></div>
                  <h3 className="text-[15px] font-black text-[#0F172A] tracking-tight">Approved</h3>
                  <span className="bg-slate-200 text-slate-500 text-[10px] font-black px-2.5 py-0.5 rounded-md shadow-sm">2</span>
                </div>
                <button className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-400 transition-colors">
                  <MoreHorizontal size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-4 overflow-y-auto custom-scrollbar pb-2 pr-1 h-full">
                <ApprovedCard 
                  type="Module Update"
                  title="Distributed Systems v2.4"
                  status="Governance Signed"
                />
                <ApprovedCard 
                  type="Policy Change"
                  title="Grading Scheme Realignment"
                  status="Faculty Approved"
                />
              </div>
            </div>
            
          </div>

          {/* FLOATING ACTION BUTTON */}
          <button className="absolute bottom-10 right-10 w-16 h-16 bg-[#2563EB] text-white rounded-full flex items-center justify-center shadow-xl shadow-blue-500/40 hover:scale-110 hover:bg-blue-700 transition-all z-20">
            <Plus size={28} />
          </button>

        </main>
      </div>
    </div>
  );
}

/* --- REUSABLE COMPONENTS --- */

const ProposalCard = ({ type, time, title, desc, comments, user, color }) => {
  const styles = {
    blue: "text-[#2563EB]",
    indigo: "text-indigo-600",
    slate: "text-slate-600"
  };

  return (
    <div className="bg-white border-l-4 border-l-[#2563EB] border-y border-r border-slate-100 rounded-[28px] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer flex flex-col group">
      <div className="flex justify-between items-start mb-4">
        <span className={`${styles[color]} text-[9px] font-black uppercase tracking-widest`}>{type}</span>
        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{time}</span>
      </div>
      <h4 className="text-[15px] font-black text-[#0F172A] tracking-tight mb-2 group-hover:text-[#2563EB] transition-colors">{title}</h4>
      <p className="text-[12px] text-slate-500 font-medium leading-relaxed mb-6 flex-1 pr-2">{desc}</p>
      
      <div className="flex justify-between items-center pt-4 border-t border-slate-50">
        <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm">
          <img src={user} className="w-full h-full object-cover" alt="proposer" />
        </div>
        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${comments > 0 ? 'bg-slate-50 text-slate-600' : 'text-slate-300'}`}>
          <MessageSquare size={14} />
          <span className="text-[11px] font-black">{comments}</span>
        </div>
      </div>
    </div>
  );
};

const ApprovedCard = ({ type, title, status }) => (
  <div className="bg-white border-l-4 border-l-[#10B981] border-y border-r border-slate-100 rounded-[28px] p-6 shadow-sm flex flex-col hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
    <div className="flex justify-between items-start mb-4">
      <span className="text-emerald-600 text-[9px] font-black uppercase tracking-widest">
        {type}
      </span>
    </div>
    <h4 className="text-[15px] font-black text-slate-800 tracking-tight mb-5">{title}</h4>
    
    <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50/50 w-fit px-3 py-1.5 rounded-lg border border-emerald-100">
      <CheckCircle2 size={14} />
      <span className="text-[9px] font-black uppercase tracking-widest">{status}</span>
    </div>
  </div>
);