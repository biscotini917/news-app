import { combineReducers } from 'redux';
import channels from './channels';
import stations from './stations';
import * as firebase from 'firebase';
import { config } from '../secrets';

export default combineReducers({ channels, stations });

firebase.initializeApp(config);

export const database = firebase.database();
