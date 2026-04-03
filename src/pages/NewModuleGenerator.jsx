import React from 'react';
import Sidebar from "../components/Sidebar";
import { 
  Search, Bell, HelpCircle, Sparkles, Cloud, 
  Play, CheckCircle2, Share2, Bookmark, Edit3, 
  ChevronDown, Calendar, GraduationCap, Clock
} from "lucide-react";

export default function NewModuleGenerator() {
  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
        <nav className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-8 shrink-0 sticky top-0 z-10">
          <div className="text-slate-400 font-bold text-[11px] uppercase tracking-widest">New Module Generator</div>
          <div className="flex items-center gap-6">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input 
                type="text" 
                placeholder="Search curriculum..." 
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
          {/* Page Title */}
          <div className="mb-10">
            <h1 className="text-[32px] font-black text-slate-900 tracking-tight leading-tight mb-3">Generate Future-Ready Modules</h1>
            <p className="text-slate-500 max-w-2xl text-sm leading-relaxed font-medium">
              Leverage academic intelligence to scaffold new curriculum modules based on emerging industry trends and institutional requirements.
            </p>
          </div>

          {/* Module Selector Tabs */}
          <div className="flex gap-4 mb-10">
            <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-600 rounded-xl text-xs font-bold text-blue-600 shadow-sm">
              <Sparkles size={16} /> CS405 – Generative AI Systems
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-slate-100 border-2 border-transparent rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-200 transition-all">
              <Cloud size={16} /> CS406 – Cloud-native Architecture
            </button>
          </div>

          <div className="grid grid-cols-12 gap-10">
            {/* Left Column: Details & Syllabus */}
            <div className="col-span-7 space-y-8">
              
              {/* Module Description */}
              <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm relative overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-slate-800">Module Description</h3>
                    <span className="bg-emerald-100 text-emerald-600 text-[9px] font-black uppercase px-2 py-1 rounded tracking-widest">Level 400</span>
                </div>
                <div className="border-l-4 border-emerald-500 pl-6 mb-8">
                    <p className="text-slate-600 italic text-sm leading-relaxed font-medium">
                        "An advanced exploration of large language models, diffusion systems, and the architectural underpinnings of generative transformers. Students will bridge the gap between theoretical deep learning and practical system deployment."
                    </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                    <StatBox label="Credits" value="15 CATS" icon={<GraduationCap size={14}/>} />
                    <StatBox label="Duration" value="12 Weeks" icon={<Clock size={14}/>} />
                    <StatBox label="Prerequisite" value="CS301 DL" icon={<Calendar size={14}/>} />
                </div>
              </div>

              {/* Syllabus Outline */}
              <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-8">
                    <Calendar className="text-emerald-500" size={18} />
                    <h3 className="font-bold text-slate-800">12-Week Syllabus Outline</h3>
                </div>

                <div className="space-y-4">
                    <SyllabusStep 
                        week="01" 
                        title="Foundations of Transformers" 
                        desc="Attention mechanisms, encoder-decoder architectures, and the evolution of LLMs." 
                        active={false}
                    />
                    <SyllabusStep 
                        week="04" 
                        title="Prompt Engineering & RAG" 
                        desc="Retrieval Augmented Generation and advanced prompting strategies for systemic accuracy." 
                        active={false}
                        color="bg-emerald-100 text-emerald-600"
                    />
                    <SyllabusStep 
                        week="08" 
                        title="Deployment & Scalability" 
                        desc="Quantization, pruning, and serving models at scale using modern inference engines." 
                        active={true}
                    />
                    <SyllabusStep 
                        week="12" 
                        title="Capstone: Multi-modal Integration" 
                        desc="Building a production-grade system combining text, image, and audio generation." 
                        active={false}
                    />
                </div>

                <button className="w-full mt-6 py-3 border-2 border-dashed border-slate-200 rounded-xl text-[10px] font-black text-slate-400 uppercase tracking-widest hover:bg-slate-50 transition-all">
                    Expand Full 12-Week Schedule
                </button>
              </div>
            </div>

            {/* Right Column: Preview & Actions */}
            <div className="col-span-5 space-y-6">
              
              {/* Video Preview */}
              <div className="bg-white border border-slate-100 rounded-3xl p-4 shadow-sm">
                <div className="aspect-video bg-slate-900 rounded-2xl relative group cursor-pointer overflow-hidden mb-6 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" 
                      alt="video-thumb" 
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="relative z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play size={20} className="fill-slate-900 ml-1" />
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        <span className="text-[9px] font-black text-white uppercase tracking-tighter">Preview: Week 1 Lecture</span>
                    </div>
                </div>
                <div className="px-2">
                    <h4 className="font-bold text-slate-800 text-sm mb-2">Video Syllabus Preview</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                        Generated overview of the teaching methodology and interactive lab sessions planned for this module.
                    </p>
                </div>
              </div>

              {/* Key Pillars */}
              <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
                <h4 className="font-bold text-slate-800 mb-6 text-sm">Key Teaching Pillars</h4>
                <div className="space-y-5">
                    <Pillar text="Python-centric lab environment with PyTorch focus." />
                    <Pillar text="Real-world API integration (OpenAI, Anthropic)." />
                    <Pillar text="Ethical AI and bias mitigation workshops." />
                    <Pillar text="Edge device deployment strategies." />
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button className="w-full py-4 bg-blue-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">
                    <Share2 size={16} /> Export to LMS
                </button>
                <button className="w-full py-4 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-all">
                    <Bookmark size={16} /> Bookmark for Review
                </button>
                <button className="w-full py-4 border border-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                    <Edit3 size={16} /> Customize Content
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Helper Components
const StatBox = ({ label, value, icon }) => (
    <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-50">
        <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-1">{label}</p>
        <div className="flex items-center gap-2">
            <span className="text-blue-600">{icon}</span>
            <span className="text-xs font-black text-blue-900 uppercase">{value}</span>
        </div>
    </div>
);

const SyllabusStep = ({ week, title, desc, active, color = "bg-blue-50 text-blue-600" }) => (
    <div className={`flex items-start gap-6 p-5 rounded-2xl border transition-all ${active ? 'bg-white border-blue-600 shadow-xl shadow-blue-50/50' : 'bg-slate-50 border-transparent'}`}>
        <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center font-black text-xs ${active ? 'bg-blue-600 text-white' : color}`}>
            {week}
        </div>
        <div className="flex-1">
            <h5 className={`text-sm font-bold mb-1 ${active ? 'text-blue-600' : 'text-slate-800'}`}>{title}</h5>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{desc}</p>
        </div>
    </div>
);

const Pillar = ({ text }) => (
    <div className="flex items-start gap-3">
        <CheckCircle2 size={16} className="text-blue-600 mt-0.5 shrink-0" />
        <span className="text-xs text-slate-600 font-medium leading-snug">{text}</span>
    </div>
);
