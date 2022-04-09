import { combineReducers } from 'redux';

import auth from './auth/authReducer';
import contacts from './contacts/contactsReducer';


export default combineReducers({ auth, contacts });
