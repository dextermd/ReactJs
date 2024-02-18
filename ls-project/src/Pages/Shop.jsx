// libs
import React, { useState, useEffect } from 'react'
// components
import Card from '../Components/Card/Card'
// icons
import { FaMagnifyingGlass } from "react-icons/fa6";

const Shop = ({ items, onAddToCart, searchValue,cartItems, onChangeSearchInput }) => {



    // useEffect -> хук который отлавливает любые действия в компоненте и исполняет некий эффект.
    // эффект -> arrow function который исполнится 
    // [] ->  список зависимостей в который если передать состояние,useEffect будет следить за их изминениями
    // но если список указать без элементов,мы получаем гарантию что эффект произойдет при ТОЛЬКО первом рендере компонентпа 

    // useEffect(()=>{
    //     console.log("SALUT");
    // },[])

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