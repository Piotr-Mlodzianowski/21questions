import React, {useContext} from "react";
import Form from "react-bootstrap/Form";
import {DataContext} from "../../DataContext";

const SettingsName = () => {
    const {setEnteredName} = useContext(DataContext);

    return (
        <Form.Control style={{backgroundColor: "#e5e9f0"}} size="lg" placeholder="Enter your name"
                      onChange={(e) => setEnteredName(e.target.value)}/>
    );
};

export default SettingsName;