import { useState } from "react";
import menu from "../data/menu";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductModal from "../components/ProductModal/ProductModal";
import FloatingCart from "../components/FloatingCart/FloatingCart";
import CategoryTabs from "../components/CategoryTabs/CategoryTabs";
import Hero from "../components/Hero/Hero";

function Menu() {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* HEADER */}

      <header className="sticky top-0 z-50 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-b border-zinc-800 shadow-2xl">

        <div className="max-w-7xl mx-auto px-6 py-6">

          <h1 className="text-5xl font-black text-yellow-400 tracking-wide">
            🍔 MONO BURGERS
          </h1>

          <p className="text-lg text-yellow-100 mt-2">
            🔥 Hamburguesas artesanales hechas a la parrilla
          </p>

          <div className="flex flex-wrap gap-6 mt-4 text-gray-300">

            <span>📍 Santa Anita</span>

            <span>🕒 6:00 PM - 11:00 PM</span>

          </div>

        </div>

      </header>

      {/* CATEGORÍAS */}

      <CategoryTabs />

      <Hero />

      {/* CONTENIDO */}

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* HAMBURGUESAS */}

        <h2
          id="hamburguesas"
          className="text-4xl font-bold mb-8"
        >
          🍔 Hamburguesas
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">

          {menu.hamburguesas.map((producto) => (

            <ProductCard
              key={producto.id}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              imagen={producto.imagen}
              badge="Más vendido"
              onClick={() => setProductoSeleccionado(producto)}
            />

          ))}

        </div>

        {/* OTROS */}

        <h2
          id="otros"
          className="text-4xl font-bold mb-8"
        >
          🍟 Otros
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">

          {menu.otros.map((producto) => (

            <ProductCard
              key={producto.id}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              imagen={producto.imagen}
              badge="Nuevo"
              onClick={() => setProductoSeleccionado(producto)}
            />

          ))}

        </div>

        {/* BEBIDAS */}

        <h2
          id="bebidas"
          className="text-4xl font-bold mb-8"
        >
          🥤 Bebidas
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">

          {menu.bebidas.map((producto) => (

            <ProductCard
              key={producto.id}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              imagen={producto.imagen}
              onClick={() => setProductoSeleccionado(producto)}
            />

          ))}

        </div>

      </main>

      {/* BOTÓN DEL CARRITO */}

      <FloatingCart />

      {/* MODAL */}

      {productoSeleccionado && (
        <ProductModal
          producto={productoSeleccionado}
          onClose={() => setProductoSeleccionado(null)}
        />
      )}

    </div>
  );
}

export default Menu;