function OrderCard({
  pedido,
  colorEstado,
  textoBoton,
  cambiarEstado,
}) {
  return (
    <div className="bg-zinc-900 rounded-3xl p-6 shadow-xl">

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold text-yellow-400">
          Pedido #{pedido.numero_pedido}
        </h2>

        <span
          className={`px-4 py-2 rounded-full font-bold ${colorEstado(
            pedido.estado
          )}`}
        >
          {pedido.estado}
        </span>

      </div>

      <p className="mt-4">
        👤 <b>{pedido.cliente}</b>
      </p>

      <p>
        📱 {pedido.telefono || "-"}
      </p>

      <div className="mt-5">

        <h3 className="font-bold mb-2">
          Productos
        </h3>

        {pedido.productos.map((producto, index) => (

          <p key={index}>
            • {producto.nombre} x{producto.cantidad}
          </p>

        ))}

      </div>

      <h3 className="text-3xl font-black text-yellow-400 mt-6">
        S/{Number(pedido.total).toFixed(2)}
      </h3>

      {pedido.estado !== "Entregado" && (

        <button
          onClick={() =>
            cambiarEstado(pedido.id, pedido.estado)
          }
          className="
            mt-6
            bg-yellow-400
            hover:bg-yellow-300
            text-black
            px-6
            py-3
            rounded-xl
            font-bold
            transition
          "
        >
          {textoBoton(pedido.estado)}
        </button>

      )}

    </div>
  );
}

export default OrderCard;