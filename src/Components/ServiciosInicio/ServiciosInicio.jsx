import React from 'react';
import './ServiciosInicio.css';

const ServiciosInicio = () => {
  const servicios = [
    {
      nombre: 'Gestión de la cadena de suministros',
      descripcion: 'Ofrecemos eficiencia y eficacia en todos los procesos.',
      imagen: 'ruta-a-la-imagen-de-cadena-de-suministros.jpg'
    },
    {
      nombre: 'Consultoría en regulación farmacéutica',
      descripcion: 'Ofrecemos la guía directa de expertos en regulación de medicamentos.',
      imagen: 'ruta-a-la-imagen-de-consultoria.jpg'
    },
    // Puedes añadir más servicios aquí
  ];

  return (
    <div className="servicios">
      {servicios.map((servicio, index) => (
        <div key={index} className="servicio">
          <div className="servicio-imagen">
            <img src={servicio.imagen} alt={servicio.nombre} />
          </div>
          <div className="servicio-info">
            <h3>{servicio.nombre}</h3>
            <p>{servicio.descripcion}</p>
            <button className="leer-mas">Leer más</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiciosInicio;
