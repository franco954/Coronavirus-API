import React from "react";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Button } from "@material-ui/core";

export default function Info(props) {
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
      background: "#48f8",
      padding: theme.spacing(3),
      textAlign: "center",
      color: theme.palette.text.primary,
    },
    center: {
        textAlign: "center",
    }
  }));

  const classes = useStyles();

  const handleClick = () => {   
      props.f()
  };

  return (
    <Grid container spacing={3}>
        <Grid className={classes.center} item xs={12}>
            <h1>Coronavirus en {pais}</h1>
        </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
          <b>Confirmados: </b> {confirmados}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
          <b>Recuperados: </b> {recuperados}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
          <b>Muertos: </b> {muertes}
        </Paper>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Paper className={classes.paper}>
          <b>Capital pais: </b> {capital}
        </Paper>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Paper className={classes.paper}>
          <b>Población total: </b> {poblacion}
        </Paper>
      </Grid>
      <Grid className={classes.center} item sm={12}>
            <Button variant="contained" color="primary" onClick={handleClick}>Volver al buscador</Button>
      </Grid>
    </Grid>
  );
}
