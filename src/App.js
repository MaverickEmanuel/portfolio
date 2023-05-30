import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/projects/" element={<Projects />} />
          <Route path="/experience/" element={<Experience />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
