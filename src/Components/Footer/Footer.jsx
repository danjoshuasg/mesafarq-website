import React from 'react';
import './Footer.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta que tu componente

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© Mesafarm Inc. 2024</span>
        <div className="footer-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:info@mesafarm.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
