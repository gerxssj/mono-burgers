function Notification({ visible }) {
  if (!visible) return null;

  return (
    <div
      className="
        fixed
        top-6
        right-6
        z-50
        bg-green-500
        text-white
        px-6
        py-4
        rounded-2xl
        shadow-2xl
        animate-bounce
      "
    >
      🔔 Nuevo pedido recibido
    </div>
  );
}

export default Notification;