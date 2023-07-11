import React, {useContext} from 'react';
import {DataContext} from "../../DataContext";
import SettingsName from "./settingsName";
import SettingsCategory from "./settingsCategory";
import SettingsDifficulty from "./settingsDifficulty";
import SettingsPlayButton from "./settingsPlayButton";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import "./settings.scss";

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
        <Container className="d-flex flex-column align-items-center justify-content-center settings__container">
            <Card className="border-0 shadow p-3 mb-5 rounded settings__card">
                <Card.Body className="settings__cardBody">
                    <Form className="d-flex flex-column align-items-center justify-content-center gap-4">
                        <SettingsName setName={setEnteredName}/>
                        <SettingsCategory setCategory={setSelectedCategory}/>
                        <SettingsDifficulty setDifficulty={setSelectedDifficulty}/>
                        {enteredName && selectedCategory && selectedDifficulty ? (
                            <SettingsPlayButton/>
                        ) : (
                            <Button className="settings__playButton" variant="outline-success" size="lg" disabled>
                                Play
                            </Button>
                        )}
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};



export default Settings;