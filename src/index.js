import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import {FirebaseApp} from './App';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB2kR8bG77BibtbSdkRZ_MTHS0gU8GD8zY",
    authDomain: "jobtogo-504b3.firebaseapp.com",
    databaseURL: "https://jobtogo-504b3.firebaseio.com",
    projectId: "jobtogo-504b3",
    storageBucket: "jobtogo-504b3.appspot.com",
    messagingSenderId: "837084623308"
  };
  firebase.initializeApp(config);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
