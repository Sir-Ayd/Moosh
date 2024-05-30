// App.js

import React, { useEffect, useRef, useState } from 'react';
import Game from './game/base';
import Settings from './game/OptionsPage'; // Import the Settings component
import './index.css'; // change if CSS has been relocated


function App() {
  const canvasRef = useRef(null);
  const [showMenu, setShowMenu] = useState(true);
  const [showOptions, setShowOptions] = useState(false); // Add state for showing options

  useEffect(() => {
    const canvas = canvasRef.current;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const startGame = () => {
      setShowMenu(false);
      new Game(canvas);
    };

    resizeCanvas(); // Set initial size

    if (!showMenu) {
      startGame();
    }

    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [showMenu]);

  const handleStartClick = () => {
    setShowMenu(false);
  };

  // Function to handle displaying options when the "Settings" button is clicked
  const handleSettingsClick = () => {
    setShowOptions(true);
    setShowMenu(false); // Hide the main menu when options are shown
  };

  //function to go back a notch
  const handleBackClick = () => {
    setShowOptions(false); // hide the options page
    setShowMenu(true); // show the main menu
  };

  return (

    <div className={`App ${!showMenu ? 'background-hidden' : ''}`}>
      <div className="background-container">
        <div className="background-image"></div>
      </div>
      {showMenu ? (
        <div className='centre-menu'>

          <h3>Main Menu</h3>
          <button className='menu-buttons' onClick={handleStartClick}>Start Game</button>
          <button className='menu-buttons' onClick={handleStartClick}>Barn</button>
          <button className='menu-buttons' onClick={handleSettingsClick}>Settings</button> {/* Call handleSettingsClick for "Settings" button */}
        </div>
        

      ) : null}

      {showOptions ? (
        <div>
          <Settings onBackClick={handleBackClick} /> 
        </div>
      ) : null}

      <canvas ref={canvasRef} style={{ border: '1px solid black', display: showMenu ? 'none' : 'block' }} />
    </div>
  );
}

export default App;
