import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/menu.css';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className="menu-nav">
      <div className="menu-container">
        <div className="menu-logo">MiAplicación</div>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <ul className={`menu-links ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link className="menu-link" to={item.path} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
