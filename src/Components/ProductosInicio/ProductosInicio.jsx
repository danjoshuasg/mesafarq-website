import React from 'react';
import './ProductosInicio.css'; 
import { Pill, Dna, Stethoscope } from "@phosphor-icons/react/dist/ssr";

function ProductosInicio() {
  return (
    <div className="ProductosInicio">
      <h2>PRODUCTOS QUE OFRECEMOS</h2>
      <div className="ProductosInicio-Contenedor">
        <div className="ProductoInicio">
          <h3> <Pill color='#A2A2B0' size={30}/> Fármacos</h3>
          <div className="texto-contenedor">
            <p>Los fármacos abarcan medicamentos de prescripción, vacunas, productos de venta libre, vitaminas, y equipamiento para la dispensación y almacenamiento de fármacos, esenciales para una farmacia efectiva y completa.</p>
          </div>
          <button>Ver más</button>
        </div>
        <div className="ProductoInicio">
          <h3> <Dna color='#A2A2B0' size={30}/>Insumos clínicos</h3>
          <div className="texto-contenedor">
            <p>Los insumos clínicos indispensables incluyen soluciones para análisis clínicos, indicadores, colorantes para muestras, y sustancias para pruebas diagnósticas, cruciales para laboratorios y diagnósticos precisos.</p>
          </div>
          <button>Ver más</button>
        </div>
        <div className="ProductoInicio">
          <h3><Stethoscope color='#A2A2B0' size={30}/> Suministros médicos</h3>
          <div className="texto-contenedor">
            <p>Los suministros médicos esenciales incluyen guantes desechables, mascarillas, jeringas, vendas, desinfectantes, y equipos de diagnóstico como estetoscopios y tensiómetros, cruciales para una atención sanitaria segura y eficaz.</p>
          </div>
          <button>Ver más</button>
        </div>
      </div>
    </div>
  );
}

export default ProductosInicio;
