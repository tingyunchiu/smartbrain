import React, {useState} from 'react';

function Login({loginButton, signupButton, getCurrentUser} ) {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const onLoginClicked = () => {
        fetch('http://localhost:3001/api/login', {
             method: 'POST',
             headers: {
                'Content-Type': 'application/json'
            },
             body: JSON.stringify({
                email: loginEmail,
                password: loginPassword
             })
        })
        .then(response =>response.json())
        .then(data => {
            if (data.email === loginEmail) {
                getCurrentUser(data)
                loginButton()
            }else {
                alert("Sorry! But, we don't know who you are")
            }
        })
        .catch(err => alert("Please try again!"))
    }

	return (
		<div style = {{"textAlign": "center"}}>
    		<div>
    			<h2>Email: </h2>
    			<input type="text" onChange = {(e) => setLoginEmail(e.target.value)}/>
    		</div>
    		<div>
    			<h2>Password: </h2>
    			<input type="password" onChange = {(e) => setLoginPassword(e.target.value)}/>
    		</div>
    		<div>
    			<button type="button" onClick = {onLoginClicked} >Log in</button>
                <button type="button" onClick = {signupButton} >Sign up</button>
    		</div>
    	</div>
  	)
}

export default Login;