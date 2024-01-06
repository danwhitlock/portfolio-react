import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Header'
import Home from './Components/Home'
// import './Components/ProjectGallery'
// import './Components/Project'
// import './Components/Contact'

function App() {

  return (
    <>
      <Nav />
      <Home />
    </>
  )
}

export default App
