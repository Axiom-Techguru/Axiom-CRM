import React, { useState } from 'react';
import { 
  Search, Bell, UserPlus, Eye, Pencil, Trash2, 
  Users, UserCheck, Target, UserX, ChevronLeft, ChevronRight, Filter, X 
} from 'lucide-react';

const UserOperations = () => {
  // --- States ---
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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
            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
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
          className="bg-[#4e60ff] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
        >
          <UserPlus size={18} /> Add Executive
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
            <div className={`p-4 rounded-lg ${stat.bg}`}>{stat.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        {/* Table Filters */}
        <div className="p-4 flex justify-between items-center border-b">
          <div className="relative w-1/3">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input type="text" placeholder="Search by name, email or phone..." className="pl-10 pr-4 py-2 border rounded-lg w-full text-sm" />
          </div>
          <div className="flex gap-3">
            <select className="border rounded-lg px-4 py-2 text-sm outline-none">
              <option>All Departments</option>
            </select>
            <select className="border rounded-lg px-4 py-2 text-sm outline-none">
              <option>Status: All</option>
            </select>
            <button className="flex items-center gap-2 border rounded-lg px-4 py-2 text-sm">
              <Filter size={16} /> Filters
            </button>
          </div>
        </div>

        {/* The Table */}
        <table className="w-full text-left">
          <thead className="bg-[#f3f4ff] text-xs uppercase text-gray-600 font-semibold">
            <tr>
              <th className="px-6 py-4">#</th>
              <th className="px-6 py-4">Executive</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Department</th>
              <th className="px-6 py-4">Lead Assigned</th>
              <th className="px-6 py-4">Target(Monthly)</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm">
            {users.map((user, idx) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-bold">{idx + 1}</td>
                <td className="px-6 py-4">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-[10px] text-gray-400 uppercase">{user.role}</p>
                </td>
                <td className="px-6 py-4 text-gray-500">{user.email}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">{user.dept}</td>
                <td className="px-6 py-4">{user.leads}</td>
                <td className="px-6 py-4">₹{user.target}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 w-fit ${user.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-600' : 'bg-red-600'}`}></span>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-1.5 text-purple-600 border border-purple-200 rounded hover:bg-purple-50"><Eye size={16} /></button>
                    <button 
                       onClick={() => { setSelectedUser(user); setIsUpdateModalOpen(true); }}
                       className="p-1.5 text-blue-600 border border-blue-200 rounded hover:bg-blue-50"
                    >
                      <Pencil size={16} />
                    </button>
                    <button 
                       onClick={() => { setSelectedUser(user); setIsDeleteModalOpen(true); }}
                       className="p-1.5 text-red-600 border border-red-200 rounded hover:bg-red-50"
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
        <div className="p-4 flex justify-between items-center text-sm text-gray-500">
          <span>Showing 1 to 6 of 24 entries</span>
          <div className="flex items-center gap-2">
            <button className="p-1 border rounded"><ChevronLeft size={16} /></button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
            <button className="px-3 py-1 border rounded">2</button>
            <button className="px-3 py-1 border rounded">3</button>
            <button className="px-3 py-1 border rounded">4</button>
            <button className="p-1 border rounded"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>

      {/* Legend Footer */}
      <div className="mt-6 flex gap-12 bg-white p-4 rounded-xl shadow-sm border text-xs">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-100 text-purple-600 rounded"><Eye size={14} /></div>
          <div><p className="font-bold">View</p><p className="text-gray-400">View executive details and performance</p></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 text-blue-600 rounded"><Pencil size={14} /></div>
          <div><p className="font-bold">Update</p><p className="text-gray-400">Edit executive information and targets</p></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-100 text-red-600 rounded"><Trash2 size={14} /></div>
          <div><p className="font-bold">Remove</p><p className="text-gray-400">Remove executive from the system</p></div>
        </div>
      </div>

      {/* --- MODALS --- */}
      {isAddModalOpen && <UserFormModal title="Add Sales Executive" onClose={() => setIsAddModalOpen(false)} />}
      {isUpdateModalOpen && <UserFormModal title="Update Sales Executive" onClose={() => setIsUpdateModalOpen(false)} initialData={selectedUser} />}
      {isDeleteModalOpen && <DeleteConfirmModal user={selectedUser} onClose={() => setIsDeleteModalOpen(false)} />}
    </div>
  );
};

// --- Sub-Components for Modals ---

const UserFormModal = ({ title, onClose, initialData }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl w-[600px] overflow-hidden shadow-2xl">
      <div className="p-6 text-center border-b">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="p-8 grid grid-cols-2 gap-4">
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
            <label className="block text-xs font-semibold mb-1 text-gray-600">{field.label} <span className="text-red-500">*</span></label>
            {field.type === 'select' ? (
              <select className="w-full border rounded-lg p-2.5 text-sm outline-none"><option>Select department</option></select>
            ) : (
              <input type={field.type || "text"} placeholder={field.placeholder} defaultValue={field.val || ""} className="w-full border rounded-lg p-2.5 text-sm outline-none focus:border-blue-500" />
            )}
          </div>
        ))}
        <div className="col-span-2">
          <label className="block text-xs font-semibold mb-1 text-gray-600">Status <span className="text-red-500">*</span></label>
          <select className="w-full border rounded-lg p-2.5 text-sm outline-none"><option>Active</option><option>Inactive</option></select>
        </div>
      </div>
      <div className="p-6 flex gap-4 bg-gray-50 border-t">
        <button onClick={onClose} className="flex-1 py-3 border rounded-lg font-bold text-gray-600 hover:bg-gray-100">Cancel</button>
        <button className="flex-1 py-3 bg-[#2b59ff] text-white rounded-lg font-bold hover:bg-blue-700 transition">
          {initialData ? "Update Executive" : "Save Executive"}
        </button>
      </div>
    </div>
  </div>
);

const DeleteConfirmModal = ({ user, onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl w-[400px] p-8 text-center shadow-2xl">
      <h2 className="text-lg font-bold mb-6">Remove Sales Executive</h2>
      <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
        <Trash2 className="text-red-500" size={40} />
      </div>
      <h3 className="text-xl font-bold mb-2">Are you sure ?</h3>
      <p className="text-sm text-gray-500 mb-8 leading-relaxed">
        You are about to remove <span className="font-bold text-gray-800">{user?.name}</span> <br/> 
        from the system. This action cannot be undone.
      </p>
      <div className="flex gap-4">
        <button onClick={onClose} className="flex-1 py-2.5 border rounded-lg font-bold text-gray-600">Cancel</button>
        <button className="flex-1 py-2.5 bg-[#f05252] text-white rounded-lg font-bold">Yes, Remove</button>
      </div>
    </div>
  </div>
);

export default UserOperations;