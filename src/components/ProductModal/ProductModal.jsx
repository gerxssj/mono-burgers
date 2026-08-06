import { useState } from "react";
import menu from "../../data/menu";
import { useCart } from "../../context/CartContext";

function ProductModal({ producto, onClose }) {
  const { agregarAlCarrito } = useCart();

  const [seleccionados, setSeleccionados] = useState([]);

  const toggleTopping = (id) => {
    if (seleccionados.includes(id)) {
      setSeleccionados(
        seleccionados.filter((item) => item !== id)
      );
    } else {
      setSeleccionados([...seleccionados, id]);
    }
  };

  const toppingsDisponibles = menu.toppings.filter((topping) =>
    producto.toppingsPermitidos.includes(topping.id)
  );

  const total =
    producto.precio +
    toppingsDisponibles
      .filter((topping) =>
        seleccionados.includes(topping.id)
      )
      .reduce(
        (suma, topping) => suma + topping.precio,
        0
      );

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/70
        backdrop-blur-sm
        flex
        justify-center
        items-center
        z-50
        p-4
      "
    >
      <div
        className="
          bg-zinc-900
          rounded-3xl
          w-full
          max-w-lg
          max-h-[90vh]
          overflow-hidden
          shadow-2xl
          flex
          flex-col
        "
      >
        {/* HEADER */}

        <div className="p-6 border-b border-zinc-800">

          <h2 className="text-2xl sm:text-3xl font-black text-yellow-400">
            {producto.nombre}
          </h2>

          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            {producto.descripcion}
          </p>

        </div>

        {/* CONTENIDO */}

        <div className="flex-1 overflow-y-auto p-6">

          {producto.admiteToppings && (
            <>
              <h3 className="text-lg sm:text-xl font-bold mb-5">
                Personaliza tu pedido
              </h3>

              <div className="space-y-3">

                {toppingsDisponibles.map((topping) => (

                  <label
                    key={topping.id}
                    className="
                      flex
                      justify-between
                      items-center
                      bg-zinc-800
                      rounded-2xl
                      p-4
                      cursor-pointer
                      hover:bg-zinc-700
                      transition
                    "
                  >

                    <div>

                      <p className="font-semibold">
                        {topping.emoji} {topping.nombre}
                      </p>

                    </div>

                    <div className="flex items-center gap-4">

                      <span className="text-yellow-400 font-bold">
                        +S/{topping.precio.toFixed(2)}
                      </span>

                      <input
                        type="checkbox"
                        checked={seleccionados.includes(
                          topping.id
                        )}
                        onChange={() =>
                          toggleTopping(topping.id)
                        }
                        className="w-5 h-5 accent-yellow-400"
                      />

                    </div>

                  </label>

                ))}

              </div>
            </>
          )}

        </div>

        {/* FOOTER */}

        <div className="border-t border-zinc-800 p-6 bg-zinc-900">

          <h3 className="text-3xl font-black text-yellow-400 text-center">
            Total: S/{total.toFixed(2)}
          </h3>

          <button
            onClick={() => {
              agregarAlCarrito({
                ...producto,
                toppings:
                  toppingsDisponibles.filter((topping) =>
                    seleccionados.includes(topping.id)
                  ),
                total,
              });

              onClose();
            }}
            className="
              w-full
              mt-6
              bg-yellow-400
              hover:bg-yellow-300
              text-black
              rounded-2xl
              py-4
              font-bold
              text-lg
              transition
              hover:scale-[1.02]
            "
          >
            🛒 Agregar al carrito
          </button>

          <button
            onClick={onClose}
            className="
              w-full
              mt-3
              bg-zinc-700
              hover:bg-zinc-600
              rounded-2xl
              py-4
              transition
            "
          >
            Cancelar
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductModal;