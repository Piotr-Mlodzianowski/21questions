import React, {useContext, useEffect} from "react";
import {DataContext} from "../../DataContext";
import Form from 'react-bootstrap/Form';
import ErrorModal from "../errorModal/errorModal";

const SettingsCategory = ({setCategory}) => {
    const {data, setData, showErrorModal, setShowErrorModal} = useContext(DataContext);

    const categoryURL = "https://opentdb.com/api_category.php";

    useEffect(() => {
        fetch(categoryURL, {
            method: "GET",
        })
            .then(response => response.json())
            .then(data => setData(data.trivia_categories))
            .catch(err => {
                console.log(err);
                setShowErrorModal(true);
            });
    }, []);

    return (
        <>
            {showErrorModal && <ErrorModal/>}
            {!data && <div>Loading data</div>}
            {data &&
                <Form.Select style={{backgroundColor: "#e5e9f0"}} size="lg" onChange={e => setCategory(e.target.value)}>
                    <option disabled selected hidden>Choose category</option>
                    {data.map(item => (<option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </Form.Select>}
        </>
    )
};

export default SettingsCategory;