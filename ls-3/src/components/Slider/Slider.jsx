import React, { useState } from 'react';
import './Slider.css'

const Slider = ({ images }) => {

    // useState -> хук для создания состояния
    // состояние -> обьект созданний useState который имеет свойство изменяться

    // useState состояние из двух элементов:
    // 1) само состояние ==================
    // 2) функция для изминения состояния

    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(images.length)
    const nextImage = () =>{
        setCurrentIndex((prevIndex) => prevIndex > images.length - 2 ? prevIndex = 0 : prevIndex + 1 )
    }
    const prevImage = () =>{
        setCurrentIndex((prevIndex) => prevIndex - 1 < 0  ? prevIndex = images.length - 1 : prevIndex - 1 )
    }

    return (
        <div className='slider'>
            <div className='container'>
                <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`}/>
                <div className='arrow left' onClick={prevImage}>&lt;</div>
                <div className='arrow right' onClick={nextImage}>&gt;</div>
            </div>

            <div className="mini">
                <div className='miniImg'>
                    <img src={images[0]}/>
                </div>

                <div className='miniImg'>
                    <img src={images[1]}/>
                </div>

                <div className='miniImg'>
                    <img src={images[2]}/>
                </div>

                <div className='miniImg'>
                    <img src={images[3]}/>
                </div>

                <div className='miniImg'>
                    <img src={images[4]}/>
                </div>
            </div>

        </div>
    );
};


export default Slider;