import React from 'react';
import Greeting from './greeting/Greeting.js';
import Text from './text/Text.js';

function Home({loginButton}) {

	return (
		<div style = {{"textAlign": "center"}}>
    		<div>
    			<button type="button" onClick={loginButton}> Log out</button>
    		</div>
    		<div>
    			<Greeting />
    		</div>
    		<div>
            	<Text />
            </div>
    	</div>
  	)
}

export default Home;