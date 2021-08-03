import React from 'react';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Greeting from './greeting/Greeting.js';
import Record from './record/Record.js';
import Text from './text/Text.js';

function Home({loginButton, currentUser, getCurrentUser}) {

    const onLogoutclick = () => {
        getCurrentUser({});
        loginButton()
    }

    return (
		<div style = {{"textAlign": "center"}}>
    		<div style = {{"margin": "20px"}}>
                <Button variant="outlined" color="primary" onClick={onLogoutclick}>
                    Log out
                </Button>
            </div>
            <div style = {{"margin": "20px"}}>
                <Greeting userName = {currentUser.name}/>
            </div>
            <div style = {{"margin": "20px"}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm = {6}>
                        <Text userid = {currentUser.uid}/>
                    </Grid>
                    <Grid item xs={12} sm = {6}>
                        <Record userid = {currentUser.uid}/>
                    </Grid>
                </Grid>
            </div>
    	</div>
  	)
}

export default Home;