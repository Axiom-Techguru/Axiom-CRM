import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { 
  Users, CheckSquare, Target, Calendar,
  Star, Award, TrendingUp, Trophy, Zap, MessageCircle, ChevronDown, Download, Plus, Bell
} from 'lucide-react';

// --- Mock Data for Performance Summary ---
const performanceData = [
  { name: 'Dec', assigned: 120, converted: 80, meetings: 60, revenue: 100 },
  { name: 'Jan', assigned: 180, converted: 110, meetings: 90, revenue: 140 },
  { name: 'Feb', assigned: 150, converted: 95, meetings: 75, revenue: 110 },
  { name: 'Mar', assigned: 170, converted: 120, meetings: 85, revenue: 130 },
  { name: 'Apr', assigned: 160, converted: 105, meetings: 80, revenue: 120 },
  { name: 'May', assigned: 190, converted: 130, meetings: 95, revenue: 150 },
];

const IndividualPerformance = () => {
  return (
    <div className="p-6 bg-[#f8f9fa] min-h-screen text-gray-800 font-sans">
      
      {/* 1. Top Header Navigation */}
      <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <span className="text-gray-400">≡</span> Individual Performance
        </h1>
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-50 border rounded-lg px-3 py-1.5 text-xs font-bold text-gray-600">
                <Calendar size={14} /> This Month (May 2024) <ChevronDown size={14}/>
            </div>
            <button className="flex items-center gap-2 border rounded-lg px-3 py-1.5 text-xs font-bold text-gray-600 hover:bg-gray-50">
                <Download size={14} /> Export <ChevronDown size={14}/>
            </button>
            <button className="bg-[#ff5c00] text-white px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 shadow-lg shadow-orange-100">
                <Plus size={14} /> Add Widget
            </button>
            <div className="relative">
                <Bell size={20} className="text-gray-400" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full border-2 border-white"></span>
            </div>
            <div className="flex items-center gap-3 border-l pl-4">
                <div className="text-right">
                    <p className="text-xs font-bold">System Administator</p>
                    <p className="text-[10px] text-gray-400 font-medium">Group Admin</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-500 overflow-hidden border-2 border-white shadow-sm" />
            </div>
        </div>
      </div>

      {/* 2. Top Metrics Row */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        <MetricCard label="Leads Assigned" val="180" change="+12.5%" icon={<Users size={18}/>} color="text-blue-500" bg="bg-blue-50" />
        <MetricCard label="Leads Converted" val="45" change="+4.5%" icon={<CheckSquare size={18}/>} color="text-green-500" bg="bg-green-50" />
        <MetricCard label="Conversions Rate" val="25.00%" change="+3.2%" icon={<Target size={18}/>} color="text-purple-500" bg="bg-purple-50" />
        <MetricCard label="Meetings" val="24" change="+14.5%" icon={<MessageCircle size={18}/>} color="text-orange-500" bg="bg-orange-50" />
        <MetricCard label="Tasks Completed" val="23 / 30" change="+93.3%" icon={<TrendingUp size={18}/>} color="text-cyan-500" bg="bg-cyan-50" isProgress />
      </div>

      {/* 3. Main Content Grid */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Employee Overview Card (3 cols) */}
        <div className="col-span-3 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-sm mb-6">Employee Overview</h3>
          <div className="flex flex-col items-center mb-8">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-50 shadow-md mb-4">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Priya" alt="profile" />
            </div>
            <h2 className="text-xl font-black">Priya Mehta</h2>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Sales Executive</p>
          </div>
          
          <div className="space-y-4">
            <ProfileInfo label="Employee ID" val="EMP-1005" />
            <ProfileInfo label="Department" val="Sales" />
            <ProfileInfo label="Joining Date" val="12 Jan 2023" />
            <ProfileInfo label="Email" val="priya.mehta@company.com" />
            <ProfileInfo label="Phone" val="+91 98765 43210" />
          </div>
        </div>

        {/* Performance Summary Chart (5 cols) */}
        <div className="col-span-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-sm">Performance Summary</h3>
            <div className="flex gap-3 text-[10px] font-bold">
                <LegendDot color="bg-blue-500" label="Leads Assigned" />
                <LegendDot color="bg-green-500" label="Leads Converted" />
                <LegendDot color="bg-purple-500" label="Meetings" />
                <LegendDot color="bg-orange-500" label="Revenue (₹)" />
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData} margin={{ top: 20, right: 30, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9ca3af', fontWeight: 'bold'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9ca3af', fontWeight: 'bold'}} />
                <Tooltip cursor={{fill: '#f9fafb'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                <Bar dataKey="assigned" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={8} />
                <Bar dataKey="converted" fill="#22c55e" radius={[4, 4, 0, 0]} barSize={8} />
                <Bar dataKey="meetings" fill="#a855f7" radius={[4, 4, 0, 0]} barSize={8} />
                <Bar dataKey="revenue" fill="#f97316" radius={[4, 4, 0, 0]} barSize={8} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Performance Rating Card (3 cols) */}
        <div className="col-span-3 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
            <h3 className="font-bold text-sm mb-6 text-left">Performance Rating</h3>
            <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90">
                    <circle cx="64" cy="64" r="58" stroke="#f3f4f6" strokeWidth="8" fill="transparent" />
                    <circle cx="64" cy="64" r="58" stroke="#3b82f6" strokeWidth="8" fill="transparent" strokeDasharray="364" strokeDashoffset="50" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black">4.5<span className="text-sm text-gray-300 font-bold">/5</span></span>
                </div>
            </div>
            <div className="flex justify-center gap-1 text-orange-400 mb-2">
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} />
            </div>
            <p className="text-blue-600 font-black text-sm mb-6 uppercase tracking-wider">Excellent</p>
            
            <div className="space-y-3 text-[10px] font-bold text-gray-500 uppercase tracking-tight">
                <RatingLine label="Goal Achievement" score="4.5/5" />
                <RatingLine label="Productivity" score="4.5/5" />
                <RatingLine label="Communication" score="4.5/5" />
                <RatingLine label="Team Work" score="4.5/5" />
                <RatingLine label="Customer Satisfaction" score="4.5/5" />
            </div>
          </div>
        </div>

        {/* Recent Achievements Card (Shared bottom space logic) */}
        <div className="col-span-12 grid grid-cols-12 gap-6">
            <div className="col-span-9" /> {/* Placeholder to push achievements right */}
            <div className="col-span-3 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-sm mb-6">Recent Achievements</h3>
                <div className="space-y-5">
                    <AchievementItem icon={<Award size={18}/>} title="Top Performer" date="April 2024" color="bg-green-100 text-green-600" />
                    <AchievementItem icon={<Zap size={18}/>} title="Highest Conversions" date="This Month" color="bg-blue-100 text-blue-600" />
                    <AchievementItem icon={<CheckSquare size={18}/>} title="100% Task Completion" date="May 2024" color="bg-purple-100 text-purple-600" />
                    <AchievementItem icon={<Trophy size={18}/>} title="Best Customer Feedback" date="This Month" color="bg-orange-100 text-orange-600" />
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

// --- Sub-components for clean code ---

const MetricCard = ({ label, val, change, icon, color, bg, isProgress }) => (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
        <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">{label}</p>
            <h4 className="text-xl font-black text-gray-800">{val}</h4>
            <p className="text-[10px] text-green-500 font-bold mt-1 tracking-tight">↗ {change}</p>
        </div>
        <div className={`p-3 rounded-2xl ${bg} ${color}`}>
            {isProgress ? <div className="w-8 h-8 rounded-full border-4 border-white/30 border-t-white animate-spin-slow"/> : icon}
        </div>
    </div>
);

const ProfileInfo = ({ label, val }) => (
    <div className="flex justify-between items-center text-[11px] py-1 border-b border-gray-50 last:border-0 pb-2">
        <span className="text-gray-400 font-bold uppercase">{label}</span>
        <span className="text-gray-800 font-bold text-right truncate ml-4">{val}</span>
    </div>
);

const LegendDot = ({ color, label }) => (
    <div className="flex items-center gap-1.5">
        <div className={`w-2 h-2 rounded-full ${color}`} /> <span>{label}</span>
    </div>
);

const RatingLine = ({ label, score }) => (
    <div className="flex justify-between items-center">
        <span>{label}</span>
        <span className="text-gray-800">{score}</span>
    </div>
);

const AchievementItem = ({ icon, title, date, color }) => (
    <div className="flex items-center gap-4">
        <div className={`p-2.5 rounded-xl ${color} shadow-sm`}>{icon}</div>
        <div>
            <p className="text-xs font-bold text-gray-800">{title}</p>
            <p className="text-[10px] text-gray-400 font-medium">{date}</p>
        </div>
    </div>
);

export default IndividualPerformance;