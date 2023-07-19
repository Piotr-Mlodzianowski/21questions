import React, {useContext, useEffect, useState} from "react";
import CurrentQuestion from "./currentQuestion"
import {DataContext} from "../../DataContext";

const AllQuestions = ({enteredName, selectedCategory, selectedDifficulty, data}) => {


    const {allQuestions, setAllQuestions} = useContext(DataContext);

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        setAllQuestions(shuffle(data.results));
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