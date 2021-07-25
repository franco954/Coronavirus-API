


import React from 'react';



export default function Info(props){

    console.log(props)

    const {confirmados, recuperados, muertes} = props
    
    return(
        <div>
            <p> <b>Confirmados : </b> {confirmados} </p>
            <p> <b>recuperados : </b> {recuperados} </p> 
            <p> <b>muertes : </b> {muertes} </p> 
        </div>
    )
}