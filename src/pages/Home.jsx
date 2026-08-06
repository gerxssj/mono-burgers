import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

function Home() {
  const [nombre, setNombre] = useState("");

  const comenzarPedido = () => {
    if (!nombre.trim()) {
      alert("Por favor ingresa tu nombre.");
      return;
    }

    localStorage.setItem("cliente", nombre);
window.location.href = "/menu";
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 rounded-3xl shadow-2xl p-8">

        <div className="text-center">

          <div className="text-6xl mb-3">
            🍔
          </div>

          <h1 className="text-5xl font-extrabold text-yellow-400">
            MONO
          </h1>

          <h2 className="text-5xl font-extrabold text-yellow-400 mb-3">
            BURGERS
          </h2>

          <p className="text-gray-300 mb-8">
            Las mejores hamburguesas a la parrilla.
          </p>

        </div>

        <Input
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <div className="mt-5">
          <Button onClick={comenzarPedido}>
            Comenzar Pedido
          </Button>
        </div>

        <div className="mt-8 border-t border-zinc-700 pt-6 space-y-3 text-gray-300">

          <div>🔥 Carne a la parrilla</div>

          <div>🥓 Personaliza tu hamburguesa</div>

          <div>🥤 Bebidas heladas</div>

        </div>

      </div>
    </div>
  );
}

export default Home;