import React from 'react'
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home'
import Projects from './components/Projects'


import "./styles/style.css";
import "./styles/media-queries.css";



const App = () => {
  return (
    <>
    <Router>
    <Header/>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

    <Footer/>
    </Router>
    </>
  )
}

export default App
