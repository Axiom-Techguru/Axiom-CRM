import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout Components
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/Navbar";

// Page Components
import Dashboard from "./pages/Dashboard";
import UserOperations from "./pages/UserOperations"; 
import CRMData from "./pages/CRMData"; // New Import
import ManageLeads from "./pages/ManageLeads"; // Assuming these exist in your folder
import Settings from "./pages/Settings";

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      
      {/* Sidebar - Stays fixed on the left */}
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Navbar - Stays fixed at the top */}
        <Navbar />

        {/* Main Content Area - Only this part scrolls */}
        <main className="flex-1 overflow-y-auto bg-[#f5f6fa]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UserOperations />} /> 
            <Route path="/leads" element={<ManageLeads />} />
            <Route path="/crm-data" element={<CRMData />} />
            <Route path="/settings" element={<Settings />} />
            
            {/* Catch-all for other links we haven't built yet */}
            <Route path="*" element={<div className="p-10 font-bold">Coming Soon...</div>} />
          </Routes>
        </main>

      </div>
    </div>
  );
}