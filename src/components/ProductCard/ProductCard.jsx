function ProductCard({
  nombre,
  descripcion,
  precio,
  imagen,
  onClick,
  badge,
}) {
  return (
    <div
      className="
        bg-zinc-900
        rounded-3xl
        overflow-hidden
        shadow-xl
        hover:-translate-y-2
        hover:shadow-yellow-400/20
        transition-all
        duration-300
        border
        border-zinc-800
        flex
        flex-col
        h-full
      "
    >
      {/* Imagen */}

      <div className="relative bg-black h-48 sm:h-56 md:h-60 flex items-center justify-center overflow-hidden">

        <img
          src={imagen}
          alt={nombre}
          className="
            w-full
            h-full
            object-contain
            transition-transform
            duration-500
            hover:scale-110
            p-3
          "
        />

        {badge && (
          <span
            className="
              absolute
              top-3
              left-3
              bg-yellow-400
              text-black
              px-3
              py-1
              rounded-full
              text-[11px]
              sm:text-xs
              font-bold
              shadow-lg
            "
          >
            ⭐ {badge}
          </span>
        )}

      </div>

      {/* Información */}

      <div className="p-5 flex flex-col flex-1">

        <h2 className="text-xl sm:text-2xl font-bold text-white">
          {nombre}
        </h2>

        <p className="text-gray-400 mt-2 text-sm sm:text-base flex-1">
          {descripcion}
        </p>

        <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

          <div>

            <span className="text-gray-400 text-xs sm:text-sm">
              Desde
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-yellow-400">
              S/{precio}
            </h3>

          </div>

          <button
            onClick={onClick}
            className="
              w-full
              sm:w-auto
              bg-yellow-400
              hover:bg-yellow-300
              text-black
              px-6
              py-3
              rounded-xl
              font-bold
              transition
              hover:scale-105
            "
          >
            Personalizar
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;