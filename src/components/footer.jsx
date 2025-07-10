import React from 'react';
import '../styles/footer.css';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-redes">
        <a
          href="https://www.facebook.com/tu_pagina"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/tu_pagina"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/56912345678"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaWhatsapp />
        </a>
      </div>
      <p className="footer-texto">
        © {new Date().getFullYear()} Tu Pastelería. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
