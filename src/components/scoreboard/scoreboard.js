import React from 'react';
import ScoreboardFetch from './scoreboardFetch'

//json-server database/db.json --watch
// http://localhost:3000/score


const Scoreboard = () => {

    return (
        <>
            <ScoreboardFetch />
        </>
    )
}

export default Scoreboard;
