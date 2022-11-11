import { useContext } from 'react';
import ProductsContext from '../../Contexts/ProductContexts/ProductsContext';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductPage.module.scss';
import { useParams } from 'react-router-dom';



const ProductPage = () => {
   const {productid} = useParams();

   const [products] = useContext(ProductsContext);

   const foundProduct = products.find((product) => product.id === productid);

   if (!products.length) {
        return <h1>Loading...</h1>
   }

//    console.log(foundProduct, products, productid)

   if (!foundProduct) {
        return <h1>Product not found</h1>
   }


    return (
        <div>
            <ProductCard key={foundProduct.id} product={foundProduct} />
        </div>
    );
};

export default ProductPage;