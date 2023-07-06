import React from 'react';

const StartPage = () => {

    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100">
            <h1 className="display-4 text-center">21<span className="text-primary">questions</span></h1>
            <div className="mt-4">
                <a href="/settings">
                    <button className="btn btn-success btn-lg">Play</button>
                </a>
            </div>
        </div>
    );
};

export default StartPage;