import React from "react";
import StylesServicios from './servicios.module.css';

export const Servicios = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "5493517717526";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  return (
    <div data-aos="zoom-in" className={StylesServicios.servicios}>
      <div className={StylesServicios['servicios-texto']}>
        <h2 className={StylesServicios.tituloservi}>Servicios</h2>
        <div> 
        <p> 1 - "Encuentro Nacional de Coaches" 
          Networking entre coaches y profesionales del desarrollo personal.</p>
        <p> 2 - "Conferencias Presenciales" 
         con referentes del Coaching y del Desarrollo Humano. </p>
        <p> 3 - "Jornada de Celebración día del Coach".
         Capacitación en ser mejor oferta como Coach.</p>
        <p> 4 - Ofrecemos sesiones y mentorías para emprendedores. </p>
        <p> 5 - Brindamos talleres y Máster Class-Online.</p>
        <p> 6 - Y contamos con un Portal de Coaches Profesionales recomendados en diferentes servicios.</p>
        
        </div>
        <br />
        <p className={StylesServicios['mas-info']}>
          <b>Para más información sobre nuestros servicios haz click en el
          siguiente botón :</b>
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
