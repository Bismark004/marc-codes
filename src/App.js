import React, { useState, useEffect } from 'react';
import Welcome from "./components/Welcome.js"
import MainPage from './components/MainPage.js';
import './App.css';

function App() {
  const [showMainPage, setShowMainPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainPage(true);
    }, 9000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showMainPage ? <MainPage /> : <Welcome />}
    </div>
  );
}

export default App;
