import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/navbar.jsx";
import { Bienvenida } from "./components/Bienvenida/bienvenida.jsx";
import { QuienesSomos } from "./components/quienesSomos/quienesSomos.jsx";
import { EventosPresenciales } from "./components/EventosPresenciales/EventosPresenciales.jsx"
import { Footer } from './components/Footer/Footer.jsx';
import { Servicios } from './components/Servicios/Servicios.jsx';
import { NuestraMision } from "./components/NuestraMision/NuestraMision.jsx"
import { Home } from "./components/Home/home.jsx";
import { Contacto } from "./components/Contacto/Contacto.jsx"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2500, 
    });
  }, []);

  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/bienvenida" element={<Bienvenida />} />
        <Route path="/quienesSomos" element={<QuienesSomos />} />
        <Route path="/nuestraMision" element={<NuestraMision />} />
        <Route path="/eventosPresenciales" element={<EventosPresenciales />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

