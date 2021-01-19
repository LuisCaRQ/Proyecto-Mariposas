import React from 'react';
import Style from './../css/Style-navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            //size = "15"
            <font face="Arial">
            <nav className="navbar navbar-expand-sm bg-white navbar-light" >
                <a class="navbar-brand" href="/Pagina_principal"> 
                <img src="./images/icono.png" alt="Logo" width="55" height="40" alt=""/>
                </a> 
                
              <strong><a className="navbar-brand" href="/Pagina_principal"> Metamorfosis</a></strong>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown" >
                    <ul className="navbar-nav ">

                    <li className="nav-item" id="elemento">
                        <a className="nav-link" href="/Pagina_principal"> Principal</a>
                    </li>
                    
                    <li className="nav-item" id="elemento">
                        <a className="nav-link" href="/Proceso_metamorfosis"> Proceso de metamorfosis</a>
                    </li>

                    <li className="nav-item" id="elemento">
                        <a className="nav-link" href="/Avistamientos"> Reporte de avistamientos</a>
                    </li>

                    <li className="nav-item dropdown" id="elemento">
                        <a className="nav-link dropdown-toggle" href="#" id="navadd" data-toggle="dropdown"> Catálogo </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="/New_movement">Orugas</a>
                            <a className="dropdown-item" href="/New_Zone">Mariposas</a>
                        </div>
                    </li>

                    <li className="nav-item" id="elemento">
                        <a className="nav-link" href="#"> Dashboard</a>
                    </li>

                    <li className="nav-item" id="elemento">
                        <a className="nav-link" href="#"> Aporte</a>
                    </li>

                    <li className="nav-item" id="elemento">
                        <a className="nav-link" href="#"> Registrar</a>
                    </li>

                    <li className="nav-item" id="elemento">
                        <a className="nav-link" href="#"> Iniciar sesión</a>
                    </li>

                    <li className="nav-item" id="elemento">
                        <a className="nav-link" href="#"> ¿Quiénes somos?</a>
                    </li>

                    <li className="nav-item" id="elemento">
                        <a className="nav-link" href="#"> Administrador</a>
                    </li>

                    </ul>
                </div>
          </nav>
          </font>
        );
    }
}

export default Navbar;