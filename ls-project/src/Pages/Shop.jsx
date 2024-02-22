// libs
import React, { useContext } from 'react'
// components
import Card from '../Components/Card/Card'
// icons
import { FaMagnifyingGlass } from "react-icons/fa6";
// context
import AppContext from '../../src/Pages/context'

const Shop = ({}) => {

    const {items, onAddToCart, searchValue,cartItems, onChangeSearchInput} = useContext(AppContext)

    return (
        <div>
            <div className="container">
                <div className="d-flex align-center justify-between mt-40">
                    <h1>All You Need!</h1>
                    <div className="search__block d-flex align-center">
                        <FaMagnifyingGlass />
                        <input onChange={onChangeSearchInput} type="text" placeholder='Search..' />
                    </div>
                </div>

                <div className="d-flex pt-50 card__container">
                    {
                        items.filter(item => item.title.includes(searchValue)).map((item) => {
                            return (
                                <Card
                                    cartItems={cartItems}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    imgUrl={item.imgUrl}
                                    onAddToCart={(obj) => onAddToCart(obj)} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


/*
1) Сделайте фильтрацию не в зависимости от регистра  
2) Запретите повторное добавленеи через кнопку из карточки товара 

*/


export default Shop