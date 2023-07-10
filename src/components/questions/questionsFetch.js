import React, {useEffect, useState, useContext} from 'react';
import {DataContext} from "../../DataContext";
import AllQuestions from "./allQuestions";
import ErrorModal from "../errorModal/errorModal";

const QuestionsFetch = () => {
    const {enteredName, selectedCategory, selectedDifficulty, showErrorModal, setShowErrorModal} = useContext(DataContext);

    const apiUrl = `https://opentdb.com/api.php?amount=21&category=${selectedCategory}&difficulty=${selectedDifficulty}&type=multiple`
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(apiUrl, {
            method: "GET",
        })
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(err => {
                console.log(err);
                setShowErrorModal(true);
            });
    }, []);

    console.log(data);

    return (
        <>
            {showErrorModal && <ErrorModal/>}
            {data && <AllQuestions enteredName={enteredName} selectedCategory={selectedCategory}
                                   selectedDifficulty={selectedDifficulty} data={data}/>}
        </>
    );
};

export default QuestionsFetch;