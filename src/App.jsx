import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
       
      <Navbar />
      <Routes>  
        <Route path='/' element = {<ItemListContainer greeting={'Bienvenido a la tinda de Los Simpsons'} />}/>
        <Route path='/category/:categoryId' element = {<ItemListContainer greeting={'Por Categoria'} />}/>
        <Route path= '/detail/:productId' element = { <ItemDetailContainer/>}/>
      
     
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
