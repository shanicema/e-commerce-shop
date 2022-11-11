import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../Contexts/CartContext/CartContext';
import styles from './ProductCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import {updateProductsSavedField} from '../../services/products';
import ProductsContext from '../../Contexts/ProductContexts/ProductsContext';

const ProductCard = ({ product }) => {
    const {cartItems, addToCart} = useContext(CartContext);
    const [products, setProducts] = useContext(ProductsContext);
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

    const toggle = () => {
        updateProductsSavedField(product.id, !product.saved);
        setProducts(products.map(curProduct => {
            if (curProduct.id === product.id) {
                return {
                    ...product,
                    saved: !product.saved
                }
            }
            return curProduct;
        }))
        // update the product 
        // and set saved = value 
        // where product.id is other value

    }

    const handleVariationChange = (event) => {
        setVariationIndex(event.target.value);
    }

    const handleQtyChange = (event) => {
        setQty(parseInt(event.target.value, 10));
    }

    console.log(cartItems);

    const handleAddToCart = () => {
        addToCart(product.id, variationIndex, qty);
    }


    return (
        
        <div className={styles.productCard} >
            <NavLink to={`/productpage/${product.id}`} className={styles.link}>
                <div className={styles.productCard__image} 
                    style={{ backgroundImage: 'url(' + product.image + ')' }}/>
                <div className={styles.productCard__body}>
                        <p className={styles.productCard__title}>{ product.name }</p>
                        <p className={styles.productCard__desc}>{product.description}</p>
                        <p className={styles.productCard__stock}>{`Current Stock Qty: ${product.variations[variationIndex].supply}`}</p>
                </div>
            </NavLink>
            <div className={styles.productCard__cart}>
                
                {/* <label className={styles.productCard__size} htmlFor="Size">Size: </label> */}
                <span className={styles.productCard__price}>${ product.variations[variationIndex].price.toLocaleString()}0</span>
                <select className={styles.productCard__sizeoptions} name="Size" onChange={handleVariationChange}> 
                    { // TODO make this a component
                        product.variations.map((variation, index) => {
                            return <option value={index} key={index}>{ variation.size }</option>;
                        })
                    }
                </select>

                {/* <label className={styles.productCard__qty} htmlFor="Quantity">Quantity: </label> */}
                <input className={styles.productCard__qtyinput} name="Quantity" type="number" min="0" value={qty} onChange={handleQtyChange}></input>
        
              
                <button className={styles.productCard__addButton} onClick={handleAddToCart}><FontAwesomeIcon icon={solid('cart-plus')} /></button>              
                
                <button className={styles.productCard__save} onClick={toggle}>
                    { product.saved 
                        ? <FontAwesomeIcon icon={solid('heart')} /> 
                        : <FontAwesomeIcon icon={regular('heart')} />
                    }
                </button>
               
            </div>
        </div>
        
    );
};

export default ProductCard;