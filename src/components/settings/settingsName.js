import React from "react";
import Form from "react-bootstrap/Form";

const SettingsName = ({setName}) => {

    return (
        <Form.Control style={{backgroundColor: "#e5e9f0"}} size="lg" placeholder="Enter your name"
                      onChange={(e) => setName(e.target.value)}/>
    );
};

export default SettingsName;