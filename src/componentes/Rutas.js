import Principal from './principal';
import Proceso_metamorfosis from './Proceso_metamorfosis';

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
          <Route path="/Pagina_principal">  <Principal /> </Route>
          <Route path="/Proceso_metamorfosis">  <Proceso_metamorfosis /> </Route>
          <Route path="/Avistamientos"> <Avistamientos /> </Route>
          <Route path="/">  <Principal /> </Route>
        </Switch>
      </Router>

       
    </div>
   
  );
}

export default rutas;
