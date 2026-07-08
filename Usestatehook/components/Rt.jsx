import React from 'react';
import { useState } from 'react';

const Rt = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </>
    );
};
export default Rt;