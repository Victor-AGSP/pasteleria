import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrusel from './components/carrusel';
import Menu from './components/menu';
import Productos from './components/products';
import Contacto from './components/contacts';
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
    </Router>
  );
}

export default App;
