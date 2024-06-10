import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import EventosPresenciales from "./components/EventosPresenciales";
import { Footer } from './components/Footer/Footer.jsx';
import { Servicios } from './components/Servicios/Servicios.jsx';


function App() {
  return (
    <>
       <BrowserRouter>
       <EventosPresenciales />
       <Servicios />
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App
