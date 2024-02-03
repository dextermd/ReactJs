import React, { useState } from 'react';
import './ShopCard.scss'


import Add from '../../assets/icons/add.svg'
import Ok from '../../assets/icons/ok.svg'


const ShopCard = ({ items }) => {

    const [icon = Add, setIsAdded] = useState();
    const change = () => {
        icon == Add ? setIsAdded(Ok) : setIsAdded(Add);
    } 

  return (
        <div className="d-flex pt-50 card_container">
            {
                items.map((item) => {
                    
                    return (
                        <div key={item.id} className="card">
                            <img src={item.imgUrl} alt=""/>
                            <h5>{item.name}</h5>
                            <div className='d-flex align-center justify-between'>
                                <div className='d-flex flex-col justify-between align-center bloc_price'>
                                    <span>Price: {item.price}</span>
                                    <b>USD</b>
                                </div>
                                <a onClick={change} className='btn'>
                                    <img src={icon} alt="" srcSet="" /> 
                                </a>
                            </div>
                        </div>
                    )
                })
            }

        </div>
  )
}

export default ShopCard