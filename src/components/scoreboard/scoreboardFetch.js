import React, {useEffect, useState} from 'react';
import ScoreboardTable from './scoreboardTable'
//json-server database/db.json --watch

const ScoreboardFetch = () => {

    const [data, setData] = useState(false);

    const scoreURL = "http://localhost:3000/score"

    useEffect(() => {
        fetch(scoreURL, {
            method: "GET",
        })
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    return (
        <ScoreboardTable data={data}/>
    );
};

export default ScoreboardFetch;