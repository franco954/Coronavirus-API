


import React from "react";

import { Button, TextField } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export default function Form() {

    const Input = styled(TextField)({
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      });



  return (
    
    <Input noValidate autoComplete="off">
      <TextField id="filled-basic" label="PAIS" variant="filled" />
    </Input>
  
  
  );
}
