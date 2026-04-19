import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { 
  Sparkles, MessageSquare, Wrench, LifeBuoy, Send, 
  Paperclip, Image, RotateCcw, MoreVertical, ExternalLink, 
  FileText, Activity, ChevronRight, CheckCircle2
} from "lucide-react";

export default function ChatMateHub() {
  const [activeTab, setActiveTab] = useState('chat'); // 'chat', 'tool', 'help'

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
          
          {/* PAGE HEADER */}
          <div className="flex justify-between items-end shrink-0 mb-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full mb-4 border border-slate-200 shadow-sm">
                <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse"></span>
                <span className="text-[9px] font-black text-[#1E40AF] uppercase tracking-widest leading-none">Intelligence Assistant</span>
              </div>
              
              <h1 className="text-[40px] font-black leading-none tracking-tighter text-[#0F172A] mb-3">
                ChatMate Hub
              </h1>
              <p className="text-slate-500 text-sm font-medium max-w-2xl leading-relaxed">
                Your dedicated AI co-pilot for curriculum mapping, technical integrations, and academic governance.
              </p>
            </div>
          </div>

          {/* TOP SELECTION TILES */}
          <div className="grid grid-cols-3 gap-6 mb-2 shrink-0">
            <Tile 
              active={activeTab === 'chat'} 
              onClick={() => setActiveTab('chat')}
              icon={<MessageSquare size={24} className={activeTab === 'chat' ? "text-white" : "text-blue-600"} />}
              theme="blue"
              title="Curriculum Chat"
              desc="Instant pedagogical AI assistance for mapping and compliance checks."
            />
            <Tile 
              active={activeTab === 'tool'} 
              onClick={() => setActiveTab('tool')}
              icon={<Wrench size={24} className={activeTab === 'tool' ? "text-white" : "text-teal-600"} />}
              theme="teal"
              title="Tool Support"
              desc="Technical guidance for integrating modules with external learning systems."
            />
            <Tile 
              active={activeTab === 'help'} 
              onClick={() => setActiveTab('help')}
              icon={<LifeBuoy size={24} className={activeTab === 'help' ? "text-white" : "text-indigo-600"} />}
              theme="indigo"
              title="Help Center"
              desc="Documentation, tutorials, and institutional governance guidelines."
            />
          </div>

          <div className="grid grid-cols-12 gap-6 min-h-0 flex-1 pb-6">
            
            {/* LEFT: SUGGESTED PROMPTS */}
            <div className="col-span-4 flex flex-col gap-6">
              <div className="bg-white rounded-[32px] p-8 border border-white shadow-xl shadow-slate-200/40 flex-1 flex flex-col">
                
                <div className="flex items-center gap-2 mb-6 shrink-0">
                  <Activity size={16} className="text-slate-400" />
                  <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Suggested Prompts</h3>
                </div>
                
                <div className="space-y-4 flex-1">
                  <PromptItem text="Compare CS201 with industry standards" color="bg-blue-500" />
                  <PromptItem text="Generate a new syllabus outline for Cloud Computing" color="bg-teal-500" />
                  <PromptItem text="Audit Module 7 for accessibility compliance" color="bg-indigo-500" />
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 shrink-0">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-5">Recent Sessions</h4>
                  <div className="space-y-4">
                    <p className="text-[12px] text-slate-600 font-bold flex items-center gap-3 cursor-pointer hover:text-[#2563EB] transition-colors group">
                      <span className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                        <RotateCcw size={12} className="text-slate-400 group-hover:text-blue-500" />
                      </span>
                      Ethics in AI syllabus update
                    </p>
                    <p className="text-[12px] text-slate-600 font-bold flex items-center gap-3 cursor-pointer hover:text-[#2563EB] transition-colors group">
                      <span className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                        <RotateCcw size={12} className="text-slate-400 group-hover:text-blue-500" />
                      </span>
                      Industry alignment CS402
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: THE CHAT WINDOW */}
            <div className="col-span-8 bg-white border border-white shadow-xl shadow-slate-200/40 rounded-[32px] flex flex-col overflow-hidden">
              
              {/* Chat Header */}
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white shrink-0">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-all duration-500 shadow-inner
                    ${activeTab === 'chat' ? 'bg-[#2563EB]' : activeTab === 'tool' ? 'bg-[#0D9488]' : 'bg-[#4F46E5]'}
                  `}>
                    {activeTab === 'chat' ? <Sparkles size={20} /> : activeTab === 'tool' ? <Wrench size={20} /> : <LifeBuoy size={20} />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-lg font-black text-[#0F172A] tracking-tight leading-none">
                        {activeTab === 'chat' ? 'CheckMate Core AI' : activeTab === 'tool' ? 'Integration Technician' : 'Academic Support Desk'}
                      </h2>
                      <CheckCircle2 size={14} className="text-[#2563EB]" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full animate-pulse
                        ${activeTab === 'chat' ? 'bg-blue-500' : activeTab === 'tool' ? 'bg-teal-500' : 'bg-indigo-500'}
                      `}></div>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active Assistant</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 text-slate-400">
                  <div className="p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 cursor-pointer transition-all">
                    <RotateCcw size={16} />
                  </div>
                  <div className="p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 cursor-pointer transition-all">
                    <MoreVertical size={16} />
                  </div>
                </div>
              </div>

              {/* DYNAMIC MESSAGES AREA */}
              <div className="flex-1 p-8 overflow-y-auto custom-scrollbar bg-[#F8FAFC]/50">
                {activeTab === 'chat' && <DefaultChatMessages />}
                {activeTab === 'tool' && <ToolSupportMessages />}
                {activeTab === 'help' && <HelpCenterMessages />}
              </div>

              {/* Input Area */}
              <div className="p-6 border-t border-slate-100 bg-white shrink-0">
                <div className="bg-[#F8FAFC] rounded-[24px] p-2 pl-4 flex items-center gap-3 border border-slate-200 focus-within:border-blue-300 focus-within:bg-white focus-within:shadow-md transition-all duration-300">
                  <Paperclip size={18} className="text-slate-400 hover:text-[#0F172A] cursor-pointer transition-colors" />
                  <Image size={18} className="text-slate-400 hover:text-[#0F172A] cursor-pointer transition-colors" />
                  
                  <input 
                    type="text" 
                    placeholder={activeTab === 'chat' ? "Ask CheckMate about curriculum..." : activeTab === 'tool' ? "Describe your integration issue..." : "How can we help with governance?"}
                    className="flex-1 bg-transparent border-none focus:outline-none text-[13px] font-medium text-slate-800 placeholder:text-slate-400 px-2"
                  />
                  
                  <button className={`w-10 h-10 rounded-xl text-white flex items-center justify-center transition-all duration-500 hover:scale-105 shadow-md
                    ${activeTab === 'chat' ? 'bg-[#2563EB] shadow-blue-500/30' : activeTab === 'tool' ? 'bg-[#0D9488] shadow-teal-500/30' : 'bg-[#4F46E5] shadow-indigo-500/30'}
                  `}>
                    <Send size={16} className="-ml-0.5" />
                  </button>
                </div>
                <p className="text-[9px] text-center text-slate-400 mt-4 font-black uppercase tracking-widest leading-none">
                  CheckMate AI may provide inaccurate data. Always cross-verify with institutional standards.
                </p>
              </div>

            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

