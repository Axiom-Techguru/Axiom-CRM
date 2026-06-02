import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Users, UserPlus, Database, ScrollText, 
  LineChart, BarChart3, CloudUpload, Workflow, Calendar, 
  MessageSquare, ShieldCheck, Settings, LogOut, X 
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
    { name: 'User Operation', icon: <Users size={20} />, path: '/users', hasSubmenu: true },
    { name: 'Manage Leads', icon: <UserPlus size={20} />, path: '/leads', hasSubmenu: true },
    { name: 'CRM Data', icon: <Database size={20} />, path: '/crm-data' },
    { name: 'Log Monitoring', icon: <ScrollText size={20} />, path: '/logs' },
    { name: 'Performance Index', icon: <LineChart size={20} />, path: '/performance', hasSubmenu: true },
    { name: 'Reporting & Analytics', icon: <BarChart3 size={20} />, path: '/reports' },
    { name: 'Import / Export', icon: <CloudUpload size={20} />, path: '/import-export' },
    { name: 'Workflow Management', icon: <Workflow size={20} />, path: '/workflow' },
    { name: 'Meeting', icon: <Calendar size={20} />, path: '/meetings' },
    { name: 'Conversation of Client', icon: <MessageSquare size={20} />, path: '/conversations' },
    { name: 'Permission', icon: <ShieldCheck size={20} />, path: '/permissions' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/settings' },
  ];

  return (
    <div className="w-72 bg-[#1e1e1e] h-screen flex flex-col text-gray-300 border-r border-gray-800 sticky top-0">
      {/* Header / Logo */}
      <div className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-xl font-bold text-white">
          AxiomSales<span className="text-[#ff5c00]">CRM</span>
        </h1>
        <X size={20} className="cursor-pointer hover:text-white" />
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center justify-between px-6 py-3 mx-2 rounded-lg transition-all duration-200 ${
                isActive 
                ? 'bg-[#ff5c00] text-white shadow-lg' 
                : 'hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            <div className="flex items-center gap-4">
              {item.icon}
              <span className="text-sm font-medium">{item.name}</span>
            </div>
            {item.hasSubmenu && <span className="text-[10px]">❯</span>}
          </NavLink>
        ))}
      </div>

      {/* Footer / User Profile */}
      <div className="p-4 border-t border-gray-800 bg-[#1a1a1a]">
        <div className="flex items-center gap-3 mb-4 p-2">
          <div className="w-10 h-10 rounded-full bg-[#ff5c00] flex items-center justify-center text-white font-bold">
            SA
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">System Administrator</span>
            <span className="text-[10px] text-gray-500 uppercase">Admin</span>
          </div>
        </div>
        
        <button className="flex items-center gap-4 px-4 py-2 w-full hover:text-white transition-colors">
          <LogOut size={20} />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;