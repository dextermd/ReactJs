import React from 'react';
import './Product.css';

const Product = ({name, price, desc}) => {
    return (
        <div className='product-body'>
            <div className="card">
                {name} <br/>
                <span className="text-price">{price}$</span> <br/>
                <span className="text-desc">{desc}</span>
            </div>
        </div>

    );
};

export default Product;