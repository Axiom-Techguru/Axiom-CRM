import React from 'react';
import { Search, Bell, Settings} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-[#1e1e1e] text-white h-16 flex items-center justify-between px-6 border-b border-gray-800 sticky top-0 z-10">
      {/* Left side: Branding or Page Title */}
      <div className="flex items-center gap-4">
        <span className="text-lg font-semibold tracking-wide">AxiomSales CRM</span>
      </div>

      {/* Center: Search Bar (Optional, matches modern CRM look) */}
      <div className="hidden md:flex relative w-96">
        <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
        <input 
          type="text" 
          placeholder="Search for leads, users, or data..." 
          className="bg-[#2a2a2a] border-none rounded-lg py-2 pl-10 pr-4 w-full text-sm focus:ring-1 focus:ring-orange-500 outline-none transition-all"
        />
      </div>

      {/* Right side: Icons and User Profile */}
      <div className="flex items-center gap-5">
        <button className="relative p-2 hover:bg-gray-800 rounded-full transition">
          <Bell size={20} className="text-gray-400 hover:text-white" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-orange-600 rounded-full border-2 border-[#1e1e1e]"></span>
        </button>
        
        <button className="p-2 hover:bg-gray-800 rounded-full transition">
          <Settings size={20} className="text-gray-400 hover:text-white" />
        </button>

        <div className="h-8 w-[1px] bg-gray-700 mx-2"></div>

        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold">Admin User</p>
            <p className="text-[10px] text-gray-500 uppercase">Super Admin</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-orange-600 flex items-center justify-center font-bold text-sm border-2 border-transparent group-hover:border-orange-400 transition-all">
            AD
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;