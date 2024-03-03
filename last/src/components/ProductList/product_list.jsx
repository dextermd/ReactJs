// ProductList.js
import React from 'react';
import './product_list.css';

const ProductList = ({ products, addToCart }) => {
    
  return (
    <div className="product-container">
      {products.map(product => (
        <div className="product" key={product.id}>
          <div>
            <img className="product-image" src={product.image} alt={product.name} />
          </div>
          <h3>{product.name}</h3>
          <p className="price">{product.price}</p>
          <button className="add-to-cart-button" onClick={() => addToCart(product)}>
            ADD TO CART
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
