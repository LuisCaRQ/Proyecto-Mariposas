import React from 'react';
import Style from './../css/Style-Agregar_dato_curioso.css';
import axios from 'axios'
import {Button, Form } from "react-bootstrap";
class Agregar_dato_curioso extends React.Component{

    render(){
        
        return(
            <div>
                <div id="fondoDato">
                        <h1>Agregar Datos curiosos</h1>
                </div>

                <div Class="centerDatoCurioso">
                    <h4 class="Cuerpo"> Escriba el dato curioso:</h4>
                    <br/> 
                        <Form.Control as="textarea" rows="3" type="name" placeholder="¡Agrega un dato curioso!" />
                    <br/> 
                </div>
                <div class="btn">
                    <Button variant="dark" type="submit" onClick = {this.onSubmit} >
                            Agregar
                    </Button>
                </div>






                <div>
                    <footer id="footerAbsolute">   
                        <div>Prototipo Metamorfosis</div>
                        <div>Versión 1.2 por Metamorfosis en Instituto Tecnológico de Costa Rica</div>
                        <div>Semestre II de 2020. Administración de Proyectos</div>            
                    </footer>
                </div>
            </div>
        );
    }
}

export default Agregar_dato_curioso;
