import classes from './ItemListContainer.module.css'


const ItemListContainer = ({ greeting }) =>{
    return (
        <div>
            <h1 className={classes.bienvenida}>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer