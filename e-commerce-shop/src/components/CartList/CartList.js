import styles from './CartList.module.scss';
import { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import ProductsContext from '../../Contexts/ProductContexts/ProductsContext';
import CartContext from '../../Contexts/CartContext/CartContext';

const CartList = () => {
    const {cartItems} = useContext(CartContext);
    const [products] = useContext(ProductsContext);

    // const price = products.variations[variationIndex].price;
    // const qty = cartItems.qty;

    
    
    const subtotal = cartItems.reduce(
        (accumulator, currentValue) => {
            const product = products.find(product => {
                return product.id === currentValue.productId;
           })
            const lineItemTotal = currentValue.qty * product.variations[currentValue.variationIndex].price;
            
            return accumulator + lineItemTotal;
        }, 
        0
    );

    // function reduce(cb, initialValue) {
    //     const array = this;
    //     let accumulation = initialValue;
    //     for (let i = 0; i < array.length; i++) {
    //         let currentValue = array[i]; 
    //         accumulation = cb(accumulation, currentValue);
    //     }
    //     return accumulation;

    // }


    // let subtotal = price * qty
    // let p = 0;
    // for (let i = 0; i < cartItems.length; i++) {
    //     let c = cartItems[i]; 
    //     p += c;
    // }
    // result = p;

    // sum all the cart items
    // subtotal = sum(qty * price)

     

    
    

    return (
        <div className={styles.cartList}>
            <h1>Shopping Cart</h1>
            { cartItems.map(cartItem => {

                const foundProduct = products.find(product => {
                     return product.id === cartItem.productId
                })
                
                return <div className={styles.cartList__item}>
                    <CartItem key={cartItem.productId + cartItem.variationIndex} 
                                cartItem={cartItem} product={foundProduct} />
                </div>;
            })}


            <div className={styles.cartList__subtotal}>
                
                <p className={styles.cartList__subtotalLabel}>Subtotal</p>
                <div className={styles.cartList__totals}>
                    <p className={styles.cartList__subtotalAmount}>$ { subtotal.toLocaleString(undefined, {
                        minimumFractionDigits: 2
                    }) }</p>
                    <button className={styles.cartList__submit}>Checkout</button>
                </div>

            </div>
            
        </div>
// how to find a product from the products array that we need to give to the CartItem component?

    );
};

export default CartList;