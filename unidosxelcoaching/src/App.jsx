import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import { NavBar } from "./components/NavBar/navbar";
import {BrowserRouter} from "react-router-dom";
import { Bienvenida } from "./components/Bienvenida/bienvenida";
import { QuienesSomos } from "./components/quienesSomos/quienesSomos"
import EventosPresenciales from "./components/EventosPresenciales";
import { Footer } from './components/Footer/Footer.jsx';
import { Servicios } from './components/Servicios/Servicios.jsx';

function App() {
  return (
    <>
       <BrowserRouter>
       <NavBar />
       <Bienvenida />
       <QuienesSomos />
       <EventosPresenciales />
       <Servicios />
        <Footer/>
  </BrowserRouter>
    </>
  );
}


export default App
