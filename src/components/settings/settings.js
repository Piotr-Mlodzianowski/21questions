import React, {useContext, useEffect, useState} from 'react';
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
import "../../scss/loading.scss"
import ErrorModal from "../errorModal/errorModal";

const Settings = () => {
    const {
        data,
        setData,
        enteredName,
        selectedCategory,
        selectedDifficulty,
        showErrorModal,
        setShowErrorModal
    } = useContext(DataContext);

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

    console.log(enteredName);
    console.log(selectedCategory);
    console.log(selectedDifficulty);

    return (<>
            {showErrorModal && <ErrorModal/>}
            {!data && <div className="d-flex flex-column align-items-center justify-content-center loading__container">
                <div className="loading__animation"></div>
            </div>}
            {data &&
                <Container className="d-flex flex-column align-items-center justify-content-center settings__container">
                    <Card className="border-0 shadow p-3 mb-5 rounded  settings__card">
                        <Card.Body className="settings__cardBody">
                            <Form className="d-flex flex-column align-items-center justify-content-center gap-4">
                                <SettingsName/>
                                <SettingsCategory/>
                                <SettingsDifficulty/>
                                {enteredName && selectedCategory && selectedDifficulty ? (
                                    <SettingsPlayButton/>
                                ) : (
                                    <Button className="settings__playButton" variant="outline-success" size="lg"
                                            disabled>
                                        Play
                                    </Button>
                                )}
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            }
        </>
    );
};


export default Settings;