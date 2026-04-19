import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { 
  Wrench, 
  BookOpen, 
  TrendingUp, 
  CloudCog, 
  Check, 
  Save, 
  Edit3, 
  Sparkles, 
  Download,
  Info
} from "lucide-react";

const RecommendationCard = ({ 
  category, 
  title, 
  priority, 
  priorityLevel, 
  description, 
  footerInfo, 
  icon 
}) => {
  const navigate = useNavigate();

  // Dynamic Color Mapping based on Priority
  const getTheme = (level) => {
    switch (level) {
      case 'high':
        return {
          badge: 'bg-rose-100 text-rose-700 border-rose-200',
          iconBg: 'bg-rose-50 text-rose-600',
          quoteBorder: 'border-rose-400',
          quoteBg: 'bg-rose-50/50'
        };
      case 'medium':
        return {
          badge: 'bg-amber-100 text-amber-700 border-amber-200',
          iconBg: 'bg-amber-50 text-amber-600',
          quoteBorder: 'border-amber-400',
          quoteBg: 'bg-amber-50/50'
        };
      case 'low':
        return {
          badge: 'bg-teal-100 text-teal-700 border-teal-200',
          iconBg: 'bg-teal-50 text-teal-600',
          quoteBorder: 'border-teal-400',
          quoteBg: 'bg-teal-50/50'
        };
      default:
        return {
          badge: 'bg-slate-100 text-slate-700 border-slate-200',
          iconBg: 'bg-slate-50 text-slate-600',
          quoteBorder: 'border-slate-400',
          quoteBg: 'bg-slate-50'
        };
    }
  };

  const theme = getTheme(priorityLevel);

  return (
    <div className="bg-white rounded-[24px] p-5 border border-white shadow-xl shadow-slate-200/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col group">
      
      {/* Header Row */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start gap-4">
          <div className={`p-2.5 rounded-xl flex items-center justify-center transition-colors ${theme.iconBg}`}>
            {icon}
          </div>
          <div>
            <p className="text-[9px] font-black text-slate-400 tracking-widest uppercase mb-1">{category}</p>
            <h3 className="text-[20px] font-black text-[#0F172A] tracking-tight">{title}</h3>
          </div>
        </div>
        <span className={`text-[9px] font-black px-3 py-1.5 rounded-full border uppercase tracking-widest ${theme.badge}`}>
          Priority: {priority}
        </span>
      </div>

      {/* AI Quote/Description Block */}
      <div className={`border-l-4 rounded-r-xl p-4 mb-4 ${theme.quoteBorder} ${theme.quoteBg}`}>
        <div className="flex items-start gap-3">
          <Sparkles size={14} className="mt-0.5 shrink-0 opacity-40" />
          <p className="text-slate-700 italic text-[12px] font-medium leading-relaxed">
            "{description}"
          </p>
        </div>
      </div>

      {/* Footer & Actions */}
      <div className="flex justify-between items-center mt-auto pt-3 border-t border-slate-100">
        <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
          <Info size={12} className="text-slate-400" />
          <span>{footerInfo}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-slate-600 font-black text-[9px] uppercase tracking-widest border-2 border-slate-100 rounded-lg hover:bg-slate-50 hover:border-slate-200 transition-all flex items-center gap-1.5">
            <Edit3 size={12} /> Modify
          </button>
          
          <button 
            onClick={() => navigate("/saverecommendation")}
            className="px-4 py-2 text-slate-600 font-black text-[9px] uppercase tracking-widest border-2 border-slate-100 rounded-lg hover:bg-slate-50 hover:border-slate-200 transition-all flex items-center gap-1.5"
          >
            <Save size={12} /> Save
          </button>

          <button className="px-6 py-2 bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white font-black text-[9px] uppercase tracking-widest rounded-lg hover:bg-black hover:scale-[1.02] transition-all shadow-md flex items-center gap-1.5">
            <Check size={12} /> Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default function RecommendationsPage() {
  const navigate = useNavigate();

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
          <div className="flex justify-between items-end shrink-0 mb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full mb-3 border border-blue-100 shadow-sm">
                <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse"></span>
                <span className="text-[9px] font-black text-[#1E40AF] uppercase tracking-widest leading-none">Course Focus • CS302</span>
              </div>
              
              <h1 className="text-[36px] font-black leading-none tracking-tighter text-[#0F172A] mb-3">
                Intelligence Ledger
              </h1>
              
              <p className="text-slate-500 text-[13px] font-medium max-w-2xl leading-relaxed">
                AI-driven curriculum enhancements based on global industry trends, student performance patterns, and emerging technology frameworks.
              </p>
            </div>
            
            <div className="flex gap-3">
              <button className="px-5 py-3 bg-white border-2 border-slate-100 rounded-xl text-[10px] font-black shadow-sm hover:shadow-md transition-all flex items-center gap-2 text-slate-600 uppercase tracking-wider">
                <Download size={14} /> Export
              </button>
              
              <button className="px-6 py-3 bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white rounded-xl text-[10px] font-black shadow-xl shadow-blue-700/30 hover:scale-[1.03] transition-all flex items-center gap-2 uppercase tracking-widest">
                <Sparkles size={14} className="text-blue-200" /> Apply All Fixes
              </button>
            </div>
          </div>

          {/* LEDGER CARDS LIST - Expanded to full width using w-full */}
          <div className="w-full flex flex-col gap-4 pb-10">
            <RecommendationCard 
              category="Tool Update"
              title="Add PyTorch Framework to Lab 3"
              priority="High"
              priorityLevel="high"
              description="Industry demand for PyTorch has increased by 40%. Current curriculum heavily relies on TensorFlow 1.x, creating a competency gap for graduates entering R&D roles."
              footerInfo="Validated by Industry Panel"
              icon={<Wrench size={20} />}
            />

            <RecommendationCard 
              category="Content Expansion"
              title="Integrate Ethics in Generative AI"
              priority="Medium"
              priorityLevel="medium"
              description="Current module lacks discussion on bias and watermarking in LLMs. Recommendation to include a 2-hour seminar on 'The Ethics of Synthetic Media' in Week 8."
              footerInfo="Estimated Prep: 4.5 hrs"
              icon={<BookOpen size={20} />}
            />

            <RecommendationCard 
              category="Platform Update"
              title="Migrate Lab Infrastructure to Azure ML"
              priority="High"
              priorityLevel="high"
              description="Current local GPU cluster is at 98% capacity. Transitioning to cloud-based notebooks will allow for larger training sets and exposure to MLOps pipelines currently standard in enterprise."
              footerInfo="Cost Increase: +$1,200/semester"
              icon={<CloudCog size={20} />}
            />

            <RecommendationCard 
              category="Pedagogical Shift"
              title="Flip Classroom for Neural Networks"
              priority="Low"
              priorityLevel="low"
              description="Student performance data shows a 15% drop in understanding during the Gradient Descent lectures. Flipped classroom models have shown to improve retention in complex mathematical topics."
              footerInfo="Impact: 142 Students"
              icon={<TrendingUp size={20} />}
            />
          </div>

        </main>
      </div>
    </div>
  );
}