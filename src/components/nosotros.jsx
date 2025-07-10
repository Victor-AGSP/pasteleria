import React from 'react';
import '../styles/nosotros.css';

function Nosotros() {
  return (
    <section className="sobre-nosotros">
      <div className="sobre-nosotros-contenido">
        <div className="sobre-nosotros-texto">
          <h2>Sobre Nosotros</h2>
          <p>
            Somos una pastelería familiar dedicada a endulzar tus momentos más especiales.
            Cada torta, cupcake y galleta está hecha con amor, ingredientes frescos y un toque
            de creatividad única.
          </p>
          <p>
            Desde 2010, nuestra misión ha sido crear recuerdos inolvidables a través de la repostería,
            trabajando con recetas tradicionales y decoraciones personalizadas que sorprenden a grandes y chicos.
          </p>
          <p>
            ¡Déjanos ser parte de tus celebraciones!
          </p>
        </div>

        <div className="sobre-nosotros-imagen">
          <img src="/img/nosotros.jpg" alt="Equipo de la pastelería" />
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
