import React from 'react'
import './Resumen.css'
import Imagen_resumen from '../Assets/imagen_resumen.png'

const Resumen = () => {
  return (
    <div className='resumen'>
      <div className="resumen-left">
        <h2>Calidad y eficiencia en la salud peruana.</h2>
        <div>
          <div className="mensaje">
            <p>Bienvenidos a Mesafarq, su socio de confianza en la distribución de equipos y materiales innovadores para las industrias médica, farmacéutica y química. Comprometidos con la excelencia y la sostenibilidad, ofrecemos lo último en tecnología y soluciones eficientes, garantizando calidad, rapidez y responsabilidad ambiental en cada entrega. Descubra con Mesafarq el futuro de la distribución médica y farmacéutica.</p>
          </div>
        </div>
        <div className="conocenos-btn">
          <button> Conócenos </button>
        </div>
      </div>
      <div className="resumen-right">
        <img src={Imagen_resumen} alt="Descripción" /> {/* Asegúrate de que la clase 'imagen' no sea necesaria y no esté aplicando estilos adicionales */}
      </div>
    </div>
  )
}

export default Resumen