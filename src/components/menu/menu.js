import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {DataContext} from "../../DataContext";

const Menu = () => {
    const {setEnteredName, setSelectedCategory, setSelectedDifficulty, setScore} = useContext(DataContext);
    const navigation = useNavigate();
    const handleNewGameClick = () => {
        setEnteredName("");
        setSelectedCategory("");
        setSelectedDifficulty("");
        setScore(0);
        navigation("/settings");
    };

    const handleScoreboardClick = () => {
        navigation("/scoreboard")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container d-flex justify-content-center">
                <button className="btn btn-primary me-2" onClick={handleNewGameClick}>
                    New Game
                </button>
                <button className="btn btn-secondary" onClick={handleScoreboardClick}>
                    Scoreboard
                </button>
            </div>
        </nav>
    );
};

export default Menu;


