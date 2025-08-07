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
        <h1 className="oferta-title">🎉 Menú Cóctel - Fin de Año</h1>
        <p className="oferta-subtitle">
          Disfruta de una experiencia gourmet inolvidable con más de 30 opciones a elección.
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
          <section>
            <h3>Crostinis</h3>
            <p>Elaborados en pan baguette tostado con aceite de oliva y finas hierbas:</p>
            <ul>
              <li>Salmón ahumado con alcaparras y berros</li>
              <li>Camarones salteados al ajillo con peperonatta</li>
              <li>Jamón serrano con palmitos y tomate cherry</li>
              <li>Salame ahumado con queso brie y aceitunas</li>
            </ul>
          </section>

          <section>
            <h3>Volovanes</h3>
            <p>Elaborados en masa de hojaldre. Rellenos a elección:</p>
            <ul>
              <li>Pasta de ave, pimentón, choclos enanos y palmitos</li>
              <li>Pasta de alcachofas con salmón ahumado</li>
              <li>Pasta de pimentones asados con camarones</li>
              <li>Pasta de queso Philadelphia con ciboulette y jamón serrano</li>
            </ul>
          </section>

          <section>
            <h3>Empanadas</h3>
            <ul>
              <li>Pino (horno y fritas)</li>
              <li>Queso / queso camarón</li>
              <li>Pollo choclo</li>
              <li>Napolitana</li>
              <li>Mariscos</li>
              <li>Ají de gallina</li>
            </ul>
          </section>

          <section>
            <h3>Mini Platos</h3>
            <ul>
              <li>Mini pastel de choclo</li>
              <li>Mini chupe de jaibas</li>
              <li>Mini ají de gallina</li>
            </ul>
          </section>

          <section>
            <h3>Brochetas</h3>
            <ul>
              <li>De carnes</li>
              <li>Caprese (queso, tomate cherry, aceitunas)</li>
            </ul>
          </section>

          <section>
            <h3>Mini Sándwiches</h3>
            <ul>
              <li>Ave pimentón con lechuga hidropónica</li>
              <li>Lomo de cerdo con peperonatta</li>
              <li>Mechada de vacuno con tomate y palta</li>
            </ul>
          </section>

          <section>
            <h3>Mini Pastelería</h3>
            <ul>
              <li>Mini pie de limón</li>
              <li>Mini tartaletas</li>
              <li>Mini cheesecakes: maracuyá, frambuesa, chocolate</li>
              <li>Trilogías de chocolate</li>
            </ul>
          </section>

          <section>
            <h3>Postres en Vaso (60cc)</h3>
            <ul>
              <li>Pannacota de frutos rojos</li>
              <li>Tiramisú</li>
              <li>Torta de yogurt</li>
              <li>Mousse de frutos del bosque</li>
              <li>Torta de tres leches</li>
              <li>Suspiro limeño</li>
            </ul>
          </section>

          <section style={{ gridColumn: "1 / -1" }}>
            <h2>Menú Cóctel Oferta por Persona</h2>
            <p>20 bocados por $9.000 (mínimo 5 personas):</p>
            <ul>
              <li>2 empanadas de pino</li>
              <li>2 empanadas de queso</li>
              <li>2 brochetas de pollo con tocino</li>
              <li>2 brochetas caprese</li>
              <li>3 crostinis (a elección)</li>
              <li>3 volovanes (a elección)</li>
              <li>1 mini chupe de jaibas</li>
              <li>1 mini ají de gallina</li>
              <li>1 mini pie de frambuesa</li>
              <li>1 mini cheesecake de maracuyá</li>
              <li>1 trilogía de chocolate</li>
              <li>1 mini postre tiramisú</li>
            </ul>
          </section>

          <section style={{ gridColumn: "1 / -1" }}>
            <h3>Valores Adicionales</h3>
            <ul>
              <li>Valor unitario por bocado: $1.000</li>
              <li>100 unidades: $50.000 (máx. 5 sabores distintos)</li>
            </ul>
            <p className="oferta-condiciones">
              Los productos se entregan en envases para su correcto traslado. <br />
              📅 * Agendar con anticipación.
            </p>
            <p className="oferta-zona">📍 Disponible en Victoria y alrededores (60 km). Más allá, consultar valor.</p>
            <p className="oferta-precio">💰 Desde $9.000 por persona</p>
            <button className="oferta-boton">Reserva Ahora</button>
          </section>
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
