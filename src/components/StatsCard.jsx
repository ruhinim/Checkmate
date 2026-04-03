import React from 'react';
import { BookOpen, CheckCircle, Lightbulb, Users } from "lucide-react";

export default function StatsCard({ title, value, iconType, accentColor = "blue", highlight }) {
  const accents = {
    blue: "border-blue-500 bg-blue-50 text-blue-600",
    green: "border-emerald-400 bg-emerald-50 text-emerald-600",
    indigo: "border-indigo-600 bg-indigo-50 text-indigo-600",
    orange: "border-orange-400 bg-orange-50 text-orange-600"
  };

  const icons = {
    modules: <BookOpen size={20} />,
    alignment: <CheckCircle size={20} />,
    recommendations: <Lightbulb size={20} />,
    passRate: <Users size={20} />
  };

  return (
    <div className={`p-5 rounded-[24px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.02)] border-l-4 ${accents[accentColor].split(' ')[0]} flex items-center justify-between h-full`}>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{title}</p>
        <div className="flex items-baseline gap-2">
          <p className="text-2xl font-bold text-slate-900">{value}</p>
          {highlight && <span className="text-[10px] font-bold text-emerald-500">{highlight}</span>}
        </div>
      </div>
      <div className={`p-3 rounded-xl ${accents[accentColor].split(' ').slice(1).join(' ')}`}>
        {icons[iconType]}
      </div>
    </div>
  );
}