import { Link } from "react-router-dom";
import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTiktok, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const NavBar = () => {
    return (
        <div className="navbar-container d-flex justify-content-center align-items-center mt-4">
            <img className="rounded mr-4" src="/img/uxc.png" alt="Logo" style={{ width: "60px" }} />
            <nav className="navbar navbar-expand-lg bg-beige">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link colorletter">¿Quiénes somos?</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link colorletter">Nuestra Misión</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link colorletter">Eventos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link colorletter">Servicios</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link colorletter">Contacto</Link>
                            </li>
                        </ul>
                        <div className="social-icons ml-4">
                            <a href="https://www.instagram.com/unidosporelcoaching" target="_blank" rel="noopener noreferrer" className="colorletter"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://www.facebook.com/unidosporelcoaching" target="_blank" rel="noopener noreferrer" className="colorletter"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="https://www.tiktok.com/@unidosporelcoachig" className="colorletter"><FontAwesomeIcon icon={faTiktok} /></a>
                            <a href="https://www.youtube.com/@unidosporelcoaching8964" target="_blank" rel="noopener noreferrer" className="colorletter"><FontAwesomeIcon icon={faYoutube} /></a>
                            <a href="https://www.linkedin.com/in/valeria-vargas-42a2161b1/" target="_blank" rel="noopener noreferrer" className="colorletter"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
