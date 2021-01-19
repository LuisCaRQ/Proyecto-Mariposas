import Principal from './principal';
import Proceso_metamorfosis from './Proceso_metamorfosis';
import Aporte from './Aporte';
import Administrador from './Administrador';
import AgregarEspecie from './AgregarEspecie';
import CatalogoOrugas from './CatalogoOrugas';
import CatalogoMariposas from './CatalogoMariposas';
import Propuestas from './Propuestas';
import Login from './Login';
import Registrar from './Registrar';
import Dato_curioso from './Agregar_dato_curioso';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Avistamientos from './Avistamientos';

function rutas() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Pagina_principal">      <Principal />             </Route>
          <Route path="/Proceso_metamorfosis">  <Proceso_metamorfosis />  </Route>
          <Route path="/Aporte">                <Aporte />                </Route>
          <Route path="/Administrador">         <Administrador />         </Route>
          <Route path="/CatalogoOrugas">        <CatalogoOrugas />         </Route>
          <Route path="/CatalogoMariposas">     <CatalogoMariposas />      </Route>
          <Route path="/AgregarEspecie">        <AgregarEspecie />         </Route>
          <Route path="/Propuestas">            <Propuestas />              </Route>
<<<<<<< Updated upstream
          <Route path="/Login">                 <Login />                   </Route>
          <Route path="/Register">              <Registrar />             </Route>
          <Route path="/Avistamientos">         <Avistamientos />         </Route>
=======
          <Route path="/Login">                 <Login />                 </Route>
          <Route path="/Register">              <Registrar />           </Route>
          <Route path="/Agregar_dato_curioso">  <Dato_curioso  />           </Route>

>>>>>>> Stashed changes
          <Route path="/">  <Principal /> </Route>
          
        </Switch>
      </Router>

       
    </div>
   
  );
}

export default rutas;
