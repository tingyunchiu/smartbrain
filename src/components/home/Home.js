import React, {useState, useEffect}  from 'react';
import Greeting from './greeting/Greeting.js';
import Text from './text/Text.js';

function Home({loginButton, currentUser, getCurrentUser}) {
    const [userInfo, setUserInfo] = useState([]);

    const onLogoutclick = () => {
        getCurrentUser('');
        loginButton()
    }

    useEffect(() => {
        fetch('http://localhost:3001/api')
        .then(response => response.json())
        .then(data => data.users.filter(user => user.email === currentUser))
        .then(user => setUserInfo(user[0]))
        .catch(error => {
                console.error('Error:', error);
        });
    }, [currentUser])

	return (
		<div style = {{"textAlign": "center"}}>
    		<div>
    			<button type="button" onClick={onLogoutclick}> Log out</button>
    		</div>
    		<div>
    			<Greeting userName = {userInfo.name}/>
    		</div>
    		<div>
            	<Text userID = {userInfo.id}/>
            </div>
    	</div>
  	)
}

export default Home;