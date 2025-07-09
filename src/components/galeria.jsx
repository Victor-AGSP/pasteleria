import React from 'react';
import '../styles/galeria.css';

const imagenes = [
  '/img/galeria1.jpg',
  '/img/galeria2.jpg',
  '/img/galeria3.jpg',
  '/img/galeria4.jpg',
  '/img/galeria5.jpg',
  '/img/galeria6.jpg',
];

function Galeria() {
  return (
    <section className="galeria">
      <h2 className="galeria-titulo">Nuestra Galería</h2>
      <div className="galeria-grid">
        {imagenes.map((img, index) => (
          <div className="galeria-item" key={index}>
            <img src={img} alt={`pastel-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Galeria;
