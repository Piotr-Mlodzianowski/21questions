import React, {useContext,} from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {DataContext} from "../../DataContext";
import "./playerScore.scss"


const PlayerScore = () => {
    const {score} = useContext(DataContext);



    return (
        <Container className="d-flex flex-column align-items-center justify-content-center score__container">
            <Card className="border-0 shadow p-3 mb-5 rounded score__card">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center score__cardBody">
                    <div className="text-center score__text">
                        <p className="text text__firstLine">Your Score is</p>
                        <p className="text text__scoreLine">{score} points</p>
                        <p className="text text__lastLine">out of 21 questions</p>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default PlayerScore;