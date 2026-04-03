import React from "react";
import { useNavigate } from "react-router-dom"; // Import this
import Sidebar from "../components/Sidebar";

const RecommendationCard = ({ 
  category, 
  title, 
  priority, 
  priorityClass, 
  accentBorder, 
  description, 
  footerInfo, 
  icon 
}) => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className={`bg-white border border-slate-200 border-l-[6px] ${accentBorder} rounded-xl shadow-sm mb-5 overflow-hidden`}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-start gap-4">
            <div className="mt-1 p-2 bg-slate-50 rounded-lg border border-slate-100">
              {icon}
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-1">{category}</p>
              <h3 className="text-xl font-bold text-[#1e293b]">{title}</h3>
            </div>
          </div>
          <span className={`text-[10px] font-black px-3 py-1 rounded-full tracking-tighter ${priorityClass}`}>
            PRIORITY: {priority}
          </span>
        </div>

        <div className="bg-[#f8fafc] border border-slate-100 p-4 rounded-xl mb-5">
          <p className="text-[#64748b] italic text-[14px] leading-relaxed">
            "{description}"
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-slate-400 text-[12px]">
            <div className="w-4 h-4 bg-slate-200 rounded-full" />
            <span>{footerInfo}</span>
          </div>
          <div className="flex gap-2">
            <button className="px-5 py-2 text-slate-600 font-bold text-xs border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              Modify
            </button>
            
            {/* UPDATED SAVE BUTTON */}
            <button 
              onClick={() => navigate("/saverecommendation")}
              className="px-5 py-2 text-slate-600 font-bold text-xs border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Save
            </button>

            <button className="px-7 py-2 bg-[#1d4ed8] text-white font-bold text-xs rounded-lg hover:bg-blue-700 transition-colors">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function RecommendationsPage() {
  return (
    <div className="flex min-h-screen bg-[#f1f5f9]">
      <Sidebar />

      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* Header Navigation */}
        <nav className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="text-slate-500 font-medium text-sm">AI Recommendations</div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search curriculum..." 
                className="bg-slate-100 rounded-full px-10 py-2 text-sm w-64 focus:outline-none border border-transparent focus:border-slate-300"
              />
            </div>
            <div className="flex items-center gap-3">
               <div className="text-right">
                  <p className="text-[11px] font-bold text-slate-800">Dr. Smith</p>
                  <p className="text-[9px] text-slate-400 uppercase font-bold tracking-tighter">CS Lead</p>
               </div>
               <div className="w-10 h-10 bg-slate-300 rounded-full overflow-hidden border border-slate-200">
                  <img src="https://ui-avatars.com/api/?name=Dr+Smith" alt="profile" />
               </div>
            </div>
          </div>
        </nav>

        {/* Content Area */}
        <main className="p-10 max-w-5xl mx-auto w-full">
          <div className="flex justify-between items-start mb-8">
            <div>
              <header className="flex items-center gap-2 mb-2">
                <span className="bg-slate-100 text-slate-500 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest">Course Focus</span>
                <span className="text-slate-800 font-semibold text-sm">CS302 – Machine Learning</span>
              </header>
              <h1 className="text-4xl font-bold text-[#1e293b] mb-3 tracking-tight">Intelligence Ledger</h1>
              <p className="text-slate-500 max-w-2xl leading-relaxed">
                AI-driven curriculum enhancements based on global industry trends, student performance patterns, and emerging technology frameworks.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2.5 bg-slate-200 text-slate-700 font-bold text-sm rounded-full hover:bg-slate-300 transition">Export Report</button>
              <button className="px-6 py-2.5 bg-[#2563eb] text-white font-bold text-sm rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-200">Apply All</button>
            </div>
          </div>

          {/* Cards mapping */}
          <RecommendationCard 
            category="Tool Update"
            title="Add PyTorch Framework to Lab 3"
            priority="HIGH"
            priorityClass="bg-red-50 text-red-500"
            accentBorder="border-emerald-500"
            description="Industry demand for PyTorch has increased by 40%. Current curriculum heavily relies on TensorFlow 1.x, creating a competency gap for graduates entering R&D roles."
            footerInfo="Validated by Industry Panel"
            icon={<span className="text-emerald-600">🛠️</span>}
          />

          <RecommendationCard 
            category="Content Expansion"
            title="Integrate Ethics in Generative AI"
            priority="MEDIUM"
            priorityClass="bg-emerald-50 text-emerald-500"
            accentBorder="border-blue-500"
            description="Current module lacks discussion on bias and watermarking in LLMs. Recommendation to include a 2-hour seminar on 'The Ethics of Synthetic Media' in Week 8."
            footerInfo="Estimated Prep: 4.5 hrs"
            icon={<span className="text-blue-600">📖</span>}
          />

          <RecommendationCard 
            category="Pedagogical Shift"
            title="Flip Classroom for Neural Networks"
            priority="LOW"
            priorityClass="bg-green-50 text-green-500"
            accentBorder="border-emerald-500"
            description="Student performance data shows a 15% drop in understanding during the Gradient Descent lectures. Flipped classroom models have shown to improve retention in complex mathematical topics."
            footerInfo="Impact: 142 Students"
            icon={<span className="text-emerald-600">📉</span>}
          />

          <RecommendationCard 
            category="Platform Update"
            title="Migrate Lab Infrastructure to Azure ML"
            priority="HIGH"
            priorityClass="bg-red-50 text-red-500"
            accentBorder="border-red-500"
            description="Current local GPU cluster is at 98% capacity. Transitioning to cloud-based notebooks will allow for larger training sets and exposure to MLOps pipelines currently standard in enterprise."
            footerInfo="Cost Increase: +$1,200/semester"
            icon={<span className="text-red-600">🔬</span>}
          />
        </main>
      </div>
    </div>
  );
}