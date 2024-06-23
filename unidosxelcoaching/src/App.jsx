import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/navbar.jsx";
import { Bienvenida } from "./components/Bienvenida/bienvenida.jsx";
import { QuienesSomos } from "./components/quienesSomos/quienesSomos.jsx";
import { EventosPresenciales } from "./components/EventosPresenciales/EventosPresenciales.jsx"
import { Footer } from './components/Footer/Footer.jsx';
import { Servicios } from './components/Servicios/Servicios.jsx';
import { NuestraMision } from "./components/NuestraMision/NuestraMision.jsx"
import { Contacto } from "./components/Contacto/Contacto.jsx"

function App() {
  return (
    <BrowserRouter>
      <NavBar /> 
          <Routes>
            <Route path='/quienesSomos' element={<QuienesSomos/>}/>
            <Route path='/nuestraMision' element={<NuestraMision/>}/>
            <Route path='/eventosPresenciales' element={<EventosPresenciales/>}/>
            <Route path='/servicios' element={<Servicios/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
          </Routes>
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

