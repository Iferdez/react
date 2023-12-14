import { useState } from "react"
const ItemCount =(onAdd) =>{
    const [count, setCount] = useState (1)
    const aumento = () => {
        setCount(prev=> prev+1)
    }
    const reduccion = () => {
        if(count>1) {
            setCount (prev => prev-1)
        }
    }
    return( 
        <div>
            <h4>{count}</h4>
            <button onClick={aumento}>↑</button>
            <button onClick={reduccion}>↓</button>
            <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
    )
}
export default ItemCount