// --- Dynamic Content Components ---

const DefaultChatMessages = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="flex gap-4 max-w-[85%]">
      <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
        <Sparkles size={18} />
      </div>
      <div className="space-y-1.5">
        <div className="bg-white border border-slate-100 shadow-sm p-5 rounded-[24px] rounded-tl-none text-[13px] text-slate-700 font-medium leading-relaxed">
          Hello Dr. Smith! I've finished analyzing the 2024 CS framework against global industry benchmarks. How can I assist you today?
        </div>
        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest pl-2">10:42 AM</p>
      </div>
    </div>

    <div className="flex gap-4 justify-end">
      <div className="space-y-1.5 flex flex-col items-end max-w-[85%]">
        <div className="bg-gradient-to-r from-[#2563EB] to-[#1E40AF] shadow-lg shadow-blue-900/20 p-5 rounded-[24px] rounded-tr-none text-[13px] text-white font-medium leading-relaxed">
          Compare our CS201 module with modern industry requirements. Focus specifically on database trends.
        </div>
        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest pr-2">10:43 AM</p>
      </div>
    </div>
  </div>
);

const ToolSupportMessages = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="flex gap-4 max-w-[85%]">
      <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-100">
        <Wrench size={18} />
      </div>
      <div className="space-y-1.5">
        <div className="bg-white border border-slate-100 shadow-sm p-5 rounded-[24px] rounded-tl-none text-[13px] text-slate-700 font-medium leading-relaxed">
          Welcome to Integration Support. I can help you with Canvas/Blackboard LMS sync, Azure Lab configurations, or custom API webhook setups. What are you working on?
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
            <button className="text-[10px] bg-teal-50 border border-teal-200 text-teal-800 px-4 py-2 rounded-xl font-black uppercase tracking-wider hover:bg-teal-100 transition-colors">Fix Sync Error</button>
            <button className="text-[10px] bg-teal-50 border border-teal-200 text-teal-800 px-4 py-2 rounded-xl font-black uppercase tracking-wider hover:bg-teal-100 transition-colors">Azure Environment</button>
        </div>
        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest pl-2 mt-2">Just now</p>
      </div>
    </div>
  </div>
);

