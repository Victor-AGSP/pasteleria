import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrusel from './components/carrusel';
import Menu from './components/menu';
import Productos from './components/products';
import Contacto from './components/contacts';
import Destacados from './components/destacados';
import Galeria from './components/galeria';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Carrusel />} />
        <Route path="/products" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Destacados />
      <Galeria />
    </Router>
  );
}

export default App;
