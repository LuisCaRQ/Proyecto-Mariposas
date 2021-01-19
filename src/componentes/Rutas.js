import Principal from './principal';
import Proceso_metamorfosis from './Proceso_metamorfosis';
import Aporte from './Aporte';
import Administrador from './Administrador';
import AgregarEspecie from './AgregarEspecie';
import CatalogoOrugas from './CatalogoOrugas';
import CatalogoMariposas from './CatalogoMariposas';
import Propuestas from './Propuestas';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
          <Route path="/CatalogoMariposas">     <CatalogoMariposas />         </Route>
          <Route path="/AgregarEspecie">        <AgregarEspecie />         </Route>
          <Route path="/Propuestas">            <Propuestas />         </Route>
          <Route path="/">  <Principal /> </Route>
          
        </Switch>
      </Router>

       
    </div>
   
  );
}

export default rutas;
