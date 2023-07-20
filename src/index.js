import React from 'react';
import ReactDOM from 'react-dom/client';
import "./scss/index.scss"
import App from './App';
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC_kv26-i6CASXEMXHDvkVc3OJxtz1H-z8",
    authDomain: "questions-v1-ee48e.firebaseapp.com",
    projectId: "questions-v1-ee48e",
    storageBucket: "questions-v1-ee48e.appspot.com",
    messagingSenderId: "434024317922",
    appId: "1:434024317922:web:7c924c2e0b21e41ac0afbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

export default db;