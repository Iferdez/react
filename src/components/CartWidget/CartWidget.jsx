import { Link } from "react-router-dom";
import cartimg from './assets/cart.svg'
import { useCart } from "../../context/CartContext/CartContext";
const CartWidget = ()=>{
    const { totalQuantity } = useCart();
    return ( 
        <Link to="/cart" >
        <button> 
            <img src={cartimg}/> {totalQuantity}
            
        </button></Link>
    )
}

export default CartWidget   


