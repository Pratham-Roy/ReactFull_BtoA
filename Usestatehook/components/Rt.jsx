import React from 'react';
import { useState } from 'react';

const Rt = () => {
    const total = 100;
    const [counter, setCounter] = useState(0);
    const [basket1, setBasket1] = useState(100);
    const [basket2, setBasket2] = useState(0);

    const handleTransferToBasket2 = () => {
        if (basket1 > 0) {
            setBasket1(basket1 - 1);
            setBasket2(basket2 + 1);
        }
    };

    const handleTransferToBasket1 = () => {
        if (basket2 > 0) { 
            setBasket1(basket1 + 1);
            setBasket2(basket2 - 1);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Counter: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
            <hr />
            <div>
                <h3>Basket Management</h3>
                <span>{basket1} basket1 </span>
                <button onClick={handleTransferToBasket2}>
                    Transfer to Basket 2
                </button>
                <br /><br />
                <span>{basket2} basket2 </span>
                <button onClick={handleTransferToBasket1}>
                    Transfer to Basket 1
                </button>
            </div>
        </div>
    );
};
export default Rt;