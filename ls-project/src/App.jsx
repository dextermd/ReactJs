// libs
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
// styles
import './App.scss';
// pages
import { Home } from './Pages/Home';
import Shop from './Pages/Shop';
import Navbar from './Components/Navbar/Navbar';
import Drawer from './Components/Drawer/Drawer';

const App = () => {

  let [items, setItems] = useState([]);
  let [cartItems, setCartItems] = useState([]);
  let [searchValue, setSearchValue] = useState('');

  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://65bdf92fdcfcce42a6f1a616.mockapi.io/comics/items').then(res => { setItems(res.data) })
    axios.get('https://65bdf92fdcfcce42a6f1a616.mockapi.io/comics/cart').then(res => { setCartItems(res.data) })
  }, []);

  const onRemoveItem = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
    axios.delete(`https://65bdf92fdcfcce42a6f1a616.mockapi.io/comics/cart/${id}`);
  };

  const onAddToCart = (obj) => {
    axios.post('https://65bdf92fdcfcce42a6f1a616.mockapi.io/comics/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  }


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }


  return (
    <Router>
      {cartOpened ? <Drawer
        onRemoveItem={onRemoveItem}
        cartItems={cartItems}
        onCloseCart={() => setCartOpened(false)}
      /> : null}
      <Navbar
        onClickCart={() => setCartOpened(true)}
      />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/shop"
          element={<Shop
            items={items}
            onAddToCart={onAddToCart}
            searchValue={searchValue}
            onChangeSearchInput={onChangeSearchInput}
            cartItems={cartItems} />}
        />
      </Routes>
    </Router>

  )
}

export default App


