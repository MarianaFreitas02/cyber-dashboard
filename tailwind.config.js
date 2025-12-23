/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#050505',   // Fundo quase preto
          dark: '#0a0a0a',    // Fundo dos cards
          gray: '#1a1a1a',    // Bordas sutis
          green: '#00ff9d',   // Neon Verde (Sucesso/Online)
          red: '#ff0055',     // Neon Rosa (Ataque/Erro)
          blue: '#00ccff',    // Neon Azul (Dados)
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'], // Fonte estilo terminal
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-green': '0 0 10px rgba(0, 255, 157, 0.5)',
        'neon-red': '0 0 10px rgba(255, 0, 85, 0.5)',
        'neon-blue': '0 0 10px rgba(0, 204, 255, 0.5)',
      }
    },
  },
  plugins: [],
}