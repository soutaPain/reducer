import { createContext, useState, useContext } from 'react';

const CountContext = createContext();

export function useCountContext() {
    return useContext(CountContext);
}

export function CountProvider({ children }) {
    const [count, setCount] = useState(100);

    const value = {
        count,
        setCount,
    };

    return (
        <CountContext.Provider value={value}>{children}</CountContext.Provider>
    );
}