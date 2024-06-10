import React from "react";
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faTiktok, faYoutube, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-photo">
        <img src="/img/valeriaFooter.png" alt="imagen.footer" />
      </div>
      <div className="footer-text">
        <h4 style={{ fontWeight: "bold" }}>Valeria Vargas</h4>
        <p>Coach Profesional ICF</p>
        <p>Directora de Unidos por el Coaching</p>
      </div>

      <div className="footer-redes">
        <div className="footer-icons">
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> +54 9 3517 71-7526
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} /> @unidosporelcoachig
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} /> /unidosporelcoachig
          </a>
        </div>
        <div className="footer-icons">
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTiktok} /> @unidosporelcoachig
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} /> Unidos por el Coaching
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} /> Unidos por el Coaching
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;