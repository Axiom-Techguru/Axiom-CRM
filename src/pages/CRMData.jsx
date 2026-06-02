import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { 
  Database, ShieldAlert, CheckCircle2, Plus, Download, Trash2, 
  Activity, RefreshCw, UserPlus, Calendar, Check, X, ArrowRight
} from 'lucide-react';

// Mock data for the Data Growth Trend
const chartData = [
  { name: 'W1', value: 0 },
  { name: 'W2', value: 10 },
  { name: 'W3', value: 15 },
  { name: 'W4', value: 26 },
  { name: 'W5', value: 28 },
  { name: 'W6', value: 36 },
  { name: 'W7', value: 42 },
];

const CRMData = () => {
  return (
    <div className="p-6 bg-[#f8f9fa] min-h-screen text-gray-800">
      
      {/* 1. Top Metric Cards */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Total Records */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-400 font-medium">Total Records</p>
          <h2 className="text-4xl font-bold my-2">42,891</h2>
          <button className="text-orange-500 text-xs font-bold flex items-center gap-1 hover:underline">
            View Database <ArrowRight size={14} />
          </button>
          <div className="mt-4">
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 w-[45%]" />
            </div>
            <div className="flex justify-between text-[10px] text-gray-400 mt-1 uppercase font-bold">
              <span>Storage Limit</span>
              <span>1.5 GB / 10 GB</span>
            </div>
          </div>
        </div>

        {/* Duplicates Found */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-400 font-medium">Duplicates Found</p>
          <h2 className="text-4xl font-bold my-2">127</h2>
          <p className="text-red-500 text-xs font-bold">Needs cleanup</p>
          <button className="text-orange-500 text-xs font-bold mt-4 block hover:underline">Review Now →</button>
        </div>

        {/* Data Quality Score */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-400 font-medium">Data Quality Score</p>
          <h2 className="text-4xl font-bold my-2">94.3%</h2>
          <p className="text-green-500 text-xs font-bold">Healthy Database</p>
          <button className="text-orange-500 text-xs font-bold mt-4 block hover:underline">Review Now →</button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        
        {/* LEFT COLUMN (8 cols) */}
        <div className="col-span-8 space-y-6">
          
          {/* Growth Trend Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">Data Growth Trend</h3>
              <select className="text-xs bg-gray-50 border p-2 rounded-lg outline-none font-bold">
                <option>This Month</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis hide />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} tickFormatter={(v) => `${v}%`} />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorGreen)" dot={{ r: 6, fill: '#10b981', strokeWidth: 2, stroke: '#fff' }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* System Activity Log */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Activity className="text-orange-500" size={20} />
                <h3 className="font-bold text-lg">System Activity Log</h3>
              </div>
              <button className="text-xs text-gray-400 flex items-center gap-1 border p-1 px-3 rounded-full hover:bg-gray-50">
                Refresh <RefreshCw size={12} />
              </button>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Sarah Jenkins', action: 'updated lead status', target: 'Acme Corp', time: '12 mins ago', color: 'bg-purple-100 text-purple-600', init: 'SJ' },
                { name: 'Mike Ross', action: 'submitted', target: 'Contact Audit report', time: '1 hour ago', color: 'bg-orange-100 text-orange-600', init: 'MR' },
                { name: 'System', action: 'completed daily backup', target: '', time: '3 hours ago', color: 'bg-red-100 text-red-600', init: 'Sy' },
                { name: 'Elena Ford', action: 'exported', target: 'Global Leads CSV', time: '5 hours ago', color: 'bg-yellow-100 text-yellow-600', init: 'EF' },
                { name: 'David Kim', action: 'approved report', target: 'Q3 Revenue Projection', time: 'Yesterday', color: 'bg-blue-100 text-blue-600', init: 'DK' },
              ].map((log, i) => (
                <div key={i} className="flex items-center gap-4 text-sm pb-4 border-b border-gray-50 last:border-0">
                  <div className={`w-10 h-10 rounded-full ${log.color} flex items-center justify-center font-bold text-xs`}>{log.init}</div>
                  <div className="flex-1">
                    <p><span className="font-bold">{log.name}</span> {log.action} <span className="font-bold">{log.target}</span></p>
                    <span className="text-[10px] text-gray-400">{log.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (4 cols) */}
        <div className="col-span-4 space-y-6">
          
          {/* Action Buttons */}
          <div className="flex gap-2">
            <button className="flex-1 bg-white border border-gray-200 py-2 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1"><Plus size={14}/> Custom Field</button>
            <button className="flex-1 bg-white border border-gray-200 py-2 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1"><Download size={14}/> Data Export</button>
            <button className="flex-1 bg-white border border-orange-200 text-orange-600 py-2 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1"><Trash2 size={14}/> Purge</button>
          </div>

          {/* Verify Reports Section */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="text-orange-500" size={20} />
              <h3 className="font-bold">Verify Reports</h3>
            </div>
            <div className="space-y-4">
              {['Q4 Forecast', 'Contact Audit'].map((report, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-xl">
                  <p className="font-bold text-sm mb-1">{report}</p>
                  <p className="text-[10px] text-gray-400">By {i===0 ? 'Elena Ford' : 'Mike Ross'} • May 12, 2025</p>
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 py-1 bg-white border border-green-200 text-green-600 text-[10px] font-bold rounded-lg flex items-center justify-center gap-1 hover:bg-green-50"><Check size={12}/> Approve</button>
                    <button className="flex-1 py-1 bg-white border border-red-200 text-red-600 text-[10px] font-bold rounded-lg flex items-center justify-center gap-1 hover:bg-red-50"><X size={12}/> Reject</button>
                  </div>
                  <button className="w-full mt-2 text-[10px] text-gray-400 font-bold flex items-center justify-center gap-1"><Activity size={12}/> View Full Report</button>
                </div>
              ))}
            </div>
          </div>

          {/* Assign Task Form */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <UserPlus className="text-orange-500" size={20} />
              <h3 className="font-bold">Assign Task</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-bold uppercase text-gray-400 mb-1 block">Task</label>
                <input type="text" placeholder="Describe the task..." className="w-full bg-gray-50 border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-orange-500 outline-none" />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase text-gray-400 mb-1 block">Assign To</label>
                <select className="w-full bg-gray-50 border-none rounded-lg p-3 text-sm outline-none text-gray-400"><option>Team member...</option></select>
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase text-gray-400 mb-1 block">Deadline</label>
                <div className="relative">
                  <input type="text" placeholder="Add Time & Date..." className="w-full bg-gray-50 border-none rounded-lg p-3 text-sm outline-none" />
                  <Calendar className="absolute right-3 top-3 text-gray-300" size={16} />
                </div>
              </div>
              <button className="w-full bg-orange-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-orange-200 hover:bg-orange-700 transition-all">Assign task</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CRMData;