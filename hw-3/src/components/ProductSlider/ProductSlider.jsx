import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductSlider = ({ data }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect}>
            {data.map((item, idx) => (
                <Carousel.Item key={idx}>
                            <img
                        className="d-block w-100"
                        src={item.imgUrl}
                        alt={item.name}
                        />

                    <Carousel.Caption>
                        <h3>{item.name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ProductSlider;
