
import React, {useState} from 'react';
import CoronavirusContext from './CoronavirusContext';


export default function GlobalState(props) {
    
    const children = props.children
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [info, setInfo] = useState(false);
    const [form, setForm] = useState(true);

    // loading
    const setLoadingF = (v) =>{
        setLoading(v)
    }

    // error
    const setErrorF = (v) =>{
        setError(v)
    }

    // info
    const setInfoF = (v) =>{
        setInfo(v)
    }

    // form
    const setFormF = (v) =>{
        setForm(v)
    }

    return(
        <CoronavirusContext.Provider
        value={{
            loading,
            setLoadingF,
            error,
            setErrorF,
            info,
            setInfoF,
            form,
            setFormF,
        }}>
        
        {children}
        
        </CoronavirusContext.Provider>
    )
}
