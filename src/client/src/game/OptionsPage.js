import React from 'react';

function OptionsPage({ onBackClick }) {
    const handleBackClick = () => {
    // Call the callback function passed from the App component
    onBackClick();
    };

    return (
        <div className='OptionsPage'>
            <h1>Options</h1>
            <p>Put some options in</p>
            <button onClick={handleBackClick}>Back to menu</button>
        </div>
    );
}

export default OptionsPage;