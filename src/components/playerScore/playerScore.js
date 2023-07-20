import React, {useContext, useState,} from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {DataContext} from "../../DataContext";
import "./playerScore.scss"
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const PlayerScore = () => {
    const {score, currentGameData} = useContext(DataContext);
    const [clickedButton, setClickedButton] = useState(false)

    const handleClick = (e) => {
        e.preventDefault();
        setClickedButton(true)
    }

    return (
        <Container className="d-flex flex-column justify-content-center score__container">
            <Row className="justify-content-center">
                <Col Col xxs={12} md={10} lg={7}>
                    <Card className="border-0 shadow p-3 mb-5 rounded score__card">
                        <Card.Body
                            className="d-flex flex-column align-items-center justify-content-between score__body">
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
                                    <table className="table table-striped table-hover text-center">
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
                                    </table>
                                </div>}

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PlayerScore;
