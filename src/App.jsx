import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';
import AboutMe from './components/AboutMe';
import './StyleFile/style.css';


function App() {
  return (
    <Router>
       <div className="app-container">
      <Header className="header"/>
      <div className="content">
      <Routes > 
        <Route path="/" element={<Home />} /> 
        <Route path="/projects" element={<ProjectGallery />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;


