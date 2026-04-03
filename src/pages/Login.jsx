import React from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, BookOpen, Crown } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-[#e6ebf2]">

      <div className="w-[1180px] h-[680px] flex rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)]">

        {/* LEFT */}
        <div className="w-1/2 relative bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#1e3a8a] text-white p-16 flex flex-col justify-between overflow-hidden">

          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]"></div>

          {/* LOGO */}
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-11 h-11 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center shadow-lg border border-white/20">
              <Crown size={18} strokeWidth={2.2} />
            </div>
            <span className="font-semibold text-lg tracking-wide">
              CheckMate
            </span>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-[48px] leading-[1.05] font-extrabold mb-6 tracking-tight">
              Elevate your <br /> academic workflow.
            </h1>

            <p className="text-[15px] text-white/85 leading-[1.7] max-w-[360px]">
              The intelligent curator for modern researchers and students.
              Seamlessly sync with your existing university ecosystem.
            </p>
          </div>

          {/* Badge */}
          <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-5 py-3 text-[13px] w-fit shadow-lg">
            Joined by 12,000+ scholars
          </div>

          {/* Blobs */}
          <div className="absolute top-0 right-0 w-52 h-52 bg-white/10 rounded-full translate-x-16 -translate-y-16 blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-16 translate-y-16 blur-xl"></div>
        </div>

        {/* RIGHT */}
        <div className="w-1/2 bg-[#f8fafc] flex items-center justify-center relative">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.08),transparent_60%)]"></div>

          <div className="w-[380px] bg-white/80 backdrop-blur-xl rounded-2xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/40 relative z-10">

            <h2 className="text-[22px] font-semibold text-center text-[#0f172a] leading-snug mb-2">
              Login with your University <br /> LMS
            </h2>

            <p className="text-[13px] text-gray-400 text-center mb-6">
              Access your curated dashboard instantly.
            </p>

            {/* LMS Buttons */}
            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-3 text-sm bg-white hover:bg-gray-50 hover:shadow-md transition-all duration-200">
                <GraduationCap size={16} />
                Canvas Login
              </button>

              <button className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-3 text-sm bg-white hover:bg-gray-50 hover:shadow-md transition-all duration-200">
                <BookOpen size={16} />
                Moodle Access
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-[1px] bg-gray-200"></div>
              <span className="text-xs text-gray-400 tracking-wide">
                OR USE CREDENTIALS
              </span>
              <div className="flex-1 h-[1px] bg-gray-200"></div>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              <input
                placeholder="name@university.edu"
                className="w-full p-3 bg-gray-100 rounded-lg text-sm outline-none 
                focus:ring-2 focus:ring-blue-500 focus:bg-white 
                shadow-inner transition-all"
              />

              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-3 bg-gray-100 rounded-lg text-sm outline-none 
                focus:ring-2 focus:ring-blue-500 focus:bg-white 
                shadow-inner transition-all"
              />

              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Keep me logged in</span>
                <span className="text-blue-600 cursor-pointer hover:underline">
                  Forgot?
                </span>
              </div>

              {/* 🔥 THIS IS THE IMPORTANT PART */}
              <button
                onClick={() => navigate("/dashboard")}
                className="w-full py-3 text-white text-sm rounded-lg 
                bg-gradient-to-r from-[#2563eb] to-[#0f766e] 
                shadow-lg hover:shadow-xl hover:scale-[1.03] 
                transition-all duration-200"
              >
                Login via LMS →
              </button>
            </div>

            <p className="text-[10px] text-center text-gray-400 mt-6">
              No separate account required
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}