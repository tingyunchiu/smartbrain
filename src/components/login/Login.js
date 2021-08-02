import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import { TextField  } from '@material-ui/core';
import { Button } from '@material-ui/core';

function Login({loginButton, signupButton, getCurrentUser} ) {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const onLoginClicked = () => {
        fetch('https://fathomless-journey-15048.herokuapp.com/api/login', {
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
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Card>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                        So Happy to see you again!
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body2" >Email</Typography>
                    <TextField required
                                    id="standard-required"
                                    label="Required"
                                    onChange = {(e) => setLoginEmail(e.target.value)}
                    />
                </CardContent>
                <CardContent>
                    <Typography variant="body2" >Password</Typography>
                    <TextField required
                                    id="standard-password-input"
                                    label="Password"
                                    type="password"
                                    onChange = {(e) => setLoginPassword(e.target.value)}
                    />
                </CardContent>
                <CardActions>
                    <Button variant="outlined" color="primary" onClick = {onLoginClicked}>Log in
                    </Button>
                    <Button variant="outlined" color="secondary" onClick = {signupButton}>Sign up
                    </Button>
                </CardActions>
            </Card>
        </Grid>
  	)
}

export default Login;