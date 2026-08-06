import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <div className="bg-zinc-900 rounded-3xl overflow-hidden lg:flex items-center shadow-2xl">

        {/* Texto */}

        <div className="flex-1 p-10">

          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
            ⭐ La favorita de nuestros clientes
          </span>

          <h2 className="text-5xl font-black mt-6">
            Hamburguesa de Carne
          </h2>

          <p className="text-gray-400 mt-5 text-lg leading-8">
            Carne a la parrilla, papas al hilo y nuestras salsas
            especiales.
          </p>

          <h3 className="text-yellow-400 text-5xl font-black mt-8">
            S/8
          </h3>

          <button
            onClick={() =>
              document
                .getElementById("hamburguesas")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="
              mt-8
              bg-yellow-400
              hover:bg-yellow-300
              text-black
              px-8
              py-4
              rounded-2xl
              font-bold
              text-lg
              transition
            "
          >
            🍔 Ordenar ahora
          </button>

        </div>

        {/* Imagen */}

        <div className="flex-1 bg-black flex justify-center items-center p-8">

          <img
            src="/images/carne.png"
            alt="Hamburguesa"
            className="max-h-[500px] object-contain hover:scale-105 transition duration-500"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;