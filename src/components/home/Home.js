import React from 'react';
import Greeting from './greeting/Greeting.js';
import Record from './record/Record.js';
import Text from './text/Text.js';

function Home({loginButton, currentUser, getCurrentUser}) {

    const onLogoutclick = () => {
        getCurrentUser('');
        loginButton()
    }
    console.log(currentUser)
    return (
		<div style = {{"textAlign": "center"}}>
    		<div>
    			<button type="button" onClick={onLogoutclick}> Log out</button>
    		</div>
    		<div>
    			<Greeting userName = {currentUser.name}/>
    		</div>
            <div>
                <Record userid = {currentUser.uid}/>
            </div>
    		<div>
            	<Text userid = {currentUser.uid}/>
            </div>
    	</div>
  	)
}

export default Home;