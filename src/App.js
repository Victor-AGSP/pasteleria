import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import Productos from './components/products';
import Contacto from './components/contacts';
import Footer from './components/footer';
import Inicio from './components/inicio';
import Oferta from './components/oferta';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/products" element={<Productos />} />
        <Route path="/oferta" element={<Oferta />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
