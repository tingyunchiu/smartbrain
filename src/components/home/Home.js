import React from 'react';
import Greeting from './greeting/Greeting.js';
import Text from './text/Text.js';

function Home({loginButton, currentUser, getCurrentUser}) {

    const onLogoutclick = () => {
        getCurrentUser('');
        loginButton()
    }

    return (
		<div style = {{"textAlign": "center"}}>
    		<div>
    			<button type="button" onClick={onLogoutclick}> Log out</button>
    		</div>
    		<div>
    			<Greeting userName = {currentUser.name}/>
    		</div>
    		<div>
            	<Text userName = {currentUser.name} userEmail = {currentUser.email}/>
            </div>
    	</div>
  	)
}

export default Home;