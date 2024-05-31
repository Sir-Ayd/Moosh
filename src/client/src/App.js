// App.js

import React, { useEffect, useRef, useState } from 'react';
import Game from './game/base';
import Menu from './components/Menu';
import Settings from './game/Settings';
import Barn from './game/Barn';
import './index.css';

function App() {
  const canvasRef = useRef(null);
  const [showMenu, setShowMenu] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [showBarn, setShowBarn] = useState(false); // State for showing the Barn component

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

    resizeCanvas();

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

  const handleBarnClick = () => {
    setShowBarn(true);
    setShowMenu(false);
  };

  const handleBackClick = () => {
    setShowOptions(false);
    setShowBarn(false);
    setShowMenu(true);
  };

  return (
    <div className="App">
      {showMenu && (
        <Menu
          onStartClick={handleStartClick}
          onSettingsClick={handleSettingsClick}
          onBarnClick={handleBarnClick} // Add Barn button handler
        />
      )}

      {showOptions && <Settings onBackClick={handleBackClick} />}
      {showBarn && <Barn onBackClick={handleBackClick} />}
      <canvas ref={canvasRef} style={{ border: '1px solid black', display: showMenu ? 'none' : 'block' }} />
    </div>
  );
}

export default App;
