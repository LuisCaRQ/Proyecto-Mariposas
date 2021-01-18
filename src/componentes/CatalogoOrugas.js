import React from 'react';
import Style from './../css/Style-Catalogo.css';
import { Button } from "react-bootstrap";

class catalogo_oruga extends React.Component {
    render() {

        return (
            <div>
                
                    <div id="fondo" className="catalogo_oruga">
                        <h1>Catálogo Orugas</h1>
                    </div>


                    <div className="catalogo">

                    <form class="barra">
                            <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
                        <br/>
                            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Buscar</button>
                        <br/>
                    </form>

                        <a href="#">
                            <div className="card" >
                                <img className="catalogo" src="https://images.unsplash.com/photo-1603122402845-adb1ea70fc29?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                                <div className="card-body">
                                    <h5 className="catalogo">Nombre</h5>
                                </div>
                            </div>
                        </a>
                    </div>
            </div>
            
        );
    }
}

export default catalogo_oruga;
