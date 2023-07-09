import React from "react";

const ScoreboardTable = ({data}) => {
    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="card shadow-sm bg-white rounded p-4">
                {!data && <div>Loading</div>}
                {data && (
                    <>
                        <table className="table table-striped table-hover">
                            <thead>
                            <tr>
                                <th>Player</th>
                                <th>Category</th>
                                <th>Difficulty</th>
                                <th>Score</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data
                                .sort((a, b) => b.score - a.score)
                                .map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.category}</td>
                                        <td>{item.difficulty}</td>
                                        <td>{item.score}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </div>
    );
};

export default ScoreboardTable;