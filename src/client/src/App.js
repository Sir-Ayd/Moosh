import React, { useEffect, useRef } from 'react';
import Game from './game/base';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas(); // Set initial size
    new Game(canvas);

    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <div className="App">
      <canvas ref={canvasRef} style={{ border: '1px solid black' }} />
    </div>
  );
}

export default App;
