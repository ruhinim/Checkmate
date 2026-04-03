import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import { 
  Search, Bell, HelpCircle, Sparkles, MessageSquare, 
  Wrench, LifeBuoy, Send, Paperclip, Image, RotateCcw, 
  MoreVertical, ExternalLink, ChevronRight, FileText 
} from "lucide-react";

export default function ChatMateHub() {
  const [activeTab, setActiveTab] = useState('chat'); // 'chat', 'tool', 'help'

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Navigation Bar */}
        <nav className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-8 shrink-0 sticky top-0 z-10">
          <div className="text-slate-800 font-bold text-sm tracking-tight">ChatMate Hub</div>
          <div className="flex items-center gap-6">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input 
                type="text" 
                placeholder="Search insights..." 
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

        <main className="p-8 max-w-[1400px] mx-auto w-full">
          {/* Top Selection Tiles */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <Tile 
              active={activeTab === 'chat'} 
              onClick={() => setActiveTab('chat')}
              icon={<MessageSquare size={20} className="text-blue-600" />}
              bg="bg-blue-50"
              title="Chat with CheckMate"
              desc="Instant pedagogical AI assistance for curriculum mapping and compliance checks."
            />
            <Tile 
              active={activeTab === 'tool'} 
              onClick={() => setActiveTab('tool')}
              icon={<Wrench size={20} className="text-emerald-600" />}
              bg="bg-emerald-50"
              title="Tool Support"
              desc="Technical guidance for integrating modules with external learning systems."
            />
            <Tile 
              active={activeTab === 'help'} 
              onClick={() => setActiveTab('help')}
              icon={<LifeBuoy size={20} className="text-teal-600" />}
              bg="bg-teal-50"
              title="Help Center"
              desc="Documentation, tutorials, and academic governance guidelines."
            />
          </div>

          <div className="grid grid-cols-12 gap-8">
            {/* Left: Suggested Prompts (Static) */}
            <div className="col-span-4 space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles size={16} className="text-emerald-500" />
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Suggested Prompts</h3>
                </div>
                <div className="space-y-3">
                  <PromptItem text="Compare CS201 with industry standards" color="border-emerald-500" />
                  <PromptItem text="Generate a new syllabus outline for Cloud Computing" color="border-blue-500" />
                  <PromptItem text="Audit Module 7 for accessibility compliance" color="border-emerald-600" />
                </div>

                <div className="mt-10 pt-6 border-t border-slate-100">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Recent Sessions</h4>
                  <div className="space-y-3">
                    <p className="text-xs text-slate-600 font-medium flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors">
                      <RotateCcw size={12} /> Ethics in AI syllabus update
                    </p>
                    <p className="text-xs text-slate-600 font-medium flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors">
                      <RotateCcw size={12} /> Industry alignment CS402
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Chat Window (Frame stays, Content changes) */}
            <div className="col-span-8">
              <div className="bg-white border border-slate-200 rounded-2xl flex flex-col h-[600px] shadow-sm overflow-hidden">
                
                {/* Chat Header (Static) */}
                <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white transition-colors duration-300 ${activeTab === 'chat' ? 'bg-blue-600' : activeTab === 'tool' ? 'bg-emerald-600' : 'bg-teal-600'}`}>
                      {activeTab === 'chat' ? <Sparkles size={16} /> : activeTab === 'tool' ? <Wrench size={16} /> : <LifeBuoy size={16} />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 leading-tight">
                        {activeTab === 'chat' ? 'CheckMate AI' : activeTab === 'tool' ? 'Tool Technician' : 'Academic Support'}
                      </p>
                      <p className="text-[10px] font-bold text-emerald-500 uppercase">Active Assistant</p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-slate-400">
                    <RotateCcw size={18} className="cursor-pointer hover:text-slate-600" />
                    <MoreVertical size={18} className="cursor-pointer hover:text-slate-600" />
                  </div>
                </div>

                {/* DYNAMIC MESSAGES AREA */}
                <div className="flex-1 p-6 overflow-y-auto bg-white">
                  {activeTab === 'chat' && <DefaultChatMessages />}
                  {activeTab === 'tool' && <ToolSupportMessages />}
                  {activeTab === 'help' && <HelpCenterMessages />}
                </div>

                {/* Input Area (Static) */}
                <div className="p-6 border-t border-slate-100 bg-white">
                  <div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3 border border-slate-200 focus-within:border-blue-300 transition-all">
                    <Paperclip size={18} className="text-slate-400 cursor-pointer hover:text-slate-600" />
                    <Image size={18} className="text-slate-400 cursor-pointer hover:text-slate-600" />
                    <input 
                      type="text" 
                      placeholder={activeTab === 'chat' ? "Ask about curriculum..." : activeTab === 'tool' ? "Describe your integration issue..." : "How can we help with governance?"}
                      className="flex-1 bg-transparent border-none focus:outline-none text-sm text-slate-700 placeholder:text-slate-400"
                    />
                    <button className={`p-2 rounded-lg text-white transition-colors ${activeTab === 'chat' ? 'bg-blue-600' : activeTab === 'tool' ? 'bg-emerald-600' : 'bg-teal-600'}`}>
                      <Send size={16} />
                    </button>
                  </div>
                  <p className="text-[9px] text-center text-slate-400 mt-4 font-black uppercase tracking-widest leading-none">
                    CheckMate AI may provide inaccurate data. Always cross-verify with institutional standards.
                  </p>
                </div>
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
  <div className="space-y-6 animate-in fade-in duration-300">
    <div className="flex gap-4">
      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
        <Sparkles size={14} />
      </div>
      <div className="space-y-1">
        <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none text-sm text-slate-700 leading-relaxed max-w-xl">
          Hello Dr. Smith! I've finished analyzing the 2024 CS framework. How can I assist you today?
        </div>
        <p className="text-[10px] text-slate-400 font-medium">10:42 AM</p>
      </div>
    </div>
    <div className="flex gap-4 justify-end">
      <div className="space-y-1 flex flex-col items-end">
        <div className="bg-blue-600 p-4 rounded-2xl rounded-tr-none text-sm text-white leading-relaxed max-w-xl">
          Compare our CS201 module with industry requirements.
        </div>
        <p className="text-[10px] text-slate-400 font-medium text-right">10:43 AM</p>
      </div>
    </div>
  </div>
);

const ToolSupportMessages = () => (
  <div className="space-y-6 animate-in fade-in duration-300">
    <div className="flex gap-4">
      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
        <Wrench size={14} />
      </div>
      <div className="space-y-1">
        <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none text-sm text-slate-700 leading-relaxed max-w-xl">
          Welcome to Tool Support. I can help you with LMS sync, Azure Lab configurations, or API integrations. What are you working on?
        </div>
        <div className="flex gap-2 mt-2">
            <button className="text-[10px] bg-white border border-emerald-200 text-emerald-700 px-3 py-1 rounded-full font-bold hover:bg-emerald-50">Fix Sync Error</button>
            <button className="text-[10px] bg-white border border-emerald-200 text-emerald-700 px-3 py-1 rounded-full font-bold hover:bg-emerald-50">Azure Setup</button>
        </div>
        <p className="text-[10px] text-slate-400 font-medium mt-2">Just now</p>
      </div>
    </div>
  </div>
);

const HelpCenterMessages = () => (
  <div className="space-y-6 animate-in fade-in duration-300">
    <div className="flex gap-4">
      <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
        <LifeBuoy size={14} />
      </div>
      <div className="space-y-3 w-full max-w-xl">
        <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none text-sm text-slate-700 leading-relaxed">
          I've found 3 documents regarding institutional governance and AI compliance:
        </div>
        <div className="bg-white border border-slate-100 rounded-xl p-3 flex justify-between items-center hover:shadow-sm cursor-pointer transition-shadow">
            <div className="flex items-center gap-3">
                <FileText size={16} className="text-teal-600" />
                <span className="text-xs font-bold text-slate-700">AI Ethics Framework v2.pdf</span>
            </div>
            <ExternalLink size={14} className="text-slate-300" />
        </div>
        <div className="bg-white border border-slate-100 rounded-xl p-3 flex justify-between items-center hover:shadow-sm cursor-pointer transition-shadow">
            <div className="flex items-center gap-3">
                <FileText size={16} className="text-teal-600" />
                <span className="text-xs font-bold text-slate-700">Governance FAQ.pdf</span>
            </div>
            <ExternalLink size={14} className="text-slate-300" />
        </div>
        <p className="text-[10px] text-slate-400 font-medium">Support Bot • 11:05 AM</p>
      </div>
    </div>
  </div>
);

// Reusable Statics
const Tile = ({ active, icon, title, desc, onClick, bg }) => (
  <div onClick={onClick} className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${active ? 'border-blue-600 bg-white shadow-xl shadow-blue-50/50' : 'border-transparent bg-white hover:border-slate-200'}`}>
    <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4`}>{icon}</div>
    <h3 className="font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-xs text-slate-500 leading-relaxed font-medium">{desc}</p>
  </div>
);

const PromptItem = ({ text, color }) => (
  <div className={`p-4 border-l-4 ${color} bg-slate-50 rounded-lg text-xs font-bold text-slate-700 cursor-pointer hover:bg-white border border-slate-100 transition-all`}>"{text}"</div>
);