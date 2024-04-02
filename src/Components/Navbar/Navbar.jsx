import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("Inicio");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
    if (menuName !== "Mas") {
      setIsDropdownVisible(false);
    } else {
      setIsDropdownVisible(!isDropdownVisible);
    }
    if (window.innerWidth <= 768) setIsMobileMenuVisible(false); // Cierra el menú móvil al seleccionar un elemento
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };
  
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>MESAFARQ</p>
      </div>
      <div className="nav-hamburger" onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <ul className={`nav-menu ${isMobileMenuVisible ? "active" : ""}`}>
          <li onClick={() => handleMenuClick('Inicio')}><Link to="/">Inicio</Link>{menu === "Inicio" ? <hr/> : null}</li>
          <li onClick={() => handleMenuClick('Acerca')}><Link to="/acerca">Acerca de Nosotros</Link>{menu === "Acerca" ? <hr/> : null}</li>
          <li onClick={() => handleMenuClick('Productos')}><Link to="/productos">Productos</Link>{menu === "Productos" ? <hr/> : null}</li>
          <li onClick={() => handleMenuClick('Servicios')}><Link to="/servicios">Servicios</Link>{menu === "Servicios" ? <hr/> : null}</li>
          <li onMouseLeave={() => setIsDropdownVisible(false)}> {/* Agregado onMouseLeave para cerrar el menú al salir */}
            <div onClick={() => handleMenuClick('Mas')}>Más{menu === "Mas" ? <hr /> : null}
              {isDropdownVisible && (
                <ul className='dropdown-menu'>
                  <li onClick={() => handleMenuClick('Blog')}><Link to="/blog">Blog</Link></li>
                  <li onClick={() => handleMenuClick('FAQ')}><Link to="/faq">FAQ</Link></li>
                </ul>
              )}
            </div>
          </li>
        </ul>
      </div>
        <div className="nav-agendar-cita">
          <button onClick={() => window.location.href='https://api.whatsapp.com/send/?phone=%2B51947596332&text&type=phone_number&app_absent=0'}>Agende una cita</button>
        </div>
    </div>
  );
}

export default Navbar;
