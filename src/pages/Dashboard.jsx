import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, Activity, Server, AlertTriangle, Terminal, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';
import StatCard from '../components/StatCard';
import TerminalLog from '../components/TerminalLog';

// Dados locais
const trafficData = [
  { time: '00:00', normal: 4000, ataquer: 240 }, { time: '04:00', normal: 3000, ataquer: 139 },
  { time: '08:00', normal: 2000, ataquer: 980 }, { time: '12:00', normal: 2780, ataquer: 390 },
  { time: '16:00', normal: 1890, ataquer: 480 }, { time: '20:00', normal: 2390, ataquer: 380 },
  { time: '23:59', normal: 3490, ataquer: 430 },
];

const serversMock = [
  { name: 'Servidor Alpha (BR)', status: 'online', load: 45 }, { name: 'Servidor Beta (EUA)', status: 'online', load: 32 },
  { name: 'Database Main', status: 'warning', load: 89 }, { name: 'Backup Seguro', status: 'offline', load: 0 },
];

const Dashboard = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard title="Ameaças Bloqueadas" value="1,284" icon={Shield} color="cyber-green" glow />
      <StatCard title="Status da Rede" value="98.5%" icon={Wifi} color="cyber-blue" />
      <StatCard title="Tráfego (Dados)" value="45 TB" icon={Activity} color="cyber-blue" />
      <StatCard title="Alertas Críticos" value="03" icon={AlertTriangle} color="cyber-red" glow />
    </div>

    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-cyber-dark border border-cyber-gray rounded-xl p-6 shadow-2xl relative">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2"><Activity size={18} className="text-cyber-blue"/> Tráfego de Rede</h3>
          <select className="bg-black border border-cyber-gray rounded px-3 py-1 text-xs text-slate-400 font-mono"><option>24 Horas</option></select>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trafficData}>
              <defs>
                <linearGradient id="colorNormal" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#00ccff" stopOpacity={0.3}/><stop offset="95%" stopColor="#00ccff" stopOpacity={0}/></linearGradient>
                <linearGradient id="colorAttack" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#ff0055" stopOpacity={0.3}/><stop offset="95%" stopColor="#ff0055" stopOpacity={0}/></linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
              <XAxis dataKey="time" stroke="#666" tick={{fontSize: 12}} />
              <YAxis stroke="#666" tick={{fontSize: 12}} />
              <Tooltip contentStyle={{backgroundColor: '#0a0a0a', border: '1px solid #333'}} itemStyle={{color: '#fff'}} />
              <Area type="monotone" dataKey="normal" stroke="#00ccff" fill="url(#colorNormal)" />
              <Area type="monotone" dataKey="ataquer" stroke="#ff0055" fill="url(#colorAttack)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-white font-bold flex items-center gap-2"><Terminal size={18} className="text-cyber-green"/> Logs Recentes</h3>
        <TerminalLog />
      </div>
    </div>
    
    <h3 className="text-white font-bold mt-8 mb-4 flex items-center gap-2"><Server size={18} className="text-white"/> Status dos Servidores</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
       {serversMock.map((server, i) => (
         <div key={i} className="bg-cyber-dark border border-cyber-gray p-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${server.status === 'online' ? 'bg-cyber-green shadow-neon-green' : server.status === 'warning' ? 'bg-yellow-500' : 'bg-cyber-red shadow-neon-red'}`}></div>
              <span className="text-sm font-mono text-slate-300">{server.name}</span>
            </div>
            <span className="text-xs text-slate-500 font-mono">{server.load}% CPU</span>
         </div>
       ))}
    </div>
  </motion.div>
);

export default Dashboard;