import React, {useContext, useEffect} from "react";
import {DataContext} from "../../DataContext";
import Form from 'react-bootstrap/Form';


const SettingsCategory = () => {
    const {data, setSelectedCategory} = useContext(DataContext);

    return (
        <>
            {!data && <div>Loading data</div>}
            {data &&
                <Form.Select style={{backgroundColor: "#e5e9f0"}} size="lg" onChange={e => setSelectedCategory(e.target.value)}>
                    <option disabled selected hidden>Choose category</option>
                    {data.map(item => (<option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </Form.Select>}
        </>
    )
};

export default SettingsCategory;