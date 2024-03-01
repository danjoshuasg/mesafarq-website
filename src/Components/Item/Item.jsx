import React from 'react';
import './Item.css';

const Item = (props) => {
    return (
        <div className='item'>
            <img src={props.image} alt={props.name} />
            <div className="item-detail"><span>ID:</span><p>{props.id}</p></div>
            <div className="item-detail"><span>Nombre:</span><p>{props.name}</p></div>
            <div className="item-prices">
                <span>Precio:</span><p>{props.price}</p>
            </div>
            <div className="item-specifications">
                <span>Especificaciones:</span><p>{props.specifications}</p>
            </div>
            <div className="item-units">
                <span>Unidades:</span><p>{props.units}</p>
            </div>
            <div className="item-type">
                <span>Tipo:</span><p>{props.type}</p>
            </div>
        </div>
    );
}
export default Item;
