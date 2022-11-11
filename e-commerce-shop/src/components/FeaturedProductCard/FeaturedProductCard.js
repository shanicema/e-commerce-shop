import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../Contexts/CartContext/CartContext';
import styles from './FeaturedProductCard.module.scss';

const ProductCard = ({ product }) => {
    const {cartItems, addToCart} = useContext(CartContext);
    const [variationIndex, setVariationIndex] = useState(0)
    const [qty, setQty] = useState(1)

   


    useEffect(() => {
        const supply = product.variations[variationIndex]?.supply;
        if (qty > supply) setQty(supply);
    }, [qty]);

    useEffect(() => {
        setQty(1)
    }, [variationIndex]);


    if (!product.variations?.length) {
        return <div>Invalid Product</div>
    }   

    return (
        <NavLink to={`/productpage/${product.id}`} className={styles.link}>
            <div className={styles.productCard}>
                <div className={styles.productCard__image} 
                    style={{ backgroundImage: 'url(' + product.image + ')' }}/>
                <div className={styles.productCard__body}>
                    <p className={styles.productCard__title}>{ product.name }</p>
                    <p className={styles.productCard__price}><span>from ${ product.variations[variationIndex].price.toLocaleString()}0</span></p>
                </div>
            </div>
        </NavLink>
    );
};

export default ProductCard;