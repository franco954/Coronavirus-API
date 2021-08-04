import React, { useContext } from "react";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Button } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// context api
import CoronavirusContext from "../Context/CoronavirusContext";

export default function Info(props) {

  const context = useContext(CoronavirusContext)

  const {
    confirmados,
    recuperados,
    muertes,
    pais,
    capital,
    experanzaVida,
    locacion,
    poblacion,
  } = props;

  const useStyles = makeStyles((theme) => ({
    paper: {
      background: "#000b",
      padding: "20px 50px",
      textAlign: "center",
      borderRadius: "18px",
    },
    center: {
      textAlign: "center",
    },
    title: {
      textAlign: "center",
      color: "#f00c",
    },
    input: {
      paddingTop: "20px", 
      color: "#ddd",
      borderBottom: "2px solid #f008"
    },
    button: {
      paddingTop: "20px",
    },
    icon:{
      paddingRight: "14px",
    },
    datos:{
      margin: "1px",
      color: "#fff",
      fontSize: "1.2em",
    }
  }));

  const classes = useStyles();

  const handleBack = () =>{
    context.setLoadingF(true)
    context.setInfoF(false)
    context.setFormF(true)
    context.setLoadingF(false)
    console.log(context)
  }
  
 
  return (
    <Grid container spacing={3}>
      <Paper elevation={20} className={classes.paper} >
        <Grid className={classes.title} item xs={12}>
            <h1>Coronavirus en {pais}</h1>
        </Grid>
      <Grid item xs={12} className={classes.datos}>
         <p> <b>Confirmados: </b> {confirmados} </p> 
         <p> <b>Recuperados: </b> {recuperados} </p> 
         <p> <b>Muertos: </b> {muertes} </p> 
         <p> <b>Población total: </b> {poblacion} </p> 
      </Grid>
      <Grid className={classes.button} item sm={12}>
            <Button variant="contained" onClick={handleBack} color="secondary"><ArrowBackIcon className={classes.icon}/> Volver al buscador</Button>
      </Grid>
      </Paper>
    </Grid>
  );
}
