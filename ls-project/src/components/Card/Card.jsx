import React, { useState, useEffect } from 'react'
import Add from '../../assets/icons/add.svg'
import Added from '../../assets/icons/added.svg'
import './Card.scss';

const Card = ({ items, onAddToCart }) => {

    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    }


    return (
        <div className="d-flex pt-50 card__container">
            {
                items.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <img src={item.imgUrl} alt="venom comics" />
                            <h5>{item.title}</h5>
                            <div className='d-flex align-center justify-between'>
                                <div className='d-flex flex-col align-center block__price'>
                                    <span>Price: </span>
                                    <b>{item.price} USD</b>
                                </div>
                                <a href="#" className="btn" onClick={onAddToCart}>
                                    {isAdded ? <img src={Added} alt="Added" /> : <img src={Add} alt="Add" />}
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card