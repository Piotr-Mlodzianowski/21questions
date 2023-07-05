import React, {useContext} from "react";
import {DataContext} from "../../DataContext";
import {useNavigate} from "react-router-dom";

const SettingsPlayButton = () => {
    const {enteredName, selectedCategory, selectedDifficulty} = useContext(DataContext);
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        if (enteredName && selectedCategory && selectedDifficulty) {
            navigate("/game");
        }
    };

    return (
        <>
            <button onClick={handleClick}>Play</button>
        </>
    );
};

export default SettingsPlayButton;