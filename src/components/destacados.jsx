import React from 'react';
import '../styles/destacados.css';

const productos = [
  {
    img: '/img/pastel1.jpg',
    nombre: 'Torta de Chocolate',
    descripcion: 'Bizcocho suave, cobertura cremosa y decoración personalizada.',
  },
  {
    img: '/img/cupcake.jpg',
    nombre: 'Cupcakes Decorados',
    descripcion: 'Perfectos para cumpleaños, baby showers y celebraciones.',
  },
  {
    img: '/img/galleta.jpg',
    nombre: 'Galletas Temáticas',
    descripcion: 'Diseños únicos para cada ocasión especial.',
  },
];

function Destacados() {
  return (
    <section className="destacados">
      <h2 className="destacados-titulo">Productos Destacados</h2>
      <div className="destacados-grid">
        {productos.map((producto, index) => (
          <div className="card" key={index}>
            <img src={producto.img} alt={producto.nombre} className="card-img" />
            <h3 className="card-nombre">{producto.nombre}</h3>
            <p className="card-descripcion">{producto.descripcion}</p>
            <button className="card-btn">Ver más</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destacados;
