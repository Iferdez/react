import { useState, createContext, useContext } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  isInCart: () => {},
});
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
 

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart((prev) => [...prev, productToAdd]);
    } else {
      toast.warning("Producto ya agregado", {
        position: "bottom-center",
        autoClose: 3000
      });
    }
  };

  const isInCart = (productId) => {
    return cart.some((prod) => prod.id == productId);
  };

  const removeItem = (productId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== productId);
    setCart(cartUpdated);
    toast.error("Producto eliminado del carrito", {
      position: "bottom-center",
      autoClose: 1500,
      theme: "dark",
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalQuantity = () => {
    let accu = 0;

    cart.forEach((prod) => {
      accu += prod.quantity;
    });

    return accu;
  };

  const totalQuantity = getTotalQuantity();

  const getTotal = () => {
    let accu = 0;

    cart.forEach((prod) => {
      accu += prod.quantity * prod.price;
    });

    return accu;
  };

  const total = getTotal();

  return (
    <CartContext.Provider
      value={{
        cart,
        isInCart,
        clearCart,
        addItem,
        removeItem,
        totalQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};