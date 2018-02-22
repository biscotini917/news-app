import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import * as firebase from 'firebase';
import { config } from './secrets';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

firebase.initializeApp(config);

const database = firebase.database();

export default database;
