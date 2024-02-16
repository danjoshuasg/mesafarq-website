import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("Inicio");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Estado para controlar la visibilidad del desplegable
  
  // Actualizada para manejar clics en cualquier menú
  const handleMenuClick = (menuName) => {
    setMenu(menuName);
    // Cierra el desplegable si el menú seleccionado no es "Más"
    if (menuName !== "Mas") {
      setIsDropdownVisible(false);
    } else {
      // Para "Más", toggle el estado visible para mostrar/ocultar el desplegable
      setIsDropdownVisible(!isDropdownVisible);
    }
  };
  
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>MESAFARQ</p>
      </div>
      <div>
        <ul className='nav-menu'>
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
        <button>Agende una cita</button>
      </div>
    </div>
  );
}

export default Navbar;
