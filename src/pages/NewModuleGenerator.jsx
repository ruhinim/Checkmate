import React from 'react';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { 
  Sparkles, Cloud, Play, CheckCircle2, Share2, 
  Bookmark, Edit3, Calendar, GraduationCap, Clock,
  Activity
} from "lucide-react";

export default function NewModuleGenerator() {
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
                <span className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full animate-pulse"></span>
                <span className="text-[9px] font-black text-[#6D28D9] uppercase tracking-widest leading-none">AI Scaffold Engine</span>
              </div>
              
              <h1 className="text-[40px] font-black leading-none tracking-tighter text-[#0F172A] mb-4">
                Future-Ready Module Generated For You
              </h1>
              <p className="text-slate-500 text-[14px] font-medium leading-relaxed">
                Leverage academic intelligence to scaffold new curriculum modules based on emerging industry trends and institutional requirements.
              </p>
            </div>
          </div>

          {/* MODULE SELECTOR TABS */}
          <div className="flex gap-4 mb-2 shrink-0 overflow-x-auto pb-2">
            <button className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#2563EB] rounded-[24px] text-[12px] font-black text-[#2563EB] shadow-xl shadow-blue-100/50 transition-all uppercase tracking-wider">
              <Sparkles size={18} /> CS405 – Generative AI Systems
            </button>
            <button className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-white rounded-[24px] text-[12px] font-black text-slate-500 hover:border-slate-200 hover:text-slate-700 shadow-sm transition-all uppercase tracking-wider">
              <Cloud size={18} /> CS406 – Cloud-Native Arch
            </button>
          </div>

          <div className="grid grid-cols-12 gap-6 pb-10 min-h-0">
            
            {/* LEFT COLUMN: Details & Syllabus */}
            <div className="col-span-7 flex flex-col gap-6">
              
              {/* Module Description Card */}
              <div className="bg-white border border-white rounded-[40px] p-8 shadow-xl shadow-slate-200/40 relative overflow-hidden flex flex-col">
                <div className="flex justify-between items-start mb-8 shrink-0">
                    <h3 className="text-[20px] font-black text-[#0F172A] tracking-tight">Module Overview</h3>
                    <span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black uppercase px-4 py-2 rounded-xl tracking-widest shadow-sm">
                      Level 400
                    </span>
                </div>
                
                <div className="border-l-4 border-[#2563EB] pl-6 mb-8 bg-blue-50/30 py-4 rounded-r-2xl flex-1">
                    <p className="text-slate-600 italic text-[14px] leading-relaxed font-medium">
                        "An advanced exploration of large language models, diffusion systems, and the architectural underpinnings of generative transformers. Students will bridge the gap between theoretical deep learning and practical system deployment."
                    </p>
                </div>
                
                <div className="grid grid-cols-3 gap-5 shrink-0">
                    <StatBox label="Credits" value="15 CATS" icon={<GraduationCap size={16}/>} color="blue" />
                    <StatBox label="Duration" value="12 Weeks" icon={<Clock size={16}/>} color="teal" />
                    <StatBox label="Prereq" value="CS301 DL" icon={<Calendar size={16}/>} color="indigo" />
                </div>
              </div>

              {/* Syllabus Outline Card */}
              <div className="bg-white border border-white rounded-[40px] p-8 shadow-xl shadow-slate-200/40 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-8 shrink-0">
                    <div className="p-2.5 bg-blue-50 text-[#2563EB] rounded-xl"><Calendar size={18} /></div>
                    <h3 className="text-[20px] font-black text-[#0F172A] tracking-tight">12-Week Syllabus Outline</h3>
                </div>

                <div className="space-y-4 flex-1">
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
                        color="bg-emerald-50 text-emerald-600"
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

                <button className="w-full mt-8 py-4 border-2 border-dashed border-slate-200 rounded-[20px] text-[11px] font-black text-slate-400 uppercase tracking-widest hover:bg-slate-50 hover:border-slate-300 hover:text-slate-600 transition-all shrink-0">
                    Expand Full 12-Week Schedule
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Preview & Actions */}
            <div className="col-span-5 flex flex-col gap-6">
              
              {/* Video Preview Card */}
              <div className="bg-white border border-white rounded-[40px] p-6 shadow-xl shadow-slate-200/40 shrink-0">
                <div className="aspect-video bg-[#0F172A] rounded-[32px] relative group cursor-pointer overflow-hidden mb-6 flex items-center justify-center shadow-inner">
                    <img 
                      src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" 
                      alt="video-thumb" 
                      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 ease-out" 
                    />
                    
                    {/* Play Button */}
                    <div className="relative z-10 w-16 h-16 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#2563EB] transition-all duration-300">
                        <Play size={24} className="fill-slate-900 group-hover:fill-white ml-1 transition-colors" />
                    </div>
                    
                    {/* Badge */}
                    <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Preview: Week 1</span>
                    </div>
                </div>
                <div className="px-4 pb-2">
                    <h4 className="text-[16px] font-black text-[#0F172A] tracking-tight mb-2">Video Syllabus Preview</h4>
                    <p className="text-[12px] text-slate-500 leading-relaxed font-medium">
                        AI-generated overview of the teaching methodology and interactive lab sessions planned for this module.
                    </p>
                </div>
              </div>

              {/* Key Pillars Card */}
              <div className="bg-white border border-white rounded-[40px] p-8 shadow-xl shadow-slate-200/40 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-6 shrink-0">
                  <Activity size={18} className="text-[#0D9488]" />
                  <h4 className="text-[16px] font-black text-[#0F172A] tracking-tight">Key Teaching Pillars</h4>
                </div>
                
                <div className="space-y-5 flex-1">
                    <Pillar text="Python-centric lab environment with deep PyTorch focus." />
                    <Pillar text="Real-world API integration (OpenAI, Anthropic, HuggingFace)." />
                    <Pillar text="Ethical AI and bias mitigation practical workshops." />
                    <Pillar text="Edge device deployment and optimization strategies." />
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 shrink-0">
                <button className="w-full py-4 bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white rounded-[24px] text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-blue-700/30 hover:scale-[1.02] transition-all">
                    <Share2 size={16} className="text-blue-200" /> Export to LMS
                </button>
                <button className="w-full py-4 bg-white border-2 border-slate-100 text-slate-600 rounded-[24px] text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-50 hover:border-slate-200 transition-all shadow-sm">
                    <Bookmark size={16} /> Bookmark for Review
                </button>
                <button className="w-full py-4 bg-white border-2 border-slate-100 text-slate-600 rounded-[24px] text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-50 hover:border-slate-200 transition-all shadow-sm">
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

