import React, {useContext, useEffect, useState} from 'react';
import ScoreboardTable from './scoreboardTable'
import {DataContext} from "../../DataContext";
import ErrorModal from "../errorModal/errorModal";
//json-server database/db.json --watch

const ScoreboardFetch = () => {
    const {showErrorModal, setShowErrorModal} = useContext(DataContext);
    const [data, setData] = useState(false);

    const scoreURL = "http://localhost:3000/score"

    useEffect(() => {
        fetch(scoreURL, {
            method: "GET",
        })
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => {
                console.log(err);
                setShowErrorModal(true);
            });
    }, [])

    return (
        <>
            {showErrorModal && <ErrorModal/>}
            <ScoreboardTable data={data}/>
        </>

    );
};

export default ScoreboardFetch;