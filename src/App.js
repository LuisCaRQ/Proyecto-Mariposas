import './includes/bootstrap'
import './App.css';
import Rutas from'../src/componentes/Rutas'
import Navbar from './componentes/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Rutas />
    </div>
  );
}

export default App;
