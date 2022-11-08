import { useContext } from 'react';
import ProductsContext from '../../Contexts/ProductContexts/ProductsContext';
import styles from './ProductCarousel.module.scss';

const ProductCarousel = () => {
    const [products] = useContext(ProductsContext);
    
    return (
        <div>
            
        </div>
    );
};

export default ProductCarousel;