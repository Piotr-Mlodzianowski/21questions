import React, {useContext, useEffect, useState} from 'react';
import ScoreboardTable from './scoreboardTable'
import {DataContext} from "../../DataContext";
import ErrorModal from "../errorModal/errorModal";
//json-server database/db.json --watch
import db from "../../index";
import "../../scss/loading.scss"


import { collection, getDocs } from "firebase/firestore";

const ScoreboardFetch = () => {
    const {showErrorModal, setShowErrorModal, setFetchedScores} = useContext(DataContext);
    const [data, setData] = useState(false);

    const scoreURL = "http://localhost:3000/score"

    useEffect(() => {
        getDocs(collection(db, "scores"))
            .then(collection => {
                let array = []
                collection.forEach((doc) => {
                    array.push(doc.data());
                });
                setFetchedScores(array);
                setData(true);
            })
            .catch(err => {
                console.log(err);
                setShowErrorModal(true);
            });
    }, []);

    return (
        <>
            {showErrorModal && <ErrorModal/>}
            {!data && <div
                className="d-flex flex-column align-items-center justify-content-center loading__container">
                <div className="loading__animation"></div>
            </div>}
            {data && <ScoreboardTable/>}
        </>

    );
};

export default ScoreboardFetch;