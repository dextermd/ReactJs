import React from 'react';
import './product_card.css'
const ProductCard = ({ product }) => {
    return (
        <div className="product">
            <div>
                <img className="product-image" src={product.image} alt=""/>
            </div>
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button className="add-to-cart-button">ADD TO CART</button>
        </div>
    );
};

export default ProductCard;
