import React from 'react'
import './Historia.css'
import Imagen_resumen from '../../Assets/Historia/MesaFarq.png'

function Historia() {
  return (
    <div className="historia-contenedor">
      <div className="historia-left">
        <h2>Nuestra historia</h2>
        <div>
          <div className="mensaje">
            <p>Mesafarq, fundada por la familia Belaunde, revolucionó la distribución de medicamentos con tecnología avanzada. Comenzando en una pequeña ciudad, utilizaron vehículos eléctricos para distribuir prodúcto farmacéuticos, especialmente a comunidades remotas. Hoy, Mesafarq es sinónimo de innovación y acceso equitativo a la salud en la industria farmacéutica.</p>
          </div>
        </div>
      </div>
      <div className="historia-right">
        <img src={Imagen_resumen} alt="Descripción" /> {/* Asegúrate de que la clase 'imagen' no sea necesaria y no esté aplicando estilos adicionales */}
      </div>
    </div>
  )
}

export default Historia