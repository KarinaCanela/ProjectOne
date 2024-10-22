import React from 'react';
import './footer.css';  // Importar el archivo CSS para los estilos
import facebookIcon from './Assets/facebook.png';
import instagramIcon from './Assets/instagram.png';
import XIcon from './Assets/twitterx.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Powered by KC 2024 | Todos los derechos reservados ©</p>
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={XIcon} alt="X" className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
