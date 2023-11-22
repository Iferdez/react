import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
const Navbar = () => {
    return (
        <nav className={classes.navigation}>
            <div className={classes.nombre}>
                <h2>Tienda Simpsons</h2>
            </div>
            <section className={classes.prodcutType}>
                <button className={classes.productButton}>Remeras</button>
                <button className={classes.productButton}>Buzos</button>
                <button className={classes.productButton}>Decoracion</button>
                <button className={classes.productButton}>Accesorios</button>
                <CartWidget/>
            </section>
            
        </nav>
    )
}
export default Navbar
