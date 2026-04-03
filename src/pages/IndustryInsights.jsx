import React from 'react';
import Sidebar from "../components/Sidebar";
import { 
  Search, Bell, HelpCircle, ArrowRight, ExternalLink, 
  Download, Database, ShieldCheck, BarChart3, Clock, Calendar
} from "lucide-react";

export default function IndustryInsights() {
  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Navigation Bar */}
        <nav className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-8 shrink-0 sticky top-0 z-10">
          <div className="text-slate-800 font-bold text-sm tracking-tight">Industry Insights</div>
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

        <main className="p-10 max-w-[1400px] mx-auto w-full">
          {/* Header Section */}
          <div className="flex justify-between items-end mb-10">
            <div className="max-w-2xl">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">The Future of Curriculum</p>
              <h1 className="text-3xl font-black text-slate-900 leading-tight">
                Bridging the gap between rapid technological shifts and academic frameworks. Insights curated for CS Lead faculty.
              </h1>
            </div>
            {/* Category Pills */}
            <div className="flex gap-2 mb-1">
              {['AI', 'CLOUD', 'CYBERSECURITY', 'BIG DATA'].map((tag) => (
                <button key={tag} className="px-4 py-2 bg-slate-100 rounded-full text-[10px] font-black text-slate-400 hover:bg-blue-600 hover:text-white transition-all tracking-widest uppercase">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            {/* Main Featured Article (Left) */}
            <div className="col-span-8 group cursor-pointer">
              <div className="bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                <div className="relative h-[400px] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop" 
                    alt="AI Featured" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="bg-blue-600 text-white text-[9px] font-black uppercase px-3 py-1 rounded-full tracking-widest">Featured</span>
                    <span className="bg-emerald-500/90 backdrop-blur-md text-white text-[9px] font-black uppercase px-3 py-1 rounded-full tracking-widest">AI</span>
                  </div>
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/20">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 text-center">Relevance Score</p>
                    <p className="text-3xl font-black text-blue-600">98%</p>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-6 text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-6">
                    <div className="flex items-center gap-2"><Calendar size={14}/> March 14, 2024</div>
                    <div className="flex items-center gap-2"><Clock size={14}/> 12 Min Read</div>
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                    The Rise of Generative AI in Enterprise
                  </h2>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                    As Large Language Models migrate from research curiosity to enterprise backbone, computer science curricula must shift from "building models" to "orchestrating cognitive systems." Explore how prompt engineering and vector databases are redefining the modern tech stack.
                  </p>
                  <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <img src="https://ui-avatars.com/api/?name=Jane+Doe&background=random" className="w-10 h-10 rounded-full border border-slate-100" alt="author" />
                      <div>
                        <p className="text-xs font-black text-slate-900">Dr. Jane Doe</p>
                        <p className="text-[10px] font-bold text-slate-400">Senior AI Fellow</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-blue-600 text-sm font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                      Research Paper <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Cards (Right) */}
            <div className="col-span-4 space-y-8">
              {/* Relevance Insight Card */}
              <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase px-3 py-1 rounded-full tracking-widest">Cloud</span>
                  <div className="flex items-center gap-1 text-emerald-500">
                    <BarChart3 size={16} />
                    <span className="text-[11px] font-black uppercase tracking-widest">82% Relevance</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight">Cloud-Native Evolution in 2024</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">
                  The transition from monolithic architectures to serverless, event-driven designs is accelerating. We analyze the pedagogical shift required.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Kubernetes', 'Serverless', 'Edge Computing'].map(t => (
                    <span key={t} className="px-3 py-1.5 bg-slate-50 rounded-lg text-[9px] font-bold text-slate-500 uppercase border border-slate-100">{t}</span>
                  ))}
                </div>
                <button className="w-full flex items-center justify-center gap-2 py-4 text-blue-600 text-xs font-black uppercase tracking-widest border-t border-slate-50 hover:bg-slate-50 transition-colors">
                  View Curriculum Gap Analysis <ExternalLink size={14} />
                </button>
              </div>

              {/* Flash Report Card */}
              <div className="bg-blue-600 rounded-[32px] p-8 text-white relative overflow-hidden group cursor-pointer shadow-xl shadow-blue-100">
                <div className="relative z-10">
                  <p className="text-[9px] font-black text-blue-200 uppercase tracking-widest mb-3">Flash Report: Security</p>
                  <h3 className="text-xl font-black mb-6 leading-tight">Post-Quantum Cryptography Readiness</h3>
                  <p className="text-sm text-blue-100/80 font-medium leading-relaxed mb-8">
                    NIST has finalized its first set of PQC standards. Is your data structures course updated to include lattice-based primitives?
                  </p>
                  <button className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:shadow-lg transition-all">
                    <Download size={16} /> Download PDF Insight
                  </button>
                </div>
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              </div>
            </div>

            {/* Bottom Insight Grid */}
            <div className="col-span-12 grid grid-cols-3 gap-8 mt-4">
              <InsightCard 
                icon={<Database className="text-blue-600" size={20}/>}
                title="Vector Databases for ML"
                desc="Why Pinecone and Weaviate are becoming essential CS prerequisites."
                score="75%"
              />
              <InsightCard 
                icon={<ShieldCheck className="text-emerald-600" size={20}/>}
                title="Ethical AI Frameworks"
                desc="New EU regulations demand a change in how we teach algorithm design."
                score="91%"
              />
              <InsightCard 
                icon={<BarChart3 className="text-teal-600" size={20}/>}
                title="The Observability Gap"
                desc="Bridging the distance between logging and automated tracing."
                score="64%"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

const InsightCard = ({ icon, title, desc, score }) => (
  <div className="bg-white border border-slate-100 rounded-[24px] p-8 shadow-sm hover:shadow-md transition-all group cursor-pointer relative overflow-hidden">
    <div className="mb-6 flex justify-between items-center">
      <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-white group-hover:shadow-sm transition-all">{icon}</div>
      <button className="text-slate-300 hover:text-blue-600 transition-colors"><BookmarkIcon/></button>
    </div>
    <h4 className="text-lg font-black text-slate-800 mb-2 leading-tight">{title}</h4>
    <p className="text-xs text-slate-400 font-medium leading-relaxed mb-6">{desc}</p>
    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
      <div 
        className={`h-full rounded-full transition-all duration-1000 ${parseInt(score) > 80 ? 'bg-emerald-500' : 'bg-blue-600'}`} 
        style={{ width: score }}
      ></div>
    </div>
    <p className="mt-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">{score} Relevance</p>
  </div>
);

const BookmarkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
  </svg>
);