import React, { useState } from 'react';
import { 
  Search, Bell, UserPlus, Eye, Pencil, Trash2, 
  Users, UserCheck, Target, UserX, ChevronLeft, ChevronRight, Filter, X,
  Mail, Phone, Briefcase, TrendingUp, Shield
} from 'lucide-react';

const UserOperations = () => {
  // --- States ---
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false); // NEW STATE
  const [selectedUser, setSelectedUser] = useState(null);

  // Sample Data
  const [users] = useState([
    { id: 1, name: "John Smith", role: "Sales Executive", email: "john.smith@crm.com", phone: "+91 98765 43210", dept: "Sales", leads: 24, target: "5,00,000", status: "Active" },
    { id: 2, name: "Priya Sharma", role: "Sales Executive", email: "priya.sharma@crm.com", phone: "+91 98765 43211", dept: "Sales", leads: 18, target: "4,00,000", status: "Active" },
    { id: 3, name: "Rahul Verma", role: "Sales Executive", email: "rahul.verma@crm.com", phone: "+91 98765 43212", dept: "Sales", leads: 30, target: "8,00,000", status: "Active" },
    { id: 4, name: "Anita Patle", role: "Sales Executive", email: "anita.patle@crm.com", phone: "+91 98765 43213", dept: "Sales", leads: 12, target: "3,00,000", status: "Inactive" },
  ]);

  const stats = [
    { label: "Total Executive", value: "24", icon: <Users className="text-blue-500" />, bg: "bg-blue-50" },
    { label: "Active Executive", value: "18", icon: <UserCheck className="text-green-500" />, bg: "bg-green-50" },
    { label: "On Target", value: "12", icon: <Target className="text-orange-500" />, bg: "bg-orange-50" },
    { label: "Inactive", value: "6", icon: <UserX className="text-red-500" />, bg: "bg-red-50" },
  ];

  return (
    <div className="p-6 bg-[#f8f9fa] min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manage Users</h1>
          <p className="text-sm text-gray-500">Manage all sales executive in your organization</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input type="text" placeholder="Search anything..." className="pl-10 pr-4 py-2 bg-white border rounded-lg focus:outline-none w-64" />
          </div>
          <button className="p-2 bg-white border rounded-full relative">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-purple-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-2 border-l pl-4">
            <div className="w-10 h-10 rounded-full bg-[#ff5c00] flex items-center justify-center text-white font-bold">SA</div>
            <div className="text-xs">
              <p className="font-bold">Admin</p>
              <p className="text-gray-500">Super Admin</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mb-6">
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-[#ff5c00] text-white px-6 py-2.5 rounded-lg flex items-center gap-2 hover:bg-orange-600 transition font-bold shadow-lg shadow-orange-100"
        >
          <UserPlus size={18} /> Add Executive
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-50 flex items-center gap-4">
            <div className={`p-4 rounded-xl ${stat.bg}`}>{stat.icon}</div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{stat.label}</p>
              <p className="text-2xl font-extrabold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 flex justify-between items-center border-b border-gray-50">
          <div className="relative w-1/3">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input type="text" placeholder="Search by name, email or phone..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full text-sm outline-none focus:ring-1 focus:ring-orange-400" />
          </div>
          <div className="flex gap-3">
            <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none bg-gray-50 font-medium text-gray-600"><option>All Departments</option></select>
            <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none bg-gray-50 font-medium text-gray-600"><option>Status: All</option></select>
            <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm font-bold text-gray-600 hover:bg-gray-50"><Filter size={16} /> Filters</button>
          </div>
        </div>

        <table className="w-full text-left">
          <thead className="bg-[#fcfcfd] text-[10px] uppercase text-gray-400 font-bold border-b border-gray-50">
            <tr>
              <th className="px-6 py-4">#</th>
              <th className="px-6 py-4">Executive</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Department</th>
              <th className="px-6 py-4">Leads</th>
              <th className="px-6 py-4">Target</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-sm">
            {users.map((user, idx) => (
              <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 text-gray-400 font-medium">{idx + 1}.</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-400">{user.name.charAt(0)}</div>
                    <div>
                      <p className="font-bold text-gray-800">{user.name}</p>
                      <p className="text-[10px] text-gray-400 uppercase font-medium">{user.role}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500 font-medium">{user.email}</td>
                <td className="px-6 py-4 text-gray-600 font-semibold">{user.phone}</td>
                <td className="px-6 py-4 text-gray-600">{user.dept}</td>
                <td className="px-6 py-4 font-bold text-gray-700">{user.leads}</td>
                <td className="px-6 py-4 font-bold text-gray-700">₹{user.target}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 w-fit border ${user.status === 'Active' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-600' : 'bg-red-600'}`}></span>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button 
                      onClick={() => { setSelectedUser(user); setIsViewModalOpen(true); }}
                      className="p-1.5 text-purple-600 border border-purple-100 rounded-lg hover:bg-purple-50 transition"
                    >
                      <Eye size={16} />
                    </button>
                    <button 
                       onClick={() => { setSelectedUser(user); setIsUpdateModalOpen(true); }}
                       className="p-1.5 text-blue-600 border border-blue-100 rounded-lg hover:bg-blue-50 transition"
                    >
                      <Pencil size={16} />
                    </button>
                    <button 
                       onClick={() => { setSelectedUser(user); setIsDeleteModalOpen(true); }}
                       className="p-1.5 text-red-600 border border-red-100 rounded-lg hover:bg-red-50 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="p-4 flex justify-between items-center text-xs text-gray-400 border-t border-gray-50">
          <p>Showing <span className="font-bold text-gray-700">1 to 4</span> of <span className="font-bold text-gray-700">24 entries</span></p>
          <div className="flex items-center gap-1">
            <button className="p-1.5 border border-gray-200 rounded-lg hover:bg-gray-50"><ChevronLeft size={16} /></button>
            <button className="w-8 h-8 bg-[#ff5c00] text-white rounded-lg font-bold">1</button>
            <button className="w-8 h-8 border border-gray-100 text-gray-400 rounded-lg hover:bg-gray-50 font-bold">2</button>
            <button className="p-1.5 border border-gray-200 rounded-lg hover:bg-gray-50"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>

      {/* Legend Footer (Updated to be interactive labels) */}
      <div className="mt-8 grid grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 cursor-help group">
          <div className="p-2.5 bg-purple-100 text-purple-600 rounded-lg group-hover:scale-110 transition"><Eye size={18} /></div>
          <div><p className="font-bold text-gray-800 text-sm">View Details</p><p className="text-[10px] text-gray-400 font-medium">Click eye icon to see full performance data</p></div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 cursor-help group">
          <div className="p-2.5 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition"><Pencil size={18} /></div>
          <div><p className="font-bold text-gray-800 text-sm">Update User</p><p className="text-[10px] text-gray-400 font-medium">Click pencil icon to edit executive profile</p></div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 cursor-help group">
          <div className="p-2.5 bg-red-100 text-red-600 rounded-lg group-hover:scale-110 transition"><Trash2 size={18} /></div>
          <div><p className="font-bold text-gray-800 text-sm">Delete Access</p><p className="text-[10px] text-gray-400 font-medium">Click trash icon to remove user from system</p></div>
        </div>
      </div>

      {/* --- MODALS --- */}
      {isViewModalOpen && <ViewUserModal user={selectedUser} onClose={() => setIsViewModalOpen(false)} />}
      {isAddModalOpen && <UserFormModal title="Add Sales Executive" onClose={() => setIsAddModalOpen(false)} />}
      {isUpdateModalOpen && <UserFormModal title="Update Sales Executive" onClose={() => setIsUpdateModalOpen(false)} initialData={selectedUser} />}
      {isDeleteModalOpen && <DeleteConfirmModal user={selectedUser} onClose={() => setIsDeleteModalOpen(false)} />}
    </div>
  );
};

// --- View Modal Component ---
const ViewUserModal = ({ user, onClose }) => (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-in zoom-in duration-200">
      <div className="bg-[#ff5c00] p-8 text-white relative">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition"><X size={18}/></button>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-[#ff5c00] text-3xl font-black mb-4 shadow-xl ring-4 ring-white/20">{user?.name.charAt(0)}</div>
          <h2 className="text-2xl font-bold">{user?.name}</h2>
          <p className="text-white/80 font-medium tracking-wide text-sm">{user?.role}</p>
        </div>
      </div>
      
      <div className="p-8 grid grid-cols-2 gap-6 bg-white">
        <InfoItem icon={<Mail size={16}/>} label="Email Address" value={user?.email} />
        <InfoItem icon={<Phone size={16}/>} label="Phone Number" value={user?.phone} />
        <InfoItem icon={<Briefcase size={16}/>} label="Department" value={user?.dept} />
        <InfoItem icon={<Shield size={16}/>} label="Account Status" value={user?.status} isStatus />
        <InfoItem icon={<TrendingUp size={16}/>} label="Leads Assigned" value={user?.leads} />
        <InfoItem icon={<Target size={16}/>} label="Monthly Target" value={`₹${user?.target}`} />
      </div>

      <div className="px-8 pb-8">
         <button onClick={onClose} className="w-full py-3 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition">Close Profile</button>
      </div>
    </div>
  </div>
);

const InfoItem = ({ icon, label, value, isStatus }) => (
  <div className="flex gap-3">
    <div className="p-2 bg-gray-50 text-gray-400 rounded-lg h-fit">{icon}</div>
    <div>
      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0.5">{label}</p>
      {isStatus ? (
         <span className={`text-xs font-bold ${value === 'Active' ? 'text-green-600' : 'text-red-600'}`}>{value}</span>
      ) : (
         <p className="text-sm font-bold text-gray-800">{value}</p>
      )}
    </div>
  </div>
);

// --- Form Modal Component ---
const UserFormModal = ({ title, onClose, initialData }) => (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl">
      <div className="p-6 text-center border-b border-gray-50 flex justify-between items-center">
        <div className="w-10"></div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 transition"><X size={20}/></button>
      </div>
      <div className="p-8 grid grid-cols-2 gap-x-6 gap-y-4">
        {[
          { label: "First name", placeholder: "Enter full name", val: initialData?.name },
          { label: "Email", placeholder: "Enter email address", val: initialData?.email },
          { label: "Phone number", placeholder: "Enter phone number", val: initialData?.phone },
          { label: "Department", type: "select" },
          { label: "Designation", placeholder: "Enter designation", val: initialData?.role },
          { label: "Target(Monthly)", placeholder: "Enter target amount", val: initialData?.target },
          { label: "Password", placeholder: "Enter password", type: "password" },
          { label: "Confirm password", placeholder: "Confirm password", type: "password" },
        ].map((field, i) => (
          <div key={i}>
            <label className="block text-[10px] font-bold uppercase mb-1.5 text-gray-400 tracking-wider">{field.label} <span className="text-red-500">*</span></label>
            {field.type === 'select' ? (
              <select className="w-full border border-gray-200 rounded-xl p-3 text-sm outline-none bg-gray-50 focus:ring-1 focus:ring-orange-400 transition"><option>Select department</option></select>
            ) : (
              <input type={field.type || "text"} placeholder={field.placeholder} defaultValue={field.val || ""} className="w-full border border-gray-200 rounded-xl p-3 text-sm outline-none bg-gray-50 focus:ring-1 focus:ring-orange-400 transition" />
            )}
          </div>
        ))}
        <div className="col-span-2">
          <label className="block text-[10px] font-bold uppercase mb-1.5 text-gray-400 tracking-wider">Status <span className="text-red-500">*</span></label>
          <select className="w-full border border-gray-200 rounded-xl p-3 text-sm outline-none bg-gray-50 focus:ring-1 focus:ring-orange-400 transition"><option>Active</option><option>Inactive</option></select>
        </div>
      </div>
      <div className="p-6 flex gap-4 bg-gray-50 border-t border-gray-100">
        <button onClick={onClose} className="flex-1 py-3.5 border border-gray-200 bg-white rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition">Cancel</button>
        <button className="flex-1 py-3.5 bg-[#ff5c00] text-white rounded-xl font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-100">
          {initialData ? "Update Executive" : "Save Executive"}
        </button>
      </div>
    </div>
  </div>
);

const DeleteConfirmModal = ({ user, onClose }) => (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl w-full max-w-sm p-8 text-center shadow-2xl">
      <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white ring-4 ring-red-50 shadow-sm">
        <Trash2 className="text-red-500" size={36} />
      </div>
      <h3 className="text-xl font-black text-gray-800 mb-2">Are you sure?</h3>
      <p className="text-xs text-gray-400 mb-8 leading-relaxed font-medium">
        You are about to remove <span className="font-bold text-gray-700">{user?.name}</span> <br/> 
        from the system. This action cannot be undone.
      </p>
      <div className="flex gap-4">
        <button onClick={onClose} className="flex-1 py-3 border border-gray-200 rounded-xl font-bold text-gray-400 hover:bg-gray-50 transition">Cancel</button>
        <button className="flex-1 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition shadow-lg shadow-red-100">Yes, Remove</button>
      </div>
    </div>
  </div>
);

export default UserOperations;