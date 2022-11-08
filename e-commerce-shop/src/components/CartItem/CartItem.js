import styles from './CartItem.module.scss';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../Contexts/CartContext/CartContext';

const CartItem = ({cartItem, product}) => {
    const variation = product.variations[cartItem.variationIndex];

    return (
        <div>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{variation.price}</p>
            <p>{cartItem.qty}</p>
        </div>
    );
};

export default CartItem;