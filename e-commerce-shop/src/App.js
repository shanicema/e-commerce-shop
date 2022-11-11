import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import ProductsContext from './Contexts/ProductContexts/ProductsContext';
import {useState, useEffect} from 'react';
import getProducts from './services/products';
import CartProvider from './containers/CartProvider/CartProvider';
import Checkout from './containers/Checkout/Checkout';
import ProductPage from './components/ProductPage/ProductPage';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      getProducts()
          .then(data => setProducts(data));
  }, [])

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      <CartProvider>
        <BrowserRouter>
            <Header />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/productpage/:productid' element={<ProductPage/>} />
          </Routes>
            <Footer />
        </BrowserRouter>
      </CartProvider>
    </ProductsContext.Provider> 

  );
}

export default App;
