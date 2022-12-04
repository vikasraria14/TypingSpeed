import React from 'react';
import './TestContainer.css';

const TestContainer = ({
    words,
    characters,
    wpm
}) => {
    return (
        <div className="test-container">
            <div className="stats">
               <div className='stat1'>Words <br/><span className='number'>0</span></div>
               <div className='stat1'>Characters <br/> <span className='number'>0</span> </div>
               <div className='stat1'>Speed <br/> <span className='number'>0</span> </div>
            </div>
            <div className='time'>
                60 Sec <br/>
                Start typing to start
            </div>
            <div className='text-content'>
                <div className='paragraph-area'>
                    paragraph
                </div>
                <div className='input-area'>
                    <textarea></textarea>
                </div>
            </div>
        </div>
    );
};

export default TestContainer;