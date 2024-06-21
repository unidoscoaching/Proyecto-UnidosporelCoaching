import React from "react";
import StylesBienvenida from './bienvenida.module.css';

export const Bienvenida = () => {
    return (
        <div className={StylesBienvenida.container}>
            <div className=  {`${StylesBienvenida['row']} align-items-center`}>
                <div className="col position-relative">
                    <img src="/img/unidos.png" alt="unidos" className={StylesBienvenida['custom-logo']} />
                </div>
                <div className="col position-relative">
                    <img src="/img/bienvenida.png" alt="bienvenida" className= {`${StylesBienvenida['custom-image']}  `} />
                </div>
            </div>
            <div className={StylesBienvenida.row}>
                <div className="col text-center ">
                    <p className={StylesBienvenida['welcome-text']}>
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


