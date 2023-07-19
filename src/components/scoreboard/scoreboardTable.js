import React, {useContext, useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import "./scoreboardTable.scss"
import "../../scss/loading.scss"
import {DataContext} from "../../DataContext";

const ScoreboardTable = () => {
    const {fetchedScores} = useContext(DataContext);
    const [categories, setCategories] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [showCategories, setShowCategories] = useState("");

    const categoryURL = "https://opentdb.com/api_category.php";

    useEffect(() => {
        fetch(categoryURL, {
            method: "GET",
        })
            .then(response => response.json())
            .then(data => setCategories(data.trivia_categories))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        if (categories) {
            const excludeCategories = [13, 16, 19, 20, 21, 24, 25, 26, 27, 28, 29, 30, 32];
            const availableCategories = categories.filter((item) => !excludeCategories.includes(item.id));
            console.log(availableCategories);
            setShowCategories(availableCategories);
        }
    }, [categories]);

    return (
        <>
            <Container
                className="d-flex flex-column align-items-center justify-content-center scoreboard__container">
                {!categories &&
                    <div className="d-flex flex-column align-items-center justify-content-center loading__container">
                        <div className="loading__animation"></div>
                    </div>}
                {categories &&

                    <Card className="border-0 shadow p-3 mb-5 rounded scoreboard__card">
                        <Card.Body className="scoreboard__cardBody">
                            <div className="scoreboard__select">
                                {showCategories &&
                                    <Form.Select style={{backgroundColor: "#e5e9f0"}} size="lg"
                                                 defaultValue="Choose category"
                                                 onChange={e => setSelectedCategory(e.target.value)}>
                                       <option disabled hidden>Choose category</option>
                                        {showCategories.map(item => (
                                            <option key={item.id} value={item.id}>{item.name}</option>
                                        ))}
                                    </Form.Select>}
                            </div>
                            <div className="scoreboard__table">
                                {fetchedScores && (
                                    <table className="table table-striped table-hover text-center">
                                        <thead className="table__head">
                                        <tr>
                                            <th>Player</th>
                                            <th>Difficulty</th>
                                            <th>Score</th>
                                        </tr>
                                        </thead>

                                        {selectedCategory &&
                                            <tbody>
                                            {fetchedScores.sort((a, b) => b.score - a.score)
                                                .map((item) =>
                                                    item.category === selectedCategory &&
                                                    <tr key={item.id}>
                                                        <td>{item.name}</td>
                                                        <td>{item.difficulty.charAt(0).toUpperCase() + item.difficulty.slice(1)}</td>
                                                        <td>{item.score} points</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        }

                                    </table>
                                )}
                            </div>
                        </Card.Body>
                    </Card>}
            </Container>
        </>
    )
}
export default ScoreboardTable;


