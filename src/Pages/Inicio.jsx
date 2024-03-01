import React from 'react';
import Resumen from '../Components/Resumen/Resumen.jsx';
import Carousel from 'react-bootstrap/Carousel';

const imagenes = [
  'https://w7.pngwing.com/pngs/348/754/png-transparent-samsung-logo-samsung-price-progressive-multifocal-leukoencephalopathy-product-warranty-samsung-logo-blue-company-label-thumbnail.png',
  'https://w7.pngwing.com/pngs/769/208/png-transparent-loreal-logo-product-logos-thumbnail.png',
  'https://w7.pngwing.com/pngs/765/283/png-transparent-jameson-logo-product-logos-thumbnail.png',
  // Añade más URLs de imágenes según sea necesario
];

// Ajusta la función Carrusel para utilizar el array imagenes
function Carrusel({ imagenes }) {
  return (
    <Carousel>
      {imagenes.map((imagen, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={imagen}
            alt={`Slide ${index}`}
          />
          {/* Opcional: Si deseas mantener los subtítulos, puedes personalizar este segmento */}
          <Carousel.Caption>
            <h3>{`Slide Label ${index + 1}`}</h3>
            <p>Descripción del Slide {index + 1}.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

// Integra Carrusel directamente dentro de Inicio
const Inicio = () => {
  return (
    <div>
      <Resumen/>
      <Carrusel imagenes={imagenes} />
    </div>
  );
}

export default Inicio;