// import './polyfills.js';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Buffer } from "buffer/";
globalThis.Buffer = JSON.stringify(Buffer);

if (!window.Buffer) {
  window.Buffer = Buffer;
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
