import React, { useState, useEffect } from 'react'
import Add from '../../assets/icons/add.svg'
import Added from '../../assets/icons/added.svg'
import './Card.scss';

const Card = ({ title, price, imgUrl, cartItems, onAddToCart }) => {

    const [isAdded, setIsAdded] = useState(false);

    function onClickPlus(){
        setIsAdded(true);
        if(isAdded == false){
            const id = cartItems.length + 1;
            onAddToCart({id, imgUrl,title,price});
        }
    }

    return (
        <div className="card">
            <img src={imgUrl} alt="venom comics" />
            <h5>{title}</h5>
            <div className='d-flex align-center justify-between'>
                <div className='d-flex flex-col align-center block__price'>
                    <span>Price: </span>
                    <b>{price} USD</b>
                </div>
                <a href="#" className="btn" onClick={onClickPlus}>
                    {isAdded ? <img src={Added} alt="Added" /> : <img src={Add} alt="Add" />}
                </a>
            </div>
        </div>

    )
}

export default Card