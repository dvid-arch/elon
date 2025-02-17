import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
// import BitcoinGenerator from './pages/Bit';
import LandingPage from './pages/LandingPage';
import HowTo from './pages/HowTo';
import Dashboard from './pages/Dash';
import ElonMemeCoin from './pages/Elon';


import { Buffer } from "buffer/";
import BitcoinAddressGenerator from './components/Bit';
import Form from './components/Form';
import ContactForm from './components/Form';
import DirectSubmit from './components/Form';
import TermsPage from './pages/TandCs';
globalThis.Buffer = Buffer;


// import { Buffer as BufferPolyfill } from 'buffer';
// globalThis.Buffer = BufferPolyfill;

console.log('buffer', Buffer.from('foo', 'hex'))

// console.log("Somethings")




function App() {
  const [canShow, setCanShow] = useState(true)
  // console.log("Somethings")

  return (
    <>
      <Router>
        <Routes>
          
          <Route path='/' element={<LandingPage canShow={canShow} setCanShow={setCanShow}/>} />
          <Route path='/bit' element={<BitcoinAddressGenerator />} />
          <Route path='/howtobuy' element={<HowTo />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/tcs' element={<TermsPage />} />
          <Route path='/elon' element={<ElonMemeCoin />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
