import styles from './CartList.module.scss';
import { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import ProductsContext from '../../Contexts/ProductContexts/ProductsContext';
import CartContext from '../../Contexts/CartContext/CartContext';

const CartList = () => {
    const {cartItems} = useContext(CartContext);
    const [products] = useContext(ProductsContext);

    return (
        <div>
            { cartItems.map(cartItem => {

                const foundProduct = products.find(product => {
                     return product.id === cartItem.productId
                })
                

                return <CartItem key={cartItem.productId + cartItem.variationIndex} cartItem={cartItem} product={foundProduct} />;
            })}

            
        </div>
// how to find a product from the products array that we need to give to the CartItem component?

    );
};

export default CartList;