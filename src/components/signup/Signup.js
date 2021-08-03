import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import { TextField  } from '@material-ui/core';
import { Button } from '@material-ui/core';

function Signup({ signupButton }) {
    const [signupName, setSignupName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');

    const onSignupClicked = () => {
        if (signupName.length > 0 &&
            signupEmail.length > 0 &&
            signupPassword.length > 0) {
            fetch('https://fathomless-journey-15048.herokuapp.com/api/signup', {
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
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Card>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                        Welcome! Just a few steps to join.
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body2" >Name</Typography>
                    <TextField required
                                id="standard-required-name"
                                label="Required"
                                onChange = {(e) => setSignupName(e.target.value)}
                    />
                </CardContent>
                <CardContent>
                    <Typography variant="body2" >Email</Typography>
                    <TextField required
                                id="standard-required"
                                label="Required"
                                onChange = {(e) => setSignupEmail(e.target.value)}
                    />
                </CardContent>
                <CardContent>
                    <Typography variant="body2" >Password</Typography>
                    <TextField required
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                onChange = {(e) => setSignupPassword(e.target.value)}
                    />
                </CardContent>
                <CardActions>
                    <Button variant="outlined" color="secondary" onClick = {onSignupClicked}>Sign up
                    </Button>
                    <Button variant="outlined" color="primary" onClick = {signupButton}>Log in
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default Signup;