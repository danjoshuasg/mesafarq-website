// NumbersComponent.jsx
import React from 'react';
import CountUp from 'react-countup';
import './NumerosInicio.css';

const NumerosInicio = () => {
  return (
    <div className="numbers-container">
      <div className="numbers-row">
        <div className="number-item">
          <CountUp end={10} duration={10} />
          <p>Departamentos en el Perú</p>
        </div>
        <div className="number-item">
          <CountUp end={500} duration={10} prefix="+" />
          <p>Clientes satisfechos</p>
        </div>
        <div className="number-item">
          <CountUp end={20} duration={10} />
          <p>Años en el mercado</p>
        </div>
      </div>
      <div className="button-container">
        <button>Ver más</button>
      </div>
    </div>
  );
};

export default NumerosInicio;
