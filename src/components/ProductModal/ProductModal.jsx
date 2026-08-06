import { useState } from "react";
import menu from "../../data/menu";
import { useCart } from "../../context/CartContext";

function ProductModal({ producto, onClose }) {
    const { agregarAlCarrito } = useCart(); 
  const [seleccionados, setSeleccionados] = useState([]);

  const toggleTopping = (id) => {
    if (seleccionados.includes(id)) {
      setSeleccionados(seleccionados.filter((item) => item !== id));
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
      .filter((topping) => seleccionados.includes(topping.id))
      .reduce((suma, topping) => suma + topping.precio, 0);

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="bg-zinc-900 rounded-3xl p-8 w-[420px] max-w-[90%]">

        <h2 className="text-3xl text-yellow-400 font-bold">
          {producto.nombre}
        </h2>

        <p className="text-gray-400 mb-6">
          {producto.descripcion}
        </p>

        {producto.admiteToppings && (
          <>
            <h3 className="text-xl font-bold mb-4">
              Personaliza tu pedido
            </h3>

            <div className="space-y-3">

              {toppingsDisponibles.map((topping) => (

                <label
                  key={topping.id}
                  className="flex justify-between items-center bg-zinc-800 rounded-xl p-3 cursor-pointer hover:bg-zinc-700 transition"
                >

                  <span>
                    {topping.emoji} {topping.nombre}
                  </span>

                  <div className="flex items-center gap-3">

                    <span className="text-yellow-400">
                      +S/{topping.precio.toFixed(2)}
                    </span>

                    <input
                      type="checkbox"
                      checked={seleccionados.includes(topping.id)}
                      onChange={() => toggleTopping(topping.id)}
                    />

                  </div>

                </label>

              ))}

            </div>
          </>
        )}

        <h3 className="text-3xl font-bold text-yellow-400 mt-8">
          Total: S/{total.toFixed(2)}
        </h3>

<button
  onClick={() => {
    agregarAlCarrito({
      ...producto,
      toppings: toppingsDisponibles.filter((topping) =>
        seleccionados.includes(topping.id)
      ),
      total,
    });

    onClose();
  }}
  className="w-full mt-6 bg-yellow-400 hover:bg-yellow-300 text-black rounded-xl py-4 font-bold transition"
>
  Agregar al carrito
</button>

        <button
          onClick={onClose}
          className="w-full mt-3 bg-zinc-700 hover:bg-zinc-600 rounded-xl py-4 transition"
        >
          Cancelar
        </button>

      </div>

    </div>
  );
}

export default ProductModal;