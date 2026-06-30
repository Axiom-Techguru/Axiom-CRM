import React, { useState } from "react";
import { Globe, User, Lock, Bell, Smartphone, KeyRound, AlertCircle } from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("General");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const [profile, setProfile] = useState({
    displayName: "System Administrator",
    email: "admin@example.com",
    phone: "+1(555)000-0000",
    role: "ADMIN",
  });

  const menuItems = [
    { name: "General", icon: Globe },
    { name: "Profile", icon: User },
    { name: "Security", icon: Lock },
    { name: "Notifications", icon: Bell },
  ];

  const handleSave = () => {
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="bg-[#F7F8FA] min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-64 bg-white rounded-3xl p-4 shadow-sm border border-gray-100 h-fit">
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveTab(item.name)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === item.name ? "bg-orange-50 text-orange-500 font-medium" : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Icon size={18} />
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
                  <User size={24} className="text-orange-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Profile Information</h2>
                  <p className="text-sm text-gray-500">Your personal details and credentials.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Display Name</label>
                  <input
                    type="text"
                    value={profile.displayName}
                    onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 shadow-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 shadow-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="text"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 shadow-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Account Role</label>
                  <input
                    type="text"
                    value={profile.role}
                    onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 shadow-sm focus:outline-none"
                  />
                </div>
              </div>
              <button onClick={handleSave} className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-medium">
                Save Changes
              </button>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
                  <Lock size={24} className="text-orange-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Security & Privacy</h2>
                  <p className="text-md text-slate-500 mt-1">Keep your account secure with 2FA and strong passwords.</p>
                </div>
              </div>
              <div className="flex justify-between items-center py-4">
                <div className="flex gap-4">
                  <Smartphone size={18} className="mt-1 text-gray-500" />
                  <div>
                    <h3 className="font-semibold text-lg">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-500">Extra layer of security for your login.</p>
                  </div>
                </div>
                <button onClick={() => setTwoFactorEnabled(!twoFactorEnabled)} className="border border-gray-200 px-4 py-2 rounded-xl font-medium hover:bg-gray-50">
                  {twoFactorEnabled ? "Enabled" : "Enable"}
                </button>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <div className="flex justify-between items-center py-4">
                <div className="flex gap-4">
                  <KeyRound size={18} className="mt-1 text-gray-500" />
                  <div>
                    <h3 className="font-semibold text-lg">Change Password</h3>
                    <p className="text-sm text-gray-500">Update your account credentials.</p>
                  </div>
                </div>
                <button onClick={() => setShowPasswordModal(true)} className="border border-gray-200 px-4 py-2 rounded-xl font-medium hover:bg-gray-50">
                  Update
                </button>
              </div>
              <div className="mt-6 bg-orange-50 rounded-xl px-4 py-3 flex items-center gap-3">
                <AlertCircle size={16} className="text-orange-500" />
                <p className="text-sm text-orange-500">Changing security parameters might require re-login of any active sessions.</p>
              </div>
            </div>
          </div>
        </div>
        {showPasswordModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">Change Password</h2>
              <input type="password" placeholder="Current Password" className="w-full border rounded-lg p-3 mb-3 outline-none" />
              <input type="password" placeholder="New Password" className="w-full border rounded-lg p-3 mb-3 outline-none" />
              <input type="password" placeholder="Confirm Password" className="w-full border rounded-lg p-3 outline-none" />
              <div className="flex justify-end gap-3 mt-6">
                <button onClick={() => setShowPasswordModal(false)} className="px-4 py-2 border rounded-lg">Cancel</button>
                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">Update</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}