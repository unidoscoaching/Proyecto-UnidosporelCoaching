import React from "react";
import "./servicios.css";

export const Servicios = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "5493517717526";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  return (
    <div className="servicios">
      <div className="servicios-textos">
        <h2>Servicios</h2>
        <p>Encuentros "Networking entre Colegas" de todo el país</p>
        <p>
          Conferencia presencial "El arte de conversar" con la Master Coach
          Internacional Elena Espinal
        </p>
        <p>Masterclass Online gratuitas con referentes del coaching</p>
        <p>Portal de profesionales recomendados de la comunidad</p>
        <p>Sesiones y mentorías para profesionales emprendedores</p>
        <p>Talleres, capacitaciones y cursos</p>
        <br />
        <p className="mas-info">
          Para más información sobre nuestros servicios haz click en el
          siguiente botón
        </p>
      </div>
      <div>
        <button className="btn" onClick={handleWhatsAppRedirect}>
          MAS INFORMACION
        </button>
      </div>
    </div>
  );
};

export default Servicios;
