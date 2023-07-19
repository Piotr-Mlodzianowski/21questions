import React, { useContext, useEffect, useState } from 'react';
import ScoreboardTable from './scoreboardTable';
import { DataContext } from '../../DataContext';
import ErrorModal from '../errorModal/errorModal';
import { ref, get, orderByChild, query } from 'firebase/database';
import { db } from '../../index.js';

const ScoreboardFetch = () => {
    const { showErrorModal, setShowErrorModal, setFetchedScores } = useContext(DataContext);
    const [data, setData] = useState(false);

    useEffect(() => {
        const scoresRef = ref(db, 'scores');

        // Create a query to order by a child key ('score' in this case) to get the data in ascending order of score
        const scoresQuery = query(scoresRef, orderByChild('score'));

        // Fetch data once from the database
        get(scoresQuery)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const scoresData = Object.values(snapshot.val());
                    setFetchedScores(scoresData);
                    setData(true);
                } else {
                    console.log('No data available');
                }
            })
            .catch((error) => {
                console.error('Error retrieving scores:', error);
                setShowErrorModal(true);
            });

        // No need to set up a listener, as get fetches data once

    }, [setFetchedScores, setShowErrorModal]);

    return (
        <>
            {showErrorModal && <ErrorModal />}
            {data && <ScoreboardTable />}
        </>
    );
};

export default ScoreboardFetch;
