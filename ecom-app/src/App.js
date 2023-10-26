import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login';
import ProductList from './Pages/ProductList/ProductList';
import Register from './Pages/Register/Register';
import Product from './Pages/Product/Product';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/product-list' element={<ProductList />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
