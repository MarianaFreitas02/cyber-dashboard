import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, ArrowRight, AlertCircle } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    // Simula tempo de processamento
    setTimeout(() => {
      if (password === 'admin') { // SENHA DO SISTEMA
        onLogin();
      } else {
        setError(true);
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="h-screen w-full bg-[#050505] flex items-center justify-center relative overflow-hidden font-sans">
      {/* Background Matrix/Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      
      {/* Container Central */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-cyber-dark border border-cyber-gray p-8 rounded-2xl shadow-2xl relative z-10"
      >
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-cyber-green/10 rounded-full flex items-center justify-center border border-cyber-green/30 shadow-neon-green animate-pulse">
            <Shield size={32} className="text-cyber-green" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white text-center mb-2 tracking-widest">CYBER<span className="text-cyber-green">GUARD</span></h2>
        <p className="text-slate-500 text-center mb-8 text-sm">ACESSO RESTRITO - NÍVEL 5</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative group">
            <Lock className="absolute left-3 top-3 text-slate-500 group-focus-within:text-cyber-blue transition" size={20} />
            <input 
              type="password" 
              placeholder="Digite a credencial de acesso..."
              className="w-full bg-black/50 border border-cyber-gray text-white py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:border-cyber-blue transition font-mono placeholder:text-slate-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-cyber-red text-sm bg-cyber-red/10 p-2 rounded border border-cyber-red/20"
            >
              <AlertCircle size={16} />
              <span>Acesso Negado: Credenciais Inválidas.</span>
            </motion.div>
          )}

          <button 
            disabled={loading}
            className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${loading ? 'bg-cyber-gray cursor-wait text-slate-500' : 'bg-cyber-green text-black hover:bg-emerald-400 hover:shadow-neon-green'}`}
          >
            {loading ? 'AUTENTICANDO...' : <>ACESSAR SISTEMA <ArrowRight size={20}/></>}
          </button>
        </form>
        
        <div className="mt-6 text-center">
            <p className="text-[10px] text-slate-600 font-mono">ID DO TERMINAL: {Math.floor(Math.random() * 999999)}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;