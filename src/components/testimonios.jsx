import React from 'react';
import '../styles/testimonios.css';

const testimonios = [
  {
    nombre: 'Camila R.',
    mensaje: 'La torta personalizada fue un éxito, estaba deliciosa y se veía hermosa. 100% recomendados.',
    foto: '/img/testimonios/cliente1.jpg',
  },
  {
    nombre: 'José M.',
    mensaje: 'Pedí una torta de chocolate para el cumpleaños de mi hijo y todos quedaron encantados.',
    foto: '/img/testimonios/cliente2.jpg',
  },
  {
    nombre: 'Valentina S.',
    mensaje: 'Excelente servicio y atención, las galletas y cupcakes estaban increíbles. ¡Volveré a pedir!',
    foto: '/img/testimonios/cliente3.jpg',
  },
];

function Testimonios() {
  return (
    <section className="testimonios">
      <h2 className="testimonios-titulo">Nuestros Clientes Felices</h2>
      <div className="testimonios-grid">
        {testimonios.map((t, i) => (
          <div className="testimonio-card" key={i}>
            <img src={t.foto} alt={t.nombre} className="testimonio-foto" />
            <p className="testimonio-mensaje">“{t.mensaje}”</p>
            <h4 className="testimonio-nombre">{t.nombre}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonios;
