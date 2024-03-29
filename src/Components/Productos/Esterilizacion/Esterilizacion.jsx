import React, { useState } from 'react';
import SearchBar from '../../Productos/Searchbar/Searchbar.jsx'; // Asegúrate de que la ruta de importación sea correcta
import './Esterilizacion.css';
import data_product from '../../Assets/data_products';
import Item from '../../Productos/Item/Item.jsx';

const Esterilizacion = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = [...new Set(data_product.map((item) => item.type))]; // Asumiendo que 'type' es tu categoría

    const filteredProducts = data_product.filter((item) => {
        return (
            item.name.toLowerCase().includes(searchKeyword.toLowerCase()) &&
            (!selectedCategory || item.type === selectedCategory)
        );
    });

    return (
        <div className='esterilizacion'>
            <h1>Nuestros Productos</h1>
            <hr />
            <SearchBar 
              onKeywordChange={setSearchKeyword}
              onCategoryChange={setSelectedCategory}
              categories={categories}
            />
            <div className="esterilizacion-item">
                {filteredProducts.map((item, i) => {
                    return <Item key={i} {...item} />;
                })}
            </div>
        </div>
    );
}

export default Esterilizacion;
