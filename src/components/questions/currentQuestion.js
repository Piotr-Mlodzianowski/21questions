import React, {useContext, useEffect, useState} from "react";
import {DataContext} from "../../DataContext";
import {useNavigate} from "react-router-dom";

export const CurrentQuestion = ({enteredName, selectedCategory, selectedDifficulty, questions}) => {
    const [state, setState] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [questionCounter, setQuestionCounter] = useState(1);
    const [chosenAnswer, setChosenAnswer] = useState(null);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [sendScore, setSendScore] = useState([]);
    const {score, setScore} = useContext(DataContext);

    const navigate = useNavigate();

    useEffect(() => {
        setCurrentQuestion(() => {
            return questions[questionCounter];
        });
        setState(true);
    }, [questionCounter]);

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        if (state && currentQuestion) {
            const allAnswers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
            setShuffledAnswers(shuffle(allAnswers));
        }
    }, [currentQuestion, state]);


    const handleNext = e => {
        e.preventDefault();
        if (chosenAnswer === currentQuestion.correct_answer) {
            setScore((prevState) => prevState + 1);
        }
        setQuestionCounter((prevState) => prevState + 1);
        setChosenAnswer(null);
    };

    console.log(score);
    console.log(chosenAnswer);

    const handleLastQuestion = async e => {
        e.preventDefault();

        const newScore = {
            "name": enteredName,
            "category": selectedCategory,
            "difficulty": selectedDifficulty,
            "score": `${score}pts`
        };

        if (chosenAnswer === currentQuestion.correct_answer) {
            setScore((prevState) => prevState + 1);
            newScore.score = `${score + 1}pts`;
        }

        await fetch(`http://localhost:3000/score`, {
            method: "POST",
            body: JSON.stringify(newScore),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            if (response.ok) {
                setSendScore(prevState => [...prevState, newScore]);
            }
            return response.json();
        }).then(data => {
            console.log(data);
        });
        setChosenAnswer(null);
        navigate("/playerscore");
    };

    const checkButton = questionCounter === 3 ?
        <button className="btn btn-primary" onClick={handleLastQuestion}>Score</button> :
        <button className="btn btn-primary" onClick={handleNext}>Next question</button>;

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="card shadow-sm bg-white rounded p-4 mx-md-5">
                {!state && <div>Ładuję pytanie</div>}
                {state && (
                    <>
                        <p className="mb-4 fs-4 text-center">{currentQuestion.question}</p>
                        <form>
                            <div>
                                {shuffledAnswers.map((item) => (
                                    <div className="form-check" key={item.index}>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id={item}
                                            name="answer"
                                            value={item}
                                            checked={chosenAnswer === item}
                                            onChange={(e) => setChosenAnswer(e.target.value)}
                                        />
                                        <label className="form-check-label" htmlFor={item}>
                                            {item}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            {chosenAnswer ? checkButton : <button hidden>Next question</button>}
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default CurrentQuestion;


