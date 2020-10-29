import React, { useState } from 'react';

const Navbar = (props) => {
  
  const toggleMode = e => {
    e.preventDefault();
    console.log(props.darkMode)
    props.setDarkMode(!props.darkMode); // set to the opposite of current darkmode value
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'} // if props.darkmode === true change className to 'toggle toggled' else 'toggle'
        />
      </div>
    </nav>
  );
};

export default Navbar;
