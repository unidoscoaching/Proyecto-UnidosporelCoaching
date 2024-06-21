// import { useState } from 'react'
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar/navbar.jsx";
import { Bienvenida } from "./components/Bienvenida/bienvenida.jsx";
import { QuienesSomos } from "./components/quienesSomos/quienesSomos.jsx";
import { EventosPresenciales } from "./components/EventosPresenciales/EventosPresenciales.jsx"
import { Footer } from './components/Footer/Footer.jsx';
import { Servicios } from './components/Servicios/Servicios.jsx';
import  { NuestraMision } from "./components/NuestraMision/NuestraMision.jsx"
import { Contacto } from "./components/Contacto/Contacto.jsx"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Bienvenida />
      <QuienesSomos />
      <NuestraMision />
      <EventosPresenciales />
      <Servicios />
      <Contacto />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

