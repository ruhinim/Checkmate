import { Bell, User } from "lucide-react";

export default function Topbar() {
  return (
    <div className="h-16 bg-white border-b px-6 flex items-center justify-between">

      {/* SEARCH */}
      <input
        placeholder="Search curriculum insights..."
        className="bg-gray-100 px-4 py-2 rounded-lg text-sm w-80 outline-none"
      />

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Bell size={18} className="text-gray-500" />
        <User size={18} className="text-gray-500" />
      </div>
    </div>
  );
}