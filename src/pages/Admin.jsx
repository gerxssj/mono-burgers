import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import Dashboard from "../components/Admin/Dashboard";
import OrderCard from "../components/Admin/OrderCard";
import Notification from "../components/Admin/Notification";

function Admin() {
  const navigate = useNavigate();

  const [pedidos, setPedidos] = useState([]);
  const [mostrarNotificacion, setMostrarNotificacion] = useState(false);

  const audioRef = useRef(null);
  const audioHabilitado = useRef(false);

  async function obtenerPedidos() {
    const { data, error } = await supabase
      .from("pedidos")
      .select("*")
      .neq("estado", "Entregado")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error obteniendo pedidos:", error);
      return;
    }

    setPedidos(data);
  }

  async function cerrarSesion() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  useEffect(() => {
    audioRef.current = new Audio("/sounds/notification.mp3");

    const habilitarAudio = () => {
      audioHabilitado.current = true;
      console.log("🔊 Audio habilitado");
      window.removeEventListener("click", habilitarAudio);
    };

    window.addEventListener("click", habilitarAudio);

    obtenerPedidos();

    const channel = supabase
      .channel("pedidos-realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "pedidos",
        },
        async (payload) => {
          console.log("📦 Cambio recibido:", payload);

          await obtenerPedidos();

          if (
            payload.eventType === "INSERT" &&
            audioHabilitado.current
          ) {
            try {
              audioRef.current.currentTime = 0;
              await audioRef.current.play();

              setMostrarNotificacion(true);

              setTimeout(() => {
                setMostrarNotificacion(false);
              }, 3000);

            } catch (err) {
              console.error("Error reproduciendo sonido:", err);
            }
          }
        }
      )
      .subscribe((status) => {
        console.log("Estado Realtime:", status);
      });

    return () => {
      supabase.removeChannel(channel);
      window.removeEventListener("click", habilitarAudio);
    };
  }, []);

  async function cambiarEstado(id, estadoActual) {
    let nuevoEstado = estadoActual;

    switch (estadoActual) {
      case "Pendiente":
        nuevoEstado = "Preparando";
        break;

      case "Preparando":
        nuevoEstado = "Listo";
        break;

      case "Listo":
        nuevoEstado = "Entregado";
        break;

      default:
        return;
    }

    const { error } = await supabase
      .from("pedidos")
      .update({
        estado: nuevoEstado,
      })
      .eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    obtenerPedidos();
  }

  function colorEstado(estado) {
    switch (estado) {
      case "Pendiente":
        return "bg-yellow-400 text-black";

      case "Preparando":
        return "bg-orange-500 text-white";

      case "Listo":
        return "bg-green-500 text-white";

      case "Entregado":
        return "bg-gray-600 text-white";

      default:
        return "bg-zinc-700 text-white";
    }
  }

  function textoBoton(estado) {
    switch (estado) {
      case "Pendiente":
        return "🍳 Preparar";

      case "Preparando":
        return "✅ Marcar listo";

      case "Listo":
        return "📦 Entregar";

      default:
        return "";
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">

      <Notification visible={mostrarNotificacion} />

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-5xl font-black text-yellow-400">
          🍔 Panel de Administración
        </h1>

        <button
          onClick={cerrarSesion}
          className="
            bg-red-600
            hover:bg-red-700
            px-5
            py-3
            rounded-xl
            font-bold
            transition
          "
        >
          🚪 Cerrar sesión
        </button>

      </div>

      <Dashboard pedidos={pedidos} />

      {pedidos.length === 0 ? (
        <div className="text-center mt-20">

          <h2 className="text-3xl font-bold text-gray-400">
            🎉 No hay pedidos pendientes
          </h2>

          <p className="text-gray-500 mt-4">
            Todos los pedidos fueron entregados.
          </p>

        </div>
      ) : (

        <div className="space-y-6 mt-8">

          {pedidos.map((pedido) => (

            <OrderCard
              key={pedido.id}
              pedido={pedido}
              colorEstado={colorEstado}
              textoBoton={textoBoton}
              cambiarEstado={cambiarEstado}
            />

          ))}

        </div>

      )}

    </div>
  );
}

export default Admin;