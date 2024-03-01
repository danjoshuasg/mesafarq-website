import React from 'react';
import './Esterilizacion.css'
import data_product from '../Assets/data_products';
import Item from '../Item/Item';

const Esterilizacion = () => {
    return (
        <div className='esterilizacion'>
            <h1>ESTERILIZACIÓN</h1>
            <hr />
            <div className="esterilizacion-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} name={item.name} image={item.image} price={item.price} units={item.units} type={item.type}   specifications={item.specifications}/>
                })}
            </div>
        </div>
    );
}

export default Esterilizacion;
