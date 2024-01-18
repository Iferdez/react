import { useState } from "react"
const ItemCount = ({ initial = 1, stock = 5, onAdd }) => {
    const [count, setCount] = useState(initial);
  
    const increment = () => {
      if (count < stock) {
        setCount((prev) => prev + 1);
      }
    };
  
    const decrement = () => {
      if (count > 1) {
        setCount((prev) => prev - 1);
      }
    };
  
    return (
        <div>
            <h4>{count}</h4>
            <button onClick={increment}>↑</button>
            <button onClick={decrement}>↓</button>
            <button onClick={() => onAdd(count)} >Agregar al Carrito</button>
        </div>
    )
}
export default ItemCount