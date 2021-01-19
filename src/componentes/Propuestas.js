import React from 'react';
import Style from './../css/Style-aporte.css';
import { Button } from "react-bootstrap";

class propuestas extends React.Component {
    render() {

        return (
            <div>
                <div class="center_VerAporte">

                        <div class="aporteLeft_VerAporte">
                            <div className="cardVerAporte" >
                                <img className="aporte" src="https://images.unsplash.com/photo-1566190777932-efa8ae5d2260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1355&q=80" />
                            </div>
                        </div>

                        <div class="aporteRight_VerAporte">
                            <div class="textoAporte">
                            Usuario: 
                            <br/>
                            Nombre de especie:
                            <br/>
                            Nombre cientifico: 
                            <br/>
                            Nombre familia: 
                            <br/>
                            Genero:
                            <br/>
                            Descripción: 
                            <br/>
                            Etapa de especie: 
                            <br/>
                            País:
                            <br/>
                            Provincia:
                            <br/>
                            Cantón:
                            <br/>
                            Distrito:
                            </div>
                        </div>
                </div>
                    <a href="#">  <button class ="button aporte">Bloquear</button> </a>
                    <a href="#">  <button class ="button aporte">Aprobar</button> </a>
                    <a href="#">  <button class ="button aporte">Rechazar</button> </a>
                <hr />
            </div>

        );
    }
}

export default propuestas;
