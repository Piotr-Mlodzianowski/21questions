import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SettingsDifficulty = ({setDifficulty}) => {
    const availableDifficulty = ["easy", "medium", "hard"];


    return (
        <>
            <Form.Select style={{backgroundColor: "#e5e9f0"}} className="select-background" size="lg" onChange={e => setDifficulty(e.target.value)}>
                <option disabled selected hidden>Choose difficulty</option>
                {availableDifficulty.map((item) => <option key={item.index} value={item}>{item.charAt(0).toUpperCase()
                    + item.slice(1)}</option>)}
            </Form.Select>
        </>
    );
};

export default SettingsDifficulty;