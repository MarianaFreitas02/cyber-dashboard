import React, { useState, useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const TerminalLog = ({ fullScreen = false }) => {
  const [logs, setLogs] = useState(["> Inicializando protocolo de segurança...", "> Verificando integridade..."]);
  const logsEndRef = useRef(null);
  
  const messages = [
    "> Tentativa de conexão IP 192.168.0.4 bloqueada", "> Varredura de portas detectada na porta 8080",
    "> Criptografia de dados: OK", "> Atualizando firewall... Concluído",
    "> Usuário Admin autenticado", "> Pacote suspeito interceptado",
    "> Ping: 14ms - Conexão estável", "> Verificando hash MD5... Válido"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      const timestamp = new Date().toLocaleTimeString();
      setLogs(prev => [...prev.slice(fullScreen ? -20 : -8), `[${timestamp}] ${randomMsg}`]);
    }, 2000);
    return () => clearInterval(interval);
  }, [fullScreen]);

  useEffect(() => { logsEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [logs]);

  return (
    <div className={`bg-black/80 border border-cyber-gray p-4 rounded-xl font-mono text-xs flex flex-col shadow-neon-green ${fullScreen ? 'h-full' : 'h-[300px]'}`}>
      <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2 text-cyber-green">
        <Terminal size={14} /> <span>CONSOLE DE SISTEMA (/root)</span>
      </div>
      <div className="flex-1 overflow-y-auto space-y-1 text-cyber-green/80">
        {logs.map((log, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="break-words">
            {log}
          </motion.div>
        ))}
        <div ref={logsEndRef} />
      </div>
    </div>
  );
};

export default TerminalLog;