import React from 'react';
import { useCountContext } from '../context/CountContext';

const ComponentC = () => {
    const { count, setCount } = useCountContext();

    return (
        <div>
            <p>Componet C</p>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
};

export default ComponentC;