import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';


function App() {
  return (
    <Router>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/projects" element={<ProjectGallery />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;


