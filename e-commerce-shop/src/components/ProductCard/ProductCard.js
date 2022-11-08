import { useContext, useEffect, useState } from 'react';
import CartContext from '../../Contexts/CartContext/CartContext';
import styles from './ProductCard.module.scss';

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
            <div className={styles.productCard__image} 
                style={{ backgroundImage: 'url(' + product.image + ')' }}/>
            <h3>{ product.name }</h3>
            <p>{product.description}</p>
            <div>
                <span>${ product.variations[variationIndex].price.toLocaleString() }</span>
                <select onChange={handleVariationChange}> 
                    { // TODO make this a component
                        product.variations.map((variation, index) => {
                            return <option value={index} key={index}>{ variation.size }</option>;
                        })
                    }
                </select>
                <input type="number" min="0" value={qty} onChange={handleQtyChange} />
                <button onClick={handleAddToCart}>[Add to cart Icon]</button>
            </div>
        
        </div>
    );
};

export default ProductCard;