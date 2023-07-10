import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Routing from "./routing"
import {Container, Row} from 'react-bootstrap';
import "./components/settings/settings.scss";


function App() {
    return (
        <ThemeProvider
            breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <Container fluid className="background">
                <Row className="justify-content-center align-items-center h-100">
                    <Routing />
                </Row>
            </Container>
        </ThemeProvider>
    );
}


export default App;

