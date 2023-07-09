import React from "react";

const SettingsName = ({setName}) => {

    return (
        <>
            <input className="form-control" type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
        </>
    );
};

export default SettingsName;