import React from 'react';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { 
  ArrowRight, ExternalLink, Download, Database, 
  ShieldCheck, BarChart3, Clock, Calendar, Sparkles
} from "lucide-react";

export default function IndustryInsights() {
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
                <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse"></span>
                <span className="text-[9px] font-black text-[#1E40AF] uppercase tracking-widest leading-none">Global Industry Intelligence</span>
              </div>
              
              <h1 className="text-[40px] font-black leading-none tracking-tighter text-[#0F172A] mb-4">
                The Future of Curriculum
              </h1>
              <p className="text-slate-500 text-[14px] font-medium leading-relaxed">
                Bridging the gap between rapid technological shifts and academic frameworks. Curated intelligence for CS Lead faculty.
              </p>
            </div>
            
            {/* Category Pills */}
            <div className="flex gap-3 mb-2">
              {['AI', 'Cloud', 'Cybersecurity', 'Big Data'].map((tag, idx) => (
                <button key={tag} className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-sm border
                  ${idx === 0 ? 'bg-[#2563EB] text-white border-[#2563EB] hover:bg-blue-700' : 'bg-white text-slate-500 border-slate-100 hover:border-blue-200 hover:text-[#2563EB]'}
                `}>
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 pb-10">
            
            {/* LEFT: Main Featured Article */}
            <div className="col-span-8 group cursor-pointer flex flex-col">
              <div className="bg-white border border-white rounded-[40px] p-2 shadow-xl shadow-slate-200/40 hover:-translate-y-1 transition-all duration-500 flex-1 flex flex-col">
                
                {/* Image Container with Inset padding */}
                <div className="relative h-[360px] rounded-[32px] overflow-hidden shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop" 
                    alt="AI Featured" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="bg-[#2563EB] text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest shadow-lg">Featured</span>
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest">AI & ML</span>
                  </div>

                  {/* Glassmorphism Relevance Badge */}
                  <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-xl p-5 rounded-[24px] shadow-2xl border border-white/20 flex flex-col items-center">
                    <p className="text-[9px] font-black text-white/80 uppercase tracking-widest mb-1">Relevance</p>
                    <p className="text-3xl font-black text-white leading-none tracking-tighter">98%</p>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-6 text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4">
                    <div className="flex items-center gap-2"><Calendar size={14}/> March 14, 2026</div>
                    <div className="flex items-center gap-2 text-[#2563EB]"><Clock size={14}/> 12 Min Read</div>
                  </div>
                  
                  <h2 className="text-[32px] font-black text-[#0F172A] mb-4 leading-tight group-hover:text-[#2563EB] transition-colors tracking-tight">
                    The Rise of Generative AI in Enterprise
                  </h2>
                  <p className="text-[14px] text-slate-500 font-medium leading-relaxed mb-8 flex-1 pr-6">
                    As Large Language Models migrate from research curiosity to enterprise backbone, computer science curricula must shift from "building models" to "orchestrating cognitive systems." Explore how prompt engineering and vector databases are redefining the modern tech stack.
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 shrink-0">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full border-2 border-white shadow-sm overflow-hidden bg-slate-100">
                        <img src="https://ui-avatars.com/api/?name=Jane+Doe&background=random" className="w-full h-full object-cover" alt="author" />
                      </div>
                      <div>
                        <p className="text-[13px] font-black text-slate-800 tracking-tight">Dr. Jane Doe</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Senior AI Fellow</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-white bg-[#0F172A] px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest group-hover:bg-[#2563EB] transition-colors shadow-md">
                      Read Full Report <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Sidebar Cards */}
            <div className="col-span-4 flex flex-col gap-6">
              
              {/* Relevance Insight Card */}
              <div className="bg-white border border-white rounded-[40px] p-8 shadow-xl shadow-slate-200/40 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6 shrink-0">
                  <span className="bg-teal-50 text-teal-700 border border-teal-100 text-[9px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest">Cloud Dev</span>
                  <div className="flex items-center gap-1.5 text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full">
                    <Sparkles size={12} />
                    <span className="text-[9px] font-black uppercase tracking-widest">82% Match</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-3 leading-tight tracking-tight">Cloud-Native Evolution</h3>
                <p className="text-[13px] text-slate-500 font-medium leading-relaxed mb-6 flex-1">
                  The transition from monolithic architectures to serverless, event-driven designs is accelerating. We analyze the pedagogical shift required for CS304.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8 shrink-0">
                  {['Kubernetes', 'Serverless', 'Edge Computing'].map(t => (
                    <span key={t} className="px-4 py-2 bg-slate-50 rounded-xl text-[10px] font-black text-slate-600 uppercase tracking-wider border border-slate-100">{t}</span>
                  ))}
                </div>
                
                <button className="w-full flex items-center justify-center gap-2 py-4 bg-slate-50 text-slate-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 hover:text-[#2563EB] transition-colors border border-slate-100 shrink-0">
                  Curriculum Gap Analysis <ExternalLink size={14} />
                </button>
              </div>

              {/* Flash Report Card */}
              <div className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-[40px] p-8 text-white relative overflow-hidden group cursor-pointer shadow-2xl shadow-blue-900/30 shrink-0">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></div>
                    <p className="text-[10px] font-black text-blue-200 uppercase tracking-widest">Flash Report: Security</p>
                  </div>
                  
                  <h3 className="text-[22px] font-black mb-3 leading-tight tracking-tight text-white">Post-Quantum Crypto Readiness</h3>
                  <p className="text-[12px] text-blue-100/90 font-medium leading-relaxed mb-8">
                    NIST has finalized its first set of PQC standards. Is your data structures course updated to include lattice-based primitives?
                  </p>
                  
                  <button className="w-full flex items-center justify-center gap-2 bg-white text-[#1E40AF] px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-lg">
                    <Download size={16} /> Download Insight
                  </button>
                </div>
                
                {/* Ambient Glow Effects */}
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue-400/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="absolute -left-10 -top-10 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl"></div>
              </div>
            </div>

            {/* BOTTOM: Insight Grid */}
            <div className="col-span-12 grid grid-cols-3 gap-6">
              <InsightCard 
                icon={<Database className="text-blue-600" size={20}/>}
                iconBg="bg-blue-50"
                title="Vector Databases for ML"
                desc="Why Pinecone and Weaviate are becoming essential CS prerequisites."
                score="75%"
                color="blue"
              />
              <InsightCard 
                icon={<ShieldCheck className="text-teal-600" size={20}/>}
                iconBg="bg-teal-50"
                title="Ethical AI Frameworks"
                desc="New EU regulations demand a change in how we teach algorithm design."
                score="91%"
                color="teal"
              />
              <InsightCard 
                icon={<BarChart3 className="text-indigo-600" size={20}/>}
                iconBg="bg-indigo-50"
                title="The Observability Gap"
                desc="Bridging the distance between logging and automated tracing methodologies."
                score="64%"
                color="indigo"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* --- REUSABLE COMPONENTS --- */

const InsightCard = ({ icon, iconBg, title, desc, score, color }) => {
  const barColors = {
    blue: 'bg-[#2563EB]',
    teal: 'bg-[#0D9488]',
    indigo: 'bg-[#4F46E5]'
  };

  return (
    <div className="bg-white border border-white rounded-[32px] p-8 shadow-xl shadow-slate-200/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col">
      <div className="mb-6 flex justify-between items-start">
        <div className={`p-4 rounded-2xl ${iconBg} transition-colors duration-300`}>
          {icon}
        </div>
        <button className="text-slate-300 hover:text-blue-600 transition-colors p-2 bg-slate-50 rounded-xl group-hover:bg-white group-hover:shadow-sm">
          <BookmarkIcon/>
        </button>
      </div>
      
      <h4 className="text-[18px] font-black text-slate-900 mb-2 leading-tight tracking-tight">{title}</h4>
      <p className="text-[12px] text-slate-500 font-medium leading-relaxed mb-8 flex-1">{desc}</p>
      
      <div className="shrink-0 mt-auto">
        <div className="flex justify-between items-end mb-2">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Relevance Match</span>
          <span className={`text-[14px] font-black ${barColors[color].replace('bg-', 'text-')}`}>{score}</span>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden shadow-inner">
          <div 
            className={`h-full rounded-full transition-all duration-1000 ease-out ${barColors[color]}`} 
            style={{ width: score }}
          />
        </div>
      </div>
    </div>
  );
};

const BookmarkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
  </svg>
);