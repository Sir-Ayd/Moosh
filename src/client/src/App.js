import React, { useEffect, useRef, useState } from 'react';
import Game from './game/base';

function App() {
  const canvasRef = useRef(null);
  const [showMenu, setShowMenu] = useState(true);

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

  return (
    <div className="App">
      {showMenu ? (
        <div className='centre-menu'>
          <h1>Main Menu</h1>
          <button className='menu-buttons' onClick={handleStartClick}>Start Game</button>
        </div>
      ) : null}
      <canvas ref={canvasRef} style={{ border: '1px solid black', display: showMenu ? 'none' : 'block' }} />
    </div>
  );
}

export default App;
