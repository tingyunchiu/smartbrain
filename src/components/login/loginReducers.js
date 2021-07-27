import {
  CHANGE_LOGGEDIN
 } from '../../constants';

const initialStateLoggedin = {
  loggedIn: false
}

export const Loggedin = (state=initialStateLoggedin, action={}) => {
  switch (action.type) {
    case CHANGE_LOGGEDIN:
      return Object.assign({}, state, {loggedIn: !state.loggedIn})
    default:
      return state
  }
}