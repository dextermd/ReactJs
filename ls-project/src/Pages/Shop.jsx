import React, { useState, useEffect } from 'react'
// components
import SearchBlock from '../Components/SearchBlock/SearchBlock'
import Card from '../Components/Card/Card'

const Shop = ({items}) => {

  

    const onAddToCart = (obj) => {
        console.log(obj);
    }
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
                    <SearchBlock />
                </div>
                <Card
                    items={items}
                    onAddToCart={(obj) => onAddToCart(obj)} />
            </div>
        </div>
    )
}

export default Shop