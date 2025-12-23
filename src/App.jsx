// ... (mantenha todos os imports iguais)
import Login from './pages/Login'; // <--- Importe a página nova

function App() {
  // Estado que controla se o usuário logou ou não
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Se NÃO estiver logado, mostra só a tela de Login
  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  // Se estiver logado, continua o código normal do Router...
  return (
    <Router>
       {/* ... todo o resto do seu código que já estava aqui ... */}
    </Router>
  );
}
export default App;