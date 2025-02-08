import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import LandingPage from './pages/LandingPage';
import HowTo from './pages/HowTo';



function App() {
  return (
    <>
      <Router>
        <Routes>
          
          <Route path='/' element={<LandingPage />} />
          <Route path='/howtobuy' element={<HowTo />} />
          
          
          {/* <Setting /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
