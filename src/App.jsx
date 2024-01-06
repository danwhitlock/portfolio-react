import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Nav from './Components/Header'
import Home from './Components/Home'
// import './Components/ProjectGallery'
// import './Components/Project'
// import './Components/Contact'
import Skills from './Components/Skills'

function App() {

  return (
    <Router>
      <Nav />
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="skills" element={<Skills />} />
        </Routes>  
    </Router>
  )
}

export default App
