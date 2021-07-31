import React, {useState, useEffect} from 'react';

function Record({userid}) {
  const [record, setRecord] = useState([]);

  fetch('http://localhost:3001/api/home/' + userid)
  .then(response =>response.json())
  .then(data => {
    setRecord(data)
  })

  return (
    <div>
      {record.map(r => <span>{r}, </span>)}
    </div>
  );
}

export default Record;