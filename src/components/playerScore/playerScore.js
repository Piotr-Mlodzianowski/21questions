import React, {useContext,} from 'react';
import {DataContext} from "../../DataContext";


const PlayerScore = () => {
    const {score, selectedCategory} = useContext(DataContext);

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="card shadow-sm bg-white rounded p-4">
                <div className="text-center">
                    <p>Your Score is</p>
                    <p>{score}</p>
                    <p>out of 21 questions about {selectedCategory}</p>
                </div>
            </div>
        </div>
    );
};

export default PlayerScore;