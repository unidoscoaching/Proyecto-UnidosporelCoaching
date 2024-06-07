import React from 'react';
import './QuienesSomos.css';

export const QuienesSomos = () => {
  return (
    <div className="quienes-somos-container">
      <div className="foto">
        <img src="/img/quienes.png" alt="quienes" />
      </div>
      <div className="texto">
        <h2><b>¿Quiénes somos?</b></h2>
        <p>Unidos por el Coaching es el puente generador de alianzas entre colegas.</p>
        <h2><b>¿Qué hacemos?</b></h2>
        <p>Nuestro enfoque principal es facilitar la socialización y los vínculos entre colegas para construir relaciones genuinas y significativas.</p>
        <p>Esto lo hacemos a través de encuentros, networking, y experiencias vivenciales.</p>
      </div>
    </div>
  );
};

