// libs
import React, {useContext} from 'react'
// icons
import { IoCloseSharp } from "react-icons/io5";
import Arrow from '../../assets/icons/arrow.svg';
// scss
import './Drawer.scss'
// img 
import EmptyCart from '../../assets/img/coffespider.png';
//context
import AppContext from '../../Pages/context'

const Drawer = ({ onCloseCart}) => {
    const {onRemoveItem, cartItems} = useContext(AppContext)
    return (
        <div className="clear">
            <div className="overlay">
                <div className="drawer">
                    <h2 className='d-flex justify-between align-center cu-p'>Cart <IoCloseSharp onClick={onCloseCart} /></h2>

                    <div className="items">
                        {
                            cartItems.length > 0 ?
                                cartItems.map((item) => (
                                    <div className="cartItem d-flex align-center justify-between mb-20">
                                        <div style={{ backgroundImage: `url(${item.imgUrl})` }} className='cartItemImg' ></div>
                                        <div className='mr-20'>
                                            <p className='mb-5'>{item.title}</p>
                                            <b>{item.price} $</b>
                                        </div>
                                        <IoCloseSharp className='removeItem' size={35} onClick={() => onRemoveItem(item.id)} />
                                    </div>
                                ))  
                                :
                                <>
                                    <div className="empty__card d-flex align-center justify-center flex-column">
                                        <img className='empty__img' src={EmptyCart} alt="empty cart" />
                                        <h2>Wating with coffee till you add at least one item here</h2>
                                        <p className='opacity-6'>Great power comes with great responsibility</p>
                                        <button className='redButton' onClick={onCloseCart}>
                                            <img src={Arrow} alt="ARROW" /> Return Shopping
                                        </button>
                                    </div>

                                </>
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
                                <img src={Arrow} alt="arrow" />
                            </button>
                        </div>

                        {/* render drawer,add styling,add drawer logic  */}
                    </div>
                </div>
            </div>


            )
}

            export default Drawer