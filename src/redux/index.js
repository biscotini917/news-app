import { combineReducers } from 'redux';
import channels from './channels';
import * as firebase from 'firebase';
import { config } from '../secrets';

export default combineReducers({ channels });

firebase.initializeApp(config);

export const database = firebase.database();
