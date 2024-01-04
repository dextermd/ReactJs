import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const plus = () => {
        setCount(count + 1);
    }
    const minus = () => {
        setCount(count - 1);
    }

    return (
        <div>
            Counter: {count}
            <div>
                <button onClick={plus}>Plus</button>
                <button onClick={minus}>Minus</button>
            </div>
        </div>
    )
}

export default Counter