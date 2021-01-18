import React from 'react';
import Style from './../css/Style-aporte.css';
import Image from '../images/metamorfosis.jpg'
import {Button, Form } from "react-bootstrap";

class proceso_metamorfosis extends React.Component{
    state = {
        foto: null,
    }

    render(){
        return(
            <div>
                <div class="center container  p-8 py-5 my-3 bg-dark text-white mt-5">
                    
                    <p >
                        <h1 class="proceso">
                            Agregar Especie
                        </h1>
                        <hr class = "aporte"/>
                        <Form>      
                            <div class= "aporteLeft">
                                    <Form.Group onChange= {this.handleChange}>
                                    <br/>
                                    <Form.Control type="name" placeholder="Ingresa el nombre de la especie" name = 'name' />
                                    <br/>
                                    <Form.Control type="name" placeholder="Ingresa el nombre cientifico de la especie" name = 'scientificName' />
                                    <br/>
                                    <Form.Control type="name" placeholder="Ingresa la familia de la especie" name = 'family' />
                                    <br/>
                                    <Form.Control type="name" placeholder="Ingresa el genero" name = 'genus' />
                                    <br/> 
                                    </Form.Group>
                                
                                </div>

                                <div class= "aporteRight">
                                    <br/> 
                                    <Form.Control as="textarea" rows="3" type="name" placeholder="Agrega una descripción de la especie" name = 'description' />
                                    <br/> 
                                    <Form.Group controlId="formMovement">
                                        <select defaultValue="" className="custom-select" onChange={this.selectMovement}>
                                            <option disabled={true} value="">Selecciona la etapa de la especie</option>
                                            <option value="Oruga"> Oruga</option>
                                            <option value="Mariposa"> Mariposa</option>
                                        </select>
                                    </Form.Group>
                                    <br/> 

                                    <Form.Group controlId="formMovement">
                                    <h4>Agrega una foto de la especie</h4>
                                    <br/> 
                                    <input
                                        type="file"                    
                                        onChange={(e)=> this.setState({foto: e.target.files[0]})}
                                        />
                                    </Form.Group>
                                
                                </div>
                        
                        </Form>
                    </p >
                    <div class="btn">
                    <Button variant="secondary" type="submit" onClick = "#" >
                            Agregar especie
                    </Button>
                    </div>
                    
                </div>
                


                <div>
                    <footer id="footerAbsolute" >   
                        <div>Prototipo Metamorfosis</div>
                        <div>Versión 1.2 por Metamorfosis en Instituto Tecnológico de Costa Rica</div>
                        <div>Semestre II de 2020. Administración de Proyectos</div>            
                    </footer>
                </div>
                
            </div>
        );
    }
}

export default proceso_metamorfosis;
