import { Link } from "react-router-dom";
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTiktok, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


export const NavBar = () => {
    return (
      <div className=" navbar-container d-flex justify-content-center  align-items-center navbar mt-4">
     <img className="rounded mr-4" src="/img/uxc.png" alt="" style={{width: "60px"}} />
     <nav className="navbar navbar-expand-lg bg-beige ">
    <div className="container-fluid text " >
    <Link to= {"/"} className="navbar-brand colorletter"> ¿Quienes somos?
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> </Link>
      <Link to= {"/"} className="navbar-brand colorletter"> Nuestra Misión
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> </Link>
      <Link to= {"/"} className="navbar-brand colorletter"> Eventos
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> </Link>
      <Link to= {"/"} className="navbar-brand colorletter"> Servicios
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> </Link>
      <Link to= {"/"} className="navbar-brand colorletter"> Contacto
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> </Link>
      <div className="social-icons ml-4">
                    <a href="https://www.instagram.com/unidosporelcoaching" target="_blank" rel="noopener noreferrer" className="colorletter"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.facebook.com/unidosporelcoaching" target="_blank" rel="noopener noreferrer" className="colorletter"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://www.tiktok.com/@unidosporelcoachig" className="colorletter"><FontAwesomeIcon icon={faTiktok} /></a>
                    <a href="https://www.youtube.com/@unidosporelcoaching8964" target="_blank" rel="noopener noreferrer" className="colorletter"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href="https://www.linkedin.com/in/valeria-vargas-42a2161b1/" target="_blank" rel="noopener noreferrer" className="colorletter"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
    </div>
  </nav>
  </div>
  );
};
