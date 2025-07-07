import React from 'react';
import '../styles/services.css';

function Servicios() {
  const services = [
    {
      title: 'Desarrollo Web',
      description: 'Creamos sitios web modernos, responsivos y optimizados para todos los dispositivos.',
    },
    {
      title: 'Aplicaciones Móviles',
      description: 'Desarrollamos apps para Android y iOS con tecnología nativa o híbrida.',
    },
    {
      title: 'Consultoría Tecnológica',
      description: 'Asesoramos a empresas en transformación digital y mejora de procesos tecnológicos.',
    },
  ];

  return (
    <div className="servicios-container">
      <h1 className="servicios-heading">Nuestros Servicios</h1>
      <div className="servicios-grid">
        {services.map((service, index) => (
          <div key={index} className="servicio-card">
            <h2 className="servicio-title">{service.title}</h2>
            <p className="servicio-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicios;
