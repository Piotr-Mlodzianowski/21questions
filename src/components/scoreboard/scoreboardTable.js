import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import "./scoreboardTable.scss"
import "../../scss/loading.scss"

const ScoreboardTable = ({data}) => {

    const [categories, setCategories] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const categoryURL = "https://opentdb.com/api_category.php";

    useEffect(() => {
        fetch(categoryURL, {
            method: "GET",
        })
            .then(response => response.json())
            .then(data => setCategories(data.trivia_categories))
            .catch(err => console.log(err));
    }, []);

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
                                <Form.Select style={{backgroundColor: "#e5e9f0"}} size="lg"
                                             onChange={e => setSelectedCategory(e.target.value)}>
                                    <option disabled selected hidden>Choose category</option>
                                    {categories.map(item => (<option key={item.id} value={item.id}>{item.name}</option>
                                    ))}
                                </Form.Select>
                            </div>

                            <div className="scoreboard__table">
                                {data && (
                                    <>
                                        <table className="table table-striped table-hover text-center">
                                            <thead>
                                            <tr>
                                                <th>Player</th>
                                                <th>Difficulty</th>
                                                <th>Score</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {selectedCategory && <>
                                                {!data && <div>Loading</div>}
                                                {data && data
                                                    .sort((a, b) => b.score - a.score)
                                                    .map((item) =>
                                                        item.category === selectedCategory &&
                                                        <tr key={item.id}>
                                                            <td>{item.name}</td>
                                                            <td>{item.difficulty.charAt(0).toUpperCase() + item.difficulty.slice(1)}</td>
                                                            <td>{item.score} points</td>
                                                        </tr>
                                                    )}
                                            </>}
                                            </tbody>
                                        </table>
                                    </>
                                )}
                            </div>
                        </Card.Body>
                    </Card>}
            </Container>
        </>
    )
}
export default ScoreboardTable;
