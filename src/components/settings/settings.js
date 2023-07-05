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
        <>
            <div style={{display: "flex", flexDirection: "column"}}>
                <SettingsName setName={setEnteredName}/>
                <SettingsCategory setCategory={setSelectedCategory}/>
                <SettingsDifficulty setDifficulty={setSelectedDifficulty}/>
            </div>

            <div>
                {enteredName && selectedCategory && selectedDifficulty ? <SettingsPlayButton/> :
                    <button disabled>Play</button>}
            </div>
        </>
    );
};

export default Settings;