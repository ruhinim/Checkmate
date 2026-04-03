import React from 'react';

export default function BentoCard({ title, children, className = "" }) {
  return (
    <div className={`bg-white rounded-[32px] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100 flex flex-col ${className}`}>
      {title && (
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-5">
          {title}
        </h3>
      )}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}