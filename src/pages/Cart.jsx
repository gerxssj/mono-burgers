import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    carrito,
    total,
    aumentarCantidad,
    disminuirCantidad,
    eliminarDelCarrito,
  } = useCart();

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* HEADER */}
      <header className="bg-zinc-900 shadow-lg p-6">

        <button
          onClick={() => navigate("/menu")}
          className="text-yellow-400 font-bold hover:text-yellow-300"
        >
          ← Volver al menú
        </button>

        <h1 className="text-4xl font-black text-yellow-400 mt-4">
          🛒 Mi Pedido
        </h1>

      </header>

      <main className="max-w-5xl mx-auto p-6">

        {carrito.length === 0 ? (

          <div className="text-center mt-20">

            <h2 className="text-3xl font-bold">
              Tu carrito está vacío
            </h2>

            <p className="text-gray-400 mt-3">
              Agrega algunos productos para comenzar.
            </p>

            <button
              onClick={() => navigate("/menu")}
              className="mt-8 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-xl font-bold"
            >
              Ir al menú
            </button>

          </div>

        ) : (

          <>
            <div className="space-y-6">

              {carrito.map((item, index) => (

                <div
                  key={index}
                  className="bg-zinc-900 rounded-3xl p-5 flex gap-5 items-center"
                >

                  {/* Imagen */}
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="w-32 h-32 object-contain bg-black rounded-2xl p-2"
                  />

                  {/* Información */}
                  <div className="flex-1">

                    <h2 className="text-2xl font-bold">
                      {item.nombre}
                    </h2>

                    {item.toppings.length > 0 && (
                      <div className="mt-2">

                        {item.toppings.map((topping) => (

                          <p
                            key={topping.id}
                            className="text-gray-400"
                          >
                            + {topping.emoji} {topping.nombre}
                          </p>

                        ))}

                      </div>
                    )}

                    {/* Cantidad */}

                    <div className="flex items-center gap-4 mt-5">

                      <button
                        onClick={() => disminuirCantidad(index)}
                        className="bg-red-500 hover:bg-red-400 w-10 h-10 rounded-full text-xl font-bold"
                      >
                        −
                      </button>

                      <span className="text-2xl font-bold">
                        {item.cantidad}
                      </span>

                      <button
                        onClick={() => aumentarCantidad(index)}
                        className="bg-green-500 hover:bg-green-400 w-10 h-10 rounded-full text-xl font-bold"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  {/* Precio */}

                  <div className="text-right">

                    <h2 className="text-3xl font-black text-yellow-400">
                      S/{(item.total * item.cantidad).toFixed(2)}
                    </h2>

                    <button
                      onClick={() => eliminarDelCarrito(index)}
                      className="text-red-500 hover:text-red-400 mt-4"
                    >
                      🗑 Eliminar
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* TOTAL */}

            <div className="bg-zinc-900 rounded-3xl mt-10 p-6">

              <div className="flex justify-between text-4xl font-black">

                <span>Total</span>

                <span className="text-yellow-400">
                  S/{total.toFixed(2)}
                </span>

              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="
                  mt-8
                  w-full
                  bg-yellow-400
                  hover:bg-yellow-300
                  text-black
                  rounded-2xl
                  py-5
                  font-black
                  text-xl
                  transition
                "
              >
                Confirmar Pedido
              </button>

            </div>

          </>

        )}

      </main>

    </div>
  );
}

export default Cart;