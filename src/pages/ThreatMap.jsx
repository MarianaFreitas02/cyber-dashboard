import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const ThreatMap = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center p-10 bg-cyber-dark border border-cyber-gray rounded-xl">
    <Globe size={64} className="text-cyber-blue mb-4 animate-pulse" />
    <h2 className="text-2xl font-bold text-white">Mapa de Ameaças Global</h2>
    <p className="text-slate-500 mb-8 max-w-md">Sistema de rastreamento geoespacial ativo. Monitorando 24.932 nós ao redor do globo.</p>
    <div className="w-full h-64 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-contain bg-no-repeat bg-center opacity-20 filter invert"></div>
  </motion.div>
);

export default ThreatMap;