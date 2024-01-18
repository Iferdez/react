import ItemCount from "../ItemCount/ItemCount";
import classes from "./ItemDetail.module.css";
import { useCart } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({ id,name,category,price,img, description,stock,}) => {
  const { addItem, isInCart } = useCart();

  const handleOnAdd = (quantity) => {
    const objProductToAdd = {id,name,price, quantity,};
    addItem(objProductToAdd);
    toast.success("Producto agregado al carrito", {
      position: "bottom-right",
      autoClose: 2000,
      theme: "dark",
    });
  };

  return (
    <div>
        <div>
        <h1>{name}</h1>
        <h4>Categoria: {category}</h4>
        <p>{description}</p>
        <img src={img} alt="" />
        <h2>${price}</h2>
        
        {stock === 0 ? (
          <p>¡No hay stock!</p>
        ) : (
          <div>
            {!isInCart(id) ? (
              <ItemCount onAdd={handleOnAdd} stock={stock} />
            ) : (
              <Link
                to="/cart"
                className={classes.boton}
                style={{ color: "black", padding: "5px" }}
              >
                Finalizar Compra
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;