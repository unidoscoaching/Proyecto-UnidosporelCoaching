import React from "react";
import "./bienvenida.css";

export const Bienvenida = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col position-relative">
                    <img src="/img/unidos.png" alt="unidos" className="custom-logo" />
                </div>
                <div className="col position-relative">
                    <img src="/img/bienvenida.png" alt="bienvenida" className="custom-image mt-4" />
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <p className="welcome-text">
                        <strong>Conexión - Comunidad - Crecimiento</strong><br />
                        ¡Bienvenidos a Unidos por el Coaching!<br />
                        Una comunidad que conecta y expande a profesionales<br />
                        del Coaching y el desarrollo humano.
                    </p>
                </div>
            </div>
        </div>
    );
};


