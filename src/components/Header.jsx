import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header>
      <Navigation />
      <div className="header-content">
        <h1>Julie Macpherson - Web Developer</h1>
        <p>Welcome to my portfolio. Feel free to explore my projects and get in touch!</p>
      </div>
    </header>
  );
};

export default Header;