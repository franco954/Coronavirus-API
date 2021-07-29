


import React, { useState, useEffect } from 'react';
import Form from '../components/form';
import Info from '../components/info';

// importados llamada a api
import { cases } from '../services/cases';


export default function Home(){
    
    const [data, setData] = useState({
        confirmados: 0,
        recuperados: 0,
        muertes: 0,
        capital: '',
        pais: '',
        locacion: '',
        poblacion: '',
        experanzaVida: 0,
    })
    console.log(data)

    const getData = async () =>{
        try {
            const response = await cases("Uruguay")
            console.log(response.data.All)
            setData({
                confirmados: response.data.All.confirmed,
                recuperados: response.data.All.recovered,
                muertes: response.data.All.deaths,
                capital: response.data.All.capital_city,
                pais: response.data.All.country,
                locacion: response.data.All.location,
                poblacion: response.data.All.population,
                experanzaVida: response.data.All.life_expectancy,
            })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getData();
    },[])




    return(
        <div>
            <h1>Coronavirus </h1>
            <Form/>
            <Info {...data}/>
        </div>
    )
}