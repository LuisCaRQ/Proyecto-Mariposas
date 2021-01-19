import Navbar from "./Navbar"

import React from 'react';
import {MapContainer, TileLayer, GeoJSON} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Style from './../css/Style-proceso.css';
import Image from '../images/metamorfosis.jpg'

import mapData from '../assets/data.json'

class Avistamientos extends React.Component{
    state = {};

    componentDidMount(){
        //console.log(mapData.features[0]);
    }

    countryStyle = {
        fillOpacity: 0.7,
        color: "black",
        weight: 1,
    };

    onEachDistrito = (distrito, layer) =>{
        const mariposasDistr = distrito.properties.NOM_DIST;
        const mariposas = distrito.properties.Mariposas;
        const idMar = distrito.properties.CODIGO;
        console.log(mariposasDistr);
        //int caca = Consulta base 
        layer.bindPopup("¡" + mariposasDistr + " tiene: " + mariposas + " avistamientos de mariposas!");
        layer.options.fillColor = this.getColor(mariposas);
    }

    getColor(d){
        return d > 5 ? '#730202' :
               d > 4  ? '#730202' :
               d > 3  ? '#E50E0E' :
               d > 2  ? '#FC7050' :
               d > 1   ? '#FF9280' :
                          '#FFFFFF';
    };
    

    render(){
        //<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        return (
            <MapContainer center={{lat: '9.9333', lng: '-84.0833'}} zoom={9}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <GeoJSON style={this.countryStyle} data={mapData.features} onEachFeature={this.onEachDistrito}/>
            </MapContainer>
        );
    }

}


export default Avistamientos;
