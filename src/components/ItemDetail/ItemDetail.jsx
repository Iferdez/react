import ItemCount from "../ItemCount/ItemCount";
import classes from "./ItemDetail.module.css";

const ItemDetail = ({name,category,img,price,description}) => {
  return (
  <div>
        <h1>{name}</h1>
        <h4>Categoria: {category}</h4>
        <img src={img} />        
        <h2>${price}</h2>
        <p>{description}</p>
        <ItemCount/>
 </div>
  );
};

export default ItemDetail;