import React, {useContext, useEffect, useState} from 'react';
import ScoreboardTable from './scoreboardTable'
import {DataContext} from "../../DataContext";
import ErrorModal from "../errorModal/errorModal";
//json-server database/db.json --watch

const ScoreboardFetch = () => {
    const {showErrorModal, setShowErrorModal, setFetchedScores} = useContext(DataContext);
    const [data, setData] = useState(false);

    const scoreURL = "http://localhost:3000/score"

    useEffect(() => {
        fetch(scoreURL, {
            method: "GET",
        })
            .then(response => response.json())
            .then(data => {
                setFetchedScores(data);
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