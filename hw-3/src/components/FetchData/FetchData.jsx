import React, { useState, useEffect } from 'react';
import ProductSlider from '../ProductSlider/ProductSlider';
const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://65bdf924dcfcce42a6f1a5f7.mockapi.io/comics/items')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <div><ProductSlider data={data}></ProductSlider>
    <ul>
      {data.map(item => (
        <li key={item.id} className=''>{item.name}</li>
      ))}
    </ul>
    </div>
  );
};

export default FetchData;
