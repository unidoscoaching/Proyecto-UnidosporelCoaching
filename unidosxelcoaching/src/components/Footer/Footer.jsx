import React from "react";
import StylesFooter from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={StylesFooter.footer}>
    
      <div className={StylesFooter['footer-redes']}>
        <div className={StylesFooter['footer-icons']}>
          <a className={StylesFooter.links}
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/wassap.png" alt="wasssap"  />  +54 9 3517 71-7526
          </a>
          <a className={StylesFooter.links}
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/ig.png" alt="ig"  /> @unidosporelcoachig
          </a>
          <a className={StylesFooter.links}
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/face.png" alt="face"  /> /unidosporelcoachig
          </a>
        </div>
        <div className="footer-icons">
          <a className={StylesFooter.links}
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/tiktok.png" alt="tiktok"  /> @unidosporelcoachig
          </a>
          <a className={StylesFooter.links}
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
             >
             <img src="/img/youtube.png" alt="youtube"  /> Unidos por el Coaching
          </a>
          <a className={StylesFooter.links}
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
           <img src="/img/linkedin.png" alt="linkedin"  />Unidos por el Coaching
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;