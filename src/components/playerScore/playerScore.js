import React, {useContext,} from 'react';
import {DataContext} from "../../DataContext";


const PlayerScore = () => {
    const {score, selectedCategory} = useContext(DataContext);

    return (
        <>
            <div>
                <div>Your Score is</div>
                <div>{score}</div>
                <div>out of 21questions about {selectedCategory}</div>
            </div>
        </>
    );
};

export default PlayerScore;