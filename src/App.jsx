import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Nav from './Components/Header'
import Home from './Components/Home'
import ProjectGallery from './Components/ProjectGallery'
// import './Components/Project'
import Contact from './Components/Contact'
import Skills from './Components/Skills'

function App() {

  return (
    <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projectGallery" element={<ProjectGallery />} />
          <Route path="contact" element={<Contact />} />
        </Routes>  
    </Router>
  )
}

export default App
