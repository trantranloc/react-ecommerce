import React from "react";
import Router from "./utils/Router";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ToastContainer />
        <Router />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
