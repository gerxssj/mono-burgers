import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function FloatingCart() {
  const { carrito, total } = useCart();
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">

      <button
        onClick={() => navigate("/cart")}
        className="
          bg-yellow-400
          hover:bg-yellow-300
          text-black
          px-8
          py-4
          rounded-full
          shadow-2xl
          font-bold
          text-lg
          transition-all
          duration-300
          hover:scale-105
        "
      >
        🛒 {carrito.length}{" "}
        {carrito.length === 1 ? "producto" : "productos"} • S/{total.toFixed(2)}
      </button>

    </div>
  );
}

export default FloatingCart;