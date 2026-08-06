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

      <header className="sticky top-0 z-40 bg-zinc-900/95 backdrop-blur border-b border-zinc-800">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">

          <button
            onClick={() => navigate("/menu")}
            className="text-yellow-400 font-bold hover:text-yellow-300 transition"
          >
            ← Volver al menú
          </button>

          <h1 className="text-3xl sm:text-4xl font-black text-yellow-400 mt-3">
            🛒 Mi Pedido
          </h1>

          {carrito.length > 0 && (
            <p className="text-gray-400 mt-1">
              {carrito.length}{" "}
              {carrito.length === 1 ? "producto" : "productos"}
            </p>
          )}

        </div>

      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">

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
              className="mt-8 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-2xl font-bold transition"
            >
              🍔 Ir al menú
            </button>

          </div>

        ) : (

          <>
            <div className="space-y-8">

              {carrito.map((item, index) => (

                <div
                  key={index}
                  className="
                    bg-zinc-900
                    border
                    border-zinc-800
                    rounded-[30px]
                    shadow-xl
                    p-6
                    hover:border-yellow-400/30
                    transition
                  "
                >

                  <div className="flex flex-col md:flex-row gap-6">

                    {/* Imagen */}

                    <div className="flex justify-center">

                      <img
                        src={item.imagen}
                        alt={item.nombre}
                        className="
                          w-48
                          h-48
                          md:w-40
                          md:h-40
                          object-contain
                          bg-black
                          rounded-3xl
                          p-4
                        "
                      />

                    </div>

                    {/* Información */}

                    <div className="flex-1 flex flex-col justify-between">

                      <div>

                        <h2 className="text-2xl sm:text-3xl font-black">
                          {item.nombre}
                        </h2>

                        {item.toppings.length > 0 && (

                          <div className="mt-4 space-y-1">

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

                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-8">

                        {/* Cantidad */}

                        <div className="flex items-center justify-center sm:justify-start gap-5">

                          <button
                            onClick={() => disminuirCantidad(index)}
                            className="
                              w-12
                              h-12
                              rounded-full
                              bg-red-500
                              hover:bg-red-400
                              text-2xl
                              font-bold
                              transition
                            "
                          >
                            −
                          </button>

                          <span className="text-3xl font-black">
                            {item.cantidad}
                          </span>

                          <button
                            onClick={() => aumentarCantidad(index)}
                            className="
                              w-12
                              h-12
                              rounded-full
                              bg-green-500
                              hover:bg-green-400
                              text-2xl
                              font-bold
                              transition
                            "
                          >
                            +
                          </button>

                        </div>

                        {/* Precio */}

                        <div className="text-center sm:text-right">

                          <h2 className="text-3xl sm:text-4xl font-black text-yellow-400">
                            S/{(item.total * item.cantidad).toFixed(2)}
                          </h2>

                          <button
                            onClick={() => eliminarDelCarrito(index)}
                            className="
                              mt-4
                              text-red-500
                              hover:text-red-400
                              font-semibold
                              transition
                            "
                          >
                            🗑 Eliminar
                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>
                        {/* TOTAL */}

            <div
              className="
                mt-10
                bg-zinc-900
                border
                border-zinc-800
                rounded-[30px]
                shadow-xl
                p-6
                sticky
                bottom-4
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-gray-400 text-sm uppercase tracking-widest">
                    Total del pedido
                  </p>

                  <h2 className="text-4xl sm:text-5xl font-black text-yellow-400 mt-2">
                    S/{total.toFixed(2)}
                  </h2>

                </div>

                <div className="hidden sm:flex text-5xl">
                  🍔
                </div>

              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="
                  w-full
                  mt-8
                  bg-yellow-400
                  hover:bg-yellow-300
                  active:scale-[0.98]
                  text-black
                  rounded-3xl
                  py-5
                  text-xl
                  font-black
                  transition-all
                  duration-300
                  shadow-lg
                "
              >
                🚀 Confirmar Pedido
              </button>

            </div>

          </>

        )}

      </main>

    </div>
  );
}

export default Cart;