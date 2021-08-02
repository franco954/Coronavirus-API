import React, { useState } from "react";

// material ui
import { Button, Input, Grid, Paper } from "@material-ui/core";

export default function Form(props) {
  const [pais, setPais] = useState("Argentina");

  console.log(props.data);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.data(pais);
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setPais(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Input
            autoComplete="off"
            value={pais}
            name="pais"
            onChange={handleChange}
            margin="dense"
            color="primary"
            variant="contained"
            xs={12}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            color="secondary"
            variant="outlined"
            type="submit"
            size="large"
          >
            Buscar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
