import React from 'react';
import './App.css';
// import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio';
import About from './components/About'
import Contact from './components/Contact';


function App() {
  return (
    <div className='container'>
        <About/>
        <Portfolio />
        <Contact />
    </div>
  );
};

export default App;
