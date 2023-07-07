import React, {useContext} from 'react';
import {DataContext} from "../../DataContext";
import SettingsName from "./settingsName";
import SettingsCategory from "./settingsCategory";
import SettingsDifficulty from "./settingsDifficulty";
import SettingsPlayButton from "./settingsPlayButton";

const Settings = () => {
    const {
        enteredName,
        setEnteredName,
        selectedCategory,
        setSelectedCategory,
        selectedDifficulty,
        setSelectedDifficulty
    } = useContext(DataContext);

    console.log(enteredName);
    console.log(selectedCategory);
    console.log(selectedDifficulty);

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
            <div className="card shadow-sm rounded p-4 mx-lg-5">
                <div className="mb-4">
                    <SettingsName setName={setEnteredName} />
                </div>
                <div className="mb-4">
                    <SettingsCategory setCategory={setSelectedCategory} />
                </div>
                <div className="mb-4">
                    <SettingsDifficulty setDifficulty={setSelectedDifficulty} />
                </div>
                <div className="d-flex justify-content-lg-center">
                    {enteredName && selectedCategory && selectedDifficulty ? (
                        <SettingsPlayButton />
                    ) : (
                        <button className="btn btn-success btn-lg" disabled>
                            Play
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Settings;