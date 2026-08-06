import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { supabase } from "../lib/supabase";

function Checkout() {
  const navigate = useNavigate();
  const { carrito, total, limpiarCarrito } = useCart();

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipoPedido, setTipoPedido] = useState("Para llevar");
  const [observaciones, setObservaciones] = useState("");
  const [enviando, setEnviando] = useState(false);

  async function enviarPedido() {
    if (nombre.trim() === "") {
      alert("Debes ingresar tu nombre.");
      return;
    }

    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    setEnviando(true);

    const numeroPedido = Date.now();

    const pedido = {
      numero_pedido: numeroPedido,
      cliente: nombre,
      telefono,
      tipo: tipoPedido,
      observaciones,
      productos: carrito,
      total,
      estado: "Pendiente",
    };

    const { error } = await supabase
      .from("pedidos")
      .insert([pedido]);

    setEnviando(false);

    if (error) {
      console.error("❌ Error completo:", error);

      alert(
        `Error al enviar el pedido:\n\n${error.message}\nCódigo: ${error.code}`
      );

      return;
    }

    console.log("✅ Pedido guardado correctamente");

    try {
      if (limpiarCarrito) {
        limpiarCarrito();
        console.log("🛒 Carrito limpiado");
      }
    } catch (e) {
      console.error("❌ Error limpiando carrito:", e);
    }

    console.log(
      "➡️ Redirigiendo a:",
      `/tracking/${numeroPedido}`
    );

    navigate(`/tracking/${numeroPedido}`);
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <header className="bg-zinc-900 shadow-lg p-6">

        <button
          onClick={() => navigate("/cart")}
          className="text-yellow-400 font-bold hover:text-yellow-300"
        >
          ← Volver al carrito
        </button>

        <h1 className="text-4xl font-black text-yellow-400 mt-4">
          Confirmar Pedido
        </h1>

      </header>

      <main className="max-w-4xl mx-auto p-6">

        <div className="bg-zinc-900 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            👤 Datos del cliente
          </h2>

          <label className="block mb-2 font-bold">
            Nombre *
          </label>

          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
            className="w-full p-4 rounded-xl bg-zinc-800 mb-6 outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <label className="block mb-2 font-bold">
            Teléfono
          </label>

          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="987654321"
            className="w-full p-4 rounded-xl bg-zinc-800 mb-6 outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <label className="block mb-2 font-bold">
            Tipo de pedido
          </label>

          <select
            value={tipoPedido}
            onChange={(e) => setTipoPedido(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-800 mb-6 outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option>Para llevar</option>
            <option>Consumir aquí</option>
          </select>

          <label className="block mb-2 font-bold">
            Observaciones
          </label>

          <textarea
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
            placeholder="Ej: sin cebolla, más salsa..."
            className="w-full h-32 p-4 rounded-xl bg-zinc-800 resize-none outline-none focus:ring-2 focus:ring-yellow-400"
          />

        </div>

        <div className="bg-zinc-900 rounded-3xl p-6 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            🧾 Resumen del pedido
          </h2>

          {carrito.map((item, index) => (
            <div
              key={index}
              className="flex justify-between border-b border-zinc-700 py-3"
            >
              <span>
                {item.nombre} x{item.cantidad}
              </span>

              <span>
                S/{(item.total * item.cantidad).toFixed(2)}
              </span>
            </div>
          ))}

          <div className="flex justify-between text-3xl font-black mt-8">
            <span>Total</span>

            <span className="text-yellow-400">
              S/{total.toFixed(2)}
            </span>
          </div>

          <button
            onClick={enviarPedido}
            disabled={enviando}
            className="
              w-full
              mt-8
              bg-yellow-400
              hover:bg-yellow-300
              disabled:bg-gray-500
              disabled:cursor-not-allowed
              text-black
              rounded-2xl
              py-5
              font-black
              text-xl
              transition
            "
          >
            {enviando ? "⏳ Enviando..." : "📤 Enviar Pedido"}
          </button>

        </div>

      </main>

    </div>
  );
}

export default Checkout;