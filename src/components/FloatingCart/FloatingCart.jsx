import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function FloatingCart() {
  const { carrito, total } = useCart();
  const navigate = useNavigate();

  return (
    <div
      className="
        fixed
        bottom-4
        sm:bottom-6
        left-1/2
        -translate-x-1/2
        z-50
        w-full
        px-4
        sm:px-0
        flex
        justify-center
      "
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <button
        onClick={() => navigate("/cart")}
        className="
          w-full
          sm:w-auto
          max-w-md
          bg-yellow-400
          hover:bg-yellow-300
          text-black
          px-6
          py-4
          rounded-full
          shadow-[0_10px_35px_rgba(250,204,21,0.35)]
          font-bold
          text-base
          sm:text-lg
          transition-all
          duration-300
          hover:scale-105
          active:scale-95
        "
      >
        🛒 {carrito.length}{" "}
        {carrito.length === 1 ? "producto" : "productos"} • S/{total.toFixed(2)}
      </button>
    </div>
  );
}

export default FloatingCart;