import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductCard from "./components/ProductCard/product_card.jsx";
import ProductList from "./components/ProductList/product_list.jsx"
import Header from "./components/Header/header.jsx";
import Cart from "./components/Cart/cart.jsx"

import './App.css'

import appleImage from '../src/assets/1.png';
import orangeImage from '../src/assets/2.png';
import bananaImage from '../src/assets/3.png';
import noImage from '../src/assets/no-photo.png';


const products = [
    { id: 1, name: 'Apple', price: '$1.02', image: appleImage },
    { id: 2, name: 'Orange', price: '$2.05', image: orangeImage },
    { id: 3, name: 'Banana', price: '$1.25', image: bananaImage },
    { id: 4, name: 'Pear', price: '$4.20', image: noImage },
    { id: 5, name: 'Mango', price: '$2.15', image: noImage },
    { id: 6, name: 'Peach', price: '$3.10', image: noImage },
    { id: 7, name: 'Lemon', price: '$2', image: noImage },
    { id: 8, name: 'Guava', price: '$0.45', image: noImage },
    { id: 9, name: 'Apricot', price: '$0.82', image: noImage },
    { id: 10, name: 'Lime', price: '$1.05', image: noImage },
    { id: 11, name: 'Pineapple', price: '$1', image: noImage },
];

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(currentItems => {
      const productExists = currentItems.find(item => item.id === product.id);
      if (productExists) {
        const updatedItems = currentItems.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
        return updatedItems;
      } else {
        const priceNumber = parseFloat(product.price.replace('$', ''));
        const updatedItems = [...currentItems, { ...product, price: priceNumber, qty: 1 }];
        return updatedItems;
      }
    });
};
  
  return (

      <div className="App">
          <Router>
          <Header/>

            <Routes >
              <Route path="/" element={    
              <div>  
              <header className="App-header">
                  <h1>Fruit</h1>
                  <h2>Most Popular</h2>
              </header>   
              
              <div className="product-container">
                {products.slice(0, 3).map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
              </div>
              </div> 
            } />
            <Route path="/shop" element={<ProductList products={products} addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            </Routes>
          </Router>
      </div>
  )

}

export default App
