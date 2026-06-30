import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiBarChart2,
  FiUsers,
  FiZap,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff, // Added for toggle
  FiShield,
  FiArrowRight,
  FiTrendingUp,
} from "react-icons/fi";
import plantImg from "../assets/plant.png"; // Ensure path is correct

const LoginPage = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col font-sans overflow-y-auto">
      
      {/* Top Header Banner - Sticky */}
      <div className="bg-[#1d1d1d] text-white text-center py-2.5 text-[10px] font-bold tracking-[0.3em] uppercase z-30 sticky top-0">
        Axiom Sales CRM 
      </div>

      {/* Main Grid: Spans full width */}
      <div className="grid lg:grid-cols-12 gap-0 flex-1 overflow-y-auto lg:overflow-hidden">
        
        {/* LEFT SECTION: Branding & Info (4 Columns) */}
        <motion.div
          initial="initial" animate="animate" variants={staggerContainer}
          className="lg:col-span-4 p-10 flex flex-col justify-between border-r border-gray-100 "
        >
          <div className="max-w-md mx-auto lg:mx-0">
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-5xl font-black leading-[1.1] tracking-tight text-slate-900">
              <span className="text-orange-500">Smarter</span> Sales.
              <br />
              Stronger Ties.
              <br />
              <span className="text-slate-400">Better Results.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-gray-500 mt-8 text-xl leading-relaxed">
              The next-gen CRM designed to help high-performing teams close deals faster.
            </motion.p>

            <div className="mt-12 space-y-8">
              {[
                { icon: <FiBarChart2 />, title: "Pipeline Tracking", desc: "Visual deal stages." },
                { icon: <FiUsers />, title: "Customer 360", desc: "Unified contact history." },
                { icon: <FiZap />, title: "AI Automation", desc: "Reduce manual data entry." },
              ].map((item, index) => (
                <motion.div variants={fadeInUp} key={index} className="flex gap-5 group cursor-default">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-2xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Realistic Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 relative hidden lg:block"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-100 to-transparent blur-2xl opacity-50 -z-10"></div>
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 p-5 w-full max-w-[420px]">
              <div className="flex gap-4">
                <div className="w-12 bg-slate-900 rounded-xl py-6 flex flex-col items-center gap-5">
                  <div className="w-6 h-6 rounded bg-orange-500 mb-2 shadow-lg shadow-orange-500/50"></div>
                  <div className="w-5 h-1 bg-white/20 rounded"></div>
                  <div className="w-5 h-1 bg-white/20 rounded"></div>
                  <div className="w-5 h-1 bg-white/20 rounded"></div>
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Live Analytics</span>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Revenue</p>
                      <h3 className="text-xl font-black text-slate-800">$124.5k</h3>
                      <div className="flex items-center text-green-500 text-[10px] font-bold">
                        <FiTrendingUp className="mr-1" /> +14.2%
                      </div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Closed</p>
                      <h3 className="text-xl font-black text-slate-800">84</h3>
                      <div className="flex items-center text-green-500 text-[10px] font-bold">
                        <FiTrendingUp className="mr-1" /> +5.7%
                      </div>
                    </div>
                  </div>

                  <div className="h-24 w-full bg-slate-900 rounded-xl p-4 overflow-hidden relative">
                    <svg viewBox="0 0 100 40" className="w-full h-full">
                      <motion.path
                        d="M0 35 Q 20 10, 40 25 T 80 5 T 100 20"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      />
                      <path d="M0 35 Q 20 10, 40 25 T 80 5 T 100 20 L 100 40 L 0 40 Z" fill="url(#grad)" opacity="0.2" />
                      <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute top-2 right-2 flex gap-2">
                      <div className="bg-orange-500/20 px-2 py-0.5 rounded text-[8px] text-orange-400 border border-orange-500/30 font-bold">AI Optimizing...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CENTER SECTION: LOGIN FORM (5 Columns) */}
       <div className="lg:col-span-5 bg-white flex flex-col items-center justify-start px-12 py-8 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-md bg-white border border-gray-200 shadow-2xl rounded-[2rem] p-10"
            >
              <div className="flex flex-col items-center mb-10">
                <motion.div
                  whileHover={{ rotate: 90 }}
                  className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-xl"
                >
                  <div className="w-6 h-6 border-4 border-orange-500 rounded-full"></div>
                </motion.div>
                <h2 className="text-4xl font-black text-slate-900">Welcome back</h2>
                <p className="text-gray-400 mt-2 text-center font-medium">Enter your credentials to access your dashboard</p>
              </div>

              <div className="space-y-5">
                <div className="group">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <div className="mt-2 relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                    <input
                      type="email"
                      placeholder="admin@axiom.com"
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white outline-none rounded-2xl py-4 pl-12 pr-4 transition-all duration-200 shadow-sm font-medium"
                    />
                  </div>
                </div>

                <div className="group">
                  <div className="flex justify-between ml-1">
                    <label className="text-sm font-bold text-slate-700">Password</label>
                    <button className="text-xs font-semibold text-orange-500 hover:underline">Forgot?</button>
                  </div>
                  <div className="mt-2 relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                    <input
                      type={showPassword ? "text" : "password"} // Logic for visibility
                      placeholder="••••••••"
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white outline-none rounded-2xl py-4 pl-12 pr-12 transition-all duration-200 shadow-sm font-medium"
                    />
                    {/* Toggle button */}
                    <div 
                      onClick={() => setShowPassword(!showPassword)} 
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-slate-600"
                    >
                      {showPassword ? <FiEyeOff size={18}/> : <FiEye size={18}/>}
                    </div>
                  </div>
                </div>

                {/* SIGN IN BUTTON FIXED: added onClick={onLogin} */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onLogin}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg flex items-center justify-center gap-3 mt-4 transition-all"
                >
                  Sign In to Axiom
                  <FiArrowRight />
                </motion.button>

                <div className="flex items-center gap-4 py-4">
                  <div className="h-[1px] bg-gray-100 flex-1"></div>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">or</span>
                  <div className="h-[1px] bg-gray-100 flex-1"></div>
                </div>

                <button className="w-full bg-white border-2 border-slate-100 hover:border-orange-100 hover:bg-orange-50 text-slate-700 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-3">
                  <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="google" />
                  Sign in with Google
                </button>
              </div>
            </motion.div>
          </div>

        {/* RIGHT SECTION: 3 Columns with Dotted Line Animation */}
        <div className="lg:col-span-3 bg-white relative flex flex-col items-center justify-start border-l border-gray-100 pt-10 overflow-hidden ">

          {/* The Curved Dotted Line SVG Animation */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none z-0">
            <svg width="100%" height="100%" viewBox="0 0 200 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
              <motion.path
                d="M 60 70 C -20 150, 220 200, 140 260 C 60 320, -20 400, 60 460"
                stroke="#e2e8f0"
                strokeWidth="3"
                strokeDasharray="8 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-between h-[500px] w-full max-w-[280px]">
            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
              className="self-start bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center gap-2 w-32 group hover:-translate-y-3 hover:shadow-2xl hover:border-orange-100 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xl">
                <FiShield />
              </div>
              <p className="text-[11px] font-bold text-slate-700 text-center leading-tight uppercase tracking-wider">Secure <br /> & Reliable</p>
            </motion.div>

            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}
              className="self-end bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center gap-2 w-32 group hover:-translate-y-3 hover:shadow-2xl hover:border-orange-100 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xl">
                <FiZap />
              </div>
              <p className="text-[11px] font-bold text-slate-700 text-center leading-tight uppercase tracking-wider">Fast <br /> & Smart</p>
            </motion.div>

            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}
              className="self-start bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center gap-2 w-32 group hover:-translate-y-3 hover:shadow-2xl hover:border-orange-100 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xl">
                <FiUsers />
              </div>
              <p className="text-[11px] font-bold text-slate-700 text-center leading-tight uppercase tracking-wider">Built for <br /> Teams</p>
            </motion.div>
          </div>

          <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}
            className="absolute -bottom-10 right-0 w-[450px] translate-x-20 rotate-[-8deg] pointer-events-none">
            <img src={plantImg} alt="Decoration" className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] contrast-110" />
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;