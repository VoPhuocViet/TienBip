import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./hook/CartContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </CartProvider>
  </BrowserRouter>
);
