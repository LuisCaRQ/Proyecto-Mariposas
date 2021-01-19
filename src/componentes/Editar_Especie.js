import React from 'react';
import Style from './../css/Style-aporte.css';
import { Button, Form } from "react-bootstrap";
import axios from 'axios'

class Editar_especie extends React.Component {
    render() {
        return (
            <div>
                <div class="center container  p-8 py-5 my-3 bg-dark text-white mt-5">

                    <p >
                        <h1 class="proceso">
                            Editar Especie
                        </h1>
                        <hr class="aporte" />
                        <br ></br>
                        <Form>
                            <form class="barra">
                                <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                                <br />
                                <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Buscar</button>
                                <br />
                            </form>
                            <div class="aporteLeft">
                                <Form.Group onChange={this.handleChange}>
                                    <br />
                                    <Form.Control type="name" placeholder="Ingresa el nombre de la especie" name='name' />
                                    <br />
                                    <Form.Control type="name" placeholder="Ingresa el nombre cientifico de la especie" name='scientificName' />
                                    <br />
                                    <Form.Control type="name" placeholder="Ingresa la familia de la especie" name='family' />
                                    <br />
                                    <Form.Control type="name" placeholder="Ingresa el genero" name='genus' />
                                    <br />
                                </Form.Group>

                            </div>

                            <div class="aporteRight">
                                <br />
                                <Form.Control as="textarea" rows="3" type="name" placeholder="Agrega una descripción de la especie" name='description' onChange={this.handleChange} />
                                <br />
                                <Form.Group controlId="formMovement">
                                    <select defaultValue="" className="custom-select" onChange={this.selectMovement}>
                                        <option disabled={true} value="">Selecciona la etapa de la especie</option>
                                        <option value="Oruga"> Oruga</option>
                                        <option value="Mariposa"> Mariposa</option>
                                    </select>
                                </Form.Group>
                                <br />
                                <h3>Fotos:</h3>
                                <div class="center_EliminarAporte">
                                    <img className="catalogo" src={"https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} />
                                </div>
                                <Form.Group controlId="formMovement">
                                    <h4>Agrega una foto de la especie</h4>
                                    <br />
                                    <input
                                        type="file"
                                        onChange={(e) => this.setState({ photo: e.target.files[0] })}
                                    />
                                </Form.Group>

                            </div>

                        </Form>
                    </p >
                    <div class="btn">
                        <Button variant="secondary" type="submit" onClick={this.onSubmit} >
                            Guardar cambios
                    </Button>
                    </div>

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

export default Editar_especie;
