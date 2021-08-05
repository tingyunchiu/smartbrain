import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Greeting from './greeting/Greeting.js';
import Record from './record/Record.js';
import Text from './text/Text.js';

function Home({loginButton, currentUser, getCurrentUser}) {
    const [score, setScore] = useState(0);
    const [records, setRecords] = useState([]);
    const didMount = useRef(false);
    const userid = currentUser.uid;

    const onLogoutclick = () => {
        getCurrentUser({});
        loginButton()
    }

    const settingScore = (s) => {
        setScore(s)
    }

    useEffect(() => {
        if (didMount.current) {
            fetch('https://fathomless-journey-15048.herokuapp.com/api/scores', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    uid: userid,
                    scores: score
                })
            })
            .then(response =>response.json())
            .then(data => {
                alert('The score of: ' + score + ' has been added!')
                return fetch('https://fathomless-journey-15048.herokuapp.com/api/home/' + data.uid)
            })
            .then(response =>response.json())
            .then(data => {
                setRecords(data);
            })
            .catch(err =>  {
                alert('unable to get score')
            })

        } else {
            fetch('https://fathomless-journey-15048.herokuapp.com/api/home/' + userid)
            .then(response =>response.json())
            .then(data => {
                setRecords(data);
            })
            .catch(err =>  {
                alert('unable to get score')
            })
            didMount.current = true;
        }
    }, [score, userid])

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
                        <Text score = {score} settingScore ={settingScore}/>
                    </Grid>
                    <Grid item xs={12} sm = {6}>
                        <Record records = {records}/>
                    </Grid>
                </Grid>
            </div>
    	</div>
  	)
}

export default Home;