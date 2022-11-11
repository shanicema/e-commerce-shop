import styles from './CartItem.module.scss';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../Contexts/CartContext/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


const CartItem = ({cartItem, product}) => {

    const {removeFromCart, setCartItemQty} = useContext(CartContext);

    const variation = product.variations[cartItem.variationIndex];
 
    const handleQtyChange = (event) => {
        const newQty = parseInt(event.target.value, 10)
        setCartItemQty(product.id, cartItem.variationIndex, newQty);
    }
    
    return (
        <div className={styles.cartItem}>
            <div className={styles.cartItem__image} style={{backgroundImage: 'url(' + product.image + ')' }}/>
            <div className={styles.cartItem__body}>
                <div className={styles.cartItem__details}>
                    <h2 className={styles.cartItem__title}>{product.name}</h2>
                    <p className={styles.cartItem__description}>{product.description}</p>
                    <p className={styles.cartItem__price}>{`$${variation.price}0`}</p>
                </div>
                <div className={styles.cartItem__buttons}>
                    <input name="Quantity" type="number" min="0" value={cartItem.qty} onChange={handleQtyChange} className={styles.cartItem__qty}></input>
                    <button onClick={() => removeFromCart(product.id, cartItem.variationIndex)} className={styles.cartItem__trash}>
                        <FontAwesomeIcon icon={solid('trash')} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;