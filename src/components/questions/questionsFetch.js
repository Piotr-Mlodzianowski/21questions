import React, {useEffect, useState, useContext} from 'react';
import {DataContext} from "../../DataContext";
import AllQuestions from "./allQuestions";

const QuestionsFetch = () => {
    const {enteredName, selectedCategory, selectedDifficulty} = useContext(DataContext);

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
            .catch(err => console.log(err));
    }, []);

    console.log(data);

    return (
        <>
            {data && <AllQuestions enteredName={enteredName} selectedCategory={selectedCategory}
                                   selectedDifficulty={selectedDifficulty} data={data}/>}
        </>
    );
};

export default QuestionsFetch;