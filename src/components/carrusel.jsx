import React, { useState, useEffect } from 'react';
import '../styles/carrusel.css';

const slides = [
  {
    src: '/img/productos/img2.webp',
    titulo: 'Pasteles Personalizados',
    subtitulo: 'Diseña tu pastel ideal para cada ocasión',
  },
  {
    src: '/img/productos/img4.webp',
    titulo: 'Sabores Irresistibles',
    subtitulo: 'Frescura y calidad en cada bocado',
  },
  {
    src: '/img/productos/img1.png',
    titulo: 'Detalles Dulces',
    subtitulo: 'Endulza cada momento especial',
  },
];

function Carrusel() {
  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % slides.length);
  };

  const anterior = () => {
    setIndice((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const seleccionar = (i) => {
    setIndice(i);
  };

  // ✅ Autoplay cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      siguiente();
    }, 5000);

    return () => clearInterval(intervalo); // Limpia cuando se desmonta
  }, [indice]); // Ojo: puedes poner [] o [indice] para reiniciar

  return (
    <div className="carrusel">
      <img
        src={slides[indice].src}
        alt={`slide-${indice}`}
        className="carrusel-img"
      />

      <div className="carrusel-overlay">
        <h2 className="carrusel-titulo">{slides[indice].titulo}</h2>
        <p className="carrusel-subtitulo">{slides[indice].subtitulo}</p>
        <button className="carrusel-cta">Haz tu pedido</button>
      </div>

      <button className="carrusel-btn izq" onClick={anterior} aria-label="Anterior">
        &#10094;
      </button>
      <button className="carrusel-btn der" onClick={siguiente} aria-label="Siguiente">
        &#10095;
      </button>

      <div className="carrusel-indicadores">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`punto ${i === indice ? 'activo' : ''}`}
            onClick={() => seleccionar(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carrusel;
