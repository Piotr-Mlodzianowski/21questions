import React from 'react';
import ReactDOM from 'react-dom/client';
import "./scss/index.scss"
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdWzuBu-Hi-1j5p31M2a0vj33-tVhOVc8",
    authDomain: "questions-cc348.firebaseapp.com",
    databaseURL: "https://questions-cc348-default-rtdb.firebaseio.com",
    projectId: "questions-cc348",
    storageBucket: "questions-cc348.appspot.com",
    messagingSenderId: "910510601669",
    appId: "1:910510601669:web:cb057c77fee6ba83db87ac"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
