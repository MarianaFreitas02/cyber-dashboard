import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Activity } from 'lucide-react';

// URL do mapa mundi (TopoJSON)
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Lista de cidades fictícias para simular ataques
const CITIES = [
  { name: "São Paulo", coordinates: [-46.6333, -23.5505] },
  { name: "New York", coordinates: [-74.0060, 40.7128] },
  { name: "London", coordinates: [-0.1276, 51.5074] },
  { name: "Tokyo", coordinates: [139.6917, 35.6895] },
  { name: "Moscow", coordinates: [37.6173, 55.7558] },
  { name: "Beijing", coordinates: [116.4074, 39.9042] },
  { name: "Sydney", coordinates: [151.2093, -33.8688] },
  { name: "Cape Town", coordinates: [18.4241, -33.9249] },
  { name: "Berlin", coordinates: [13.4050, 52.5200] },
];

const ThreatMap = () => {
  const [threats, setThreats] = useState([]);
  const [tooltip, setTooltip] = useState("");

  // Efeito para criar "ataques" aleatórios
  useEffect(() => {
    const interval = setInterval(() => {
      const randomCity = CITIES[Math.floor(Math.random() * CITIES.length)];
      const newThreat = {
        id: Date.now(),
        name: randomCity.name,
        coordinates: randomCity.coordinates,
      };

      // Adiciona nova ameaça e remove as antigas (mantém máx 5)
      setThreats(prev => [...prev.slice(-4), newThreat]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col space-y-4">
      
      {/* Cabeçalho do Mapa */}
      <div className="flex justify-between items-end px-2">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Activity className="text-cyber-red animate-pulse" /> Mapa de Ameaças Global
          </h2>
          <p className="text-slate-500 text-sm">Monitoramento geoespacial em tempo real</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-cyber-green font-mono">SISTEMA: ONLINE</p>
          <p className="text-xs text-slate-500 font-mono">NODES: 24.932</p>
        </div>
      </div>

      {/* O MAPA INTERATIVO */}
      <div className="flex-1 bg-cyber-dark border border-cyber-gray rounded-xl overflow-hidden relative shadow-2xl">
        
        {/* Legenda Flutuante */}
        {tooltip && (
          <div className="absolute top-4 left-4 bg-black/80 border border-cyber-green text-cyber-green px-3 py-1 rounded text-xs font-mono z-50 pointer-events-none">
            {tooltip}
          </div>
        )}

        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 140 }}
          style={{ width: "100%", height: "100%", backgroundColor: "#050505" }}
        >
          <ZoomableGroup center={[0, 0]} zoom={1}>
            {/* Desenha os Países */}
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setTooltip(geo.properties.name)}
                    onMouseLeave={() => setTooltip("")}
                    style={{
                      default: {
                        fill: "#0f172a", // Cor do país (escuro)
                        stroke: "#1e293b", // Cor da borda (sutil)
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: "#1e293b", // Cor ao passar o mouse
                        stroke: "#00ff9d", // Borda verde neon ao passar o mouse
                        strokeWidth: 1,
                        outline: "none",
                        cursor: "crosshair"
                      },
                      pressed: {
                        fill: "#00ccff",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Renderiza os Ataques (Pontos Pulsantes) */}
            {threats.map((threat) => (
              <Marker key={threat.id} coordinates={threat.coordinates}>
                <g>
                  {/* Círculo pulsante (efeito de onda) */}
                  <circle r={8} fill="rgba(255, 0, 85, 0.5)" className="animate-ping" />
                  {/* Círculo central fixo */}
                  <circle r={3} fill="#ff0055" />
                </g>
                <text
                  textAnchor="middle"
                  y={-10}
                  style={{ fontFamily: "monospace", fill: "white", fontSize: "8px", textShadow: "0px 0px 5px #ff0055" }}
                >
                  {threat.name}
                </text>
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
        
        {/* Grid decorativo sobre o mapa */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-4 left-4 flex gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyber-red"></span> ATAQUE ATIVO</div>
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyber-green"></span> SEGURO</div>
        </div>
      </div>
    </motion.div>
  );
};

export default ThreatMap;