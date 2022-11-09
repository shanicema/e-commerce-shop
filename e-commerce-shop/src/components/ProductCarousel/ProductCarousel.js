import { useContext, useState } from 'react';
import ProductsContext from '../../Contexts/ProductContexts/ProductsContext';
import styles from './ProductCarousel.module.scss';
import ProductCard from '../ProductCard/ProductCard';

const ProductCarousel = () => {
    const [products] = useContext(ProductsContext);
    
    const [productsCopy, setProductsCopy] = useState(products);

    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(2);


    const handleLeftClick = () => {
        // products.unshift(products.pop())
        // case start index = 1

        // start index = 0
        // 0 - 1 = -1
        // plus products.length ( + 3 )
        // = 2

        if (startIndex > 0) {
            setStartIndex(startIndex - 1)
        }
        // else {
        //     setStartIndex(products.length - 1)
        // }

        // start index = 1
        // 1 - 1 = 0
        //  plus products.length ( + 3 )
        // = 3
        if (endIndex > 2) {
            setEndIndex(endIndex - 1)
        }
        // else {
        //     setEndIndex(products.length - 1)
        // }


    }

    const handleRightClick = () => {
        // products.unshift(products.pop())
        // case start index = 1

        // start index = 0
        // 0 - 1 = -1
        // plus products.length ( + 3 )
        // = 2

        if (startIndex < 1) {
            setStartIndex(startIndex + 1)
        }
        // else {
        //     setStartIndex(products.length - 1)
        // }

        // start index = 1
        // 1 - 1 = 0
        //  plus products.length ( + 3 )
        // = 3
        if (endIndex < 3) {
            setEndIndex(endIndex + 1)
        }
        // else {
        //     setEndIndex(products.length - 1)
        // }


    }

    return (
        <div className={styles.productCarousel}>
            <h1>Featured Products</h1>
            <div className={styles.productCarousel__items}>
                { products.slice(startIndex,endIndex).map(product => {
                   
                    // filter based on first three products
                    // pop method - last element of the array and add it to the start of the array
                        return <ProductCard key={product.id} product={product} />;
                    })}
            </div>
            <button onClick={handleLeftClick}>Left</button>
            <button onClick={handleRightClick}>Right</button>
           
        </div>
    );
};

export default ProductCarousel;