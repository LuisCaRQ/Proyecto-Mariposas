import React from 'react';
import Style from './../css/Style-administrador.css';
import {Button } from "react-bootstrap";

class administrador extends React.Component{
    render(){
        
        return(
            <div>
                <div id="fondo" class="administrador">
                        <h1>Opciones de Administrador</h1>
                </div>


                <div class="center">
                    <div class="administradorLeft">
                        <div>
                            <a href="#">  <button class ="button admin" >Propuestas</button> </a>
                            <br/>  <br/>
                            <a href="/AgregarEspecie">  <button class ="button admin">Agregar especies</button> </a>
                            <br/>  <br/>
                            <a href="#">  <button class ="button admin">Eliminar especies</button> </a>
                            <br/>  <br/>
                            <a href="#">  <button class ="button admin">Agregar dato curioso</button> </a>
                            <br/>  <br/>
                        </div>
                    
                    </div>

                
                    <div class= "administradorRight">
                            <a href="#">  <button class ="button admin">Registrar Admin</button> </a>
                            <br/>  <br/>
                            <a href="#"> <button class ="button admin">Editar especie</button> </a>
                            <br/>  <br/>
                            <a href="#"> <button class ="button admin">Bloquear usuario</button> </a>
                            <br/>  <br/>
                            <a href="#"> <button class ="button admin">Eliminar dato curioso</button> </a>
                            <br/>  <br/>
                    </div>
                </div>


                <div>
                    <footer id="footerBottom">   
                        <div>Prototipo Metamorfosis</div>
                        <div>Versión 1.2 por Metamorfosis en Instituto Tecnológico de Costa Rica</div>
                        <div>Semestre II de 2020. Administración de Proyectos</div>            
                    </footer>
                </div>
            </div>
        );
    }
}

export default administrador;
