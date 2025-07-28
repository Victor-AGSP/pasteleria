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
        <ul>
          <li>Cóctel de bienvenida</li>
          <li>Cena completa</li>
          <li>Decoración temática</li>
          <li>Mantelería y loza premium</li>
          <li>Garzones profesionales</li>
          <li>Cámara 360 para recuerdos únicos</li>
          <li>Jugo y bebida ilimitada</li>
          <li>Toda la jornada incluida</li>
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
