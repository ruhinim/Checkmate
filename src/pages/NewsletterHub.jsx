import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { 
  Check, Briefcase, PlusCircle, Wrench, 
  Download, Sparkles, GraduationCap, Activity
} from "lucide-react";

export default function NewsletterHub() {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  // Local state to toggle preferences for interactivity
  const [prefs, setPrefs] = useState({
    insights: true,
    modules: true,
    tools: false
  });

  const togglePref = (key) => setPrefs(prev => ({ ...prev, [key]: !prev[key] }));

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
                <span className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full animate-pulse"></span>
                <span className="text-[9px] font-black text-[#0D9488] uppercase tracking-widest leading-none">Intelligence Feed Settings</span>
              </div>
              
              <h1 className="text-[40px] font-black leading-none tracking-tighter text-[#0F172A] mb-3">
                Academic Pulse
              </h1>
              <p className="text-slate-500 text-sm font-medium max-w-2xl leading-relaxed">
                Tailor your intelligence feed. Select the frequency and depth of curriculum reports delivered directly to your institutional inbox.
              </p>
            </div>
            
            {/* Quick Navigation Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={() => navigate('/new-module')}
                className="px-6 py-3.5 bg-white border-2 border-slate-100 rounded-2xl text-[11px] font-black shadow-sm hover:shadow-md hover:border-blue-100 transition-all flex items-center gap-2 text-slate-700 uppercase tracking-wider group"
              >
                <PlusCircle size={16} className="text-[#2563EB] group-hover:scale-110 transition-transform" />
                Check New Modules
              </button>
              <button 
                onClick={() => navigate('/insights')}
                className="px-6 py-3.5 bg-white border-2 border-slate-100 rounded-2xl text-[11px] font-black shadow-sm hover:shadow-md hover:border-emerald-100 transition-all flex items-center gap-2 text-slate-700 uppercase tracking-wider group"
              >
                <Briefcase size={16} className="text-[#0D9488] group-hover:scale-110 transition-transform" />
                Industry Insights
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 pb-10">
            
            {/* LEFT COLUMN: Settings & Plans */}
            <div className="col-span-7 flex flex-col gap-6">
              
              {/* Billing Frequency Card */}
              <div className="bg-white rounded-[32px] p-8 border border-white shadow-xl shadow-slate-200/40">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-[16px] font-black text-[#0F172A] tracking-tight">Billing Frequency</h3>
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1.5 flex items-center gap-1.5">
                      <Sparkles size={12} className="text-amber-500" /> Save 15% on quarterly plans
                    </p>
                  </div>
                  
                  {/* Segmented Control */}
                  <div className="bg-slate-100 p-1.5 rounded-2xl flex border border-slate-200/50 shadow-inner">
                    <button 
                      onClick={() => setBillingCycle('monthly')}
                      className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${billingCycle === 'monthly' ? 'bg-white text-[#2563EB] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                      Monthly
                    </button>
                    <button 
                      onClick={() => setBillingCycle('quarterly')}
                      className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${billingCycle === 'quarterly' ? 'bg-white text-[#2563EB] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                      Quarterly
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <PlanCard 
                    active={true}
                    name="Standard"
                    price="$49"
                    features={["Weekly Digest", "1 User License"]}
                  />
                  <PlanCard 
                    active={false}
                    name="Institutional"
                    price="$189"
                    features={["Custom Trend Reports", "Unlimited Department Users"]}
                  />
                </div>
              </div>

              {/* Subscription Preferences Card */}
              <div className="bg-white rounded-[32px] p-8 border border-white shadow-xl shadow-slate-200/40">
                <h3 className="text-[16px] font-black text-[#0F172A] tracking-tight mb-6">Subscription Preferences</h3>
                
                <div className="space-y-4">
                  <PreferenceItem 
                    checked={prefs.insights}
                    onClick={() => togglePref('insights')}
                    title="Industry Insights" 
                    desc="Real-world job market data mapped to CS curriculum requirements."
                    icon={<Briefcase size={16}/>}
                  />
                  <PreferenceItem 
                    checked={prefs.modules}
                    onClick={() => togglePref('modules')}
                    title="New Module Suggestions" 
                    desc="AI-generated course structures based on emerging tech like LLMs."
                    icon={<PlusCircle size={16}/>}
                  />
                  <PreferenceItem 
                    checked={prefs.tools}
                    onClick={() => togglePref('tools')}
                    title="Tool Trends" 
                    desc="Bi-weekly analysis of IDEs, frameworks, and deployment stack shifts."
                    icon={<Wrench size={16}/>}
                  />
                </div>
                
                <button className="mt-8 w-full py-4 bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white rounded-2xl text-[11px] font-black shadow-xl shadow-blue-700/30 hover:scale-[1.02] transition-all uppercase tracking-widest flex items-center justify-center gap-2">
                  <Check size={16} className="text-blue-200" /> Update Preferences
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Live Preview Sidebar */}
            <div className="col-span-5 h-full">
              <div className="bg-white rounded-[32px] p-8 border border-white shadow-xl shadow-slate-200/40 sticky top-6">
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Live Preview</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">Issue #142</span>
                </div>

                {/* Cover Image Widget */}
                <div className="rounded-[24px] overflow-hidden mb-6 relative group cursor-pointer shadow-md">
                  <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop" alt="preview" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent flex flex-col justify-end p-6">
                    <div className="bg-white/20 backdrop-blur-md w-fit px-3 py-1 rounded-full mb-3 border border-white/10">
                      <span className="text-[9px] font-black text-white uppercase tracking-widest">Trending Now</span>
                    </div>
                    <h4 className="text-white text-lg font-black leading-tight tracking-tight">Quantum Computing: Integrating Q# into Undergraduate Modules</h4>
                  </div>
                </div>

                {/* Insight Snippet */}
                <div className="space-y-4 mb-8">
                   <div className="p-6 bg-[#F8FAFC] rounded-[24px] border border-slate-100 hover:border-slate-200 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-2 mb-3">
                        <Activity size={14} className="text-[#0D9488]" />
                        <p className="text-[9px] font-black text-[#0D9488] uppercase tracking-widest">The 2024 Skills Gap</p>
                      </div>
                      <h5 className="text-[14px] font-black text-slate-800 mb-2">Rise of Memory-Safe Systems</h5>
                      <p className="text-[12px] text-slate-500 font-medium leading-relaxed">Recent data suggests a 40% increase in demand for Rust-based systems. We've drafted a module outline to bridge this gap.</p>
                      
                      <div className="w-full h-1.5 bg-slate-200 rounded-full mt-5 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#0D9488] to-[#14B8A6] w-[75%] rounded-full"></div>
                      </div>
                   </div>
                </div>

                {/* Tags */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-[20px] border border-slate-100 shadow-sm">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><Sparkles size={16}/></div>
                    <span className="text-[11px] font-black text-slate-700 uppercase tracking-wider">Tool Drop</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-[20px] border border-slate-100 shadow-sm">
                    <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl"><GraduationCap size={16}/></div>
                    <span className="text-[11px] font-black text-slate-700 uppercase tracking-wider">Pedagogy</span>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 text-[#2563EB] text-[10px] font-black uppercase tracking-widest py-4 border-2 border-slate-50 rounded-[20px] hover:bg-blue-50 hover:border-blue-100 transition-all">
                  <Download size={16} /> Download Full Sample Report
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

const PlanCard = ({ active, name, price, features }) => (
  <div className={`p-6 rounded-[24px] border-2 transition-all duration-300 relative overflow-hidden group cursor-pointer
    ${active ? 'border-[#2563EB] bg-blue-50/20 shadow-xl shadow-blue-100/50' : 'border-slate-100 bg-slate-50/50 hover:border-slate-200'}
  `}>
    {active && (
      <div className="absolute top-0 right-0 bg-[#2563EB] text-white text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-bl-xl shadow-sm">
        Active Plan
      </div>
    )}
    
    <h4 className={`font-black text-[14px] uppercase tracking-widest mb-3 ${active ? 'text-[#2563EB]' : 'text-slate-600'}`}>
      {name}
    </h4>
    
    <div className="flex items-baseline gap-1 mb-6">
      <span className="text-4xl font-black text-[#0F172A] tracking-tighter">{price}</span>
      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">/mo</span>
    </div>
    
    <ul className="space-y-4">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-[12px] font-bold text-slate-600">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${active ? 'bg-[#2563EB] text-white shadow-sm' : 'bg-slate-200 text-slate-500'}`}>
            <Check size={12} />
          </div>
          {f}
        </li>
      ))}
    </ul>
  </div>
);

const PreferenceItem = ({ checked, onClick, title, desc, icon }) => (
  <div 
    onClick={onClick}
    className={`flex items-start gap-5 p-5 rounded-[24px] border-2 transition-all cursor-pointer group
      ${checked ? 'bg-blue-50/30 border-blue-100 shadow-sm' : 'bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50/50'}
    `}
  >
    <div className={`w-6 h-6 rounded-[8px] border-2 flex items-center justify-center transition-colors mt-0.5 shrink-0 
      ${checked ? 'bg-[#2563EB] border-[#2563EB]' : 'bg-white border-slate-300 group-hover:border-[#2563EB]'}
    `}>
      {checked && <Check size={14} className="text-white" />}
    </div>
    
    <div className="flex-1">
      <div className="flex items-center justify-between mb-1">
        <h4 className="text-[14px] font-black text-slate-800 tracking-tight">{title}</h4>
        <div className={`p-2.5 rounded-xl transition-colors ${checked ? 'bg-blue-100 text-[#2563EB]' : 'bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-400'}`}>
          {icon}
        </div>
      </div>
      <p className="text-[12px] text-slate-500 font-medium leading-relaxed pr-8">{desc}</p>
    </div>
  </div>
);