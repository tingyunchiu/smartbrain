import React, { useState } from 'react';

function Signup({ signupButton }) {
    const [signupName, setSignupName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');

    const onSignupClicked = () => {
        if (signupName.length > 0 &&
            signupEmail.length > 0 &&
            signupPassword.length > 0) {
            fetch('http://localhost:3001/api/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: signupName,
                        email: signupEmail,
                        password: signupPassword
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.uid >0){
                        signupButton()
                    }else{
                        alert('Please try again!')
                    }
                })
        } else {
            alert('Please tell me a little about you...')
        }
    }

    return (
        <div style = {{"textAlign": "center"}}>
            <div>
                <h2>Name: </h2>
                <input type="text" onChange = {(e) => setSignupName(e.target.value)}/>
            </div>
            <div>
                <h2>Email: </h2>
                <input type="text" onChange = {(e) => setSignupEmail(e.target.value)}/>
            </div>
            <div>
                <h2>Password: </h2>
                <input type="password"
                        onChange = {(e) => setSignupPassword(e.target.value)}/>
            </div>
            <div>
                <button onClick = {onSignupClicked} >Sign Up</button>
                <button onClick = {signupButton} >Log in</button>
            </div>
        </div>
    );
}

export default Signup;