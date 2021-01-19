import React from 'react';
import Style from './../css/Style-verEspecie.css';
import Image from '../images/metamorfosis.jpg'
class Ver_especie extends React.Component{
    render(){
        
        return(
            <div>
                <div id="fondoVerEspecies">
                        <h1>Nombre de especie</h1>
                </div>

                <h4 class="verEspecieCientifico">Nombre cientifico</h4>
                <h5 class="verEspecieCientifico">   </h5>
                <hr class= "verEspecie"/>

                <div class="verEspecieLeft">
                    <h1 class="proceso">Oruga:</h1>
                    <img className="verEspecie" src={"https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} />   
                </div>

                <div class="verEspecieRight">
                    <h1 class="proceso">Mariposa:</h1>  
                    <img className="verEspecie" src={"https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} />
                </div>
                <div>
                    <h4 class="verEspecie">Reino</h4>
                    <h5 class="verEspecie">   </h5>

                    <h4 class="verEspecie">Filo</h4>
                    <h5 class="verEspecie">   </h5>

                    <h4 class="verEspecie">Clase</h4>
                    <h5 class="verEspecie">   </h5>

                    <h4 class="verEspecie">Orden</h4>
                    <h5 class="verEspecie">   </h5>

                    <h4 class="verEspecie">Familia</h4>
                    <h5 class="verEspecie">   </h5>

                    <h4 class="verEspecie">Genero</h4>
                    <h5 class="verEspecie">   </h5>

                    <h4 class="verEspecie">Etapa</h4>
                    <h5 class="verEspecie">   </h5>

                    <h4 class="verEspecie">Descripción</h4>
                    <h5 class="verEspecie">   </h5>
                </div>

                <div class="center"> 
                <img className="verEspecieG" src={"https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} />   
                
                </div>

               

                

               
                <div>
                    <footer id="footerBottom" >   
                        <div>Proyecto Metamorfosis</div>
                        <div>Versión 1.2 por Metamorfosis en Instituto Tecnológico de Costa Rica</div>
                        <div>Semestre II de 2020. Administración de Proyectos</div>            
                    </footer>
                </div>
                
            </div>
        );
    }
}

export default Ver_especie;
