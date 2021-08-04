import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Plot from './Plot.js';

function Record({userid}) {
  const [records, setRecords] = useState([]);

  const onSeeScoresClick = () => {
    fetch('https://fathomless-journey-15048.herokuapp.com/api/home/' + userid)
    .then(response =>response.json())
    .then(data => {
      setRecords(data);
    })
    .catch(err =>  {
      alert('unable to get scores')
    })
  }

  return (
    <Paper>
      <Button variant="contained" style ={{color:"#2196f3"}} onClick={onSeeScoresClick}>
        see scores
      </Button>
      <Plot records = {records}/>
    </Paper>
  );
}

export default Record;

