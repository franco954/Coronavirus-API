



import React from 'react';

// Material ui components
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from "@material-ui/core/styles";


export default function Error() {

    const useStyles = makeStyles((theme) => ({
        alert: {
          marginTop: "20px",
          color: "#000",
          fontWeight: "800",
        },
      }));
    
      const classes = useStyles();

    return(
        <Alert className={classes.alert} variant="filled" severity="warning">
                El nombre del pais es incorrecto
        </Alert>
    )
}