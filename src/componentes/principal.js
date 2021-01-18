import React from 'react';
import Style from './../css/Style-principal.css';

class principal extends React.Component{
    render(){
        
        return(
            <div>
                <div id="fondo">
                        <h1>Bienvenido</h1>
                </div>
                <div id="datoCurioso">
                    ¿Sabías que las mariposas saborean su comida con las patas? {/*Acá va el dato curioso, de la base de datos*/}
                    <hr />
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

export default principal;
