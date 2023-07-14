import React, {useContext, useState,} from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {DataContext} from "../../DataContext";
import "./playerScore.scss"
import Button from "react-bootstrap/Button";


const PlayerScore = () => {
    const {score, allQuestions} = useContext(DataContext);
    const [clickedButton, setClickedButton] = useState(false)

    const handleClick = (e) => {
        e.preventDefault();
        setClickedButton(true)
    }

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center score__container">
            <Card className="border-0 shadow p-3 mb-5 rounded score__card">
                <Card.Body className="d-flex flex-column align-items-center justify-content-between score__body">
                    {!clickedButton &&
                        <>
                            <div className="text-center score__text">
                                <p className="text text__firstLine">Your Score is</p>
                                <p className="text text__scoreLine">{score} points</p>
                                <p className="text text__lastLine">out of 21 questions</p>
                            </div>

                            <Button className="score__button" onClick={handleClick}>Correct answers</Button>
                        </>
                    }

                    {clickedButton &&
                        <div className="score__correctAnswers">
                            {
                                allQuestions.map((item, index) => (
                                    <div key={index} className="score__answerGroup">
                                        <p className="score__answerGroup--question"
                                           dangerouslySetInnerHTML={{__html: item.question}}></p>
                                        <p className="score__answerGroup--answer"
                                           dangerouslySetInnerHTML={{__html: `Correct answer: ${item.correct_answer}`}}></p>
                                    </div>
                                ))
                            }
                        </div>}

                </Card.Body>
            </Card>
        </Container>
    );
};

export default PlayerScore;
