import {useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {DataContext} from "../../DataContext";
import {useNavigate} from "react-router-dom";

const ErrorModal = () => {
    const {
        setEnteredName,
        setSelectedCategory,
        setSelectedDifficulty,
        setScore,
        showErrorModal,
        setShowErrorModal
    } = useContext(DataContext);

    const navigation = useNavigate();

    const handleNewGameClick = (e) => {
        e.preventDefault();
        console.log("New game button clicked");
        setEnteredName("");
        setSelectedCategory("");
        setSelectedDifficulty("");
        setScore(0);
        navigation("/start");
    };

    return (
        <>
            <Modal
                show={showErrorModal}
                onHide={() => setShowErrorModal(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    An error has occurred. Please start a new game.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleNewGameClick}>New game</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ErrorModal;