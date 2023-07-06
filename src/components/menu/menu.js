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
        <>
            <nav>
                <button onClick={handleNewGameClick}>New game</button>
                <button onClick={handleScoreboardClick}>Scoreboard</button>
            </nav>
        </>
    );
};

export default Menu;


