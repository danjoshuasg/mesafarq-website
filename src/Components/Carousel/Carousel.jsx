import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const imagenes = [
    'https://w7.pngwing.com/pngs/348/754/png-transparent-samsung-logo-samsung-price-progressive-multifocal-leukoencephalopathy-product-warranty-samsung-logo-blue-company-label-thumbnail.png',
    'https://w7.pngwing.com/pngs/769/208/png-transparent-loreal-logo-product-logos-thumbnail.png',
    'https://w7.pngwing.com/pngs/765/283/png-transparent-jameson-logo-product-logos-thumbnail.png',
    // Añade más URLs de imágenes según sea necesario
];

const CustomCarousel = () => {
    return (
        <div className="carousel">
            <Carousel>
                {imagenes.map((imagen, index) => (
                    <Carousel.Item key={index} interval={3000}>
                        <img
                        className="d-block w-100 carousel-logo"
                        src={imagen}
                        alt={`Logo ${index + 1}`}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default CustomCarousel;
