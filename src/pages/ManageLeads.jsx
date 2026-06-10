import React, { useState } from 'react';
import { 
  Users, CheckCircle, Clock, XCircle, Plus, Search, 
  MoreVertical, Download, Trash2, Eye, Calendar,
  TrendingUp, Target, Mail, Phone, ArrowLeft, X
} from 'lucide-react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, 
  XAxis, YAxis, Tooltip, LineChart, Line, CartesianGrid 
} from 'recharts';

// --- Mock Data ---
const leadStats = [
  { label: 'Total leads', val: '1,250', change: '12%', color: 'text-purple-600', bg: 'bg-purple-50', icon: <Users size={20}/> },
  { label: 'Converted', val: '350', change: '12%', color: 'text-green-600', bg: 'bg-green-50', icon: <CheckCircle size={20}/> },
  { label: 'Pending', val: '950', change: '2%', color: 'text-orange-600', bg: 'bg-orange-50', icon: <Clock size={20}/> },
  { label: 'Lost leads', val: '150', change: '8%', color: 'text-red-600', bg: 'bg-red-50', icon: <XCircle size={20}/> },
];

const sourceData = [
  { name: 'Websites', value: 230, color: '#4e60ff' },
  { name: 'Facebook Ads', value: 150, color: '#3ec99e' },
  { name: 'Instagram', value: 110, color: '#ffbd2e' },
  { name: 'Referral', value: 90, color: '#f05252' },
  { name: 'Google Ads', value: 70, color: '#7e3af2' },
  { name: 'Email Campaign', value: 60, color: '#ff5c00' },
];

const performanceData = [
  { day: 1, leads: 15, completed: 8 }, { day: 5, leads: 22, completed: 12 },
  { day: 10, leads: 18, completed: 15 }, { day: 15, leads: 28, completed: 10 },
  { day: 20, leads: 20, completed: 16 }, { day: 25, leads: 25, completed: 14 },
  { day: 30, leads: 32, completed: 20 },
];

const ManageLeads = () => {
  const [activeTab, setActiveTab] = useState('pipeline');
  
  // --- MODAL STATES ---
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedExecutive, setSelectedExecutive] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <div className="p-6 bg-[#f8f9fa] min-h-screen text-gray-800">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Manage Leads</h1>
          <p className="text-sm text-gray-400 font-medium">Real-time lead status and details</p>
        </div>
        <div className="flex gap-2">
            {['pipeline', 'analytics', 'executives'].map((tab) => (
                <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-bold capitalize transition ${activeTab === tab ? 'bg-[#ff5c00] text-white' : 'bg-white text-gray-500 border hover:bg-gray-50'}`}
                >
                    {tab}
                </button>
            ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {leadStats.map((item, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${item.bg} ${item.color}`}>{item.icon}</div>
              <span className="text-sm text-gray-400 font-bold uppercase">{item.label}</span>
            </div>
            <h3 className="text-3xl font-extrabold mb-1">{item.val}</h3>
            <span className="text-xs text-green-500 font-bold">{item.change}</span>
            <span className="text-[10px] text-gray-300 ml-1 font-medium italic">vs last 7 days</span>
          </div>
        ))}
      </div>

      {/* Dynamic Tab Content */}
      {activeTab === 'pipeline' && <PipelineView onActionDelete={() => setIsDeleteModalOpen(true)} />}
      
      {activeTab === 'analytics' && <AnalyticsView />}
      
      {activeTab === 'executives' && (
        <ExecutivesView 
            onDetailClick={(exe) => { setSelectedExecutive(exe); setIsDetailOpen(true); }} 
            onAddClick={() => setIsAddModalOpen(true)}
            onDeleteClick={(exe) => { setSelectedExecutive(exe); setIsDeleteModalOpen(true); }}
        />
      )}

      {/* --- MODALS --- */}
      {isDetailOpen && selectedExecutive && (
        <ExecutiveDetailModal executive={selectedExecutive} onClose={() => setIsDetailOpen(false)} />
      )}

      {isAddModalOpen && (
        <AddExecutiveModal onClose={() => setIsAddModalOpen(false)} />
      )}

      {isDeleteModalOpen && (
        <DeleteConfirmModal executive={selectedExecutive} onClose={() => setIsDeleteModalOpen(false)} />
      )}
    </div>
  );
};

