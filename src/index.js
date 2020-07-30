import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyBE5j_Z1JBWLizTEVqD2P2p0GriMorHhFg",
  authDomain: "todo-6456d.firebaseapp.com",
  databaseURL: "https://todo-6456d.firebaseio.com",
  projectId: "todo-6456d",
  storageBucket: "todo-6456d.appspot.com",
  messagingSenderId: "375730210835",
  appId: "1:375730210835:web:e23b7abd6328933ce897e6",
  measurementId: "G-J16NF8WP4E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
