import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

function Greeting({userName}) {
  const classes = useStyles();

  return (
    <Typography variant="h5" className={classes.text}>
      {`Hello! ${userName}`}
    </Typography>
  );
}

const useStyles=makeStyles((theme)=>({
text:{
    color:"#2196f3"
}
}));

export default Greeting;