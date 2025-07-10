import React, { useState } from 'react';
import '../styles/contacts.css';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !email || !mensaje) {
      alert('Por favor completa todos los campos.');
      return;
    }
    // Aquí puedes enviar a tu backend o mail service
    alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <section className="contacto">
      <h1>Contáctanos</h1>
      <div className="contacto-contenido">
        <form className="contacto-formulario" onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
          />

          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo electrónico"
          />

          <label>Mensaje:</label>
          <textarea
            rows="5"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Cuéntanos en qué podemos ayudarte"
          />

          <button type="submit">Enviar Mensaje</button>
        </form>

        <div className="contacto-mapa">
          <iframe
            title="Ubicación Pastelería"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.9897422526433!2d-72.3349464246589!3d-38.23334535813332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966b15de1a675c57%3A0x39939184f1b8ec2d!2sPasteleria%20Dulce%20Tentacion%20de%20Berny!5e0!3m2!1ses!2scl!4v1752170209533!5m2!1ses!2scl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
