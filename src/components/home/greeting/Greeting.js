import React from 'react';


function Greeting({userName}) {
  return (
    <h1> {`Hello! ${userName}`} </h1>
  );
}

export default Greeting;