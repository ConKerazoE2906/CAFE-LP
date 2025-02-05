<<<<<<< HEAD
import React, { useState } from "react";
import Header from "../components/Header";
import Desayunos from "../components/Menu/Desayunos";
import Footer from "../components/Footer";
import Bebidas from "../components/Menu/Bebidas";
import Postres from "../components/Menu/Postres";
import Carrito from "../components/Menu/Carrito";
import "../styles/estilo-menu.css";

import image1 from "../assets/2.jpg";
import image2 from "../assets/1.jpg";
import image3 from "../assets/3.jpg";

const Menu = () => {
  const [productos, setProductos] = useState([]);
  const [mostrarPago, setMostrarPago] = useState(false);

  // Agregar producto al carrito
  const agregarAlCarrito = (producto) => { 
    setProductos((prev) => {
      const index = prev.findIndex((p) => p.nombre === producto.nombre);
      if (index !== -1) {
        // Si el producto ya está en el carrito, aumentar cantidad
        return prev.map((p, i) => 
          i === index ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } 
      // Si es nuevo, agregarlo con cantidad 1
      return [...prev, { ...producto, cantidad: 1 }];
    });
};

  // Eliminar un producto (reducir cantidad o eliminar)
  const eliminarDelCarrito = (index) => {
    setProductos((prev) => prev.filter((_, i) => i !== index));
  };

  // Calcular total
  const total = productos.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );

  return (
    <>
      <Header />
      {!mostrarPago ? (
        <>
          <Desayunos agregarAlCarrito={agregarAlCarrito} />
          <div className="banner-img">
            <img src={image1} alt="Banner de Menú" />
          </div>
          <Bebidas agregarAlCarrito={agregarAlCarrito} />
          <div className="banner-img">
            <img src={image2} alt="Banner de Menú" />
          </div>
          <Postres agregarAlCarrito={agregarAlCarrito} />
          <div className="banner-img">
            <img src={image3} alt="Banner de Menú" />
          </div>
          <Carrito
            productos={productos}
            eliminarDelCarrito={eliminarDelCarrito}
            total={total}
            irAPago={() => setMostrarPago(true)}
          />
        </>
      ) : (
        <div id="pago-container">
          <h2>Página de Pago</h2>
          <p>Total a pagar: ${total.toFixed(2)}</p>
          <button onClick={() => alert("Compra realizada con éxito!")}>
            Finalizar Compra
          </button>
          <button onClick={() => setMostrarPago(false)}>Volver al Menú</button>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Menu;
=======
import React, { useState } from "react";
import Header from "../components/Header";
import Desayunos from "../components/Menu/Desayunos";
import Footer from "../components/Footer";
import Bebidas from "../components/Menu/Bebidas";
import Postres from "../components/Menu/Postres";
import Carrito from "../components/Menu/Carrito";
import "../styles/estilo-menu.css";

import image1 from "../assets/2.jpg";
import image2 from "../assets/1.jpg";
import image3 from "../assets/3.jpg";

const Menu = () => {
  const [productos, setProductos] = useState([]);
  const [mostrarPago, setMostrarPago] = useState(false);

  // Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    setProductos((prev) => [...prev, producto]);
  };

  // Eliminar producto del carrito
  const eliminarDelCarrito = (index) => {
    setProductos((prev) => prev.filter((_, i) => i !== index));
  };

  // Calcular total
  const total = productos.reduce((acc, producto) => acc + producto.precio, 0);

  return (
    <>
      <Header />
      {!mostrarPago ? (
        <>
          <Desayunos agregarAlCarrito={agregarAlCarrito} />
          <div className="banner-img">
            <img src={image1} alt="Banner de Menú" />
          </div>
          <Bebidas agregarAlCarrito={agregarAlCarrito} />
          <div className="banner-img">
            <img src={image2} alt="Banner de Menú" />
          </div>
          <Postres agregarAlCarrito={agregarAlCarrito} />
          <div className="banner-img">
            <img src={image3} alt="Banner de Menú" />
          </div>
          <Carrito
            productos={productos}
            eliminarDelCarrito={eliminarDelCarrito}
            total={total}
            irAPago={() => setMostrarPago(true)}
          />
        </>
      ) : (
        <div id="pago-container">
          <h2>Página de Pago</h2>
          <p>Total a pagar: ${total.toFixed(2)}</p>
          <button onClick={() => alert("Compra realizada con éxito!")}>
            Finalizar Compra
          </button>
          <button onClick={() => setMostrarPago(false)}>Volver al Menú</button>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Menu;
>>>>>>> 82de7fc (Cambios generales)
