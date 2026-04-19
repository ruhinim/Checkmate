import React from 'react';
import { Search, Bell, ChevronDown } from "lucide-react";

export default function Topbar() {
  return (
    <div className="h-20 bg-white/95 backdrop-blur-sm border-b border-slate-100 flex items-center justify-between px-8 shrink-0 sticky top-0 z-10 w-full shadow-sm shadow-slate-100/30">
      
      {/* LEFT: Unified Search Bar */}
      <div className="relative w-80 group">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2563EB] transition-colors" size={16} />
        <input 
          type="text" 
          placeholder="Search curriculum insights..." 
          className="w-full bg-slate-50 rounded-xl pl-11 pr-4 py-2.5 text-[13px] font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none border border-slate-100 focus:border-blue-300 focus:bg-white focus:shadow-md transition-all duration-300 ease-out"
        />
      </div>

      {/* RIGHT: Notifications & Refined Profile */}
      <div className="flex items-center gap-6">
        
        {/* Notifications Icon with Indicator */}
        <button className="relative p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-all group">
          <Bell size={20} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>
        
        {/* Refined Profile Section */}
        <div className="flex items-center gap-3.5 pl-6 border-l border-slate-100 cursor-pointer group">
          
          {/* Presence Avatar */}
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center font-black text-[13px] text-[#2563EB] tracking-tight shadow-inner overflow-hidden">
                D&nbsp;S {/* Non-breaking space keeps initials together */}
                {/* UNCOMMENT BELOW AND REMOVE D S ABOVE IF YOU HAVE AN IMAGE URL */}
                {/* <img src="URL_TO_PROFILE_IMAGE" className="w-full h-full object-cover" alt="Dr. Smith" /> */}
            </div>
            {/* Status Indicator (Green for Online) */}
            <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white shadow-md"></div>
          </div>
          
          {/* Name & Title */}
          <div className="text-right leading-tight">
            <p className="text-[13px] font-black text-[#0F172A] tracking-tight group-hover:text-[#2563EB] transition-colors">Dr. Smith</p>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">CS Lead Faculty</p>
          </div>
          
          {/* Dropdown Chevron */}
          <ChevronDown size={14} className="text-slate-400 group-hover:text-slate-600 group-hover:translate-y-0.5 transition-all" />

        </div>
      </div>
    </div>
  );
}