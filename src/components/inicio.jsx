import React from 'react';
import Carrusel from './carrusel';      // Ajusta la ruta según donde estén tus componentes
import Destacados from './destacados';
import Galeria from './galeria';
import Testimonios from './testimonios';
import Nosotros from './nosotros';

function Inicio() {
  return (
    <>
      <Carrusel />
      <Destacados />
      <Galeria />
      <Testimonios />
      <Nosotros />
    </>
  );
}

export default Inicio;