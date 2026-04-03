import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, Book, BarChart3, Sparkles, 
  MessageCircle, Newspaper, Globe, Plus, 
  Users, Shield, MessageSquare, Crown, ChevronDown 
} from "lucide-react";

export default function Sidebar() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const mainMenuItems = [
    { icon: <LayoutDashboard size={18} />, label: "Dashboard", path: "/dashboard" },
    { icon: <Book size={18} />, label: "Modules", path: "/modules" },
    { icon: <BarChart3 size={18} />, label: "Analysis", path: "/analysis" },
    { icon: <Sparkles size={18} />, label: "Recommendations", path: "/recommendations" },
    { icon: <MessageCircle size={18} />, label: "ChatMate", path: "/chatmate" },
  ];

  const newsletterSubItems = [
    { icon: <Globe size={16} />, label: "Industry Insights", path: "/insights" },
    { icon: <Plus size={16} />, label: "New Modules", path: "/new-module" },
  ];

  const bottomMenuItems = [
    { icon: <Users size={18} />, label: "Student Analytics", path: "/analytics" },
    { icon: <Shield size={18} />, label: "Governance", path: "/governance" },
    { icon: <MessageSquare size={18} />, label: "Feedback", path: "/feedback" },
  ];

  const activeClass = "bg-[#F1F5F9] text-[#2563EB] font-bold";
  const inactiveClass = "text-slate-400 hover:bg-slate-50 hover:text-slate-600";

  return (
    <div className="w-72 bg-white border-r border-slate-100 p-6 flex flex-col justify-between shrink-0 h-full relative z-20">
      <div>
        {/* LOGO */}
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 bg-[#2563eb] text-white flex items-center justify-center rounded-xl shadow-lg shadow-blue-200">
            <Crown size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-[#0F172A] text-[18px]">CheckMate</span>
            <span className="text-[9px] font-black text-slate-400 tracking-[1.5px] uppercase">
              Academic Intelligence
            </span>
          </div>
        </div>

        <nav className="space-y-1">
          {/* Main Navigation Group */}
          {mainMenuItems.map((item, idx) => (
            <NavLink 
              key={idx} 
              to={item.path}
              className={({ isActive }) => `flex items-center gap-4 px-4 py-3 rounded-xl transition-all relative ${isActive ? activeClass : inactiveClass}`}
            >
              <span>{item.icon}</span>
              <span className="text-[13px]">{item.label}</span>
            </NavLink>
          ))}

          {/* Newsletter Dropdown Group */}
          <div className="pt-1">
            <button 
              onClick={() => setIsNewsletterOpen(!isNewsletterOpen)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${inactiveClass}`}
            >
              <Newspaper size={18} />
              <span className="text-[13px]">Newsletter</span>
              <ChevronDown 
                size={14} 
                className={`ml-auto transition-transform duration-200 ${isNewsletterOpen ? 'rotate-180' : ''}`} 
              />
            </button>

            {/* Dropdown Content */}
            <div className={`overflow-hidden transition-all duration-300 ${isNewsletterOpen ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
              {newsletterSubItems.map((subItem, idx) => (
                <NavLink 
                  key={idx} 
                  to={subItem.path}
                  className={({ isActive }) => `flex items-center gap-4 pl-12 pr-4 py-2.5 rounded-xl text-[12px] transition-all ${isActive ? 'text-[#2563EB] font-bold' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <span>{subItem.icon}</span>
                  <span>{subItem.label}</span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Bottom Navigation Group */}
          <div className="pt-1">
            {bottomMenuItems.map((item, idx) => (
              <NavLink 
                key={idx} 
                to={item.path}
                className={({ isActive }) => `flex items-center gap-4 px-4 py-3 rounded-xl transition-all relative ${isActive ? activeClass : inactiveClass}`}
              >
                <span>{item.icon}</span>
                <span className="text-[13px]">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </nav>
      </div>

      {/* AI ASSISTANT */}
      <div className="px-2 mt-6">
        <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:shadow-md transition-all cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-lg bg-[#2563eb]/10 flex items-center justify-center text-[#2563eb]">
                <Sparkles size={16} />
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border border-white"></div>
            </div>
            <div>
              <p className="text-[12px] font-semibold text-slate-800">AI Assistant</p>
              <p className="text-[10px] text-slate-500">Ready to help</p>
            </div>
          </div>
          <span className="text-[11px] font-medium text-[#2563eb]">Open</span>
        </div>
      </div>
    </div>
  );
}