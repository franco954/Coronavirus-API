import React, { useState } from "react";

// material ui
import { Button, Input, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Form(props) {


  const useStyles = makeStyles((theme) => ({
    paper: {
      // width: "100vw",
      background: "#000b",
      padding: "15px 50px",
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
      paddingTop: "80px"
    }
  }));

  const classes = useStyles();

  const [pais, setPais] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.data(pais);
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const valueUpperCase = value.charAt(0).toUpperCase() + value.slice(1);
    setPais(valueUpperCase);
  };

  return (
      <Paper elevation={20} className={classes.paper} >
        <form onSubmit={handleSubmit}>
          <Grid item>
              <h1 className={classes.title}>Coronavirus API</h1>
          </Grid>
          <Grid item>
            <Input
              required="on"
              placeholder="Introduce un pais"
              className={classes.input}
              autoComplete="off"
              value={pais}
              name="pais"
              onChange={handleChange}
              margin="dense"
              color="secondary"
              variant="contained"
            />
          </Grid>
          <Grid item className={classes.button}>
            <Button
              color="secondary"
              variant="contained"
              type="submit"
            >
              Buscar
            </Button>
          </Grid>
        </form>
      </Paper>
  );
}
