import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, Activity, Server, Lock, Wifi, Settings, Map, Terminal } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { path: '/', label: 'Visão Geral', icon: Activity },
    { path: '/network', label: 'Rede Local', icon: Wifi },
    { path: '/threats', label: 'Mapa de Ameaças', icon: Map },
    { path: '/logs', label: 'Logs do Sistema', icon: Terminal },
    { path: '/settings', label: 'Configurações', icon: Settings },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-cyber-dark border-r border-cyber-gray p-6 fixed h-full z-10">
      <div className="flex items-center gap-3 mb-12 text-cyber-green animate-pulse">
        <Shield size={32} />
        <span className="text-xl font-bold tracking-tighter text-white">CYBER<span className="text-cyber-green">GUARD</span></span>
      </div>
      
      <nav className="space-y-2 flex-1">
        {menuItems.map((item) => (
          <NavLink 
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all 
              ${isActive 
                ? 'bg-cyber-green/10 text-cyber-green border border-cyber-green/20 shadow-neon-green' 
                : 'hover:bg-white/5 hover:text-white text-slate-400'}
            `}
          >
            <item.icon size={20}/>
            <span className="font-medium font-mono text-sm">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-cyber-gray">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyber-blue to-purple-600 border-2 border-white/20"></div>
          <div>
            <p className="text-sm font-bold text-white">Admin Mariana</p>
            <p className="text-[10px] text-cyber-green flex items-center gap-1"><Lock size={10}/> Conexão Segura</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;