import React, {useContext} from "react";
import Button from 'react-bootstrap/Button';
import {DataContext} from "../../DataContext";
import "./settingsDifficulty.scss";

const SettingsDifficulty = () => {

    const {selectedDifficulty, setSelectedDifficulty} = useContext(DataContext);


    const handleClick = (e, level) => {
        e.preventDefault();
        setSelectedDifficulty(level);
    };

    return (
        <>
            <div className="d-flex justify-content-between difficulty__container">
                <Button
                    size="lg"
                    variant={selectedDifficulty === "easy" ? "success" : "outline-info"}
                    onClick={(e) => handleClick(e, "easy")}
                    className="difficulty__btn difficulty__btn--easy"
                >
                    Easy
                </Button>
                <Button
                    size="lg"
                    variant={selectedDifficulty === "medium" ? "warning" : "outline-warning"}
                    onClick={(e) => handleClick(e, "medium")}
                    className="difficulty__btn difficulty__btn--medium"
                >
                    Medium
                </Button>
                <Button
                    size="lg"
                    variant={selectedDifficulty === "hard" ? "danger" : "outline-danger"}
                    onClick={(e) => handleClick(e, "hard")}
                    className="difficulty__btn difficulty__btn--hard"
                >
                    Hard
                </Button>
            </div>
        </>
    );
};

export default SettingsDifficulty;