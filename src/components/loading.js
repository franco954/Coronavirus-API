

import React from 'react';

// Material ui components
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


export default function Loading(){

    const useStyles = makeStyles((theme) => ({
        spinner: {
          marginTop: "20px",
        },
      }));
    
    const classes = useStyles();

    return(
        <CircularProgress className={classes.spinner} color="secondary" />
    )
}