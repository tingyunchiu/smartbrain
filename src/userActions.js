import {
  CHANGE_USEREMAIL
 } from './constants';

export const setUserEmail = (text) => ({
	type: CHANGE_USEREMAIL,
	payload: text
	})