import React, { useState } from "react";
import "../styles/oferta.css";

export default function Oferta() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className="oferta">
      <header className="oferta-header">
        <h1 className="oferta-title">🎉 Cena de Fin de Año</h1>
        <p className="oferta-subtitle">
          Vive una experiencia inolvidable: Cóctel, cena, decoración, garzones y más.
        </p>
      </header>

      <div className="oferta-main-image">
        <img
          src="/img/ofertas/image6.webp"
          alt="Cena principal"
          onClick={() => openImage("/img/ofertas/image6.webp")}
        />
      </div>

      <div className="oferta-gallery">
        {["image5.webp", "image3.webp", "image2.webp", "image4.webp", "image1.webp"].map((img, index) => (
          <div className="oferta-gallery-item" key={index} onClick={() => openImage(`/img/ofertas/${img}`)}>
            <img src={`/img/ofertas/${img}`} alt={`Galería ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="oferta-info">
        <h2>¿Qué incluye?</h2>

        <h3>Cóctel</h3>
        <p>
          Incluye jugos (variedad de sabores) y bebidas ilimitadas. 
          El cóctel considera <strong>15 bocados por persona</strong>:
        </p>
        <ul>
          <li>4 empanadas</li>
          <li>2 brochetas</li>
          <li>2 crostinis</li>
          <li>2 volovanes</li>
          <li>1 brocheta de queso</li>
          <li>1 brocheta de fruta</li>
          <li>1 pieza de pastelería</li>
          <li>2 ceviches</li>
        </ul>

        <h3>Cena</h3>
        <p>
          Incluye jugos (variedad de sabores) y bebidas ilimitadas.
          La cena no incluye entrada. El plato principal consiste en:
        </p>
        <ul>
          <li>Medallón de carne mechada con salsa española y champiñones</li>
          <li>Guarnición a elección: papas rústicas a las finas hierbas, puré rústico o papas duquesas artesanales</li>
          <li>Panaché de vegetales</li>
        </ul>

        <h3>Postres</h3>
        <ul>
          <li>Tiramisú</li>
          <li>Cheesecake de maracuyá</li>
          <li>Cheesecake de frutos del bosque</li>
          <li>Niditos de merengue</li>
        </ul>

        <h3>Adicional</h3>
        <ul>
          <li>Incluye cámara 360</li>
        </ul>

        <p className="oferta-zona">
          📍 Disponible en Victoria y alrededores (60 km). Más allá, consultar valor.
        </p>
        <p className="oferta-precio">💰 $18.000 + IVA por persona</p>
        <p className="oferta-condiciones">
          * No incluye alcohol. Consulta opciones personalizadas.
        </p>

        <button className="oferta-boton">Reserva Ahora</button>
      </div>


      {selectedImage && (
        <div className="lightbox" onClick={closeImage}>
          <span className="lightbox-close" onClick={closeImage}>&times;</span>
          <img className="lightbox-image" src={selectedImage} alt="Ampliada" />
        </div>
      )}
    </section>
  );
}
