import styles from './CartItem.module.scss';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../Contexts/CartContext/CartContext';

const CartItem = ({cartItem, product}) => {
    const variation = product.variations[cartItem.variationIndex];

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{`$${variation.price}`}</p>
            <p>{`Qty: ${cartItem.qty}`}</p>
        </div>
    );
};

export default CartItem;