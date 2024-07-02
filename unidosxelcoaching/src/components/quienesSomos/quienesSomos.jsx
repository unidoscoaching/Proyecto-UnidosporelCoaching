import React from 'react';
import StylesQuienesSomos from './QuienesSomos.module.css';

export const QuienesSomos = () => {
  return (
    <div data-aos="zoom-in" className={StylesQuienesSomos['quienes-somos-container']}>
      <div style={{width:'50%'}}>
        <img src="/img/quienes.png" alt="quienes" className={StylesQuienesSomos.fotoQuienes} />
      </div>
      <div className={StylesQuienesSomos.texto}>
        <h2><b>¿Quiénes somos?</b></h2>
        <p>Unidos por el Coaching es el puente generador de alianzas entre colegas.</p>
        <h2><b>¿Qué hacemos?</b></h2>
        <p>Nuestro enfoque principal es facilitar la socialización y promover los vínculos entre colegas. </p>
        <h2><b>¿Para qué lo hacemos?</b></h2>
       <p>Para construir relaciones genuinas y significativas que perduren en el tiempo.</p>
       <h2><b>¿Cómo lo hacemos?</b></h2>
        <p>Esto lo hacemos a través de experiencias presenciales entre colegas de todo el país.</p>
      </div>
    </div>
  );
};