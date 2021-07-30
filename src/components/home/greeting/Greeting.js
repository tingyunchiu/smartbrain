import React from 'react';


function Greeting({userName}) {
  return (
    <div>
      <h1> {`Hello! ${userName}`} </h1>
      <button type="button" > My records</button>
    </div>
  );
}

export default Greeting;