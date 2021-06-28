import React, { useState } from 'react';
import Nav from './components/nav/Nav.js';
import Greeting from './components/greeting/Greeting.js';
import Text from './components/text/Text.js';


function App() {
	const [isLogin, setIsLogin] = useState(false);

	return (
    	<div style={{ textAlign: "center"}}>
    		<Nav isLogin = {isLogin} ChangeLogin = {setIsLogin}/>
    		<Greeting />
    		<Text />
    	</div>
  	);
}

export default App;
