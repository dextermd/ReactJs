import React, { useState } from 'react';
import './ShopCard.scss'


import Add from '../../assets/icons/add.svg'
import Ok from '../../assets/icons/ok.svg'

import comicsData from '../../../comics.json';

const ShopCard = () => {
    const [icon = Add, setIsAdded] = useState();
    const change = () => {
        icon == Add ? setIsAdded(Ok) : setIsAdded(Add);
    } 

    const comicsList = comicsData.map((comic, idx) => (
        <div key={comic.id} className="card">
            <img src={comic.imgUrl} alt={comic.name} />
            <h5>{comic.name}</h5>
            <div className='d-flex align-center justify-between'>
                <div className='d-flex flex-col justify-between align-center bloc_price'>
                    <span>Price: </span>
                    <b>{comic.price} USD</b>
                </div>
                <a href="#" onClick={change(idx)} className='btn'>
                    <img src={icon} alt="" srcset="" />
                </a>
            </div>
        </div>
    ));

  return (
        <div className="d-flex pt-50 card_container">
            {comicsList}
        </div>
  )
}

export default ShopCard