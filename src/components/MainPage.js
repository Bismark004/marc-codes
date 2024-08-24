import React from 'react';
import './MainPage.css';
import Logo from './Logo.js';
import Menu from './Menu.js';
import Home from './Home.js';

const MainPage = () => {
  return (
    <div className="main-page-container">
      <header>
        <Logo />
        <Menu />
      </header>

      <Home />

    </div>
  );
};

export default MainPage;
