import React from "react";
import StylesServicios from './servicios.module.css';

export const Servicios = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "5493517717526";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  return (
    <div className={StylesServicios.servicios}>
      <div className={StylesServicios['servicios-texto']}>
        <h2 className={StylesServicios.tituloservi}>Servicios</h2>
        <div> 
        <li>Encuentros "Networking entre Colegas" de todo el país.</li>
        <li>
          Conferencia presencial "El arte de conversar" con la Master Coach
          Internacional Elena Espinal.
        </li>
        <li>Masterclass Online gratuitas con referentes del coaching.</li>
        <li>Portal de profesionales recomendados de la comunidad.</li>
        <li>Sesiones y mentorías para profesionales emprendedores.</li>
        <li>Talleres, capacitaciones y cursos.</li>
        
        </div>
        <br />
        <p className={StylesServicios['mas-info']}>
          Para más información sobre nuestros servicios haz click en el
          siguiente botón
        </p>
      </div>
      <div>
        <button className={StylesServicios.btn} onClick={handleWhatsAppRedirect}>
          MÁS INFORMACIÓN
        </button>
      </div>
    </div>
  );
};

export default Servicios;
