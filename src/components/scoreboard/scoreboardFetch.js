import React, {useContext, useEffect, useState} from 'react';
import ScoreboardTable from './scoreboardTable'
import {DataContext} from "../../DataContext";
import ErrorModal from "../errorModal/errorModal";
//json-server database/db.json --watch

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

import { collection, getDocs } from "firebase/firestore";

const ScoreboardFetch = () => {
    const {showErrorModal, setShowErrorModal, setFetchedScores} = useContext(DataContext);
    const [data, setData] = useState(false);

    // Your web app's Firebase configuration
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

    const scoreURL = "http://localhost:3000/score"

    useEffect(() => {


        getDocs(collection(db, "scores"))
            //.then(response => response.json())
            .then(collection => {
                let array = []
                collection.forEach((doc) => {
                    array.push(doc.data());
                    //console.log(`${doc.id} => ${doc.data()}`);
                });

                setFetchedScores(array);
                setData(true);
            })
            .catch(err => {
                console.log(err);
                setShowErrorModal(true);
            });
    }, [])

    return (
        <>
            {showErrorModal && <ErrorModal/>}
            {data && <ScoreboardTable/>}
        </>

    );
};

export default ScoreboardFetch;