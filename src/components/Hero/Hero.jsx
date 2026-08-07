function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

      <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col-reverse lg:flex-row items-center">

        {/* TEXTO */}

        <div className="flex-1 p-6 sm:p-8 lg:p-10 text-center lg:text-left">

          <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm sm:text-base">
            ⭐ La favorita de nuestros clientes
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-6 leading-tight">
            Hamburguesa de Carne
          </h2>

          <p className="text-gray-400 mt-5 text-base sm:text-lg leading-7">
            Carne a la parrilla, lechuga, tomate y papas fritas.
          </p>

          <h3 className="text-yellow-400 text-4xl sm:text-5xl font-black mt-8">
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
              w-full
              sm:w-auto
              bg-yellow-400
              hover:bg-yellow-300
              text-black
              px-8
              py-4
              rounded-2xl
              font-bold
              text-base
              sm:text-lg
              transition
              hover:scale-105
            "
          >
            🍔 Ordenar ahora
          </button>

        </div>

        {/* IMAGEN */}

        <div className="flex-1 bg-black flex justify-center items-center p-6 sm:p-8 w-full">

          <img
            src="/images/carne.png"
            alt="Hamburguesa"
            className="
              w-64
              sm:w-80
              lg:w-[500px]
              object-contain
              transition-transform
              duration-500
              hover:scale-105
              animate-bounce
            "
            style={{
              animationDuration: "3s",
            }}
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;