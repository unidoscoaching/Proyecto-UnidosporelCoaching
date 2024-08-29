import React from "react";
import StylesEventos from './Eventos.module.css';


export const EventosPresenciales = () => {
    const handleWhatsAppRedirect = () => {
    const phoneNumber = "5493517717526";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
    };
    return (
  <>
      <div  data-aos="zoom-in" className={StylesEventos.eventos}>
        <h1 className={StylesEventos.textoh1}>Eventos Presenciales</h1>
        <figure>

          <img src="/img/foto-evento.png" alt="foto-evento" className={StylesEventos.fotoeventos}/>
        </figure>
        <h4 className={StylesEventos['texto-unidos']}>
          Unidos por el Coaching te brinda una variedad de servicios que incluyen:
          Encuentros presenciales de networking, conferencias en distintos puntos del país y entrenamientos para coaches que quieran ser mejores profesionales.
        </h4>
      </div>

      <div className={StylesEventos['eventos-comunidad']}>
        <h4 className={StylesEventos.titulo}>
            ¿Querés pertenecer a nuestra comunidad?
        </h4 >
        <p className={StylesEventos.textocomu} >Suscribite y se parte de nuestra red</p>
        <p className={StylesEventos.textocomu}>con beneficios y servicios exclusivos</p>
        <img className={StylesEventos.group} src="/img/Group.png" alt="imagen-grupo" />
        <h2 className={StylesEventos.titulo2}> Membresía</h2>
        <h4 className={StylesEventos.titulo}>"Conectar con Colegas"</h4>
        <div>
        <button className={StylesEventos.btn} onClick={handleWhatsAppRedirect}>
          MÁS INFORMACIÓN
        </button>
      </div>
      </div>
    </>
  );
};

export default EventosPresenciales;