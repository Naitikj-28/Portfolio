//         <h1>Welcome to My Portfolio</h1>
//         <h1>About Me</h1>
//         <h1>My Projects</h1>
//         <h1>Contact Me</h1>
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Newsm from './Components/Newsmon';
import DroneCalci from './Components/DroneCalci';
import About from './Components/About';
import ChessWebPage from './Components/ChessWebPage';
import CartoDm from './Components/CartoDm';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/DroneCalci" element={<DroneCalci />} />
        <Route path="/Newsmon" element={<Newsm />} />
        <Route path="/ChessWebPage" element={<ChessWebPage />} />
        <Route path="/CartoDM" element={<CartoDm />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
