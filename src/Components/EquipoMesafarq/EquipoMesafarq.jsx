import React, { useState } from 'react';
import CEO_img from '../Assets/Equipo/CEO.png'
import CTO_img from '../Assets/Equipo/CTO.png'
import CMO_img from '../Assets/Equipo/CMO.png'
import { LinkedinLogo } from "@phosphor-icons/react"
import './EquipoMesafarq.css';

const EquipoMesafarq = () => {
    const equipo = [
        {
          nombre: 'Julian Belaunde Mantilla',
          cargo: 'CEO',
          imagen: CEO_img,
          linkedIn: 'https://www.linkedin.com/in/julian-belaunde-mantilla'
        },
        {
          nombre: 'Liliana Visconde Garay',
          cargo: 'CTO',
          imagen: CTO_img,
          linkedIn: 'https://www.linkedin.com/in/liliana-visconde-garay'
        },
        {
            nombre: 'Flavia Estrada Prado',
            cargo: 'CMO',
            imagen: CMO_img,
            linkedIn: 'https://www.linkedin.com/in/flavia-estrada-prado'
        },
        // Puedes añadir más miembros aquí
      ];

  // Estado para controlar el color del ícono de LinkedIn
  const [iconColor, setIconColor] = useState("white"); // Color inicial

  return (
    <div className="equipo-contenedor">
      <h2>NUESTRO EQUIPO</h2>
      <div className="integrantes">
        {equipo.map((integrante, index) => (
          <div key={index} className="tarjeta-integrante">
            <img src={integrante.imagen} alt={`Imagen de ${integrante.cargo}`} className="imagen-integrante" />
            <h3>{integrante.cargo}</h3>
            <p>{integrante.nombre}</p>
            <a href={integrante.linkedIn} 
               className="btn-linkedin" 
               target="_blank" 
               rel="noopener noreferrer"
               onMouseDown={() => setIconColor("white")} // Cambia el color al presionar
               onMouseUp={() => setIconColor("white")} // Restaura el color al soltar
               onMouseLeave={() => setIconColor("white")} // Asegura que el color se restaure si el cursor sale del botón mientras se presiona
            >
              <LinkedinLogo size={32} color={iconColor}/>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EquipoMesafarq;
