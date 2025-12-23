import React from 'react';

const StatCard = ({ title, value, icon: Icon, color, glow }) => (
  <div className={`bg-cyber-dark p-6 rounded-xl border border-cyber-gray hover:border-${color} transition-all duration-300 group relative overflow-hidden`}>
    <div className={`absolute -right-6 -top-6 w-24 h-24 bg-${color}/10 rounded-full blur-2xl group-hover:bg-${color}/20 transition-all`}></div>
    <div className="flex justify-between items-start mb-4 relative z-10">
      <div>
        <p className="text-slate-400 text-xs uppercase tracking-widest mb-1 font-bold">{title}</p>
        <h3 className="text-2xl font-bold font-mono text-white drop-shadow-lg">{value}</h3>
      </div>
      <div className={`p-3 rounded-lg bg-${color}/10 text-${color} ${glow ? `shadow-[0_0_15px_rgba(0,0,0,0.5)]` : ''}`}>
        <Icon size={24} />
      </div>
    </div>
  </div>
);

export default StatCard;