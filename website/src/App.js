import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './global.css';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
