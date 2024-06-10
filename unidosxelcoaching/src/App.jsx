import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App