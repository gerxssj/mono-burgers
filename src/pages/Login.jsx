import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cargando, setCargando] = useState(false);

  async function iniciarSesion(e) {
    e.preventDefault();

    setCargando(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setCargando(false);

    if (error) {
      console.error(error);
      alert(
        `Mensaje: ${error.message}\n\nCódigo: ${error.status || error.code}`
        );
      return;
    }

    navigate("/admin");
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex justify-center items-center">

      <form
        onSubmit={iniciarSesion}
        className="bg-zinc-900 p-10 rounded-3xl w-full max-w-md shadow-2xl"
      >

        <h1 className="text-4xl font-black text-yellow-400 text-center mb-8">
          🍔 Mono Burgers
        </h1>

        <h2 className="text-2xl text-white text-center mb-8">
          Panel de Administración
        </h2>

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-xl bg-zinc-800 text-white mb-5 outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-xl bg-zinc-800 text-white mb-8 outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button
          disabled={cargando}
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-4 rounded-xl font-black text-lg transition"
        >
          {cargando ? "Ingresando..." : "Iniciar sesión"}
        </button>

      </form>

    </div>
  );
}

export default Login;
