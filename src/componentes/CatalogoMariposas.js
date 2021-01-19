import React from 'react';
import Style from './../css/Style-Catalogo.css';
import { Button } from "react-bootstrap";
import axios from 'axios'
class catalogoMariposas extends React.Component {


    state = {
        mariposas: []
    }
    componentDidMount(){
        this.getMariposas()
    }

    getMariposas = async () => {
        const mariposas = await axios.get("http://localhost:4000/api/species/getButterflies/")
        console.log(mariposas.data.result)
        this.setState({mariposas: mariposas.data.result})

    }


    render() {

        return (
            <div>
                    <div id="fondo" className="catalogo_mariposa">
                        <h1>Catálogo Mariposas</h1>
                    </div>


                    <div className="catalogo">

                    <form class="barra">
                            <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
                        <br/>
                            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Buscar</button>
                        <br/>
                    </form>
                    <div className="row">
                    {this.state.mariposas.map((mariposa => (
                        <div className="col-md-4 auth_holder mr-10 p-2 " key={mariposa._id}>

                            <a href="#">

                                
                                <div className="card" >
                                    <img className="catalogo" src={mariposa.photos[0]} />
                                    <div className="card-body">
                                        <h5 className="catalogo">{mariposa.name}</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                        )))}
                    </div>
                    </div>
            </div>
            
        );
    }
}

export default catalogoMariposas;
