import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

function Tracking() {
  const { numeroPedido } = useParams();

  const [pedido, setPedido] = useState(null);

  async function obtenerPedido() {
    const { data, error } = await supabase
      .from("pedidos")
      .select("*")
      .eq("numero_pedido", Number(numeroPedido))
      .single();

    if (error) {
      console.error(error);
      return;
    }

    setPedido(data);
  }

  useEffect(() => {
    obtenerPedido();

    const channel = supabase
      .channel(`tracking-${numeroPedido}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "pedidos",
        },
        async (payload) => {
          console.log("📦 UPDATE recibido:", payload);

          if (
            Number(payload.new.numero_pedido) === Number(numeroPedido)
          ) {
            await obtenerPedido();
          }
        }
      )
      .subscribe((status) => {
        console.log("Realtime Tracking:", status);
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [numeroPedido]);

  if (!pedido) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex justify-center items-center">
        Cargando pedido...
      </div>
    );
  }

  let progreso = 25;

  switch (pedido.estado) {
    case "Pendiente":
      progreso = 25;
      break;

    case "Preparando":
      progreso = 60;
      break;

    case "Listo":
      progreso = 100;
      break;

    case "Entregado":
      progreso = 100;
      break;
  }

  function colorEstado() {
    switch (pedido.estado) {
      case "Pendiente":
        return "text-yellow-400";

      case "Preparando":
        return "text-orange-400";

      case "Listo":
        return "text-green-400";

      case "Entregado":
        return "text-blue-400";

      default:
        return "text-white";
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex justify-center items-center p-6">

      <div className="bg-zinc-900 rounded-3xl p-10 max-w-lg w-full shadow-2xl">

        <h1 className="text-4xl font-black text-yellow-400 text-center">
          🍔 Mono Burgers
        </h1>

        <p className="text-center text-gray-400 mt-3">
          Gracias por tu compra ❤️
        </p>

        <div className="mt-10">

          <h2 className="text-2xl font-bold">
            Pedido #{pedido.numero_pedido}
          </h2>

          <p className="mt-4">
            👤 {pedido.cliente}
          </p>

          <p className="mt-6 text-xl">
            Estado actual
          </p>

          <h2 className={`text-4xl font-black mt-2 ${colorEstado()}`}>
            {pedido.estado}
          </h2>

          <div className="w-full bg-zinc-700 rounded-full h-5 mt-8 overflow-hidden">

            <div
              className="bg-yellow-400 h-5 transition-all duration-700"
              style={{
                width: `${progreso}%`,
              }}
            />

          </div>

          <p className="text-gray-400 mt-8">
            Tiempo estimado
          </p>

          <h2 className="text-2xl font-bold">
            15 - 20 minutos
          </h2>

        </div>

      </div>

    </div>
  );
}

export default Tracking;