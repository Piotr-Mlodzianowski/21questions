import React, {useContext} from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {DataContext} from "../../DataContext";
import "./menu.scss";

const Menu = () => {
    const {setEnteredName, setSelectedCategory, setSelectedDifficulty, setScore, setAllQuestions, setCurrentGameData} = useContext(DataContext);
    const navigation = useNavigate();
    const handleNewGameClick = () => {
        setEnteredName("");
        setSelectedCategory("");
        setSelectedDifficulty("");
        setScore(0);
        setAllQuestions(false);
        setCurrentGameData([]);
        navigation("/settings");
    };

    const handleScoreboardClick = () => {
        navigation("/scoreboard")
    }

    return (
        <Navbar className="navbar__size" expand="lg">
            <Container id="navbar-nav" className="justify-content-center">
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" className="me-2 menuBtn__newGame" size="lg" onClick={handleNewGameClick}>
                            New Game
                        </Button>
                        <Button variant="secondary" size="lg menuBtn__score" onClick={handleScoreboardClick}>
                            Scoreboard
                        </Button>
                    </div>
            </Container>
        </Navbar>
    );
};

export default Menu;


