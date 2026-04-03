import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { ArrowLeft, ChevronRight } from "lucide-react";

export default function AnalysisDetail() {
  const navigate = useNavigate();

  // 🔥 DYNAMIC DATA (replace later)
  const module = {
    code: "CS302",
    name: "Machine Learning",
    score: 34,
    gaps: 28,
    outdated: 11,
    match: 41
  };

  const isCritical = module.score < 50;

  return (
    <div className="flex h-screen w-screen bg-[#F6F8FC] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 p-6 overflow-auto space-y-6">

          {/* 🔥 BREADCRUMB */}
          <div className="text-xs text-slate-400 font-semibold">
            Modules / {module.code} / Analysis
          </div>

          {/* 🔥 MODULE HEADER (NEXT LEVEL) */}
          <div className={`relative rounded-[28px] p-7 shadow-md overflow-hidden
            ${isCritical 
              ? "bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white"
              : "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white"}
          `}>

            {/* Glow */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

            <div className="flex justify-between items-start relative z-10">

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
                  Curriculum Audit v2.4
                </span>

                <h1 className="text-[28px] font-black mt-3 tracking-tight">
                  {module.code} – {module.name} Analysis
                </h1>

                <p className="text-sm opacity-80 mt-2 max-w-[600px]">
                  Deep intelligence analysis against global industry benchmarks and curriculum standards.
                </p>

                {/* SCORE */}
                <div className="flex items-end gap-4 mt-6">
                  <span className="text-[56px] font-black leading-none">
                    {module.score}%
                  </span>
                  <span className="text-sm font-semibold opacity-80 mb-2">
                    Alignment Score
                  </span>
                </div>

                {/* PROGRESS */}
                <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white"
                    style={{ width: `${module.score}%` }}
                  />
                </div>
              </div>

              {/* ACTION */}
              <div className="flex flex-col items-end gap-3">
                <button 
                onClick={() => navigate("/recommendations")}
                className="px-5 py-3 bg-white text-slate-900 rounded-xl font-semibold shadow hover:scale-[1.02]">
                  View AI Recommendations
                </button>

                <button
                  onClick={() => navigate('/modules')}
                  className="text-xs font-bold uppercase opacity-80 flex items-center gap-2"
                >
                  <ArrowLeft size={14}/> Back
                </button>
              </div>
            </div>
          </div>

          {/* 🔥 KPI CARDS */}
          <div className="grid grid-cols-4 gap-4">

            <KPI title="Skill Gaps" value={module.gaps} danger />
            <KPI title="Outdated Modules" value={module.outdated} />
            <KPI title="Industry Match" value={`${module.match}%`} success />

            {/* DONUT */}
            <div className="bg-white rounded-2xl p-4 border shadow-sm flex flex-col items-center justify-center">
              <Donut value={module.score} color={isCritical ? "#DC2626" : "#2563EB"} />
              <p className="text-xs text-slate-400 mt-2">Overall Score</p>
            </div>

          </div>

          {/* 🔥 MAIN GRID */}
          <div className="grid grid-cols-12 gap-6">

            {/* LEFT */}
            <div className="col-span-8 space-y-6">

              {/* INDUSTRY BARS */}
              <div className="bg-white p-6 rounded-2xl border shadow-sm">
                <h3 className="font-bold mb-4">Curriculum vs Industry</h3>

                <Bar label="Software Development" value={isCritical ? 31 : 92}/>
                <Bar label="Data Science & AI" value={isCritical ? 12 : 65}/>
                <Bar label="Cloud Infrastructure" value={isCritical ? 24 : 74}/>
              </div>

              {/* FEEDBACK + WORD CLOUD */}
              <div className="grid grid-cols-2 gap-6">

                <div className="bg-white p-6 rounded-2xl border shadow-sm">
                  <h3 className="font-bold mb-3">Student Feedback</h3>

                  <p className={`text-lg font-bold ${
                    isCritical ? "text-red-600" : "text-green-600"
                  }`}>
                    {isCritical ? "Mixed" : "Positive"}
                  </p>

                  <p className="text-sm text-slate-500 mt-2">
                    “Curriculum needs more modern tools and real-world exposure.”
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border shadow-sm">
                  <h3 className="font-bold mb-3">Sentiment Overview</h3>

                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-blue-100 px-3 py-1 rounded-full">Modern</span>
                    <span className="bg-red-100 px-3 py-1 rounded-full">Outdated</span>
                    <span className="bg-green-100 px-3 py-1 rounded-full">Practical</span>
                    <span className="bg-yellow-100 px-3 py-1 rounded-full">Challenging</span>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="col-span-4 space-y-6">

              {/* INSIGHTS */}
              <div className="bg-white p-6 rounded-2xl border shadow-sm">
                <h3 className="font-bold mb-4">Critical Insights</h3>

                <Insight
                  title="Outdated Stack"
                  text="Core modules rely on deprecated technologies"
                  danger
                />

                <Insight
                  title="Skill Gap"
                  text="Cloud & distributed systems missing"
                />

                <Insight
                  title="Opportunity"
                  text="Add AI & MLOps modules"
                />
              </div>

              {/* FINAL CTA */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-2xl">
                <h3 className="text-sm opacity-70 mb-2">FINAL ACTION</h3>

                <p className="text-sm mb-4">
                  {isCritical
                    ? "Immediate intervention required to fix curriculum gaps."
                    : "Minor improvements recommended."}
                </p>

                <button className="w-full py-3 bg-blue-600 rounded-xl font-semibold flex items-center justify-center gap-2">
                  Launch Fix Plan <ChevronRight size={14}/>
                </button>
              </div>

            </div>

          </div>

        </main>
      </div>
    </div>
  );
}

/* COMPONENTS */

function KPI({ title, value, danger, success }) {
  return (
    <div className="bg-white p-5 rounded-xl border shadow-sm">
      <p className="text-xs text-slate-400">{title}</p>
      <p className={`text-xl font-bold mt-1 ${
        danger ? "text-red-600" : success ? "text-green-600" : ""
      }`}>
        {value}
      </p>
    </div>
  );
}

function Bar({ label, value }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 bg-slate-200 rounded-full">
        <div
          className="h-2 bg-blue-600 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function Insight({ title, text, danger }) {
  return (
    <div className={`p-3 rounded-lg mb-2 ${
      danger ? "bg-red-50 border border-red-200" : "bg-slate-50"
    }`}>
      <p className={`text-sm font-semibold ${
        danger ? "text-red-600" : ""
      }`}>
        {title}
      </p>
      <p className="text-xs text-slate-500">{text}</p>
    </div>
  );
}

/* DONUT */
function Donut({ value, color }) {
  const radius = 50;
  const stroke = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width="120" height="120">
      <circle
        stroke="#E2E8F0"
        fill="transparent"
        strokeWidth={stroke}
        r={radius}
        cx="60"
        cy="60"
      />
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        r={radius}
        cx="60"
        cy="60"
        strokeLinecap="round"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize="18"
        fontWeight="bold"
        fill={color}
      >
        {value}%
      </text>
    </svg>
  );
}