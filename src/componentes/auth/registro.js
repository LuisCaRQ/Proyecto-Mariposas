import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import axios from 'axios'

export const RegisterForm = () => {

    const [{created}, setCreated] = useState({created: false})

    const [{ok, msg}, setValidation] = useState({ok:true, msg:''})

    const [formValues, handleInputChange, reset]=useForm({
        identificacion: '',
        nombre: '',
        apellido1: '',
        apellido2: '',
        telefono: '',
        correo: '',
        password: '',
        password2: ''

    })

    const {identificacion, nombre, apellido1, apellido2,
            telefono, correo, password, password2} = formValues;




    const handleRegister = async (e) => {
        e.preventDefault();
       
            try {
                const res = await axios.post('http://localhost:4000/api/miembros/',
                    formValues
                );
                console.log(res)
                reset()
                setValidation({ok: true, msg: ''})
                setCreated({created:true})
                
    
                
            } catch (error) {
                
                console.log(error)
                setValidation({ok: error.response.data.ok, msg: error.response.data.msg})
                
            }
        
    }

    return (
        <>
                 <form onSubmit={handleRegister}>
                     
                     <h1>Registrarse</h1>
                     <div className='row'>
                        <div className='col-md-6'>

                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    name="nombre"
                                    className="form-control"
                                    autoComplete="off"
                                    value={ nombre }
                                    onChange={handleInputChange}
                                />
                                <br/>

                                <input
                                type="text"
                                placeholder="Primer Apellido"
                                name="apellido1"
                                className="form-control"
                                autoComplete="off"
                                value={ apellido1 }
                                onChange={handleInputChange}
                                />
                                <br/>

                                <input
                                    type="text"
                                    placeholder="Segundo Apellido"
                                    name="apellido2"
                                    className="form-control"
                                    autoComplete="off"
                                    value={ apellido2 }
                                    onChange={handleInputChange}
                                />
                                <br/>   
                        </div>

                        <div className='col-md-6'>

                                <input
                                    type="text"
                                    placeholder="correo"
                                    name="correo"
                                    className="form-control"
                                    autoComplete="off"
                                    value={ correo }
                                    onChange={handleInputChange}
                                />
                                <br/>

                                <input
                                    type="password"
                                    placeholder="Contraseña"
                                    name="password"
                                    className="form-control"
                                    autoComplete="off"
                                    value={ password }
                                    onChange={handleInputChange}
                                />
                                <br/>

                                <input
                                    type="password"
                                    placeholder="Validar contraseña"
                                    name="password2"
                                    className="form-control"
                                    autoComplete="off"
                                    value={ password2 }
                                    onChange={handleInputChange}
                                />

                                <br/>
                        </div>
                        
             

                     </div>
                        
          
                    {(!ok)&&   <div className="alert alert-danger">
                                <n>{msg}</n>...
                            </div>}
                    {(created)&&   <div className="alert alert-info">
                                <n>Registrado correctamente</n>
                            </div>}
                    


                    <button className="btn btn-primary btn-custom mt-2">
                       Registrarse
                    </button>
                    <hr/>
                        


                    <h6>¿Ya tienes una cuenta?</h6>
                    <Link 
                        to="/auth/login"
                        className="link">
                            Ingresar
                            
                    </Link>
                



                </form>
           
        </>
    )
}

