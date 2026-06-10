import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { 
  Users, TrendingUp, CheckCircle, Target, Phone, Mail, 
  Calendar, Clock, Star, Filter, Search, ChevronLeft, ChevronRight, Award
} from 'lucide-react';

// --- Mock Data ---
const performanceTrend = [
  { name: 'Dec', leads: 400, conv: 120, rev: 850 },
  { name: 'Jan', leads: 700, conv: 350, rev: 1100 },
  { name: 'Feb', leads: 600, conv: 280, rev: 920 },
  { name: 'Mar', leads: 900, conv: 450, rev: 1250 },
  { name: 'Apr', leads: 800, conv: 400, rev: 1050 },
  { name: 'May', leads: 1050, conv: 580, rev: 1350 },
];

const attendanceData = [
  { name: 'Present', value: 20, color: '#22c55e' },
  { name: 'Absent', value: 6, color: '#f97316' },
  { name: 'Leave', value: 2, color: '#ef4444' },
];

const taskData = [
  { name: 'Completed', value: 85, color: '#3b82f6' },
  { name: 'In Progress', value: 40, color: '#f97316' },
  { name: 'Pending', value: 20, color: '#cbd5e1' },
  { name: 'Overdue', value: 5, color: '#ef4444' },
];

const PerformanceIndex = () => {
  return (
    <div className="p-6 bg-[#f8f9fa] min-h-screen text-gray-800 font-sans">
      
      {/* 1. Header Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <StatCard label="Total Team Members" val="28" change="+4 from last month" icon={<Users className="text-blue-500" />} bg="bg-blue-50" />
        <StatCard label="Total Leads" val="1,250" change="+12.5% from last month" icon={<TrendingUp className="text-green-500" />} bg="bg-green-50" />
        <StatCard label="Total Conversions" val="320" change="+6.5% from last month" icon={<Target className="text-purple-500" />} bg="bg-purple-50" />
        <StatCard label="Conversion Rate" val="25.60%" change="+3.2% from last month" icon={<TrendingUp className="text-blue-500" />} bg="bg-blue-100" />
      </div>

      {/* 2. Middle Section: Performance Chart, Target Circle, Top Performer */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        {/* Performance Line Chart */}
        <div className="col-span-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4">
               <LegendItem color="bg-blue-500" label="Leads" />
               <LegendItem color="bg-green-500" label="Conversions" />
               <LegendItem color="bg-purple-500" label="Revenue (₹)" />
            </div>
            <select className="text-[10px] border rounded-lg px-2 py-1 bg-gray-50 font-bold outline-none"><option>Monthly</option></select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceTrend}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9ca3af'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9ca3af'}} />
                <Tooltip />
                <Area type="monotone" dataKey="rev" stroke="#a855f7" fillOpacity={0.1} fill="#a855f7" strokeWidth={2} dot={{ r: 4, fill: '#a855f7' }} />
                <Area type="monotone" dataKey="leads" stroke="#3b82f6" fillOpacity={0.1} fill="#3b82f6" strokeWidth={2} dot={{ r: 4, fill: '#3b82f6' }} />
                <Area type="monotone" dataKey="conv" stroke="#22c55e" fillOpacity={0.1} fill="#22c55e" strokeWidth={2} dot={{ r: 4, fill: '#22c55e' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Target Achieved Circle */}
        <div className="col-span-3 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center">
            <div className="relative w-44 h-44">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={[{v: 78}, {v: 22}]} innerRadius={65} outerRadius={80} startAngle={180} endAngle={0} dataKey="v">
                            <Cell fill="#22c55e" stroke="none" />
                            <Cell fill="#f3f4f6" stroke="none" />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center mt-[-20px]">
                    <span className="text-4xl font-black text-gray-800">78%</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Target Achieved</span>
                </div>
            </div>
        </div>

        {/* Top Performer Card */}
        <div className="col-span-3 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative">
            <Award className="absolute top-4 right-4 text-orange-400" size={24} />
            <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-4 border-white shadow-md overflow-hidden mb-3">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="profile" />
                </div>
                <h4 className="font-bold text-gray-800 text-sm">Senior Sales Executive</h4>
                <div className="grid grid-cols-3 gap-1 w-full mt-6 text-center border-t pt-4">
                    <div><p className="flex items-center justify-center gap-1 text-[11px] text-blue-600 font-bold"><Users size={10}/>Leads</p><p className="font-black">230</p></div>
                    <div><p className="flex items-center justify-center gap-1 text-[11px] text-green-600 font-bold"><TrendingUp size={10}/>Conv.</p><p className="font-black">68</p></div>
                    <div><p className="flex items-center justify-center gap-1 text-[11px] text-orange-600 font-bold"><CheckCircle size={10}/>Revenue</p><p className="font-black">3,45,000</p></div>
                </div>
                <div className="mt-4 bg-green-50 px-3 py-1.5 rounded-lg border border-green-100">
                    <p className="text-[9px] text-green-600 font-bold italic tracking-tighter">↗ 135% of monthly target achieved</p>
                </div>
            </div>
        </div>
      </div>

      {/* 3. Bottom Grid: Donut Charts & Quick Metrics */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        {/* Attendance Donut */}
        <div className="col-span-3 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
           <div className="flex justify-between items-start mb-2">
             <div>
               <div className="h-20 w-20 relative">
                  <ResponsiveContainer>
                    <PieChart><Pie data={attendanceData} innerRadius={28} outerRadius={38} dataKey="value" stroke="none">{attendanceData.map((e,i)=><Cell key={i} fill={e.color}/>)}</Pie></PieChart>
                  </ResponsiveContainer>
               </div>
               <p className="text-[10px] text-gray-400 font-bold mt-2">Total Employees: 28</p>
             </div>
             <div className="space-y-1 text-[10px]">
                {attendanceData.map((d,i)=>(<div key={i} className="flex justify-between w-24"><span><span className={`inline-block w-2 h-2 rounded-full mr-1`} style={{backgroundColor:d.color}}/>{d.name}</span> <span className="font-bold">{d.value}(71.4%)</span></div>))}
             </div>
           </div>
        </div>

        {/* Task Donut */}
        <div className="col-span-3 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
           <div className="flex justify-between items-start mb-2">
             <div>
               <div className="h-20 w-20 relative">
                  <ResponsiveContainer>
                    <PieChart><Pie data={taskData} innerRadius={28} outerRadius={38} dataKey="value" stroke="none">{taskData.map((e,i)=><Cell key={i} fill={e.color}/>)}</Pie></PieChart>
                  </ResponsiveContainer>
               </div>
               <p className="text-[10px] text-gray-400 font-bold mt-2">Total Tasks: 150</p>
             </div>
             <div className="space-y-1 text-[10px]">
                {taskData.map((d,i)=>(<div key={i} className="flex justify-between w-28"><span><span className={`inline-block w-2 h-2 rounded-full mr-1`} style={{backgroundColor:d.color}}/>{d.name}</span> <span className="font-bold">{d.value}(56.7%)</span></div>))}
             </div>
           </div>
        </div>

        {/* Quick Metrics (4 small cards) */}
        <div className="col-span-6 grid grid-cols-4 gap-4">
            <MetricSmall label="Calls Made" val="1,250" change="+15.3%" icon={<Phone size={14}/>} color="text-blue-600" bg="bg-blue-50" />
            <MetricSmall label="Emails Sent" val="980" change="+10.2%" icon={<Mail size={14}/>} color="text-green-600" bg="bg-green-50" />
            <MetricSmall label="meetings" val="120" change="+8.7%" icon={<Users size={14}/>} color="text-purple-600" bg="bg-purple-50" />
            <MetricSmall label="Follow Up" val="860" change="+12.4%" icon={<RefreshCw size={14}/>} color="text-orange-600" bg="bg-orange-50" />
        </div>
      </div>

      {/* 4. Team Performance Summary Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center bg-white sticky top-0">
            <h4 className="font-bold text-sm">Team Performance Summary</h4>
            <div className="flex gap-4">
                <div className="relative"><Search className="absolute left-3 top-2.5 text-gray-400" size={14}/><input type="text" placeholder="Search employee..." className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-xs outline-none w-64"/></div>
                <button className="flex items-center gap-2 border rounded-lg px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-50"><Filter size={14}/> Filter</button>
            </div>
        </div>
        <table className="w-full text-left text-[11px]">
            <thead className="bg-[#fcfcfd] text-gray-400 font-bold uppercase border-b">
                <tr>
                    <th className="px-6 py-4">#</th>
                    <th className="px-6 py-4">Employee Name</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4">Leads Assigned</th>
                    <th className="px-6 py-4">Conversions</th>
                    <th className="px-6 py-4">Conversion Rate</th>
                    <th className="px-6 py-4 text-center">Revenue (₹)</th>
                    <th className="px-6 py-4">Tasks Completed</th>
                    <th className="px-6 py-4">Attendance</th>
                    <th className="px-6 py-4">Performance</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
                {[
                    { id: 1, name: 'Rahul Sharma', role: 'Senior Sales Executive', assigned: 230, conv: 68, rate: '29.57%', rev: '3,45,000', tasks: '28 / 30', att: '95%' },
                    { id: 2, name: 'Priya Mehta', role: 'Sales Executive', assigned: 180, conv: 45, rate: '25.00%', rev: '2,25,000', tasks: '24 / 30', att: '90%' },
                    { id: 3, name: 'Amit Kumar', role: 'Sales Executive', assigned: 160, conv: 38, rate: '23.75%', rev: '1,85,000', tasks: '22 / 30', att: '88%' },
                ].map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50/80 transition-colors">
                        <td className="px-6 py-4 font-bold text-gray-400">{row.id}</td>
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden"><img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${row.name}`} alt="avatar" /></div>
                                <span className="font-bold text-gray-800">{row.name}</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-500">{row.role}</td>
                        <td className="px-6 py-4 font-bold">{row.assigned}</td>
                        <td className="px-6 py-4 font-bold">{row.conv}</td>
                        <td className="px-6 py-4 font-bold text-blue-600">{row.rate}</td>
                        <td className="px-6 py-4 font-bold text-center">{row.rev}</td>
                        <td className="px-6 py-4 font-bold text-gray-500">{row.tasks}</td>
                        <td className="px-6 py-4"><span className="bg-green-50 text-green-600 px-3 py-1 rounded font-bold border border-green-100">{row.att}</span></td>
                        <td className="px-6 py-4">
                            <div className="flex gap-0.5 text-orange-400">
                                {[1,2,3,4,5].map(s => <Star key={s} size={10} fill={s <= 4 ? "currentColor" : "none"} strokeWidth={s > 4 ? 2 : 0} stroke="currentColor" />)}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        {/* Pagination */}
        <div className="p-4 border-t flex justify-center items-center gap-1 bg-white">
            <button className="p-2 border rounded hover:bg-gray-50"><ChevronLeft size={14}/></button>
            <button className="w-8 h-8 bg-orange-600 text-white font-bold rounded">1</button>
            <button className="w-8 h-8 border text-gray-600 rounded hover:bg-gray-50 font-bold">2</button>
            <button className="w-8 h-8 border text-gray-600 rounded hover:bg-gray-50 font-bold">3</button>
            <span className="w-8 h-8 flex items-center justify-center border rounded">...</span>
            <button className="p-2 border rounded hover:bg-gray-50"><ChevronRight size={14}/></button>
        </div>
      </div>
    </div>
  );
};

// --- Sub Components ---
const StatCard = ({ label, val, change, icon, bg }) => (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
        <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">{label}</p>
            <h3 className="text-2xl font-black text-gray-800">{val}</h3>
            <p className="text-[10px] text-green-500 font-bold mt-1 tracking-tight">{change.startsWith('+') ? '↗' : '↘'} {change}</p>
        </div>
        <div className={`p-4 rounded-2xl ${bg}`}>{icon}</div>
    </div>
);

const LegendItem = ({ color, label }) => (
    <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 uppercase">
        <div className={`w-3 h-1 rounded-full ${color}`}/> {label}
    </div>
);

const MetricSmall = ({ label, val, change, icon, color, bg }) => (
    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center justify-center gap-1">
        <div className={`p-2 rounded-lg ${bg} ${color} mb-1`}>{icon}</div>
        <p className="text-[9px] text-gray-400 font-bold uppercase leading-none">{label}</p>
        <h5 className="text-sm font-black">{val}</h5>
        <p className="text-[9px] text-green-500 font-bold tracking-tighter">↗ {change}</p>
    </div>
);

const RefreshCw = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
);

export default PerformanceIndex;