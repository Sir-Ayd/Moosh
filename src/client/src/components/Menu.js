// components/Menu.js

import React from 'react';

function Menu({ onStartClick, onSettingsClick, onBarnClick }) {
  return (
    <>
      <div className='menu-background'>
        <h1 className='header-menu'>COW TIPPER!</h1>
        <div className='centre-menu'>
          <h1>Main Menu</h1>
          <button className='menu-buttons' onClick={onStartClick}>Start Game</button>
          <button className='menu-buttons' onClick={onBarnClick}>Barn</button> {/* Updated this line */}
          <button className='menu-buttons' onClick={onSettingsClick}>Settings</button>
        </div>
      </div>
    </>
  );
}

export default Menu;
