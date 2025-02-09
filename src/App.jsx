import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import LandingPage from './pages/LandingPage';
import HowTo from './pages/HowTo';
import Dashboard from './pages/Dash';
import ElonMemeCoin from './pages/Elon';



function App() {
  return (
    <>
      <Router>
        <Routes>
          
          <Route path='/' element={<LandingPage />} />
          <Route path='/howtobuy' element={<HowTo />} />
          <Route path='/dash' element={<Dashboard />} />
          <Route path='/elon' element={<ElonMemeCoin />} />
          
          
          {/* <Setting /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
