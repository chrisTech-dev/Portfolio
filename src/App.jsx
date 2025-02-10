import React from 'react'
import { HashRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Project from './routes/Project.jsx'
import Contact from './routes/Contact.jsx'
import About from './routes/About.jsx'
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'


const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='project' element={<Project/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
