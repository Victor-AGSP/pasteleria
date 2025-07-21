import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/menu.css';
import logo from '../assets/berny.jpeg';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Productos', path: '/products' },
    { label: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className="menu-nav">
      <div className="menu-container">
        <Link to="/" className="menu-logo" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Dulce Tentación de Berny" />
          <span>Dulce Tentación de Berny</span>
        </Link>
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
