import React, { useState } from 'react';
import { Search, Filter, Eye, Download, X, User, ChevronLeft, ChevronRight } from 'lucide-react';

const LogMonitoring = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedLog, setSelectedLog] = useState(null);

  // 1. Increased Table Records with Descriptions
  const logs = [
    { id: 1, name: "John Doe", email: "johnDoe01@gmail.com", login: "21 May 2025 08:15:24 AM", logout: "21 May 2025 11:45:24 PM", action: "Update", ip: "192.168.1.10", desc: "Updated Customer information with client", status: "Success" },
    { id: 2, name: "Alice Mith", email: "aliceM01@gmail.com", login: "21 May 2025 09:15:24 AM", logout: "21 May 2025 11:45:24 PM", action: "ADD", ip: "192.168.1.10", desc: "scheduled meeting with Silver EBC", status: "Success" },
    { id: 3, name: "Michele Johnson", email: "johnDoe01@gmail.com", login: "21 May 2025 08:15:24 AM", logout: "21 May 2025 11:45:24 PM", action: "Update", ip: "192.168.1.10", desc: "Updated deal stage to proposal sent", status: "Success" },
    { id: 4, name: "Emily Davis", email: "johnDoe01@gmail.com", login: "21 May 2025 09:15:24 AM", logout: "21 May 2025 11:45:24 PM", action: "Login", ip: "192.168.1.10", desc: "Updated Customer Information", status: "Success" },
    { id: 5, name: "Sophia Browon", email: "johnDoe01@gmail.com", login: "21 May 2025 08:15:24 AM", logout: "21 May 2025 11:45:24 PM", action: "Update", ip: "192.168.1.10", desc: "Updated Customer deal", status: "Failed" },
    { id: 6, name: "William Taylor", email: "johnDoe01@gmail.com", login: "21 May 2025 08:15:24 AM", logout: "21 May 2025 11:45:24 PM", action: "Delete", ip: "192.168.1.10", desc: "Updated Customer Information", status: "Success" },
    { id: 7, name: "Olivian Martine", email: "johnDoe01@gmail.com", login: "21 May 2025 09:15:24 AM", logout: "21 May 2025 11:45:24 PM", action: "Update", ip: "192.168.1.10", desc: "Updated meeting plan", status: "Success" },
    { id: 8, name: "James Anderson", email: "johnDoe01@gmail.com", login: "21 May 2025 09:15:24 AM", logout: "21 May 2025 11:45:24 PM", action: "ADD", ip: "192.168.1.10", desc: "ADD Customer Information", status: "Failed" },
  ];

  return (
    <div className="p-6 bg-[#f8f9fa] min-h-screen relative">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Login Monitoring</h1>
        <p className="text-gray-500 text-sm">Monitor user login and logout activity</p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-xl border mb-6 flex gap-4 items-center shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input type="text" placeholder="Search by user name or Activ..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500" />
        </div>
        <select className="border border-gray-200 p-2 rounded-lg text-sm outline-none bg-gray-50 font-medium">
            <option>All Users</option>
        </select>
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50">
            <input type="text" value="01/05/2025 - 21/05/25" className="bg-transparent text-sm outline-none w-40 font-medium" readOnly />
            <Filter size={14} className="text-gray-400" />
        </div>
        <select className="border border-gray-200 p-2 rounded-lg text-sm outline-none bg-gray-50 font-medium">
            <option>All Status</option>
        </select>
        <button className="bg-orange-600 text-white px-8 py-2 rounded-lg flex items-center gap-2 text-sm font-bold hover:bg-orange-700 transition shadow-lg shadow-orange-100">
          <Filter size={16} /> Filter
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Logins', val: '1,248', color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Successful Logins', val: '1,148', color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'Failed Logins', val: '50', color: 'text-orange-600', bg: 'bg-orange-50' },
          { label: 'Active Session', val: '22', color: 'text-emerald-600', bg: 'bg-emerald-50' },
        ].map((s, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-full ${s.bg} ${s.color}`}><User size={20} /></div>
            <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase">{s.label}</p>
                <p className="text-xl font-bold text-gray-800">{s.val}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm border-collapse">
          <thead className="bg-gray-50 text-gray-500 uppercase text-[10px] font-bold border-b">
            <tr>
              <th className="px-6 py-4">SR. No.</th>
              <th className="px-6 py-4">Username</th>
              <th className="px-6 py-4">Login Time</th>
              <th className="px-6 py-4">Logout Time</th>
              <th className="px-6 py-4">Action Type</th>
              <th className="px-6 py-4">IP Address</th>
              <th className="px-6 py-4">Description</th> {/* NEW COLUMN */}
              <th className="px-6 py-4 text-center">Status</th>
              <th className="px-6 py-4 text-center">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {logs.map((log, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-400 font-medium">{i + 1}.</td>
                <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${log.name}`} alt="avatar" />
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">{log.name}</p>
                            <p className="text-[10px] text-gray-400">{log.email}</p>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 text-gray-600 text-xs leading-relaxed font-medium">{log.login}</td>
                <td className="px-6 py-4 text-gray-600 text-xs leading-relaxed font-medium">{log.logout}</td>
                <td className="px-6 py-4">
                    <span className={`px-4 py-1 rounded text-[10px] font-bold uppercase ${
                        log.action === 'Update' ? 'bg-green-50 text-green-600 border border-green-200' : 
                        log.action === 'ADD' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 
                        log.action === 'Delete' ? 'bg-red-50 text-red-600 border border-red-200' :
                        'bg-purple-50 text-purple-600 border border-purple-200'
                    }`}>
                        {log.action}
                    </span>
                </td>
                <td className="px-6 py-4 text-gray-500 text-xs">{log.ip}</td>
                <td className="px-6 py-4 text-gray-500 text-xs max-w-[200px] truncate">{log.desc}</td> {/* DESCRIPTION DATA */}
                <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${
                        log.status === 'Success' ? 'bg-green-50 text-green-600 border-green-200' : 'bg-red-50 text-red-600 border-red-200'
                    }`}>
                        {log.status}
                    </span>
                </td>
                <td className="px-6 py-4 text-center">
                    <button 
                        onClick={() => { setSelectedLog(log); setIsDetailOpen(true); }}
                        className="p-1 hover:bg-gray-100 rounded transition"
                    >
                        <Eye size={18} className="text-gray-400 hover:text-orange-600" />
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Pagination Footer */}
        <div className="p-4 bg-white border-t flex justify-between items-center text-xs">
            <p className="text-gray-500 font-medium">Showing <span className="text-gray-800 font-bold">1 to 8</span> of <span className="text-gray-800 font-bold">250 entries</span></p>
            <div className="flex items-center gap-1">
                <button className="p-2 border rounded hover:bg-gray-50"><ChevronLeft size={14}/></button>
                <button className="w-8 h-8 bg-orange-600 text-white font-bold rounded">1</button>
                <button className="w-8 h-8 border text-gray-600 rounded hover:bg-gray-50">2</button>
                <button className="w-8 h-8 border text-gray-600 rounded hover:bg-gray-50">3</button>
                <span className="px-2">...</span>
                <button className="w-8 h-8 border text-gray-600 rounded hover:bg-gray-50">25</button>
                <button className="p-2 border rounded hover:bg-gray-50"><ChevronRight size={14}/></button>
            </div>
        </div>
      </div>

      {/* Side-over Detail Panel */}
      {isDetailOpen && selectedLog && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsDetailOpen(false)}></div>
          
          {/* Panel */}
          <div className="relative w-[450px] bg-white h-full shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300">
            <div className="p-6 border-b flex justify-between items-center bg-white sticky top-0 z-10">
              <h2 className="text-xl font-bold text-gray-800">Details</h2>
              <button onClick={() => setIsDetailOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition"><X size={20} /></button>
            </div>
            
            <div className="p-8">
              <div className="text-center mb-10">
                <div className="w-24 h-24 rounded-full bg-gray-100 mx-auto mb-4 border-4 border-orange-50 overflow-hidden">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${selectedLog.name}`} alt="avatar" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Mr. {selectedLog.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{selectedLog.email}</p>
                <span className="bg-green-100 text-green-600 text-[10px] px-3 py-1 rounded font-bold border border-green-200">Success</span>
              </div>

              <div className="space-y-1 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                {[ 
                    { label: 'Username', value: `Mr. ${selectedLog.name}`, icon: <User size={16}/> },
                    { label: 'Email', value: selectedLog.email, icon: <X size={16} /> }, // Placeholder for Email icon
                    { label: 'Action Type', value: selectedLog.action, isBadge: true },
                    { label: 'Login Time', value: selectedLog.login },
                    { label: 'Logout Time', value: selectedLog.logout },
                    { label: 'Location', value: 'New York, United State' },
                    { label: 'IP Address', value: selectedLog.ip },
                    { label: 'Status', value: selectedLog.status, isStatus: true }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start py-4 border-b border-gray-200 last:border-0">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-gray-400"><User size={16} /></div>
                    <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">{item.label}</p>
                        {item.isBadge ? (
                            <span className="bg-green-100 text-green-600 px-3 py-0.5 rounded text-[10px] font-bold">{item.value}</span>
                        ) : item.isStatus ? (
                            <span className="bg-green-100 text-green-600 px-3 py-0.5 rounded-full text-[10px] font-bold border border-green-200">{item.value}</span>
                        ) : (
                            <p className="text-sm font-bold text-gray-800">{item.value}</p>
                        )}
                    </div>
                  </div>
                ))}

                <button className="mt-8 w-full border border-gray-200 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-white hover:shadow-md transition bg-white">
                  <Download size={16} className="text-gray-400" /> Extract This Record
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogMonitoring;