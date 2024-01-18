import { useCart } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import classes from "../ItemListContainer/ItemListContainer.module.css";

const CartView = () => {
  const { cart, total, removeItem } = useCart();
  return (
    <>
      <div>
        <h1>Carrito</h1>
      </div>

      <div>
        {cart.map((prod) => {
          return (
            <div
              key={prod.id}
              style={{
                display: "flex",
                width: "100%",
                margin: "30px",
                justifyContent: "space-around",
              }}
            >
              <h2>{prod.name}</h2>
              <h3>Cantidad:{prod.quantity}</h3>
              <h3>Precio: ${prod.price}</h3>
              <h3>Subtotal: ${prod.quantity * prod.price}</h3>
              <button
                className={classes.boton}
                style={{
                  color: "white",
                  padding: "5px",
                  backgroundColor: "red",
                  height: "40px",
                }}
                onClick={() => removeItem(prod.id)}
              >
                Eliminar
              </button>
            </div>
          );
        })}
      </div>

      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Total Compra: ${total}
      </h1>
      <div className={classes.boton}>
        <Link
          to="/checkout"
          style={{ display: "flex", justifyContent: "center" }}
        >
          CheckOut
        </Link>
      </div>
    </>
  );
};

export default CartView;