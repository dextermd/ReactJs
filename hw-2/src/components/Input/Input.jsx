import React, { useState } from 'react';

const Input = () => {
    const [inputValue, setInputValue] = useState('');

    const inputChange = (event) => {
        setInputValue(event.target.value);
    }
  return (
    <div>
        <input type="text" id='ipt' value={inputValue} onChange={inputChange} />
        <p>Вы ввели: {inputValue}</p>
    </div>

  )
}

export default Input