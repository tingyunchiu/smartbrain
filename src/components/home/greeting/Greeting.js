import React from 'react';


function Greeting({userName}) {
  return (
    <div>
      <h1> {`Hello! ${userName}`} </h1>
    </div>
  );
}

export default Greeting;