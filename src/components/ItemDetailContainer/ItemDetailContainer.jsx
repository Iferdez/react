import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {getDoc, doc, QueryDocumentSnapshot} from 'firebase/firestore';
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const {productId} = useParams()
   useEffect(() => {
      const documentRef = doc(db, 'products', productId)
      getDoc(documentRef)
      .then(QueryDocumentSnapshot => {
        const fields = QueryDocumentSnapshot.data()
        const productAdapted = {id:QueryDocumentSnapshot.id,...fields}
        setProduct(productAdapted)
      })
   }, [productId])


  return <ItemDetail {...product} />;
};

export default ItemDetailContainer;