// --- SUB-COMPONENT: Pipeline (Kanban Board) ---
const PipelineView = ({ onActionDelete }) => {
  // 1. Change state to null (no card selected by default)
  const [activeReviewId, setActiveReviewId] = useState(null);

  const pipelineData = [
    { id: 1, name: "Rahul Sharma", initial: "RS", status: "New", color: "bg-purple-500" },
    { id: 2, name: "Priya Mehta", initial: "PM", status: "New", color: "bg-fuchsia-500" },
    { id: 3, name: "Neha Verma", initial: "NV", status: "Contacted", color: "bg-indigo-500" },
    { id: 4, name: "Rahul Sharma", initial: "RP", status: "Scheduled", color: "bg-purple-500" },
    { id: 5, name: "Priya Mehta", initial: "PM", status: "Scheduled", color: "bg-fuchsia-500" },
    { id: 6, name: "Rahul Sharma", initial: "RP", status: "Converted", color: "bg-purple-500" },
  ];

  const columns = [
    { title: 'New', bg: 'bg-[#c7d2fe]', text: 'text-[#4338ca]' },
    { title: 'Contacted', bg: 'bg-[#dcfce7]', text: 'text-[#15803d]' },
    { title: 'Scheduled', bg: 'bg-[#fef3c7]', text: 'text-[#b45309]' },
    { title: 'Converted', bg: 'bg-[#e2e8f0]', text: 'text-[#475569]' },
  ];

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-700">Lead Pipeline</h3>
          <select className="text-xs border p-1.5 rounded-lg bg-white outline-none font-bold">
            <option>Last Month</option>
          </select>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {columns.map((col) => (
            <div key={col.title} className="bg-[#f1f5f9] rounded-2xl p-3 min-h-[500px]">
              <div className={`flex items-center justify-between p-2 mb-4 rounded-t-xl ${col.bg} ${col.text}`}>
                <span className="text-sm font-bold">{col.title}</span>
                <MoreVertical size={16} className="opacity-50" />
              </div>

              <div className="space-y-3 relative">
                {pipelineData
                  .filter((lead) => lead.status === col.title)
                  .map((lead) => (
                    // 2. Add onClick to open the popup for this specific lead ID
                    <div 
                      key={lead.id} 
                      onClick={() => setActiveReviewId(lead.id)}
                      className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:border-orange-200 transition-all relative"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <p className="font-bold text-sm text-gray-800">{lead.name}</p>
                        <MoreVertical size={14} className="text-gray-300" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className={`w-7 h-7 rounded-full ${lead.color} text-[10px] text-white flex items-center justify-center font-bold`}>
                          {lead.initial}
                        </div>
                        <MoreVertical size={14} className="text-gray-300" />
                      </div>

                      {/* 3. Popup logic: only show if this lead.id is the active one */}
                      {activeReviewId === lead.id && (
                        <div 
                          className="absolute top-0 -right-4 z-30 w-72 bg-white rounded-2xl border border-gray-300 shadow-2xl p-0 overflow-hidden animate-in zoom-in duration-150"
                          onClick={(e) => e.stopPropagation()} // Prevents clicking inside popup from closing it
                        >
                          <div className="p-3 border-b bg-gray-50 flex justify-between items-center">
                            <h5 className="font-bold text-sm">Review Lead Tasks</h5>
                            {/* 4. X button closes the popup by setting state back to null */}
                            <X 
                              size={14} 
                              className="text-gray-400 cursor-pointer hover:text-red-500" 
                              onClick={() => setActiveReviewId(null)} 
                            />
                          </div>
                          <div className="p-4 text-left">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <p className="font-bold text-base text-gray-800">{lead.name}</p>
                                <p className="text-xs text-gray-500">Send Brochure</p>
                                <p className="text-[10px] text-gray-400 mt-1 italic">Assigned to Aniket</p>
                              </div>
                              <div className="w-6 h-6 rounded-full bg-[#4e60ff] text-[8px] text-white flex items-center justify-center font-bold">AP</div>
                            </div>
                            <div className="flex gap-2">
                              <button 
                                onClick={() => setActiveReviewId(null)}
                                className="flex-1 py-1.5 border border-green-300 text-green-600 text-xs font-bold rounded-lg hover:bg-green-50"
                              >
                                Approve
                              </button>
                              <button 
                                onClick={() => setActiveReviewId(null)}
                                className="flex-1 py-1.5 border border-red-200 bg-red-50 text-red-600 text-xs font-bold rounded-lg hover:bg-red-100"
                              >
                                Reject
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Action Sidebar */}
      <div className="col-span-2">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-6">
          <h4 className="font-bold text-sm mb-6 text-gray-800 border-b pb-2">Lead Management Actions</h4>
          <ul className="space-y-6">
            <li className="flex items-center gap-3 text-xs font-bold text-gray-500 cursor-pointer hover:text-[#ff5c00] transition group">
              <Plus size={18} /> Add Lead
            </li>
            <li className="flex items-center gap-3 text-xs font-bold text-gray-500 cursor-pointer hover:text-[#ff5c00] transition group">
              <TrendingUp size={18} /> Assign Task
            </li>
            <li className="flex items-center gap-3 text-xs font-bold text-gray-500 cursor-pointer hover:text-[#ff5c00] transition group">
              <Download size={18} /> Import CSV
            </li>
            <li onClick={onActionDelete} className="flex items-center gap-3 text-xs font-bold text-red-500 cursor-pointer hover:underline group">
              <Trash2 size={18} /> Delete
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
// --- SUB-COMPONENT: Analytics ---
const AnalyticsView = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-7 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h4 className="font-bold mb-6">Lead Sources Distribution</h4>
        <div className="flex items-center">
            <div className="w-1/2 h-64 relative">
                <ResponsiveContainer>
                    <PieChart>
                        <Pie data={sourceData} innerRadius={60} outerRadius={90} paddingAngle={5} dataKey="value">
                            {sourceData.map((e, i) => <Cell key={i} fill={e.color} />)}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-2xl font-black">710</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Total Leads</span>
                </div>
            </div>
            <div className="w-1/2 grid grid-cols-2 gap-4 pl-4">
                {sourceData.map((s, i) => (
                    <div key={i} className="text-xs">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 rounded-full" style={{backgroundColor: s.color}}></div>
                            <span className="text-gray-400 font-bold">{s.name}</span>
                        </div>
                        <p className="font-bold text-gray-800 ml-4">{Math.floor(s.value / 710 * 100)}%</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
      <div className="col-span-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h4 className="font-bold mb-6">Top Converting Sources</h4>
        <div className="h-64">
            <ResponsiveContainer>
                <BarChart data={sourceData} layout="vertical">
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold'}} />
                    <Bar dataKey="value" fill="#ff5c00" radius={[0, 10, 10, 0]} barSize={10} />
                </BarChart>
            </ResponsiveContainer>
        </div>
      </div>
    </div>
  </div>
);

// --- SUB-COMPONENT: Executives List ---
const ExecutivesView = ({ onDetailClick, onAddClick, onDeleteClick }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
        <div className="p-4 flex justify-between items-center border-b">
            <div className="relative w-1/3">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                <input type="text" placeholder="Search anything..." className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm w-full outline-none" />
            </div>
            <button 
                onClick={onAddClick}
                className="bg-[#ff5c00] text-white px-6 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg shadow-orange-100 transition hover:bg-orange-600"
            >
                <Plus size={18}/> Add Executive
            </button>
        </div>
        <table className="w-full text-left">
            <thead className="bg-gray-50 text-[10px] uppercase text-gray-400 font-bold">
                <tr>
                    <th className="px-6 py-4">#</th>
                    <th className="px-6 py-4">Executive</th>
                    <th className="px-6 py-4">Leads Assigned</th>
                    <th className="px-6 py-4">Target</th>
                    <th className="px-6 py-4 text-center">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm">
                {[
                    { id: 1, name: 'John Smith', leads: 24, target: '₹5,00,000' },
                    { id: 2, name: 'Rahul Sharma', leads: 18, target: '₹4,00,000' },
                    { id: 3, name: 'Priya Mehta', leads: 30, target: '₹8,00,000' }
                ].map((exe) => (
                    <tr key={exe.id} className="hover:bg-gray-50/50">
                        <td className="px-6 py-4 text-gray-400">{exe.id}.</td>
                        <td className="px-6 py-4 font-bold">{exe.name} <br/><span className="text-[10px] text-gray-400 font-medium">Sales Executive</span></td>
                        <td className="px-6 py-4 font-bold">{exe.leads}</td>
                        <td className="px-6 py-4 font-bold">{exe.target}</td>
                        <td className="px-6 py-4 flex justify-center gap-2">
                            <button onClick={() => onDetailClick(exe)} className="p-1.5 text-blue-500 border border-blue-100 rounded-lg hover:bg-blue-50 transition"><Eye size={16}/></button>
                            <button onClick={() => onDeleteClick(exe)} className="p-1.5 text-red-500 border border-red-100 rounded-lg hover:bg-red-50 transition"><Trash2 size={16}/></button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

// --- MODAL: Add Executive ---
const AddExecutiveModal = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in duration-200">
            <div className="p-6 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold">Add New Executive</h2>
                <X onClick={onClose} className="cursor-pointer text-gray-400" />
            </div>
            <div className="p-8 space-y-4">
                <input type="text" placeholder="Executive Name" className="w-full border p-3 rounded-xl outline-none focus:ring-1 focus:ring-orange-400" />
                <input type="email" placeholder="Email Address" className="w-full border p-3 rounded-xl outline-none focus:ring-1 focus:ring-orange-400" />
                <input type="text" placeholder="Target Monthly" className="w-full border p-3 rounded-xl outline-none focus:ring-1 focus:ring-orange-400" />
                <button className="w-full bg-[#ff5c00] text-white py-3 rounded-xl font-bold mt-4 shadow-lg shadow-orange-100">Save Executive</button>
            </div>
        </div>
    </div>
);

// --- MODAL: Delete Confirm ---
const DeleteConfirmModal = ({ executive, onClose }) => (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl w-full max-w-sm p-8 text-center shadow-2xl animate-in zoom-in duration-200">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trash2 className="text-red-500" size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">Are you sure?</h3>
            <p className="text-sm text-gray-400 mb-8">
                You are about to remove <span className="font-bold text-gray-800">{executive?.name || 'this item'}</span>. 
                This action cannot be undone.
            </p>
            <div className="flex gap-4">
                <button onClick={onClose} className="flex-1 py-3 border rounded-xl font-bold text-gray-500">Cancel</button>
                <button className="flex-1 py-3 bg-red-500 text-white rounded-xl font-bold shadow-lg shadow-red-100">Yes, Remove</button>
            </div>
        </div>
    </div>
);

// --- MODAL: Executive Details ---
const ExecutiveDetailModal = ({ executive, onClose }) => (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden animate-in zoom-in duration-200">
            <div className="flex justify-between items-center p-6 border-b">
                <button onClick={onClose} className="flex items-center gap-2 text-gray-500 font-bold hover:text-black">
                    <ArrowLeft size={20}/> Executive Details
                </button>
                <X onClick={onClose} className="cursor-pointer text-gray-300 hover:text-red-500 transition" />
            </div>
            
            <div className="p-8">
                <div className="flex gap-12 mb-10">
                    <div className="w-1/3">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-3xl font-black">JS</div>
                            <div>
                                <h2 className="text-2xl font-black mb-1">{executive.name}</h2>
                                <p className="text-xs text-gray-400 font-bold uppercase mb-2">Sales Executive</p>
                                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold">Active</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {[
                                { l: 'Email', v: 'john.smith@crm.com', i: <Mail size={16}/> },
                                { l: 'Phone', v: '+91 98765 43210', i: <Phone size={16}/> },
                                { l: 'Target', v: executive.target || '₹5,00,000', i: <Target size={16}/> },
                                { l: 'Joined', v: '12 Jan 2024', i: <Calendar size={16}/> },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-center">
                                    <div className="p-2 bg-gray-50 text-gray-400 rounded-lg">{item.i}</div>
                                    <div><p className="text-[10px] text-gray-400 font-bold uppercase">{item.l}</p><p className="text-sm font-bold">{item.v}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="w-2/3">
                        <h4 className="font-bold mb-4">Performance (This Month)</h4>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {[
                                { l: 'Lead Assignment', v: executive.leads || '24', bg: 'bg-blue-50', text: 'text-blue-600' },
                                { l: 'Lead Converted', v: '16', bg: 'bg-green-50', text: 'text-green-600' },
                                { l: 'Conversion Rate', v: '66.7%', bg: 'bg-purple-50', text: 'text-purple-600' },
                                { l: 'Revenue Generated', v: '₹3,20,000', bg: 'bg-orange-50', text: 'text-orange-600' },
                            ].map((stat, i) => (
                                <div key={i} className={`p-4 rounded-2xl border border-gray-50 ${stat.bg}`}>
                                    <p className="text-2xl font-black mb-1">{stat.v}</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">{stat.l}</p>
                                </div>
                            ))}
                        </div>
                        <h4 className="font-bold mb-4">Lead & Conversion Trend</h4>
                        <div className="h-48">
                            <ResponsiveContainer>
                                <LineChart data={performanceData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="leads" stroke="#4e60ff" strokeWidth={3} dot={{ r: 4 }} />
                                    <Line type="monotone" dataKey="completed" stroke="#3ec99e" strokeWidth={3} dot={{ r: 4 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ManageLeads;