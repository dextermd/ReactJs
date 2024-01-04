import React, { useState } from 'react';

const OnOff = () => {
    const [onOff, setOnOff] = useState(true)
    const change = () => {
        onOff ? setOnOff(false) : setOnOff(true);
    } 
    const getName = () => {
        return onOff ? 'On' : 'Off'
    }

  return (
    <div>
        <button onClick={change}>{getName()}</button>
        <p>Value: {onOff.toString()}</p>
    </div>
  )
}

export default OnOff