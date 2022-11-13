import { useContext } from 'react';
import ProductsContext from '../../Contexts/ProductContexts/ProductsContext';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGallery.module.scss';

const ProductGallery = () => {
    const [products] = useContext(ProductsContext);

    return (
        <div className={styles.productGallery}>
            <h1 className={styles.productGallery__heading}>Shop Australia Made Products</h1>
            <div className={styles.productGallery__items}>
                { products.map(product => {
                    return <div key={product.id} className={styles.productGallery__item}>
                        <ProductCard product={product} />
                    </div>;
                })}
            </div>
        </div>
    );
};

export default ProductGallery;