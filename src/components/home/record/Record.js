import React, {useState, useEffect} from 'react';

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
    <div>
      {records.map((record, index) => <span key={index}> {record} , </span>)}
    </div>
  );
}

export default Record;