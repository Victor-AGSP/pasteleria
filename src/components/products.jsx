import React, { useState } from 'react';
import '../styles/products.css';

const productos = [
  { id: 1, nombre: 'Torta de Chocolate', categoria: 'Tortas', precio: 25000 },
  { id: 2, nombre: 'Cupcakes Vainilla', categoria: 'Cupcakes', precio: 12000 },
  { id: 3, nombre: 'Galletas Decoradas', categoria: 'Galletas', precio: 8000 },
  { id: 4, nombre: 'Torta Frutilla', categoria: 'Tortas', precio: 22000 },
  { id: 5, nombre: 'Cupcakes Red Velvet', categoria: 'Cupcakes', precio: 15000 },
];

function Products() {
  const [categoria, setCategoria] = useState('Todos');
  const [precioMax, setPrecioMax] = useState(30000);
  const [busqueda, setBusqueda] = useState('');

  const categorias = ['Todos', 'Tortas', 'Cupcakes', 'Galletas'];

  const productosFiltrados = productos.filter((p) => {
    const coincideCategoria = categoria === 'Todos' || p.categoria === categoria;
    const coincidePrecio = p.precio <= precioMax;
    const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincidePrecio && coincideBusqueda;
  });

  return (
    <div className="productos-container">
      <h1 className="productos-titulo">Nuestros Productos</h1>

      {/* Menú desplegable SOLO visible en mobile */}
      <details className="filtros-mobile">
        <summary>Filtrar productos</summary>
        <div className="filtros-secundarios">
          <div className="filtro">
            <label>Categoría:</label>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              {categorias.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="filtro filtro-busqueda">
            <label>Buscar:</label>
            <input
              type="text"
              placeholder="Buscar producto..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <div className="filtro">
            <label>Precio Máximo: ${precioMax}</label>
            <input
              type="range"
              min="0"
              max="30000"
              step="1000"
              value={precioMax}
              onChange={(e) => setPrecioMax(Number(e.target.value))}
            />
          </div>
        </div>
      </details>

      {/* Filtros fijos SOLO visibles en desktop */}
      <div className="filtros-desktop">
        <div className="filtros-secundarios">
          <div className="filtro">
            <label>Categoría:</label>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              {categorias.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="filtro filtro-busqueda">
            <label>Buscar:</label>
            <input
              type="text"
              placeholder="Buscar producto..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <div className="filtro">
            <label>Precio Máximo: ${precioMax}</label>
            <input
              type="range"
              min="0"
              max="30000"
              step="1000"
              value={precioMax}
              onChange={(e) => setPrecioMax(Number(e.target.value))}
            />
          </div>
        </div>
      </div>

      {/* Productos */}
      <div className="productos-grid">
        {productosFiltrados.map((p) => (
          <div key={p.id} className="producto-card">
            <div className="producto-img-placeholder">
              <span>Imagen</span>
            </div>
            <h3>{p.nombre}</h3>
            <p className="producto-precio">${p.precio.toLocaleString()}</p>
          </div>
        ))}
        {productosFiltrados.length === 0 && (
          <p className="sin-resultados">No se encontraron productos.</p>
        )}
      </div>
    </div>

  );
}

export default Products;
