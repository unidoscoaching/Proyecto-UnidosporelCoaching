import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import EventosPresenciales from "./components/EventosPresenciales";
import { Footer } from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
       <BrowserRouter>
        <EventosPresenciales />
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App
