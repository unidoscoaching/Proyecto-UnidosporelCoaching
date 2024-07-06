import React from 'react';
import { Bienvenida } from "../Bienvenida/bienvenida.jsx";
import { QuienesSomos } from "../quienesSomos/quienesSomos.jsx";
import { EventosPresenciales } from "../EventosPresenciales/EventosPresenciales.jsx";
import { Servicios } from "../Servicios/Servicios.jsx";
import { NuestraMision } from "../NuestraMision/NuestraMision.jsx";
import { Contacto } from "../Contacto/Contacto.jsx";

export const Home = () => {
  return (
    <div>
      <Bienvenida />
      <QuienesSomos />
      <NuestraMision />
      <EventosPresenciales />
      <Servicios />
      <Contacto />
    </div>
  );
};

export default Home;