import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className={classes.navigation}>
            <div className={classes.nombre}>
            <Link to="/"><h2>Tienda Simpsons</h2>
                </Link>
            </div>
            <section className={classes.prodcutType}>
                <Link  to= '/category/remeras'className={classes.productButton}>Remeras</Link>
                <Link  to= '/category/buzos'className={classes.productButton}>Buzos</Link>
                <Link  to= '/category/decoracion'className={classes.productButton}>Decoracion</Link>
                <Link  to= '/category/accesorios'className={classes.productButton}>Accesorios</Link>
                <CartWidget/>
            </section>
            
        </nav>
    )
}
export default Navbar
