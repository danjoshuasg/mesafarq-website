import React from 'react';
import './Mapa.css'; 

const Mapa = () => {
  // Asegúrate de reemplazar 'TU_CLAVE_API' con tu clave de la API de Google y la parte de 'q=Tu+Dirección' con la dirección que deseas mostrar.
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBeSiR7E4c3E3lMxA897kCmrxXpiUClZRQ&q=-12.0573806,-77.0899968`;

  return (
    <div className="mapa-container">
      <h2>VISÍTENOS</h2>
      <div className="mapa">
        <iframe
            title="Ubicacion-Mesafarq"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={googleMapsUrl}>
        </iframe>

      </div>

    </div>
  );
}

export default Mapa;
