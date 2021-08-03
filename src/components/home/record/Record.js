import React, {useState, useEffect} from 'react';
import Plot from './Plot.js';

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

    const id = setInterval(() => {
      getScores();
    }, 60000);

    getScores();

    return () => clearInterval(id);
  }, [userid])

  return (
    <Plot records = {records}/>
  );
}

export default Record;

