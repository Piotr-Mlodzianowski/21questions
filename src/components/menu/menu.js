import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {DataContext} from "../../DataContext";

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
        <>
            <nav>
                <button onClick={handleNewGameClick}>New game</button>
                <button onClick={handleScoreboardClick}>Scoreboard</button>
            </nav>
        </>
    );
};

export default Menu;


