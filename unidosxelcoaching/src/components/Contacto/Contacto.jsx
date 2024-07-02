import React from "react";
import StylesContacto from './Contacto.module.css';

export const Contacto = () => {

    return (
        <>

    
            <div data-aos="zoom-in" className={StylesContacto.contacto}>
                <img src="/img/valeriaFooter.png" alt="imagen.footer" className={StylesContacto["contacto-photo"]} />
            </div>
            <div data-aos="zoom-in" className={StylesContacto['contacto-text']}>
                <h4 className={StylesContacto.nombre} style={{ fontWeight: "bold" }}>Valeria Vargas</h4>
                <div className={StylesContacto.parrafo}>
                    <p>Coach Profesional ICF 
                        <br />
                    Directora de Unidos por el Coaching</p>
                </div>
            </div>
        </>
    )
}
