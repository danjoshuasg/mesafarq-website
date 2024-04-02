import React from 'react';
import './Footer.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta que tu componente
import { EnvelopeSimple, LinkedinLogo, InstagramLogo } from "@phosphor-icons/react";

// Componente para cada enlace del pie de página
const FooterLink = ({ Icon, url, children }) => (
  <div className="enlace">
    <Icon color="#FFFFFF" size={20} />
    <a href={url}>{children}</a>
  </div>
);

// Definición de enlaces como un arreglo para simplificar la renderización
const links = [
  { Icon: InstagramLogo, url: "https://www.instagram.com", children: "Instagram" },
  { Icon: LinkedinLogo, url: "https://www.linkedin.com", children: "LinkedIn" },
  { Icon: EnvelopeSimple, url: "mailto:info@mesafarq.com", children: "Correo" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© Mesafarm Inc. 2024</span>
        <div className="footer-links">
          {links.map((link, index) => (
            <FooterLink key={index} {...link} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
