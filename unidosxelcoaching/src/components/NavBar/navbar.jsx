import { Link } from "react-router-dom";
import React from 'react';
import StylesNavbar from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTiktok, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const NavBar = () => {
    return (
        <div className={`${StylesNavbar['navbar']} d-flex justify-content-center align-items-center mt-4`}>
            <img className={`rounded me-4 ${StylesNavbar['mr-4']}`} src="/img/uxc.png" alt="Logo" style={{ width: "4em" }} />
            <nav className={`navbar navbar-expand-lg ${StylesNavbar.navbar}`}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" >
                            <li className="nav-item">
                                <Link to="/" className={`nav-link ${StylesNavbar.navbar} ${StylesNavbar.text} `}>¿Quiénes somos?</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className={`nav-link ${StylesNavbar.navbar} ${StylesNavbar.text} `}>Nuestra Misión</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className={`nav-link ${StylesNavbar.navbar} ${StylesNavbar.text} `}>Eventos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className={`nav-link ${StylesNavbar.navbar} ${StylesNavbar.text} `}>Servicios</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className={`nav-link ${StylesNavbar.navbar} ${StylesNavbar.text} `}>Contacto</Link>
                            </li>
                        </ul>
                        <div className={`${StylesNavbar['social-icons']} d-flex ms-4`}>
                            <a href="https://www.instagram.com/unidosporelcoaching" target="_blank" rel="noopener noreferrer" className={` me-1 ${StylesNavbar.text}`}><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://www.facebook.com/unidosporelcoaching" target="_blank" rel="noopener noreferrer" className={`me-1 ${StylesNavbar.text}`}><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="https://www.tiktok.com/@unidosporelcoachig" className={`me-1 ${StylesNavbar.text}`}><FontAwesomeIcon icon={faTiktok} /></a>
                            <a href="https://www.youtube.com/@unidosporelcoaching8964" target="_blank" rel="noopener noreferrer" className={`me-1 ${StylesNavbar.text}`}><FontAwesomeIcon icon={faYoutube} /></a>
                            <a href="https://www.linkedin.com/in/valeria-vargas-42a2161b1/" target="_blank" rel="noopener noreferrer" className={`me-1 ${StylesNavbar.text}`}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
