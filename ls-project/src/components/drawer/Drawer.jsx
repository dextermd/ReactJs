// libs
import React from 'react'
// icons
import { IoCloseSharp } from "react-icons/io5";
import Arrow from '../../assets/icons/arrow.svg';
// scss
import './Drawer.scss'

const Drawer = ({ onCloseCart, cartItems, onRemoveItem }) => {
    return (
        <div className="clear">
            <div className="overlay">
                <div className="drawer">
                    <h2 className='d-flex justify-between align-center cu-p'>Cart <IoCloseSharp onClick={onCloseCart} /></h2>

                    <div className="items">
                        {
                            cartItems.map((item) => {
                                return (

                                    <div className="cartItem d-flex align-center justify-between mb-20">
                                        <div style={{ backgroundImage: `url(${item.imgUrl})` }} className='cartItemImg' ></div>
                                        <div className='mr-20'>
                                            <p className='mb-5'>{item.title}</p>
                                            <b>{item.price} $</b>
                                        </div>
                                        <IoCloseSharp className='removeItem' size={35} onClick={() => onRemoveItem(item.id)} />
                                    </div>
                                );
                            })
                        }



                    </div>

                    <div className="cartTotalBlock">
                        <ul>
                            <li>
                                <span>Checkout: </span>
                                <div></div>
                                <b>00.00 usd</b>
                            </li>
                            <li>
                                <span>Fee 5%</span>
                                <div></div>
                                <b>00.00usd</b>
                            </li>
                        </ul>
                        <button className="redButton">Finish Shopping
                            <img src={Arrow} alt="" />
                        </button>
                    </div>

                    {/* render drawer,add styling,add drawer logic  */}
                </div>
            </div>
        </div>


    )
}

export default Drawer