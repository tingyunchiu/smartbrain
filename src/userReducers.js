import {
  CHANGE_USEREMAIL
 } from './constants';

const initialStateUserEmail = {
  userEmail: ''
}

export const GetCurrentUser = (state=initialStateUserEmail, action={}) => {
  switch (action.type) {
    case  CHANGE_USEREMAIL:
      return Object.assign({}, state, {userEmail:  action.payload})
    default:
      return state
  }
}