import React from "react";

const ScoreboardTable = ({data}) => {
    return (
        <>
            {!data && <div>Loading</div>}
            {data &&
                <>
                    <table>
                        <thead>
                        <tr>
                            <th>Player</th>
                            <th>Category</th>
                            <th>Difficulty</th>
                            <th>Score</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.sort((a, b) => b.score - a.score).map(item => {
                            return <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.difficulty}</td>
                                <td>{item.score}</td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </>}

        </>
    );
};

export default ScoreboardTable;