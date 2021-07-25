


import React, { useState, useEffect } from 'react';
import Info from '../components/info';

// importados llamada a api
import { cases } from '../services/cases';


export default function Home(){
    

    const [data, setData] = useState({
        confirmados: 0,
        recuperados: 0,
        muertes: 0,
    })
    console.log(data)

    const country = "Spain" 


    const getData = async () =>{
        try {
            const response = await cases(country)
            console.log(response.data.All)
            setData({
                confirmados: response.data.All.confirmed,
                recuperados: response.data.All.recovered,
                muertes: response.data.All.deaths,
            })
            // setData(response.data.All)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getData();
    },[])




    return(
        <div>
            <h1>Coronavirus {country}</h1>
            <Info {...data}/>
        </div>
    )
}