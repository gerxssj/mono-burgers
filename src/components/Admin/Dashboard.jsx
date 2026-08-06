import StatsCard from "./StatsCard";

function Dashboard({ pedidos }) {

  const ventas = pedidos.reduce(
    (suma, pedido) => suma + Number(pedido.total),
    0
  );

  const pendientes = pedidos.filter(
    (p) => p.estado === "Pendiente"
  ).length;

  const ticketPromedio =
    pedidos.length === 0
      ? 0
      : ventas / pedidos.length;

  return (

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

      <StatsCard
        titulo="Ventas Totales"
        valor={`S/${ventas.toFixed(2)}`}
        icono="💰"
        color="bg-green-700"
      />

      <StatsCard
        titulo="Pedidos Pendientes"
        valor={pendientes}
        icono="📦"
        color="bg-yellow-500"
      />

      <StatsCard
        titulo="Total Pedidos"
        valor={pedidos.length}
        icono="🍔"
        color="bg-blue-700"
      />

      <StatsCard
        titulo="Ticket Promedio"
        valor={`S/${ticketPromedio.toFixed(2)}`}
        icono="📈"
        color="bg-purple-700"
      />

    </div>

  );
}

export default Dashboard;