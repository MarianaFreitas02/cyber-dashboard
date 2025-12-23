import React from 'react';
import { motion } from 'framer-motion';

const Settings = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto space-y-6">
    <h2 className="text-2xl font-bold text-white mb-6">Configurações do Sistema</h2>
    {[
      { label: "Notificações de Alerta", desc: "Receber alertas críticos via email", active: true },
      { label: "Modo Furtivo", desc: "Ocultar IP do servidor principal", active: false },
      { label: "Criptografia Automática", desc: "Encriptar logs a cada 24h", active: true },
      { label: "Firewall Ativo", desc: "Bloquear conexões de entrada desconhecidas", active: true },
    ].map((item, i) => (
      <div key={i} className="bg-cyber-dark border border-cyber-gray p-6 rounded-xl flex items-center justify-between">
        <div>
          <h4 className="text-white font-bold">{item.label}</h4>
          <p className="text-sm text-slate-500">{item.desc}</p>
        </div>
        <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${item.active ? 'bg-cyber-green' : 'bg-slate-700'}`}>
          <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${item.active ? 'translate-x-6' : 'translate-x-0'}`}></div>
        </div>
      </div>
    ))}
  </motion.div>
);

export default Settings;