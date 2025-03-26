import { createContext, useContext, useEffect, useState } from "react";

//1
const CartContext = createContext();
//2
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart0");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const addToCart = (product) => {
    setCart((prevCart) => {
      const tonTai = prevCart.find((item) => item.id === product.id);
      if (tonTai) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productID) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productID));
  };

  const reduceFromCart = (productID) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productID
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  //b3
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, reduceFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
