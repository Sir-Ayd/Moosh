// components/Menu.js

import React from 'react';

function Menu({ onStartClick, onSettingsClick }) {
  return (
    <>
    <div className='menu-background'>
    <h1 className='header-menu'> COW TIPPER!</h1>
    <div className='centre-menu'>
      <h1>Main Menu</h1>
      <button className='menu-buttons' onClick={onStartClick}>Start Game</button>
      <button className='menu-buttons' onClick={onStartClick}>Barn</button>
      <button className='menu-buttons' onClick={onSettingsClick}>Settings</button>
    </div></div></>
  );
}

export default Menu;
