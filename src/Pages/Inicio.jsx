import React from 'react';
import Resumen from '../Components/Resumen/Resumen.jsx';
import ContactoFormulario from '../Components/ContactoForm/ContactoForm.jsx';
import Carousel from '../Components/Carousel/Carousel.jsx';

import image1 from '../Components/Assets/producto_1.png';
import image2 from '../Components/Assets/producto_2.png';
import image3 from '../Components/Assets/producto_3.png';

const images = [image1, image2, image3];

const Inicio = () => {
  return (
    <div>
      <Resumen/>
      <ContactoFormulario/>
      <Carousel images={images} />
    </div>
  );
}

export default Inicio;