import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layout Components
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/Navbar";

// Page Components
import LoginPage from "./pages/LoginPage"; 
import Dashboard from "./pages/Dashboard";
import UserOperations from "./pages/UserOperations"; 
import CRMData from "./pages/CRMData"; 
import ManageLeads from "./pages/ManageLeads"; 
import Settings from "./pages/Settings";
import LogMonitoring from "./pages/LogMonitoring"; 
import PerformanceIndex from "./pages/PerformanceIndex";
import IndividualPerformance from "./pages/IndividualPerformance";

// Import your CSS
import "./App.css";

export default function App() {
  // 1. Create authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 2. Login function
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // 3. Logout function (This resets the state to show Login page)
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // 4. Conditional Rendering: Show Login if not authenticated
  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // 5. If authenticated, show full layout
  return (
    <div className="flex h-screen overflow-hidden">
      
      {/* 
         IMPORTANT: We pass 'handleLogout' as a prop named 'onLogout' 
         so the Sidebar button can trigger it.
      */}
      <Sidebar onLogout={handleLogout} />

      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Navbar stays fixed at the top */}
        <Navbar />

        {/* Main Content Area - Only this part scrolls */}
        <main className="flex-1 overflow-y-auto bg-[#f5f6fa]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UserOperations />} /> 
            <Route path="/leads" element={<ManageLeads />} />
            <Route path="/crm-data" element={<CRMData />} />
            <Route path="/logs" element={<LogMonitoring />} />
            <Route path="/performance/team" element={<PerformanceIndex />} />
            <Route path="/performance/individual" element={<IndividualPerformance />} />
            <Route path="/settings" element={<Settings />} />

            {/* 2. REMAINING Performance Modules (Show Coming Soon) */}
            <Route path="/performance/task" element={<ComingSoon title="Task Management" />} />
            <Route path="/performance/attendance" element={<ComingSoon title="Attendance & Activity" />} />
            <Route path="/performance/support" element={<ComingSoon title="Support Performance" />} />
            <Route path="/performance/kpi" element={<ComingSoon title="KPI Reports" />} />
            <Route path="/performance/analytics" element={<ComingSoon title="Monthly Analytics" />} />


            {/* Redirect any unknown paths to dashboard */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
// Create a new file or add this at the bottom of your App.js
const ComingSoon = ({ title }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-10">
    <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6">
      <svg className="w-10 h-10 text-[#ff5c00] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <h2 className="text-3xl font-black text-slate-800">{title}</h2>
    <p className="text-gray-400 mt-2 font-medium">This module is currently under development. Stay tuned!</p>
    <button className="mt-8 px-6 py-2 bg-slate-900 text-white rounded-xl font-bold text-sm">Back to Dashboard</button>
  </div>
);