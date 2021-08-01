



import React from 'react';

// Material ui components
import Alert from '@material-ui/lab/Alert';


export default function Error() {
    
    return(
        <Alert variant="filled" severity="error">
                El nombre del pais es incorrecto
        </Alert>
    )
}