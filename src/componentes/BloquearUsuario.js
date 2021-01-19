import React from 'react';
import Style from './../css/Style-eliminarEspecie.css';
import { Button, Form } from "react-bootstrap";
import axios from 'axios'

class BloquearUsuario extends React.Component {
    render() {
        return (
            <div>
                <div class="center container  p-8 py-5 my-3 bg-dark text-white mt-5">
                    <p >
                        <h1 class="proceso">
                            Bloquear Usuario
                        </h1>
                        <hr class="aporte" />
                        <Form>
                            <form class="barra">
                                <input class="form-control mr-sm-2" type="search" placeholder="Buscar nombre de usuario" aria-label="Search" />
                                <br />
                                <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Buscar</button>
                                <br />
                            </form>

                            <div class="textoAporte">
                                <div class="aporteLeft">
                                    <Form.Group onChange={this.handleChange}>
                                        <br />
                                        <Form.Label>Nombre:</Form.Label>
                                        <br />
                                        <h5 class="EliminarEspecie">Aquí voy</h5>
                                        <hr class="EliminarEspecie" />


                                        <Form.Label>Primer Apellido:</Form.Label>
                                        <h5 class="EliminarEspecie">Aquí voy</h5>
                                        <hr class="EliminarEspecie" />
                                        <br />
                                        <Form.Label>Segundo Apellido:</Form.Label>
                                        <h5 class="EliminarEspecie">Aquí voy</h5>
                                        <hr class="EliminarEspecie" />
                                        <br />
                                        <Form.Label>Correo:</Form.Label>
                                        <h5 class="EliminarEspecie">Aquí voy</h5>
                                        <hr class="EliminarEspecie" />
                                        <br />
                                    </Form.Group>

                                </div>

                                <div class="aporteRight">
                                    <br />
                                    <Form.Label>Administrador:</Form.Label>
                                    <h5 class="EliminarEspecie">Aquí voy</h5>
                                    <hr class="EliminarEspecie" />
                                    
                                    <Form.Label>Bloqueado:</Form.Label>
                                    <h5 class="EliminarEspecie">Aquí voy</h5>
                                    <hr class="EliminarEspecie" />
                                    <br />
                                </div>
                            </div>
                            <div class="btn center_EliminarAporte">
                                <Button variant="danger" type="submit" > Bloquear Usuario </Button>
                            </div>
                            
                        </Form>
                    </p >


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

export default BloquearUsuario;
