import {
  CHANGE_SIGNEDUP
 } from '../../constants';

const initialStateSignedup = {
  signedUp: true
}

export const Signedup = (state=initialStateSignedup, action={}) => {
  switch (action.type) {
    case CHANGE_SIGNEDUP:
      return Object.assign({}, state, {signedUp: !state.signedUp})
    default:
      return state
  }
}