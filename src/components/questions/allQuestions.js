import React, {useContext, useEffect, useState} from "react";
import CurrentQuestion from "./currentQuestion"
import {DataContext} from "../../DataContext";

const AllQuestions = ({enteredName, selectedCategory, selectedDifficulty, data}) => {


    const {allQuestions, setAllQuestions} = useContext(DataContext);

    useEffect(() => {
        setAllQuestions(data.results);
    }, [])

    console.log(allQuestions);

    return (
        <>
            {allQuestions && <CurrentQuestion enteredName={enteredName} selectedCategory={selectedCategory}
                                              selectedDifficulty={selectedDifficulty} questions={allQuestions}/>}
        </>
    );
};

export default AllQuestions;