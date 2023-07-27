import React from 'react';
import './App.css';
// import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio';
import About from './components/About'


function App() {
  return (
    <div className='container'>
        <Portfolio />
        <About/>
    </div>
  );
};

export default App;