const HelpCenterMessages = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="flex gap-4 max-w-[85%]">
      <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100">
        <LifeBuoy size={18} />
      </div>
      <div className="space-y-3 w-full">
        <div className="bg-white border border-slate-100 shadow-sm p-5 rounded-[24px] rounded-tl-none text-[13px] text-slate-700 font-medium leading-relaxed">
          I've found specific documents regarding institutional governance, syllabus compliance, and AI usage protocols:
        </div>
        
        <div className="bg-white border border-slate-200 rounded-[20px] p-4 flex justify-between items-center hover:border-indigo-300 hover:shadow-md cursor-pointer transition-all group">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <FileText size={18} />
                </div>
                <div>
                  <h4 className="text-[13px] font-black text-slate-800 tracking-tight">AI Ethics Framework v2.pdf</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Updated 2 months ago</p>
                </div>
            </div>
            <ExternalLink size={16} className="text-slate-300 group-hover:text-indigo-500" />
        </div>

        <div className="bg-white border border-slate-200 rounded-[20px] p-4 flex justify-between items-center hover:border-indigo-300 hover:shadow-md cursor-pointer transition-all group">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <FileText size={18} />
                </div>
                <div>
                  <h4 className="text-[13px] font-black text-slate-800 tracking-tight">Academic Governance FAQ.pdf</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Updated 5 days ago</p>
                </div>
            </div>
            <ExternalLink size={16} className="text-slate-300 group-hover:text-indigo-500" />
        </div>
        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest pl-2">Support Bot • 11:05 AM</p>
      </div>
    </div>
  </div>
);

// --- Reusable Statics ---

const Tile = ({ active, icon, title, desc, onClick, theme }) => {
  const themes = {
    blue: {
      active: 'border-[#2563EB] shadow-xl shadow-blue-200/50 bg-white ring-4 ring-blue-50',
      inactive: 'border-white bg-white hover:border-blue-100',
      iconBgActive: 'bg-[#2563EB]',
      iconBgInactive: 'bg-blue-50'
    },
    teal: {
      active: 'border-[#0D9488] shadow-xl shadow-teal-200/50 bg-white ring-4 ring-teal-50',
      inactive: 'border-white bg-white hover:border-teal-100',
      iconBgActive: 'bg-[#0D9488]',
      iconBgInactive: 'bg-teal-50'
    },
    indigo: {
      active: 'border-[#4F46E5] shadow-xl shadow-indigo-200/50 bg-white ring-4 ring-indigo-50',
      inactive: 'border-white bg-white hover:border-indigo-100',
      iconBgActive: 'bg-[#4F46E5]',
      iconBgInactive: 'bg-indigo-50'
    }
  };

  const t = themes[theme];

  return (
    <div onClick={onClick} className={`p-6 rounded-[32px] border-2 transition-all duration-300 cursor-pointer ${active ? t.active : t.inactive}`}>
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300 ${active ? t.iconBgActive : t.iconBgInactive}`}>
        {icon}
      </div>
      <h3 className="font-black text-lg text-[#0F172A] mb-2 tracking-tight">{title}</h3>
      <p className="text-[12px] text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
  );
};

const PromptItem = ({ text, color }) => (
  <div className="p-4 rounded-[20px] bg-slate-50 border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all cursor-pointer flex gap-4 items-start group">
    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 shadow-sm ${color}`}></div>
    <span className="text-[12px] font-bold text-slate-700 leading-snug group-hover:text-[#0F172A]">{text}</span>
  </div>
);