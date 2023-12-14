const products =[
    {id: '1',description: 'Remera Negra', name: 'Remera Homero', price: '3600', category: 'remeras', img: "/public/rhomero.jpeg"},
    {id: '2',description: 'Buzo con Capucha', name: 'Buzo Bart', price: '4800', category: 'buzos', img: "/public/bbart.jpg"},
    {id: '3',description: 'Chu-Chu eres el elegido', name: 'Llavero Chu-Chu', price: '1580', category: 'accesorios', img: "/public/llavero.jpg"},
    {id: '4',description: 'Acaso no conoces la dignidad?', name: 'Cuadro Dignidad', price: '6000', category: 'decoracion', img: "/public/dignidad.jpg"},

]



export const getProducts = ()=> {
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve(products)
        },1000)
    })
}

export const getProductById = (itemId) =>{
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(products.find(prod=> prod.id == itemId))
        },1000)
    })
}

export const getProductByCategory = (categoryId) =>{
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(products.find(prod=> prod.category == categoryId))
        },1000)
    })
}