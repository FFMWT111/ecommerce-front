import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);
  // JSON.parse(localStorage.getItem("cart")) ||
  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);
  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, []);

  function addProduct(productId) {
    setCartProducts((prev) => [...prev, productId]);
  }

  function deductProduct(productId) {
    setCartProducts((prevId) => {
      const pos = prevId.indexOf(productId);
      if (pos !== -1) {
        return prevId.filter((value, index) => index !== pos);
      }
      return prev;
    });
  }

  function clearCart() {
    setCartProducts([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProduct,
        deductProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
