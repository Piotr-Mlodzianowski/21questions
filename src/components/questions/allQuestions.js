import React, {useEffect, useState} from "react";
import CurrentQuestion from "./currentQuestion"

const AllQuestions = ({enteredName, selectedCategory, selectedDifficulty, data}) => {


    const [allQuestions, setAllQuestions] = useState(false);

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