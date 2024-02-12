// libs
import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// styles
import './App.scss';
// pages
import { Home } from './Pages/Home';
import Shop from './Pages/Shop';
import Navbar from './Components/Navbar/Navbar';
import Drawer from './Components/Drawer/Drawer';

const App = () => {

  let [items, setItems] = useState([]);
  let [cartItems, setCartItems] = useState([
    {
      "id": 5,
      "title": "SPIDER-GWEN VOL. 3: LONG-DISTANCE ",
      "price": 16,
      "imgUrl": "https://m.media-amazon.com/images/I/71D2LslM-eL._SY466_.jpg"
    },
    {
      "id": 1,
      "title": "VENOM BY AL EWING & RAM V VOL. 3: DARK WEB",
      "price": 16,
      "imgUrl": "https://m.media-amazon.com/images/I/91vdxOfr8LL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "id": 4,
      "title": "MILES MORALES VOL. 1: STRAIGHT OUT OF BROOKLYN",
      "price": 16,
      "imgUrl": "https://m.media-amazon.com/images/I/91t6oYZ4zjL._SY466_.jpg"
    }
  ]);
  const [cartOpened, setCartOpened] = useState(false);
 
  useEffect(() => {
      fetch('https://65bdf92fdcfcce42a6f1a616.mockapi.io/comics/items')
          .then((res) => { return res.json() })
          .then((json) => { setItems(json); });
  }, []);


  return (
    <Router>
      {cartOpened ? <Drawer cartItems={cartItems} onCloseCart={() => setCartOpened(false)} /> : null}
      <Navbar
        onClickCart={() => setCartOpened(true)}
      />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop items={items}/>} />
      </Routes>
    </Router>

  )
}

export default App


