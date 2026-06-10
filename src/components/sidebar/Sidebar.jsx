import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Users, UserPlus, Database, ScrollText, 
  LineChart, ChevronDown, ChevronRight, Settings, LogOut, X 
} from 'lucide-react';

const Sidebar = () => {
  // State to control the dropdown
  const [isPerformanceOpen, setIsPerformanceOpen] = useState(true);

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
    { name: 'User Operation', icon: <Users size={20} />, path: '/users', hasArrow: true },
    { name: 'Manage Leads', icon: <UserPlus size={20} />, path: '/leads', hasArrow: true },
    { name: 'CRM Data', icon: <Database size={20} />, path: '/crm-data' },
    { name: 'Log Monitoring', icon: <ScrollText size={20} />, path: '/logs' },
  ];

  const subMenuItems = [
    { name: '1. Team Overview', path: '/performance/team' },
    { name: '2. Individual Performance', path: '/performance/individual' },
    { name: '3. Sales Performance', path: '/performance/sales' },
    { name: '4. Task', path: '/performance/task' },
    { name: '5. Attendance & Activity', path: '/performance/attendance' },
    { name: '6. Support Performance', path: '/performance/support' },
    { name: '7. KPI Reports', path: '/performance/kpi' },
    { name: '8. Monthly Analytics', path: '/performance/analytics' },
  ];

  return (
    <div className="w-72 bg-[#1e1e1e] h-screen flex flex-col text-gray-300 sticky top-0 z-50">
      {/* Header */}
      <div className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-xl font-bold text-white">
          AxiomSales<span className="text-[#ff5c00]">CRM</span>
        </h1>
        <X size={20} className="cursor-pointer text-gray-500 hover:text-white" />
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4 space-y-1 scrollbar-hide">
        {/* Regular Menu Items */}
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center justify-between px-6 py-3 mx-2 rounded-xl transition-all ${
                isActive ? 'bg-[#ff5c00] text-white font-bold' : 'hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            <div className="flex items-center gap-4">
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </div>
            {item.hasArrow && <ChevronRight size={16} className="opacity-50" />}
          </NavLink>
        ))}

        {/* PERFORMANCE INDEX WITH DROPDOWN */}
        <div className="mx-2">
          <button
            onClick={() => setIsPerformanceOpen(!isPerformanceOpen)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
              isPerformanceOpen ? 'bg-[#ff5c00] text-white font-bold shadow-lg' : 'hover:bg-gray-800'
            }`}
          >
            <div className="flex items-center gap-4">
              <LineChart size={20} />
              <span className="text-sm">Performance Index</span>
            </div>
            <ChevronDown size={18} className={`transition-transform ${isPerformanceOpen ? '' : '-rotate-90'}`} />
          </button>

          {/* SUB-MENU CONTAINER (The box you wanted) */}
          {isPerformanceOpen && (
            <div className="mt-1 mb-2 bg-[#141414] border border-gray-800 rounded-xl py-2 shadow-inner">
              {subMenuItems.map((sub, index) => (
                <NavLink
                  key={index}
                  to={sub.path}
                  className={({ isActive }) =>
                    `block px-8 py-2.5 text-[11px] font-medium transition-colors ${
                      isActive ? 'text-[#ff5c00]' : 'text-gray-500 hover:text-white'
                    }`
                  }
                >
                  {sub.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Settings Link */}
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-4 px-6 py-3 mx-2 rounded-xl transition-all ${
              isActive ? 'bg-[#ff5c00] text-white' : 'hover:bg-gray-800'
            }`
          }
        >
          <Settings size={20} />
          <span className="text-sm">Settings</span>
        </NavLink>
      </div>

      {/* User Profile Section */}
      <div className="p-4 border-t border-gray-800 bg-[#1a1a1a]">
        <div className="flex items-center gap-3 mb-4 p-2">
          <div className="w-10 h-10 rounded-full bg-[#ff5c00] border-2 border-orange-400/30 flex items-center justify-center text-white font-bold">
            SA
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white leading-none">System Administrator</span>
            <span className="text-[10px] text-gray-500 mt-1 uppercase font-semibold">Admin</span>
          </div>
        </div>
        
        <button className="flex items-center gap-4 px-4 py-2 w-full text-gray-500 hover:text-white transition-colors">
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;