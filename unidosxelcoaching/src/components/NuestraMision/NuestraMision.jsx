import React from 'react';
import StylesNuestraMision from './NuestraMision.module.css';

export const NuestraMision = () => {
    return(
        <div  data-aos="zoom-in" className={StylesNuestraMision['nuestra-mision-container']}>
          <div className={StylesNuestraMision.texto} >
            <h2><b>Nuestra Misión</b></h2>
            <p>Es conectar a profesionales del coaching y del desarrollo humano para ampliar su red de contactos, generar alianzas, co-crear, motivarnos, referirnos y así abrir un mundo de posibilidades.</p>
            <h2><b>Visión</b></h2>
            <p>Ser una red colaborativa de Coaches a nivel mundial.</p>
          </div>
          <div style={{width:'50.5%'}}>
            <img src="/img/nuestramision.png" alt="mision" className={StylesNuestraMision.fotoMision}/>
          </div>

        </div>
    )
}
