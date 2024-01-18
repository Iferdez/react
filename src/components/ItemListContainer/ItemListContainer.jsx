import classes from './ItemListContainer.module.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {getDocs, collection,query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({ greeting }) =>{
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    useEffect(()=>{
        
        const collectionRef =  categoryId
        ? query(collection (db, 'products'),where('category','==',categoryId))
        : collection (db, 'products')
        getDocs(collectionRef)
            .then(querySnapshot => {console.log(querySnapshot)

            const productsAdapted= querySnapshot.docs.map(doc => {
                const fields = doc.data()
                return {id: doc.id, ...fields}
            })
           setProducts(productsAdapted)
        })
        .catch(error =>{})

        
    }, [categoryId])

return (
        <div>
            <h1 className={classes.bienvenida}>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer