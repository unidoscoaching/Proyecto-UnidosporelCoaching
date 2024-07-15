import { Link } from "react-router-dom";
import React from 'react';
import StylesNavbar from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTiktok, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const NavBar = () => {
    return (
       
        <div className={`${StylesNavbar['navbar']} d-flex align-items-center justify-content-between mt-4`}>
             <Link to="/" className="d-flex align-items-center">
                <img className={`rounded ms-4 ${StylesNavbar['me-4']}`} src="/img/uxc.png" alt="Logo" style={{ width: "3.5em", marginRight:".625rem", padding:".125rem" }} />
               
            </Link>
            
            <nav className={`navbar navbar-expand-lg ${StylesNavbar.navbar}`}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                                <Link to= {"/"} className={`nav-link ${StylesNavbar.navbar} ${StylesNavbar.text}`}>Home</Link>
                            </li>
                    
                            <li className="nav-item">
                                <Link to= {"/quienesSomos"} className={`nav-link ${StylesNavbar.navbar} ${StylesNavbar.text}`}>¿Quiénes somos?</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/nuestraMision"} className={`nav-link ${StylesNavbar.navbar} ${StylesNavbar.text}`}>Nuestra Misión</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/eventosPresenciales"} className={`nav-link ${StylesNavbar.navbar} ${StylesNavbar.text}`}>Eventos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/Servicios"} className={`nav-link ${StylesNavbar.navbar} ${StylesNavbar.text}`}>Servicios</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/Contacto"} className={`nav-link ${StylesNavbar.navbar} ${StylesNavbar.text}`}>Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
            <div className={`${StylesNavbar['social-icons'] } d-flex me-4 `}>
                <a href="https://www.instagram.com/unidosporelcoaching" target="_blank" rel="noopener noreferrer" className={`me-1 ${StylesNavbar.text}`}><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.facebook.com/unidosporelcoaching" target="_blank" rel="noopener noreferrer" className={`me-1 ${StylesNavbar.text}`}><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="https://www.tiktok.com/@unidosporelcoachig" className={`me-1 ${StylesNavbar.text}`}><FontAwesomeIcon icon={faTiktok} /></a>
                <a href="https://www.youtube.com/@unidosporelcoaching8964" target="_blank" rel="noopener noreferrer" className={`me-1 ${StylesNavbar.text}`}><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="https://www.linkedin.com/in/valeria-vargas-42a2161b1/" target="_blank" rel="noopener noreferrer" className={`me-1 ${StylesNavbar.text}`}><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
        </div>
        
    );
};

export default NavBar;
