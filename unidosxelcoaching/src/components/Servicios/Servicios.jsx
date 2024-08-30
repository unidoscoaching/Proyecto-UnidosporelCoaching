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
        <ol className={StylesServicios['servicios-lista']}>
              <li>"Encuentro Nacional de Coaches" Networking entre coaches y profesionales del desarrollo personal.</li>
              <li>"Conferencias Presenciales" Con referentes del Coaching y del Desarrollo Humano.</li>
              <li>"Jornada de Celebración día del Coach" Capacitación en ser mejor oferta como Coach.</li>
              <li>Ofrecemos sesiones y mentorías para emprendedores.</li>
              <li>Brindamos talleres y Máster Class-Online.</li>
              <li>Contamos con un Portal de Coaches Profesionales recomendados en diferentes servicios.</li>
            </ol>
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
