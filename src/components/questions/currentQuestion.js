import React, {useContext, useEffect, useState} from "react";
import {DataContext} from "../../DataContext";
import {useNavigate} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import "./currentQuestion.scss"

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
            "score": `${score}`
        };

        if (chosenAnswer === currentQuestion.correct_answer) {
            setScore((prevState) => prevState + 1);
            newScore.score = `${score + 1}`;
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
        <Button className="btn btn-primary question__button" onClick={handleLastQuestion}>Score</Button> :
        <Button className="btn btn-primary question__button" onClick={handleNext}>Next question</Button>;

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center question__container">
            <Card className="border-0 shadow p-3 mb-5 rounded question__card">
                <Card.Body className="d-flex flex-column align-items-center justify-content-between question__cardBody">
                    {!state && <div>Ładuję pytanie</div>}
                    {state && (
                        <>
                            <div className="question__number">Question {questionCounter} of 21
                            </div>
                            <p className="mb-4 fs-4 text-center">
                                <div dangerouslySetInnerHTML={{__html: currentQuestion.question}}></div>
                            </p>
                            <Form>
                                <div className="answers">
                                    {shuffledAnswers.map((item) => (
                                        <div className="form-check" key={item.index}>
                                            <input
                                                className="answers__radio"
                                                type="radio"
                                                id={item}
                                                name="answer"
                                                value={item}
                                                checked={chosenAnswer === item}
                                                onChange={(e) => setChosenAnswer(e.target.value)}
                                            />
                                            <label className="form-check-label answers__label" htmlFor={item}
                                                   dangerouslySetInnerHTML={{__html: item}}/>
                                        </div>
                                    ))}
                                </div>
                            </Form>
                        </>
                    )}
                    {chosenAnswer ? checkButton :
                        <Button variant="secondary" className="question__button" disabled>Next
                            question</Button>}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CurrentQuestion;


