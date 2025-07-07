import React, { useState } from 'react';
import '../styles/inicio.css';

const imagenes = [
  '/img/carrusel1.jpg',
  '/img/carrusel2.jpg',
  '/img/carrusel3.jpg',
];

function Inicio() {
  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    setIndice((indice + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndice((indice - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div className="carrusel">
      <button className="carrusel-btn izq" onClick={anterior}>‹</button>
      <img src={imagenes[indice]} alt={`slide-${indice}`} className="carrusel-img" />
      <button className="carrusel-btn der" onClick={siguiente}>›</button>
    </div>
  );
}

export default Inicio;
