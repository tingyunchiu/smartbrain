import React from 'react';


function Signin() {
	return (
    	<div>
    		<div>
    			<h2>Email: </h2>
    			<input type="text" />
    		</div>
    		<div>
    			<h2>Password: </h2>
    			<input type="text" />
    		</div>
    		<div>
    			<button>Sign In</button>
    			<button>Register</button>
    		</div>
    	</div>
  	);
}

export default Signin;