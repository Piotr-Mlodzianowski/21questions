import React, {useContext, useState,} from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {DataContext} from "../../DataContext";
import "./playerScore.scss"
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table"


const PlayerScore = () => {
    const {score, currentGameData} = useContext(DataContext);
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

                            <Button className="score__button" onClick={handleClick}>Your answers</Button>
                        </>
                    }

                    {clickedButton &&
                        <div className="score__correctAnswers">
                            <Table striped bordered hover responsive className="text-center">
                                <thead className="table__head">
                                <tr>
                                    <th>Question</th>
                                    <th>Your answer</th>
                                    <th>Correct</th>
                                </tr>
                                </thead>
                                <tbody>
                                {currentGameData.map((item, index) => (
                                    <tr key={index} className="score__answerGroup">
                                        <td dangerouslySetInnerHTML={{__html: item.question}}></td>
                                        <td dangerouslySetInnerHTML={{__html: item.answer}}></td>
                                        <td dangerouslySetInnerHTML={{__html: item.isCorrect}}></td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </div>}

                </Card.Body>
            </Card>
        </Container>
    );
};

export default PlayerScore;
