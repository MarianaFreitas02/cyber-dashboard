import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const Network = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
    <h2 className="text-2xl font-bold text-white mb-6">Dispositivos Conectados</h2>
    <div className="bg-cyber-dark border border-cyber-gray rounded-xl overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead className="bg-white/5 text-cyber-blue font-mono text-xs uppercase">
          <tr><th className="p-4">Hostname</th><th className="p-4">IP Address</th><th className="p-4">MAC</th><th className="p-4">Status</th></tr>
        </thead>
        <tbody className="text-slate-300 text-sm font-mono">
          {[1,2,3,4,5].map((item) => (
            <tr key={item} className="border-b border-cyber-gray hover:bg-white/5 transition">
              <td className="p-4 flex items-center gap-2"><Cpu size={16}/> Workstation-0{item}</td>
              <td className="p-4">192.168.1.10{item}</td>
              <td className="p-4 text-slate-500">AA:BB:CC:DD:0{item}</td>
              <td className="p-4"><span className="px-2 py-1 rounded bg-cyber-green/20 text-cyber-green text-xs">Conectado</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

export default Network;