import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Error from './components/Error/Error';

const App=()=> {

  return (
    <>
    <BrowserRouter>   
      
    <NavBar/>

      <Routes>

        <Route path='/' element={<ItemListContainer/>} />

        <Route path='/categoria/:categoryId' element={<ItemListContainer/>} />

        <Route path='/detalle/:id' element={<ItemDetailContainer/>} />

        <Route path='*' element={<Error/>} />

      </Routes>

      <Footer/>

    </BrowserRouter>

    </>
  )
}

export default App
