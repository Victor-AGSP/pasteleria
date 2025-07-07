import React, { useState } from 'react';
import '../styles/contacts.css';

function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado. Nos pondremos en contacto pronto.');
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="contacto-container">
      <h1 className="contacto-heading">Contáctanos</h1>
      <form onSubmit={handleSubmit} className="contacto-form">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
          className="contacto-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
          className="contacto-input"
        />
        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje"
          value={form.mensaje}
          onChange={handleChange}
          required
          rows="5"
          className="contacto-input contacto-textarea"
        />
        <button type="submit" className="contacto-button">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
