import { Navigate, Route, Routes } from "react-router-dom";

import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Tracking from "./pages/Tracking";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Redirección inicial */}
      <Route path="/" element={<Navigate to="/menu" replace />} />

      {/* Cliente */}
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/tracking/:numeroPedido" element={<Tracking />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Administrador protegido */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />

      {/* Cualquier ruta inexistente */}
      <Route path="*" element={<Navigate to="/menu" replace />} />

    </Routes>
  );
}

export default App;