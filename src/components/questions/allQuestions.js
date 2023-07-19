import React, {useContext, useEffect} from "react";
import CurrentQuestion from "./currentQuestion"
import {DataContext} from "../../DataContext";

const AllQuestions = () => {


    const {allQuestions, setAllQuestions, fetchedQuestions} = useContext(DataContext);


    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        setAllQuestions(shuffle(fetchedQuestions.results));
    }, [])

    console.log(allQuestions);

    return (
        <>
            {allQuestions && <CurrentQuestion/>}
        </>
    );
};

export default AllQuestions;