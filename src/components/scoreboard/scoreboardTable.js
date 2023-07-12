import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import "./scoreboardTable.scss"

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
            {!categories && <div>Loading data</div>}
            {categories &&
                <div className="container d-flex align-items-center justify-content-center scoreboard__container">
                    <div className="card shadow-sm bg-white rounded p-4 scoreboard__card">
                        <div className="scoreboard__select">
                            <Form.Select size="lg"
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
                    </div>
                </div>}
        </>
    )
}
export default ScoreboardTable;


/*
return (
    <>
        {!categories && <div>Loading data</div>}
        {categories &&
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <div className="card shadow-sm bg-white rounded p-4">
                    <Form.Select className="select-background" size="lg"
                                 onChange={e => setSelectedCategory(e.target.value)}>
                        <option disabled selected hidden>Choose category</option>
                        {categories.map(item => (<option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                    </Form.Select>

                    {selectedCategory &&
                        <>
                            {!data && <div>Loading</div>}
                            {data && (
                                <>
                                    <table className="table table-striped table-hover">
                                        <thead>
                                        <tr>
                                            <th>Player</th>
                                            <th>Category</th>
                                            <th>Score</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {data
                                            .sort((a, b) => b.score - a.score)
                                            .map((item) =>
                                                item.category === selectedCategory &&
                                                <tr key={item.id}>
                                                    <td>{item.name}</td>
                                                    <td>{item.difficulty}</td>
                                                    <td>{item.score}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </>
                            )}
                        </>}
                </div>
            </div>}
    </>
)*/
