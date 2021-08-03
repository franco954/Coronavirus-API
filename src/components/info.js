import React, { useContext } from "react";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Button } from "@material-ui/core";

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
    root: {
      flexGrow: 1,
    },
    paper: {
      background: "#fffc",
      padding: theme.spacing(3),
      textAlign: "center",
      color: theme.palette.text.primary,
    },
    center: {
        textAlign: "center",
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
        <Grid className={classes.center} item xs={12}>
            <h1>Coronavirus en {pais}</h1>
        </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <b>Confirmados: </b> {confirmados}
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <b>Recuperados: </b> {recuperados}
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <b>Muertos: </b> {muertes}
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <b>Población total: </b> {poblacion}
        </Paper>
      </Grid>
      <Grid className={classes.center} item sm={12}>
            <Button variant="contained" onClick={handleBack} color="primary">Volver al buscador</Button>
      </Grid>
    </Grid>
  );
}
