import Item from "../Item/Item"
import classes from './ItemList.module.css'
const ItemList = ({products}) => { return (
    <div className={classes.grilla}>    {products.map(product => {
        return (
            <Item Item key={product.id} {...product}/>
        )
    }) }
</div>
)}

export default ItemList