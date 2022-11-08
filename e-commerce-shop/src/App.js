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

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      getProducts()
          .then(data => setProducts(data));
  }, [])

  return (
    <CartProvider>
      <ProductsContext.Provider value={[products, setProducts]}>
        <BrowserRouter>
            <Header />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
            <Footer />
        </BrowserRouter>
      </ProductsContext.Provider> 
    </CartProvider>

  );
}

export default App;
