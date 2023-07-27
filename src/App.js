import React from 'react';
import './App.css';
// import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio';
import About from './components/About'
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className='container'>
        <Header />
        <br></br>
        <About/>
        <br></br>
        <Portfolio />
        <br></br>
        <Contact />
        <br></br>
        <Resume />
        <br></br>
        <Footer />
    </div>
  );
};

export default App;
