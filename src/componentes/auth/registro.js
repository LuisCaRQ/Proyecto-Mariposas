import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import axios from 'axios'

export const RegisterForm = () => {

    const [{created}, setCreated] = useState({created: false})

    const [{ok, msg}, setValidation] = useState({ok:true, msg:''})

    const [formValues, handleInputChange, reset]=useForm({
       
        name: '',
        lastname1: '',
        lastname2: '',
        email: '',
        password: '',
        password2: ''

    })

    const { name,
    lastname1,
    lastname2,
    email,
    password,
    password2} = formValues;




    const handleRegister = async (e) => {
        e.preventDefault();
       
            try {
                const res = await axios.post('http://localhost:4000/api/users/register',
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
                                    name="name"
                                    className="form-control"
                                    autoComplete="off"
                                    value={ name }
                                    onChange={handleInputChange}
                                />
                                <br/>

                                <input
                                type="text"
                                placeholder="Primer Apellido"
                                name="lastname1"
                                className="form-control"
                                autoComplete="off"
                                value={ lastname1 }
                                onChange={handleInputChange}
                                />
                                <br/>

                                <input
                                    type="text"
                                    placeholder="Segundo Apellido"
                                    name="lastname2"
                                    className="form-control"
                                    autoComplete="off"
                                    value={ lastname2 }
                                    onChange={handleInputChange}
                                />
                                <br/>   
                        </div>

                        <div className='col-md-6'>

                                <input
                                    type="text"
                                    placeholder="correo"
                                    name="email"
                                    className="form-control"
                                    autoComplete="off"
                                    value={ email }
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

