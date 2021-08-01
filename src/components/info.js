


import React from 'react';



export default function Info(props){

    const {confirmados, recuperados, muertes, pais, capital, experanzaVida, locacion, poblacion} = props



    const handleClick = () =>{
        
    }



    
    return(
        <div>
            <h2>Datos Coronavirus</h2>
            <p> <b>Confirmados: </b> {confirmados} </p>
            <p> <b>recuperados: </b> {recuperados} </p> 
            <p> <b>muertes: </b> {muertes} </p> 
            <h2>Datos Pais</h2>
            <p> <b>Pais: </b> {pais} </p>
            <p> <b>Locacion: </b> {locacion} </p>
            <p> <b>Capital: </b> {capital} </p> 
            <p> <b>Poblacion: </b> {poblacion} </p> 
            <p> <b>Experanza de vida: </b> {experanzaVida} </p> 
            <button onClick={handleClick}>
                Volver al buscador    
            </button>
        </div>
    )
}