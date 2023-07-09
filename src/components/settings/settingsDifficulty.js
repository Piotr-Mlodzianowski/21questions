import React from "react";

const SettingsDifficulty = ({setDifficulty}) => {
    const availableDifficulty = ["easy", "medium", "hard"];


    return (
        <>
            <select className="form-select form-select-lg mb-3" name="difficulty" id="difficulty" placeholder="Select difficulty"
                    onChange={e => setDifficulty(e.target.value)}>
                <option value="" disabled selected hidden>Choose difficulty</option>
                {availableDifficulty.map((item) => <option key={item.index} value={item}>{item}</option>)}
            </select>
        </>
    );
};

export default SettingsDifficulty;