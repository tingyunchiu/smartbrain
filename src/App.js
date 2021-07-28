import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoggedIn } from './components/login/loginActions';
import { setSignedUp } from './components/signup/signupActions';
import { setUserEmail } from './userActions';

import Login from './components/login/Login.js';
import Signup from './components/signup/Signup.js';
import Home from './components/home/Home.js';


// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    loggedIn: state.Loggedin.loggedIn,
    signedUp: state.Signedup.signedUp,
    currentUser: state.GetCurrentUser.userEmail
  }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    loginButtonClick: () => dispatch(setLoggedIn()),
    signupButtonClick: () => dispatch(setSignedUp()),
    getCurrentUser: (text) => dispatch(setUserEmail(text))
  }
}

function App({ loggedIn, loginButtonClick, signedUp, signupButtonClick, currentUser, getCurrentUser}) {

	return (
		<BrowserRouter>
        	<Switch>
          		<Route exact path="/">
          			{loggedIn ? <Home loginButton = {loginButtonClick}
                                  currentUser = {currentUser}
                                  getCurrentUser = {getCurrentUser}/>
             					: <Redirect to="/login" /> }
          		</Route>
          		<Route exact path="/login">
             		{signedUp ? (loggedIn ? <Redirect to="/" />
                                      : <Login loginButton = {loginButtonClick}
                                               signupButton = {signupButtonClick}
                                              getCurrentUser = {getCurrentUser}
                                              />)
                          :  <Redirect to="/signup" />
                }
          		</Route>
              <Route exact path="/signup" >
                {signedUp ? <Redirect to="/login" />
                        : <Signup loginButton = {loginButtonClick}
                                  signupButton = {signupButtonClick}
                          />
                }
              </Route>
        	</Switch>
        </BrowserRouter>
  	);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
