import { useContext } from 'react';
import ProductsContext from '../../Contexts/ProductContexts/ProductsContext';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGallery.module.scss';

const ProductGallery = () => {
    const [products] = useContext(ProductsContext);

    return (
        <div className={styles.productGallery}>
            <h1>This is the product gallery page</h1>
            <div className={styles.productGallery__items}>
                { products.map(product => {
                    return <ProductCard key={product.id} product={product} />;
                })}
            </div>
        </div>
    );
};

export default ProductGallery;