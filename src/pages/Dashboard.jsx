import React from 'react';
import { 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area,
  PieChart, Pie, Cell, 
} from 'recharts';
import { 
  Users, CheckCircle, Clock, PauseCircle, Calendar, ChevronDown, 
  MoreVertical, Plus, UserPlus, Phone, Send, Mail, FileText, Bell 
} from 'lucide-react';

// --- Mock Data ---
const lineData = [
  { name: 'May 12', value: 850 },
  { name: 'May 13', value: 1100 },
  { name: 'May 14', value: 910 },
  { name: 'May 15', value: 760 },
  { name: 'May 16', value: 1150 },
  { name: 'May 17', value: 1380 },
];

const pieData = [
  { name: 'Website', value: 45, color: '#4e60ff' },
  { name: 'Referral', value: 25, color: '#3ec99e' },
  { name: 'Social Media', value: 15, color: '#ffbd2e' },
  { name: 'Email', value: 10, color: '#f05252' },
  { name: 'Others', value: 5, color: '#7e3af2' },
];

const Dashboard = () => {
  return (
    <div className="p-6 bg-[#f8f9fa] min-h-screen">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Team Overview</h1>
          <p className="text-gray-500">Real-time statistics for the entire organization</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 px-4 rounded-lg border shadow-sm cursor-pointer">
          <Calendar size={18} className="text-gray-400" />
          <span className="text-sm font-medium">May 12 - May 18, 2025</span>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        {[
          { label: 'Total leads', val: '1,250', change: '+12%', color: 'text-purple-600', bg: 'bg-purple-100', icon: <Users /> },
          { label: 'Converted', val: '320', change: '+6%', color: 'text-green-600', bg: 'bg-green-100', icon: <CheckCircle /> },
          { label: 'Pending', val: '930', change: '-2%', color: 'text-orange-600', bg: 'bg-orange-100', icon: <Clock /> },
          { label: 'Hold leads', val: '120', change: '-8%', color: 'text-pink-600', bg: 'bg-pink-100', icon: <PauseCircle /> },
        ].map((item, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${item.bg} ${item.color}`}>{item.icon}</div>
              <span className="text-sm text-gray-500 font-medium">{item.label}</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">{item.val}</h3>
            <span className={`text-xs font-bold ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              {item.change.startsWith('+') ? '↗' : '↘'} {item.change}
            </span>
            <span className="text-[10px] text-gray-400 ml-1">vs last 7 days</span>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        {/* Sales Performance Line Chart */}
        <div className="col-span-6 bg-white p-6 rounded-xl border shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold">Sales Performance</h4>
            <select className="text-xs border p-1 rounded bg-gray-50 outline-none"><option>Last 7 days</option></select>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={lineData}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff5c00" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#ff5c00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9ca3af'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9ca3af'}} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#ff5c00" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lead Source Pie Chart */}
        <div className="col-span-3 bg-white p-6 rounded-xl border shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-bold">Leads source</h4>
            <select className="text-xs border p-1 rounded bg-gray-50 outline-none"><option>This month</option></select>
          </div>
          <div className="h-[200px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-lg font-bold">1,250</span>
              <span className="text-[10px] text-gray-400">Total leads</span>
            </div>
          </div>
          <div className="space-y-2 mt-4">
            {pieData.map((item, i) => (
              <div key={i} className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.color}}></div>
                  <span className="text-gray-600">{item.name}</span>
                </div>
                <span className="font-bold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Progress Card */}
        <div className="col-span-3 bg-white p-6 rounded-xl border shadow-sm flex flex-col items-center justify-between">
          <div className="text-left w-full mb-4">
            <h4 className="font-bold">Team Progress</h4>
            <p className="text-[10px] text-gray-400 uppercase">Overall sales team efficiency</p>
          </div>
          <div className="relative flex items-center justify-center w-32 h-32 mb-4">
             {/* Progress Circle SVG */}
             <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="58" stroke="#f3f4f6" strokeWidth="10" fill="transparent" />
                <circle cx="64" cy="64" r="58" stroke="#ff5c00" strokeWidth="10" fill="transparent" strokeDasharray="364.4" strokeDashoffset="58" strokeLinecap="round" />
             </svg>
             <div className="absolute flex flex-col items-center">
                <span className="text-3xl font-bold">84%</span>
                <span className="text-[10px] text-green-500 font-bold">↗ 12% <span className="text-gray-300 font-normal">from last week</span></span>
             </div>
          </div>
          <div className="w-full border-t pt-4">
             <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-500 font-medium">Monthly Target</span>
                <span className="font-bold">$120,000</span>
             </div>
             <div className="flex justify-between text-xs mb-4">
                <span className="text-gray-500 font-medium">Achieved</span>
                <span className="font-bold text-[#4e60ff]">$100,800</span>
             </div>
             <button className="w-full py-2 bg-blue-50 text-[#4e60ff] text-xs font-bold rounded-lg border border-blue-100 hover:bg-blue-100 transition">View Team ❯</button>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-12 gap-6">
        {/* Recent Leads Table */}
        <div className="col-span-6 bg-white rounded-xl border shadow-sm">
          <div className="p-4 border-b flex justify-between items-center">
            <h4 className="font-bold">Recent Leads</h4>
            <button className="text-xs text-[#4e60ff] font-bold">View All</button>
          </div>
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 text-gray-400 uppercase font-medium">
              <tr>
                <th className="px-4 py-3">Lead</th>
                <th className="px-4 py-3">Source</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                { name: 'Rahul Sharma', source: 'Website', status: 'New', color: 'bg-blue-100 text-blue-600', date: 'May 18, 2025' },
                { name: 'Neha Verma', source: 'Referral', status: 'Contacted', color: 'bg-orange-100 text-orange-600', date: 'May 18, 2025' },
                { name: 'Amit Singh', source: 'Social media', status: 'Qualified', color: 'bg-green-100 text-green-600', date: 'May 17, 2025' },
                { name: 'Priya Mehta', source: 'Email campaign', status: 'New', color: 'bg-blue-100 text-blue-600', date: 'May 17, 2025' },
              ].map((lead, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold">{lead.name}</td>
                  <td className="px-4 py-3 text-gray-500">{lead.source}</td>
                  <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${lead.color}`}>{lead.status}</span></td>
                  <td className="px-4 py-3 text-gray-500 flex justify-between items-center">{lead.date} <MoreVertical size={14} className="cursor-pointer" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Actions Grid */}
        <div className="col-span-3 bg-white p-6 rounded-xl border shadow-sm">
          <h4 className="font-bold mb-6">Quick Action</h4>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <UserPlus />, label: 'Add Lead' },
              { icon: <Plus />, label: 'Add customer' },
              { icon: <Phone />, label: 'Call' },
              { icon: <Send />, label: 'Send proposal' },
              { icon: <Mail />, label: 'Email' },
              { icon: <FileText />, label: 'Add notes' },
              { icon: <Plus />, label: 'Create task' },
              { icon: <Bell />, label: 'Set reminder' },
            ].map((action, i) => (
              <button key={i} className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition gap-2">
                <div className="text-blue-500 scale-75">{action.icon}</div>
                <span className="text-[10px] text-gray-500 font-medium">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Upcoming Follow-ups */}
        <div className="col-span-3 bg-white rounded-xl border shadow-sm flex flex-col">
          <div className="p-4 border-b"><h4 className="font-bold">Upcoming Follow -ups</h4></div>
          <div className="p-4 space-y-4 flex-1">
            {[
              { name: 'Aniket Sharma', task: 'Product Demo', time: 'Today, 2:30 PM', bg: 'bg-blue-600', initials: 'AS' },
              { name: 'Riya Patil', task: 'Proposal Discussion', time: 'Today, 4:00 PM', bg: 'bg-purple-600', initials: 'RP' },
              { name: 'Vikram Kumar', task: 'Quote Follow-up', time: 'Tomorrow, 10:30 AM', bg: 'bg-orange-500', initials: 'VK' },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full ${f.bg} text-white text-[10px] font-bold flex items-center justify-center`}>{f.initials}</div>
                <div className="flex-1">
                  <p className="text-xs font-bold">{f.name}</p>
                  <p className="text-[10px] text-gray-400">{f.task}</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] text-gray-400">{f.time}</p>
                  <Phone size={12} className="text-blue-500 ml-auto mt-1 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
          <button className="p-3 text-center text-xs text-blue-600 font-bold hover:bg-gray-50 transition border-t">View All Follow-Ups ❯</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;