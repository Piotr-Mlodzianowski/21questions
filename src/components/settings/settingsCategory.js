import React, {useContext, useEffect} from "react";
import {DataContext} from "../../DataContext";
import Form from 'react-bootstrap/Form';


const SettingsCategory = () => {
    const {data, setSelectedCategory, showCategories} = useContext(DataContext);

    return (
        <>
            {!data && <div>Loading data</div>}
            {!data && <div>Loading data</div>}
            {showCategories &&
                <Form.Select style={{backgroundColor: "#e5e9f0"}} size="lg" onChange={e => setSelectedCategory(e.target.value)}>
                    <option disabled selected hidden>Choose category</option>
                    {showCategories.map(item => (<option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </Form.Select>}
        </>
    )
};

export default SettingsCategory;