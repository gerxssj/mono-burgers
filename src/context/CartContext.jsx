import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  // AGREGAR PRODUCTO
  function agregarAlCarrito(producto) {
    setCarrito((prev) => {
      const indice = prev.findIndex((item) => {
        const mismosToppings =
          JSON.stringify(item.toppings.map((t) => t.id).sort()) ===
          JSON.stringify(producto.toppings.map((t) => t.id).sort());

        return item.id === producto.id && mismosToppings;
      });

      // Si ya existe el mismo producto con los mismos toppings
      if (indice !== -1) {
        return prev.map((item, index) =>
          index === indice
            ? {
                ...item,
                cantidad: item.cantidad + 1,
              }
            : item
        );
      }

      // Si no existe, lo agregamos con cantidad 1
      return [
        ...prev,
        {
          ...producto,
          cantidad: 1,
        },
      ];
    });
  }

  // AUMENTAR CANTIDAD
  function aumentarCantidad(index) {
    setCarrito((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              cantidad: item.cantidad + 1,
            }
          : item
      )
    );
  }

  // DISMINUIR CANTIDAD
  function disminuirCantidad(index) {
    setCarrito((prev) => {
      const producto = prev[index];

      if (producto.cantidad === 1) {
        return prev.filter((_, i) => i !== index);
      }

      return prev.map((item, i) =>
        i === index
          ? {
              ...item,
              cantidad: item.cantidad - 1,
            }
          : item
      );
    });
  }

  // ELIMINAR PRODUCTO
  function eliminarDelCarrito(index) {
    setCarrito((prev) =>
      prev.filter((_, i) => i !== index)
    );
  }

  // TOTAL
  const total = carrito.reduce(
    (suma, producto) =>
      suma + producto.total * producto.cantidad,
    0
  );

  // CANTIDAD TOTAL DE PRODUCTOS
  const cantidadTotal = carrito.reduce(
    (suma, producto) =>
      suma + producto.cantidad,
    0
  );

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        aumentarCantidad,
        disminuirCantidad,
        eliminarDelCarrito,
        total,
        cantidadTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}