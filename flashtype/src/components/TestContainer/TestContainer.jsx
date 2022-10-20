import React from 'react';
import './TestContainer.css';

const TestContainer = ({
    words,
    characters,
    wpm
}) => {
    return (
        <div className="test-container">
            <div className="try-again-cont">
                <h1>This is the try again</h1>
            </div>
        </div>
    );
};

export default TestContainer;