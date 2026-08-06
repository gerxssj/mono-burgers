function StatsCard({
  titulo,
  valor,
  icono,
  color = "bg-zinc-900",
}) {
  return (
    <div
      className={`
        ${color}
        rounded-3xl
        p-6
        shadow-xl
      `}
    >
      <div className="text-4xl">
        {icono}
      </div>

      <p className="text-gray-400 mt-3">
        {titulo}
      </p>

      <h2 className="text-4xl font-black mt-2">
        {valor}
      </h2>
    </div>
  );
}

export default StatsCard;