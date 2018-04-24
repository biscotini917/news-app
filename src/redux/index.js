import { combineReducers } from 'redux';
import channels from './channels';
import stations from './stations';
import * as firebase from 'firebase';

export default combineReducers({ channels, stations });

const config = {
  apiKey: 'AIzaSyBImly3hqJBT5jWU9jPuugM6KUoBa9dBxU',
  authDomain: 'newsapp-f3dbd.firebaseapp.com',
  databaseURL: 'https://newsapp-f3dbd.firebaseio.com',
  projectId: 'newsapp-f3dbd',
  storageBucket: 'newsapp-f3dbd.appspot.com',
  messagingSenderId: '106302969492'
};

firebase.initializeApp(config);

export const database = firebase.database();
