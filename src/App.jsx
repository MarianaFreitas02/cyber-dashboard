import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Search, Bell, Shield } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Network from './pages/Network';
import ThreatMap from './pages/ThreatMap';
import Logs from './pages/Logs';
import Settings from './pages/Settings';

// Componente para pegar o título da página baseado na rota
const Header = () => {
  const location = useLocation();
  const getTitle = () => {
    switch(location.pathname) {
      case '/': return 'Visão Geral';
      case '/network': return 'Rede Local';
      case '/threats': return 'Mapa de Ameaças';
      case '/logs': return 'Logs do Sistema';
      case '/settings': return 'Configurações';
      default: return 'CyberGuard';
    }
  };

  return (
    <header className="flex justify-between items-center mb-10">
      <div className="md:hidden text-cyber-green"><Shield size={28}/></div>
      <div className="hidden md:block">
        <h1 className="text-2xl font-bold text-white tracking-wide">{getTitle()}</h1>
        <p className="text-slate-500 text-sm flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse"></span>
          Sistema Operacional - Proteção Ativa
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center bg-cyber-dark border border-cyber-gray rounded-full px-4 py-2 text-sm focus-within:border-cyber-blue transition-colors">
          <Search size={16} className="mr-2 text-slate-500"/>
          <input type="text" placeholder="Buscar IP ou Evento..." className="bg-transparent outline-none w-48 text-white placeholder-slate-600 font-mono text-xs"/>
        </div>
        <button className="relative p-2 hover:text-cyber-green transition bg-cyber-dark rounded-full border border-cyber-gray">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-cyber-red rounded-full animate-ping"></span>
        </button>
      </div>
    </header>
  );
};

function App() {
  return (
    <Router>
      <div className="flex min-h-screen font-sans text-slate-300 bg-[#050505] selection:bg-cyber-green selection:text-black">
        <Sidebar />
        
        <main className="flex-1 md:ml-64 p-6 lg:p-10 relative overflow-hidden min-h-screen">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
          
          <Header />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/network" element={<Network />} />
            <Route path="/threats" element={<ThreatMap />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;