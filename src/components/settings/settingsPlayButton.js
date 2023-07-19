import React, {useContext} from "react";
import {DataContext} from "../../DataContext";
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./settings.scss";

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
            <Button className="settings__playButton" variant="success" size="lg" onClick={handleClick}>Play</Button>
        </>
    );
};

export default SettingsPlayButton;