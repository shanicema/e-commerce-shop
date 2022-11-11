import { useContext, useEffect, useState } from 'react';
import ProductsContext from '../../Contexts/ProductContexts/ProductsContext';
import styles from './ProductCarousel.module.scss';
import FeaturedProductCard from '../FeaturedProductCard/FeaturedProductCard';

const ProductCarousel = () => {
    const [products] = useContext(ProductsContext);
    const [position, setPosition] = useState(0);

    // const handleLeftClick = () => {
    //     // products.unshift(products.pop())
    //     // case start index = 1

    //     // start index = 0
    //     // 0 - 1 = -1
    //     // plus products.length ( + 3 )
    //     // = 2

    //     if (startIndex > 0) {
    //         setStartIndex(startIndex - 1)
    //     }
    //     // else {
    //     //     setStartIndex(products.length - 1)
    //     // }

    //     // start index = 1
    //     // 1 - 1 = 0
    //     //  plus products.length ( + 3 )
    //     // = 3
    //     if (endIndex > 5) {
    //         setEndIndex(endIndex - 1)
    //     }
    //     // else {
    //     //     setEndIndex(products.length - 1)
    //     // }

    // }

    // const handleRightClick = () => {
    //     // products.unshift(products.pop())
    //     // case start index = 1

    //     // start index = 0
    //     // 0 - 1 = -1
    //     // plus products.length ( + 3 )
    //     // = 2

    //     if (startIndex < 1) {
    //         setStartIndex(startIndex + 1)
    //     }
    //     // else {
    //     //     setStartIndex(products.length - 1)
    //     // }

    //     // start index = 1
    //     // 1 - 1 = 0
    //     //  plus products.length ( + 3 )
    //     // = 3
    //     if (endIndex < 6) {
    //         setEndIndex(endIndex + 1)
    //     }
    //     // else {
    //     //     setEndIndex(products.length - 1)
    //     // }


    // }

    const size = 220;
    
    const maxLength = -(products.length - 1) * size;
    
    const updatePosition = (newPosition) => {
        if (newPosition > 0) {
            setPosition(0);
        } else if (newPosition < maxLength) {
            setPosition(maxLength);
        } else {
            setPosition(newPosition);
        }
    }
    
    const handleLeftClick = () => {
        updatePosition(position + size)
    };
    const handleRightClick = () => {
        updatePosition(position - size);
    };
    
    return (

        <div className={styles.productCarousel} >
            <h1>Popular Products</h1>
            <div className={styles.productCarousel__items} style={{ left: position }}>
                { products.map(product => {
                
                    // filter based on first three products
                    // pop method - last element of the array and add it to the start of the array
                        return <div key={product.id} className={styles.productCarousel__item}>
                            <FeaturedProductCard product={product} />
                        </div>;
                    })}
            </div>
            <div className={styles.productCarousel__buttons}>
                <button onClick={handleLeftClick}>Left</button>
                <button onClick={handleRightClick}>Right</button>
            </div>
        </div>

    );
};

export default ProductCarousel;