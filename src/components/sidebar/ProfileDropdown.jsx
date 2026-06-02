import React from "react";

export default function ProfileDropdown() {
  return (
    <div className="absolute bottom-20 left-3 w-56 bg-[#1e1e1e] border border-neutral-800 rounded-xl overflow-hidden shadow-lg">
      <button className="w-full px-4 py-3 text-left hover:bg-neutral-800 text-white">
        My Profile
      </button>

      <button className="w-full px-4 py-3 text-left hover:bg-neutral-800 text-white">
        Settings
      </button>

      <button className="w-full px-4 py-3 text-left bg-red-500 text-white">
        Logout
      </button>
    </div>
  );
}