import classes from './ItemListContainer.module.css'
import { getProducts, getProductByCategory } from '../../asyncMock'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
const ItemListContainer = ({ greeting }) =>{
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    useEffect(()=>{
        const asyncFunction = categoryId ? getProductByCategory : getProducts
        asyncFunction(categoryId) .then(response => {setProducts(response)

        })
    }, [categoryId])

return (
        <div>
            <h1 className={classes.bienvenida}>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer