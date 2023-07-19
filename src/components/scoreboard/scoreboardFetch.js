import React, {useContext, useEffect, useState} from 'react';
import ScoreboardTable from './scoreboardTable'
import {DataContext} from "../../DataContext";
import ErrorModal from "../errorModal/errorModal";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
//json-server database/db.json --watch

const ScoreboardFetch = () => {
    const { showErrorModal, setShowErrorModal, setFetchedScores } = useContext(DataContext);
    const [data, setData] = useState(false);

    useEffect(() => {
        // Get Firestore reference from the initialized Firebase app
        const db = firebase.firestore();

        (async () => {
            try {
                // Fetch scores from Firestore
                const scoresCollection = await db.collection('scores').get();
                const scoresData = scoresCollection.docs.map((doc) => doc.data());

                // Update state with fetched scores
                setFetchedScores(scoresData);
                setData(true);
            } catch (error) {
                console.error('Error fetching scores from Firestore:', error);
                setShowErrorModal(true);
            }
        })();
    }, []);

    return (
        <>
            {showErrorModal && <ErrorModal />}
            {data && <ScoreboardTable />}
        </>
    );
};


export default ScoreboardFetch;