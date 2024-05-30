// App.js

import React, { useEffect, useRef, useState } from 'react';
import Game from './game/base';
import Menu from './components/Menu'
import OptionsPage from './game/OptionsPage'; // Import the Settings component


function App() {
  const canvasRef = useRef(null);
  const [showMenu, setShowMenu] = useState(true);
  const [showOptions, setShowOptions] = useState(false);

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

  const handleSettingsClick = () => {
    setShowOptions(true);
    setShowMenu(false);
  };

  //function to go back a notch
  const handleBackClick = () => {
    setShowOptions(false);
    setShowMenu(true);
  };

  return (
    <div className="App">
      {showMenu && (
        <Menu onStartClick={handleStartClick} onSettingsClick={handleSettingsClick} />
      )}

      {showOptions && (
        <OptionsPage onBackClick={handleBackClick} />
      )}

      <canvas ref={canvasRef} style={{ border: '1px solid black', display: showMenu ? 'none' : 'block' }} />
    </div>
  );
}

export default App;
