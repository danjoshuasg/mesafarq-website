import React from 'react';
import Resumen from '../Components/Resumen/Resumen.jsx';
import ContactoFormulario from '../Components/ContactoForm/ContactoForm.jsx';
import Carousel from '../Components/Carousel/Carousel.jsx';
import ProductosInicio from '../Components/ProductosInicio/ProductosInicio.jsx';
import NumerosInicio from '../Components/NumerosInicio/NumerosInicio.jsx';
import ServiciosInicio from '../Components/ServiciosInicio/ServiciosInicio.jsx';


import image1 from '../Components/Assets/LogosAliados/kimberly - gray.png';
import image2 from '../Components/Assets/LogosAliados/pfizer - gray.png';
import image3 from '../Components/Assets/LogosAliados/roche posay - gray.png';
import image4 from '../Components/Assets/LogosAliados/Bayer - gray.png';

const images = [image1, image2, image3, image4];

const Inicio = () => {
  return (
    <div>
      <Resumen/>
      <Carousel images={images} />
      <ProductosInicio/>
      <NumerosInicio/>
      <ServiciosInicio/>
      <ContactoFormulario/>
    </div>
  );
}

export default Inicio;