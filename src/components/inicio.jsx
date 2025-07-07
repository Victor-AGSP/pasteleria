import React from 'react';
import '../styles/inicio.css';

function Inicio() {
  return (
    <div className="inicio-container">
      <header className="inicio-header">
        <h1 className="inicio-title">Bienvenido a Mi Aplicación</h1>
        <p className="inicio-subtitle">
          Explora las funcionalidades, gestiona tus recursos y mejora tu productividad.
        </p>
        <button className="inicio-button">Comenzar</button>
      </header>
    </div>
  );
}

export default Inicio;
