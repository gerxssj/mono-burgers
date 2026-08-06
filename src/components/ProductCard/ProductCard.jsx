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
      "
    >
      {/* Imagen */}

      <div className="relative bg-black h-56 flex items-center justify-center overflow-hidden">

        <img
          src={imagen}
          alt={nombre}
          className="
            max-h-full
            max-w-full
            object-contain
            transition-transform
            duration-500
            hover:scale-110
          "
        />

        {badge && (
          <span
            className="
              absolute
              top-4
              left-4
              bg-yellow-400
              text-black
              px-3
              py-1
              rounded-full
              text-xs
              font-bold
              shadow-lg
            "
          >
            ⭐ {badge}
          </span>
        )}

      </div>

      {/* Información */}

      <div className="p-5">

        <h2 className="text-2xl font-bold text-white">
          {nombre}
        </h2>

        <p className="text-gray-400 mt-2 min-h-[48px]">
          {descripcion}
        </p>

        <div className="flex justify-between items-center mt-6">

          <div>

            <span className="text-gray-400 text-sm">
              Desde
            </span>

            <h3 className="text-3xl font-black text-yellow-400">
              S/{precio}
            </h3>

          </div>

          <button
            onClick={onClick}
            className="
              bg-yellow-400
              hover:bg-yellow-300
              text-black
              px-5
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