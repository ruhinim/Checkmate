import React from 'react';
import Sidebar from "../components/Sidebar";
import { 
  Search, Bell, HelpCircle, MoreHorizontal, 
  CheckCircle2, XCircle, MessageSquare, Plus,
  FileText, ShieldCheck, Clock
} from "lucide-react";

export default function GovernanceWorkflow() {
  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Navigation Bar */}
        <nav className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-8 shrink-0 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="text-slate-800 font-bold text-sm tracking-tight">Governance Workflow</span>
            <span className="bg-emerald-100 text-emerald-600 text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-widest">Academic Session 2024/25</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input 
                type="text" 
                placeholder="Search proposals..." 
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

        <main className="p-10 max-w-[1400px] mx-auto w-full">
          {/* Header Section */}
          <div className="mb-10">
            <h1 className="text-xl font-black text-slate-900 mb-2">Curriculum Board</h1>
            <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-2xl">
              Manage and review all curriculum modifications, new module proposals, and syllabus revisions across the Computer Science faculty.
            </p>
          </div>

          {/* Kanban Board */}
          <div className="grid grid-cols-3 gap-8">
            
            {/* Column: Submitted */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <h3 className="text-sm font-black text-slate-800">Submitted</h3>
                  <span className="bg-slate-200 text-slate-500 text-[10px] font-black px-2 py-0.5 rounded-full">3</span>
                </div>
                <MoreHorizontal size={16} className="text-slate-400 cursor-pointer" />
              </div>
              
              <ProposalCard 
                type="REVISION"
                time="2h ago"
                title="CS102 Syllabus Revision"
                desc="Updating data structure modules to include modern C++20 standards and memory..."
                comments={2}
                user="https://ui-avatars.com/api/?name=User+1"
              />
              <ProposalCard 
                type="NEW MODULE"
                time="Yesterday"
                title="Quantum Computing 101"
                desc="Introductory module covering qubits, superposition, and basic quantum gate logic."
                comments={0}
                user="https://ui-avatars.com/api/?name=User+2"
                color="text-blue-500 bg-blue-50"
              />
            </div>

            {/* Column: Under Review */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <h3 className="text-sm font-black text-slate-800">Under Review</h3>
                  <span className="bg-slate-200 text-slate-500 text-[10px] font-black px-2 py-0.5 rounded-full">1</span>
                </div>
                <MoreHorizontal size={16} className="text-slate-400 cursor-pointer" />
              </div>

              <div className="bg-white border-2 border-emerald-500 rounded-3xl p-6 shadow-xl shadow-emerald-50/50 relative">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase px-2 py-1 rounded tracking-widest">Proposal</span>
                  <span className="text-[9px] font-black text-slate-400 uppercase">Active</span>
                </div>
                <h4 className="text-md font-black text-slate-900 mb-1">AI Ethics & Governance</h4>
                <p className="text-[10px] text-slate-400 font-bold mb-6">Proposed by: Dr. Elena Vance</p>
                
                <div className="bg-slate-50 rounded-xl p-4 mb-8 flex items-start gap-3 border border-slate-100">
                  <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-black text-slate-800 uppercase tracking-tight mb-1">Internal Reviewer</p>
                    <p className="text-[11px] italic text-slate-500 leading-relaxed">"Ensure the case studies include recent EU AI Act updates."</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-2.5 bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-700 transition-all">
                    <CheckCircle2 size={14} /> Approve
                  </button>
                  <button className="flex items-center justify-center gap-2 py-2.5 bg-slate-100 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all">
                    <XCircle size={14} /> Reject
                  </button>
                </div>
              </div>
            </div>

            {/* Column: Approved */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                  <h3 className="text-sm font-black text-slate-800">Approved</h3>
                  <span className="bg-slate-200 text-slate-500 text-[10px] font-black px-2 py-0.5 rounded-full">2</span>
                </div>
                <MoreHorizontal size={16} className="text-slate-400 cursor-pointer" />
              </div>

              <ApprovedCard 
                type="MODULE UPDATE"
                title="Distributed Systems v2.4"
                status="Governance Signed"
              />
              <ApprovedCard 
                type="POLICY CHANGE"
                title="Grading Scheme Realignment"
                status="Faculty Approved"
                color="text-emerald-600 bg-emerald-50"
              />
            </div>
          </div>
        </main>

        {/* Floating Action Button */}
        <button className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-200 hover:scale-110 transition-transform">
          <Plus size={24} />
        </button>
      </div>
    </div>
  );
}

// Helper Components
const ProposalCard = ({ type, time, title, desc, comments, user, color = "text-blue-600 bg-blue-50" }) => (
  <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
    <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="flex justify-between items-start mb-4">
      <span className={`${color} text-[9px] font-black uppercase px-2 py-1 rounded tracking-widest`}>{type}</span>
      <span className="text-[9px] font-black text-slate-400 uppercase">{time}</span>
    </div>
    <h4 className="text-sm font-black text-slate-800 mb-2">{title}</h4>
    <p className="text-[11px] text-slate-400 font-medium leading-relaxed mb-6">{desc}</p>
    <div className="flex justify-between items-center">
      <img src={user} className="w-6 h-6 rounded-full grayscale" alt="proposer" />
      <div className="flex items-center gap-1 text-slate-300">
        <MessageSquare size={12} />
        <span className="text-[10px] font-black">{comments}</span>
      </div>
    </div>
  </div>
);

const ApprovedCard = ({ type, title, status, color = "text-emerald-600 bg-emerald-50" }) => (
  <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col opacity-80 hover:opacity-100 transition-opacity">
    <span className={`${color} text-[9px] font-black uppercase px-2 py-1 rounded tracking-widest w-fit mb-4`}>{type}</span>
    <h4 className="text-sm font-black text-slate-800 mb-4">{title}</h4>
    <div className="flex items-center gap-2 text-emerald-600">
      <CheckCircle2 size={14} />
      <span className="text-[10px] font-black uppercase tracking-tight">{status}</span>
    </div>
  </div>
);