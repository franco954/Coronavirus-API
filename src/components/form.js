import React, { useState } from "react";

import { Button, Input } from "@material-ui/core";

export default function Form() {


  const [pais, setPais] = useState("Argentina")

  console.log(pais)

  const handleSubmit = e => {
    e.preventDefault();
    const paisBuscar = pais;
    console.log(paisBuscar)
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setPais(value);
  };

  return (
  <form onSubmit={handleSubmit}>
      <Input 
      value={pais}
      name="pais"
      onChange={handleChange}
      margin="dense" 
      color="secondary" 
      variant="outlined" />
      <Button color="secondary" variant="contained" type="submit">
        Buscar
      </Button>
    </form>
  
  
  );
}
