import { useState } from "react";
import CartContext from "../../Contexts/CartContext/CartContext";

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
  
    const setCartItemQty = (productId, variationIndex, qty) => {
        let found = false;
        const updateCartItems = cartItems.map(curCartItem => {
            if (curCartItem.productId === productId && curCartItem.variationIndex === variationIndex) {
                found = true;
                return {
                    ...curCartItem,
                    qty,
                }
            }

            return curCartItem;
        })

        if (!found) {
            updateCartItems.push({
                productId,
                variationIndex,
                qty
            });
        }

        setCartItems(updateCartItems);
    }

    const addToCart = (productId, variationIndex, qty) => {
        let found = false;
        const updateCartItems = cartItems.map(curCartItem => {
            if (curCartItem.productId === productId && curCartItem.variationIndex === variationIndex) {
                found = true;
                return {
                    ...curCartItem,
                    qty: curCartItem.qty + qty,
                }
            }

            return curCartItem;
        })

        if (!found) {
            updateCartItems.push({
                productId,
                variationIndex,
                qty
            });
        }

        setCartItems(updateCartItems);
    }
  
    const removeFromCart = (productId, variationIndex) => {
        setCartItems(cartItems.filter(curCartItem => {
            if (curCartItem.productId === productId && curCartItem.variationIndex === variationIndex) return false;
            return true;
        })); 
    }
  
    return (
      <CartContext.Provider value={{
        cartItems,
        setCartItemQty,
        addToCart,
        removeFromCart,
      }}>
        {children}
      </CartContext.Provider>
    )
  }
  

  export default CartProvider;