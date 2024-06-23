import React from "react";
import StylesFooter from './footer.module.css';

export const Footer = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "5493517717526";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  return (
    <footer className={StylesFooter.footer}>
      <div className={StylesFooter['footer-redes']}>
        <div className={StylesFooter['footer-icons']}>
          <a className={StylesFooter.links} onClick={handleWhatsAppRedirect}  target="_blank" rel="noopener noreferrer">
            <img className={StylesFooter.img} style={{ width: '2.3rem', marginRight:'1rem'}} src="/img/wassap.png" alt="wasssap" /> +54 9 3517 71-7526
          </a>
          <a className={StylesFooter.links} href="https://www.instagram.com/unidosporelcoaching" target="_blank" rel="noopener noreferrer">
            <img className={StylesFooter.img} style={{ width: '2.6rem', marginRight:'1rem'}} src="/img/ig.png" alt="ig" /> @unidosporelcoachig
          </a>
          <a className={StylesFooter.links} href="https://www.facebook.com/unidosporelcoaching" target="_blank" rel="noopener noreferrer">
            <img className={StylesFooter.img} style={{ width: '2.5rem', marginRight:'1rem'}} src="/img/face.png" alt="face" /> /unidosporelcoachig
          </a>
          <a className={StylesFooter.links} href="https://www.tiktok.com/@unidosporelcoaching" target="_blank" rel="noopener noreferrer">
            <img className={StylesFooter.img} style={{ width: '2.8rem', marginRight:'1rem'}} src="/img/tiktok.png" alt="tiktok" /> @unidosporelcoachig
          </a>
          <a className={StylesFooter.links} href="https://www.youtube.com/@unidosporelcoaching8964" target="_blank" rel="noopener noreferrer">
            <img className={StylesFooter.img} style={{ width: '2.3rem', marginRight:'1rem'}} src="/img/youtube.png" alt="youtube" /> Unidos por el Coaching
          </a>
          <a className={StylesFooter.links} href="https://www.linkedin.com/in/valeria-vargas-42a2161b1" target="_blank" rel="noopener noreferrer">
            <img className={StylesFooter.img} style={{ width: '2.3rem', marginRight:'1rem'}} src="/img/linkedin.png" alt="linkedin" /> Unidos por el Coaching
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;