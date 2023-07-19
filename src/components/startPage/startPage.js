import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "./startPage.scss"

const StartPage = () => {

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center start__container">
            <h1 className="display-4 text-center start__logo">21<span className="text-primary">questions</span></h1>
            <div className="mt-4">
                <a href="/settings">
                    <Button className="start__btn" variant="outline-success" size="lg">Play</Button>
                </a>
            </div>
        </Container>
    );
};

export default StartPage;