import { useContext, useState } from "react";
import CartContext from "../../Contexts/CartContext/CartContext";
import ProductsContext from "../../Contexts/ProductContexts/ProductsContext";

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [products] = useContext(ProductsContext);

    const getMaxSupply = (productId, variationIndex) => {
        const product = products.find(product => product.id === productId);
        const variation = product?.variations[variationIndex];
        return variation?.supply || 0;
    }
  
    const setCartItemQty = (productId, variationIndex, qty) => {
        let found = false;

        const maxSupply = getMaxSupply(productId, variationIndex);
        qty = Math.min(maxSupply, qty);
        
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
        const maxSupply = getMaxSupply(productId, variationIndex);
        const updateCartItems = cartItems.map(curCartItem => {
            if (curCartItem.productId === productId && curCartItem.variationIndex === variationIndex) {
                found = true;
                return {
                    ...curCartItem,
                    qty: Math.min(curCartItem.qty + qty, maxSupply),
                }
            }

            return curCartItem;
        })

        if (!found) {
            updateCartItems.push({
                productId,
                variationIndex,
                qty: Math.min(qty, maxSupply)
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