import React, {useState, useEffect} from 'react';
import { Paper } from '@material-ui/core';

function Record({userid}) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const getScores = () => {
      fetch('https://fathomless-journey-15048.herokuapp.com/api/home/' + userid)
      .then(response =>response.json())
      .then(data => {
        setRecords(data)
      })
      .catch(err =>  {
        setRecords([])
      })
    }
    const intervalId = setInterval(getScores(), 1*60*1000)
    return () => clearInterval(intervalId);
  }, [userid, records])

  return (
    <Paper >
      {records.map((record, index) => <span key={index}> {record} , </span>)}
    </Paper>
  );
}

export default Record;

