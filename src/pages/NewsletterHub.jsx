import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import { 
  Search, Bell, HelpCircle, Check, Briefcase, 
  PlusCircle, Wrench, Download, Sparkles, GraduationCap 
} from "lucide-react";

export default function NewsletterHub() {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
        <nav className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-8 shrink-0 sticky top-0 z-10">
          <div className="text-slate-400 font-bold text-[11px] uppercase tracking-widest">Newsletter Settings</div>
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

        <main className="p-10 max-w-[1200px] mx-auto w-full">
          {/* Title and Navigation Buttons */}
          <div className="flex justify-between items-start mb-10">
            <div>
              <h1 className="text-[42px] font-black text-slate-900 tracking-tight leading-tight mb-2">Academic Pulse.</h1>
              <p className="text-slate-500 max-w-xl text-sm leading-relaxed font-medium">
                Tailor your intelligence feed. Select the frequency and depth of curriculum reports delivered directly to your institutional inbox.
              </p>
            </div>
            
            {/* Requested Navigation Buttons */}
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => navigate('/new-module')}
                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
              >
                <PlusCircle size={14} className="text-blue-600" />
                Check New Modules
              </button>
              <button 
                onClick={() => navigate('/insights')}
                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
              >
                <Briefcase size={14} className="text-emerald-600" />
                Industry Insights
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-7 space-y-8">
              
              {/* Billing Frequency */}
              <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="font-bold text-slate-800">Billing Frequency</h3>
                    <p className="text-[11px] text-slate-400 font-bold mt-1">Save 15% on institutional quarterly plans.</p>
                  </div>
                  <div className="bg-slate-100 p-1 rounded-xl flex">
                    <button 
                      onClick={() => setBillingCycle('monthly')}
                      className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${billingCycle === 'monthly' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400'}`}
                    >
                      Monthly
                    </button>
                    <button 
                      onClick={() => setBillingCycle('quarterly')}
                      className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${billingCycle === 'quarterly' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400'}`}
                    >
                      Quarterly
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
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

              {/* Subscription Preferences */}
              <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-6">Subscription Preferences</h3>
                <div className="space-y-6">
                  <PreferenceItem 
                    checked={true}
                    title="Industry Insights" 
                    desc="Real-world job market data mapped to CS curriculum requirements."
                    icon={<Briefcase size={14}/>}
                  />
                  <PreferenceItem 
                    checked={true}
                    title="New Module Suggestions" 
                    desc="AI-generated course structures based on emerging technologies like LLMs."
                    icon={<PlusCircle size={14}/>}
                  />
                  <PreferenceItem 
                    checked={false}
                    title="Tool Trends" 
                    desc="Bi-weekly analysis of IDEs, frameworks, and deployment stack shifts."
                    icon={<Wrench size={14}/>}
                  />
                </div>
                <button className="mt-8 w-full py-3 bg-[#2563EB] text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition">
                  Update Preferences
                </button>
              </div>
            </div>

            {/* Live Preview Sidebar */}
            <div className="col-span-5">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-md sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Live Preview: This Week</span>
                  <span className="ml-auto text-[10px] italic text-slate-400">Issue #142 • Sept 24</span>
                </div>

                <div className="rounded-2xl overflow-hidden mb-6 relative group cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop" alt="preview" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h4 className="text-white font-bold leading-tight">Quantum Computing: Integrating Q# into Undergraduate Modules</h4>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                   <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-[9px] font-black text-emerald-600 uppercase tracking-widest mb-1">Industry Insight</p>
                      <h5 className="text-xs font-bold text-slate-800 mb-1">The 2024 Skills Gap</h5>
                      <p className="text-[11px] text-slate-500 leading-relaxed">Recent data suggests a 40% increase in demand for Rust-based systems. We've drafted a module outline to bridge this gap.</p>
                      <div className="w-full h-1 bg-slate-200 rounded-full mt-3 overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[75%] rounded-full"></div>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg"><Sparkles size={12}/></div>
                    <span className="text-[10px] font-bold text-slate-700">Tool Drop</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg"><GraduationCap size={12}/></div>
                    <span className="text-[10px] font-bold text-slate-700">Pedagogy</span>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 text-blue-600 text-[11px] font-bold py-2 border-t border-slate-50 hover:bg-slate-50 transition-colors">
                  <Download size={14} /> Download Full Sample Report
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Reusable Components
const PlanCard = ({ active, name, price, features }) => (
  <div className={`p-6 rounded-2xl border-2 transition-all ${active ? 'border-blue-600 bg-white relative' : 'border-slate-100 bg-slate-50/50 grayscale'}`}>
    {active && <span className="absolute -top-2.5 left-6 bg-blue-600 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded">Active</span>}
    <h4 className="font-bold text-slate-800 mb-1">{name}</h4>
    <div className="flex items-baseline gap-1 mb-6">
      <span className="text-2xl font-black text-slate-900">{price}</span>
      <span className="text-[10px] text-slate-400 font-bold uppercase">/mo</span>
    </div>
    <ul className="space-y-3">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
          <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"><Check size={10} /></div>
          {f}
        </li>
      ))}
    </ul>
  </div>
);

const PreferenceItem = ({ checked, title, desc, icon }) => (
  <div className="flex items-start gap-4">
    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors mt-1 shrink-0 ${checked ? 'bg-blue-600 border-blue-600' : 'bg-white border-slate-200'}`}>
      {checked && <Check size={12} className="text-white" />}
    </div>
    <div className="flex-1">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold text-slate-800">{title}</h4>
        <div className="text-slate-300">{icon}</div>
      </div>
      <p className="text-[11px] text-slate-400 font-medium leading-relaxed mt-0.5">{desc}</p>
    </div>
  </div>
);