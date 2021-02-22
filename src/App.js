import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Hero from './components/Hero'
import Section from './components/Sections'
import SectionTwo from './components/SectionTwo'
import Footer from './components/Footer'
import Lose from './components/SSSS';
import Chat from './Chat';
function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Hero/> 
          <Section/>
          <SectionTwo/>
           <Lose/>
          <Footer/>
          <Chat/>
        </Router>
    </div>
  );
}

export default App;
