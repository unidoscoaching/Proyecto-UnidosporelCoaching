import React from 'react';
import StylesQuienesSomos from './QuienesSomos.module.css';

export const QuienesSomos = () => {
  return (
    <div className={StylesQuienesSomos['quienes-somos-container']}>
      <div style={{width:'50%'}}>
        <img src="/img/quienes.png" alt="quienes" className={StylesQuienesSomos.fotoQuienes} />
      </div>
      <div className={StylesQuienesSomos.texto}>
        <h2><b>¿Quiénes somos?</b></h2>
        <p>Unidos por el Coaching es el puente generador de alianzas entre colegas.</p>
        <h2><b>¿Qué hacemos?</b></h2>
        <p>Nuestro enfoque principal es facilitar la socialización y los vínculos entre colegas para construir relaciones genuinas y significativas.</p>
        <p>Esto lo hacemos a través de encuentros, networking y experiencias vivenciales.</p>
      </div>
    </div>
  );
};