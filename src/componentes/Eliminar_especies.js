import React from 'react';
import Style from './../css/Style-eliminarEspecie.css';
import Image from '../images/metamorfosis.jpg'
import { Button, Form } from "react-bootstrap";
import axios from 'axios'

class Eliminar_especies extends React.Component {
    render() {
        return (
            <div>
                <div class="center container  p-8 py-5 my-3 bg-dark text-white mt-5">
                    <p >
                        <h1 class="proceso">
                            Eliminar Especie
                        </h1>
                        <hr class="aporte" />
                        <Form>
                            <div class="textoAporte">
                                <div class="aporteLeft">
                                    <Form.Group onChange={this.handleChange}>
                                        <br />
                                        <Form.Label>Nombre:</Form.Label>
                                        <br />
                                        <h5 class="EliminarEspecie">Aquí voy</h5>
                                        <hr class="EliminarEspecie" />

                                    aqiasd
                                    <Form.Label>Nombre cientifico de la especie:</Form.Label>
                                         <h5 class="EliminarEspecie">Aquí voy</h5>
                                        <hr class="EliminarEspecie" />
                                        <br />
                                        <Form.Label>Familia de la especie:</Form.Label>
                                        <h5 class="EliminarEspecie">Aquí voy</h5>
                                        <hr class="EliminarEspecie" />
                                        <br />
                                        <Form.Label>Genero:</Form.Label>
                                        <h5 class="EliminarEspecie">Aquí voy</h5>
                                        <hr class="EliminarEspecie" />
                                        <br />
                                        <div class="btn center_EliminarAporte">
                                            <Button variant="danger" type="submit" >
                                                Eliminar especie
                                            </Button>
                                        </div>
                                    </Form.Group>

                                </div>

                                <div class="aporteRight">
                                    <br />
                                    <Form.Label>Descripción:</Form.Label>
                                    <h5 class="EliminarEspecie">Aquí voy</h5>
                                    <hr class="EliminarEspecie" />
                                    <br />
                                    <Form.Label>Etapa:</Form.Label>
                                    <h5 class="EliminarEspecie">Aquí voy</h5>
                                    <hr class="EliminarEspecie" />
                                    <br />

                                    <Form.Group controlId="formMovement">
                                        <Form.Label>Fotos:</Form.Label>
                                        <br />
                                        <div class="center_EliminarAporte">
                                            <img className="catalogo" src={"https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} />
                                        </div>
                                        <hr class="EliminarEspecie" />
                                    </Form.Group>
                                </div>
                            </div>
                        </Form>
                    </p >


                </div>
                <div>
                    <footer id="footerBottom" >   
                        <div>Prototipo Metamorfosis</div>
                        <div>Versión 1.2 por Metamorfosis en Instituto Tecnológico de Costa Rica</div>
                        <div>Semestre II de 2020. Administración de Proyectos</div>            
                    </footer>
                </div>
            </div>
        );
    }
}

export default Eliminar_especies;
