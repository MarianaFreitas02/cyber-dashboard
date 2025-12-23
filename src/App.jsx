import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, Activity, Server, Lock, AlertTriangle, Globe, Menu, Search, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

// --- DADOS MOCKADOS (SIMULADOS) ---
const trafficData = [
  { time: '00:00', normal: 4000, attack: 240 },
  { time: '04:00', normal: 3000, attack: 139 },
  { time: '08:00', normal: 2000, attack: 980 },
  { time: '12:00', normal: 2780, attack: 390 },
  { time: '16:00', normal: 1890, attack: 480 },
  { time: '20:00', normal: 2390, attack: 380 },
  { time: '23:59', normal: 3490, attack: 430 },
];

const servers = [
  { name: 'Alpha-1 (USA)', status: 'online', load: 45 },
  { name: 'Beta-2 (EU)', status: 'online', load: 32 },
  { name: 'Gamma-3 (ASIA)', status: 'warning', load: 89 },
  { name: 'Delta-4 (SA)', status: 'offline', load: 0 },
];

const threats = [
  { ip: '192.168.1.45', location: 'Moscow, RU', type: 'DDoS Attempt', time: '2 min ago' },
  { ip: '10.0.0.98', location: 'Beijing, CN', type: 'SQL Injection', time: '5 min ago' },
  { ip: '172.16.0.12', location: 'New York, US', type: 'Brute Force', time: '12 min ago' },
];

// --- COMPONENTES ---

const StatCard = ({ title, value, icon: Icon, color, glow }) => (
  <div className={`bg-cyber-dark p-6 rounded-xl border border-cyber-gray hover:border-${color} transition-all duration-300 group`}>
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">{title}</p>
        <h3 className="text-2xl font-bold font-mono text-white group-hover:text-shadow-neon">{value}</h3>
      </div>
      <div className={`p-3 rounded-lg bg-${color}/10 text-${color} ${glow ? `shadow-neon-${color.split('-')[1]}` : ''}`}>
        <Icon size={24} />
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="flex min-h-screen font-sans text-slate-300 selection:bg-cyber-green selection:text-black">
      
      {/* SIDEBAR */}
      <aside className="hidden md:flex flex-col w-64 bg-cyber-dark border-r border-cyber-gray p-6 fixed h-full z-10">
        <div className="flex items-center gap-3 mb-12 text-cyber-green">
          <Shield size={32} />
          <span className="text-xl font-bold tracking-tighter text-white">CYBER<span className="text-cyber-green">GUARD</span></span>
        </div>
        
        <nav className="space-y-4 flex-1">
          {['Dashboard', 'Network', 'Threat Map', 'Logs', 'Settings'].map((item, i) => (
            <a key={item} href="#" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${i === 0 ? 'bg-cyber-green/10 text-cyber-green border border-cyber-green/20' : 'hover:bg-white/5 hover:text-white'}`}>
              {i === 0 ? <Activity size={20}/> : <Server size={20}/>}
              <span className="font-medium">{item}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-cyber-gray">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyber-blue to-purple-600"></div>
            <div>
              <p className="text-sm font-bold text-white">Admin User</p>
              <p className="text-xs text-cyber-green">System Protected</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 md:ml-64 p-6 lg:p-10 relative overflow-hidden">
        {/* Background Grid Effect */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

        {/* HEADER MOBILE + TOPBAR */}
        <header className="flex justify-between items-center mb-10">
          <div className="md:hidden text-cyber-green"><Shield size={28}/></div>
          
          <div className="hidden md:block">
            <h1 className="text-2xl font-bold text-white">Security Overview</h1>
            <p className="text-slate-500 text-sm">Real-time monitoring system active</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-cyber-dark border border-cyber-gray rounded-full px-4 py-2 text-sm">
              <Search size={16} className="mr-2 text-slate-500"/>
              <input type="text" placeholder="Search logs..." className="bg-transparent outline-none w-48 text-white placeholder-slate-600"/>
            </div>
            <button className="relative p-2 hover:text-cyber-green transition">
              <Bell size={24} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-cyber-red rounded-full animate-pulse"></span>
            </button>
          </div>
        </header>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Threats Blocked" value="1,284" icon={Shield} color="cyber-green" glow />
          <StatCard title="Active Servers" value="24/25" icon={Server} color="cyber-blue" />
          <StatCard title="Network Load" value="45 TB" icon={Activity} color="cyber-blue" />
          <StatCard title="Critical Alerts" value="03" icon={AlertTriangle} color="cyber-red" glow />
        </div>

        {/* CHARTS & LISTS SECTION */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* CHART AREA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-cyber-dark border border-cyber-gray rounded-xl p-6 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Activity size={18} className="text-cyber-blue"/> Network Traffic
              </h3>
              <select className="bg-black border border-cyber-gray rounded px-3 py-1 text-xs text-slate-400">
                <option>Last 24 Hours</option>
                <option>Last 7 Days</option>
              </select>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trafficData}>
                  <defs>
                    <linearGradient id="colorNormal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00ccff" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00ccff" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorAttack" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ff0055" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#ff0055" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="time" stroke="#666" tick={{fontSize: 12}} />
                  <YAxis stroke="#666" tick={{fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{backgroundColor: '#0a0a0a', border: '1px solid #333'}}
                    itemStyle={{color: '#fff'}}
                  />
                  <Area type="monotone" dataKey="normal" stroke="#00ccff" strokeWidth={2} fillOpacity={1} fill="url(#colorNormal)" />
                  <Area type="monotone" dataKey="attack" stroke="#ff0055" strokeWidth={2} fillOpacity={1} fill="url(#colorAttack)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* LIVE THREATS */}
          <div className="bg-cyber-dark border border-cyber-gray rounded-xl p-6">
             <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Globe size={18} className="text-cyber-red"/> Recent Threats
             </h3>
             <div className="space-y-4">
               {threats.map((threat, idx) => (
                 <div key={idx} className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5 hover:border-cyber-red/30 transition">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyber-red animate-pulse"></div>
                      <div>
                        <p className="text-sm font-mono text-white">{threat.ip}</p>
                        <p className="text-xs text-slate-500">{threat.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                       <p className="text-xs font-bold text-cyber-red">{threat.type}</p>
                       <p className="text-[10px] text-slate-600">{threat.time}</p>
                    </div>
                 </div>
               ))}
             </div>
             
             <button className="w-full mt-6 py-2 border border-cyber-green/30 text-cyber-green text-sm rounded hover:bg-cyber-green/10 transition font-mono uppercase tracking-widest">
               View All Logs
             </button>
          </div>
        </div>
        
        {/* SERVER STATUS ROW */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
           {servers.map((server, i) => (
             <div key={i} className="bg-cyber-dark border border-cyber-gray p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${server.status === 'online' ? 'bg-cyber-green' : server.status === 'warning' ? 'bg-yellow-500' : 'bg-cyber-red'}`}></div>
                  <span className="text-sm font-mono text-slate-300">{server.name}</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">{server.load}% Load</span>
             </div>
           ))}
        </div>

      </main>
    </div>
  );
}

export default App;