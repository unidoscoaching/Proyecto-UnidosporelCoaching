import React from "react";
import "./EventosPresnciales.css";

export const EventosPresenciales = () => {
    const handleWhatsAppRedirect = () => {
    const phoneNumber = "5493517717526";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
    };
    return (
  <>
      <div className="eventos">
        <h1>Eventos Presenciales</h1>
        <figure>
          <img src="src/assets/img/foto-evento.png" alt="foto-evento" />
        </figure>
        <h4 className="texto-unidos">
          Unidos por el Coaching ofrece una variedad de servicios, que incluyen:
          encuentros presenciales, conferencias, experiencias vivenciales y
          oportunidades de networking.
        </h4>
      </div>

      <div className="eventos-comunidad">
        <h4>
            ¿Querés pertenecer a nuestra comunidad?
        </h4>
        <p>Suscribite y se parte de nuestra red</p>
        <p>con beneficios y servicios exclusivos</p>
        <img className="group" src="src/assets/img/Group.png" alt="imagen-grupo" />
        <h2> Membresía</h2>
        <h4>"Conectar con Colegas"</h4>
        <div>
        <button className="btn" onClick={handleWhatsAppRedirect}>
          MAS INFORMACION
        </button>
      </div>
      </div>
    </>
  );
};

export default EventosPresenciales;