import React, { useState, useEffect } from 'react';

import SearchBlock from '../../components/search_block/SearchBlock';
import ShopCard from '../../components/shop_card/ShopCard';

const Shop = () => {

  let  [items, setItems] = useState([]);

  // useEffect -> хук который отлавливает любые действия в компоненте и исполняет некий эффект
  // [] -> список зависимостей в который если передать состояниеб useEffect будет следить за их ихминениями
  // но если список указать без элементов, мы получаем гарантию что эфект произойдет при первос рендере компонента 

  useEffect(() => {
    fetch('https://65bdf924dcfcce42a6f1a5f7.mockapi.io/comics/items')
      .then((res) => res.json())
      .then((json) => setItems(json))
      .catch((error) => console.error('Error fetching items:', error));
  }, []);

  console.log('Items:', items);

  return (
    <div>
        <div className="container">
            <div className="d-flex align-center justify-between mt-40">
                <h1>All You Need</h1>
                <SearchBlock/>
            </div>
            <ShopCard items = {items}/>
        </div>
    </div>

  )
}

export default Shop