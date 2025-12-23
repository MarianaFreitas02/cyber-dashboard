import React from 'react';
import { motion } from 'framer-motion';
import TerminalLog from '../components/TerminalLog';

const Logs = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-[80vh]">
    <h2 className="text-2xl font-bold text-white mb-6">Logs do Sistema</h2>
    <TerminalLog fullScreen={true} />
  </motion.div>
);

export default Logs;