import React from 'react';
import './ServiciosInicio.css';
import cadena_logistica_img from '../Assets/Servicios/cadena logistica.png';
import consultoria_img from '../Assets/Servicios/consultoria.png'

const ServiciosInicio = () => {
  const servicios = [
    {
      nombre: 'Gestión de la cadena de suministros',
      descripcion: 'Ofrecemos eficiencia y eficacia en todos los procesos.',
      imagen: cadena_logistica_img
    },
    {
      nombre: 'Consultoría en regulación farmacéutica',
      descripcion: 'Ofrecemos la guía directa de expertos en regulación de medicamentos.',
      imagen: consultoria_img
    },
    // Puedes añadir más servicios aquí
  ];

  return (
    <div className="servicios">
      <h2>SERVICIOS QUE OFRECEMOS</h2>
      {servicios.map((servicio, index) => (
        <div key={index} className="servicio">
          <div className="servicio-imagen">
            <img src={servicio.imagen} alt={servicio.nombre} />
          </div>
          <div className="servicio-info">
            <h3>{servicio.nombre}</h3>
            <div className="contenedor-descripcion">
              <p>{servicio.descripcion}</p>
            </div>
            <button className="leer-mas">Leer más</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiciosInicio;
