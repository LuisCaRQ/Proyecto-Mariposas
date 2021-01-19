import React from 'react';
import Style from './../css/Style-Agregar_dato_curioso.css';
import axios from 'axios'
import {Button, Form } from "react-bootstrap";
class EliminarDatoCurioso extends React.Component{
    render(){
        
        return(
            <div>
                <div id="fondoDato">
                        <h1>Eliminar Datos curiosos</h1>
                </div>

                <div Class="centerDatoCurioso">
                    <h4 class="Cuerpo"> Buscar dato curioso:</h4>
                    <form class="barra">
                                <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                                <br />
                                <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Buscar</button>
                                <br />
                            </form>
                    <br/> 
                        <Form.Control as="textarea" rows="3" type="name" name="datoCurioso" disabled="true"/>
                    <br/> 
                </div>
              
                <div class="btn">
                    <Button variant="danger" type="submit"  >
                            Eliminar
                    </Button>
                </div>
                <div>
                    <footer id="footerAbsolute">   
                        <div>Proyecto Metamorfosis</div>
                        <div>Versión 1.2 por Metamorfosis en Instituto Tecnológico de Costa Rica</div>
                        <div>Semestre II de 2020. Administración de Proyectos</div>            
                    </footer>
                </div>
            </div>
        );
    }
}

export default EliminarDatoCurioso;