/* --- REUSABLE COMPONENTS --- */

const StatBox = ({ label, value, icon, color }) => {
  const colors = {
    blue: 'bg-blue-50 border-blue-100 text-[#2563EB]',
    teal: 'bg-teal-50 border-teal-100 text-[#0D9488]',
    indigo: 'bg-indigo-50 border-indigo-100 text-[#4F46E5]'
  };

  return (
    <div className={`p-5 rounded-[24px] border transition-all flex flex-col justify-center ${colors[color]}`}>
        <p className="text-[9px] font-black uppercase tracking-widest mb-2 opacity-70">{label}</p>
        <div className="flex items-center gap-2">
            <span className="opacity-80">{icon}</span>
            <span className="text-[13px] font-black uppercase tracking-tight">{value}</span>
        </div>
    </div>
  );
};

const SyllabusStep = ({ week, title, desc, active, color = "bg-slate-100 text-slate-500" }) => (
    <div className={`flex items-start gap-5 p-6 rounded-[24px] border-2 transition-all duration-300 group cursor-pointer
      ${active ? 'bg-blue-50/30 border-blue-100 shadow-lg shadow-blue-100/50' : 'bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50/50'}
    `}>
        <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center font-black text-[14px] transition-colors
          ${active ? 'bg-[#2563EB] text-white shadow-md' : color}
        `}>
            {week}
        </div>
        <div className="flex-1 mt-0.5">
            <h5 className={`text-[15px] font-black tracking-tight mb-1.5 transition-colors
              ${active ? 'text-[#0F172A]' : 'text-slate-700 group-hover:text-[#0F172A]'}
            `}>{title}</h5>
            <p className="text-[12px] text-slate-500 font-medium leading-relaxed pr-4">{desc}</p>
        </div>
    </div>
);

const Pillar = ({ text }) => (
    <div className="flex items-start gap-4 p-4 rounded-[20px] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-sm hover:border-slate-200 transition-all">
        <div className="bg-white p-1 rounded-full shadow-sm shrink-0">
          <CheckCircle2 size={16} className="text-[#2563EB]" />
        </div>
        <span className="text-[13px] text-slate-700 font-bold leading-snug mt-0.5">{text}</span>
    </div>
);