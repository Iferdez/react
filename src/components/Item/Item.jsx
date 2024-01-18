import classes from './Item.module.css'
import { Link } from "react-router-dom"
const Item=({id, name, img, price})=>{
    return(
        <div className={classes.tarjeta}>
                <h3 className={classes.productname}>{name}</h3>
                <img src={img} alt="" />
                <h4>${price}</h4>
                <Link to={`/detail/${id}`}>Detalle </Link>
        </div>
    )
}

export default Item

